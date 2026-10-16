"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GLIDE_MIN_MS = 380;
const GLIDE_MAX_MS = 750;
const FLICK_PROJECTION_MS = 260; // how far a released flick carries on, in ms of its speed

// starts at the speed of the hand and settles softly onto the photo
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A project's photos in a row: swipe on a phone, drag or use the arrows on a computer.
 *
 * Touch and trackpads use the browser's own scrolling and snapping. A mouse drag and the
 * arrows are driven here instead: one eased glide that lands exactly on a photo, so the
 * row never overshoots and jumps back the way a smooth scroll fighting the snap does.
 * Scrolling never re-renders: the progress line is moved directly, once per frame.
 */
export default function ProjectGallery({ images, title }) {
  const trackRef = useRef(null);
  const drag = useRef(null);
  const glide = useRef(0);
  const frame = useRef(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [stops, setStops] = useState(1);
  const [active, setActive] = useState(0);

  // where each photo rests: its left edge at the row's padding, never past the end
  const snapPoints = () => {
    const el = trackRef.current;
    const pad = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    const max = el.scrollWidth - el.clientWidth;
    const points = [...el.children].map((c) => Math.min(Math.max(c.offsetLeft - pad, 0), max));
    return [...new Set(points.map(Math.round))];
  };
  const nearest = (points, x) => points.reduce((best, p) => (Math.abs(p - x) < Math.abs(best - x) ? p : best), points[0]);

  // which stop is showing and whether an end is reached, read once per frame; the same
  // values bail out in React, so this only renders when the showing photo changes
  const paint = useCallback(() => {
    frame.current = 0;
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const points = snapPoints();
    setStops(points.length);
    setActive(points.indexOf(nearest(points, el.scrollLeft)));
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);
  const schedulePaint = useCallback(() => {
    if (!frame.current) frame.current = requestAnimationFrame(paint);
  }, [paint]);

  useEffect(() => {
    paint();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(schedulePaint);
    ro.observe(el);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame.current);
      cancelAnimationFrame(glide.current);
    };
  }, [paint, schedulePaint]);

  const stopGlide = () => {
    cancelAnimationFrame(glide.current);
    glide.current = 0;
    trackRef.current?.removeAttribute("data-free");
  };

  // one eased glide to a resting point; the browser's snapping is off while it runs
  const glideTo = (target) => {
    const el = trackRef.current;
    stopGlide();
    const from = el.scrollLeft;
    const distance = target - from;
    if (Math.abs(distance) < 1 || reduceMotion()) {
      el.scrollLeft = target;
      return;
    }
    const duration = Math.min(GLIDE_MAX_MS, GLIDE_MIN_MS + Math.abs(distance) * 0.35);
    const start = performance.now();
    el.setAttribute("data-free", "");
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      el.scrollLeft = from + distance * easeOutQuart(t);
      if (t < 1) glide.current = requestAnimationFrame(tick);
      else stopGlide();
    };
    glide.current = requestAnimationFrame(tick);
  };

  // one photo per press, counted from the photo that is showing (or being glided to)
  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const points = snapPoints();
    const here = points.indexOf(nearest(points, el.scrollLeft));
    const next = points[Math.min(Math.max(here + dir, 0), points.length - 1)];
    glideTo(next);
  };

  // mouse dragging (touch already scrolls natively); kept in refs so a drag never re-renders
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    stopGlide();
    const el = trackRef.current;
    drag.current = { x: e.clientX, left: el.scrollLeft, samples: [{ x: e.clientX, t: e.timeStamp }], moved: false };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const el = trackRef.current;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 4) return;
      d.moved = true;
      el.setAttribute("data-free", "");
      el.setAttribute("data-dragging", "");
      el.setPointerCapture(e.pointerId);
    }
    // keep the last 100ms of movement to read the flick's speed from
    d.samples.push({ x: e.clientX, t: e.timeStamp });
    while (d.samples.length > 2 && e.timeStamp - d.samples[0].t > 100) d.samples.shift();
    el.scrollLeft = d.left - dx;
  };
  const endDrag = (e) => {
    const d = drag.current;
    drag.current = null;
    const el = trackRef.current;
    if (!d?.moved) return;
    el.removeAttribute("data-dragging");
    const first = d.samples[0];
    const last = d.samples[d.samples.length - 1];
    // a hand that stopped before letting go has no flick left
    const stale = (e?.timeStamp ?? last.t) - last.t > 80;
    const velocity = stale ? 0 : (last.x - first.x) / Math.max(last.t - first.t, 1); // px per ms
    const projected = el.scrollLeft - velocity * FLICK_PROJECTION_MS;
    glideTo(nearest(snapPoints(), projected));
  };

  const arrowClass =
    "hidden md:grid place-items-center absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 dark:bg-neutral-900/95 text-gray-800 dark:text-white shadow-lg ring-1 ring-black/5 transition-[opacity,background-color,color,transform] duration-200 hover:bg-[#3db94c] hover:text-white active:scale-95 disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="relative py-6 bg-gray-50 dark:bg-neutral-800 transition-colors duration-300">
      <div className="relative">
        <div
          ref={trackRef}
          tabIndex={0}
          role="region"
          aria-label={`${title} photos`}
          onScroll={schedulePaint}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onWheel={() => glide.current && stopGlide()}
          onTouchStart={() => glide.current && stopGlide()}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
          }}
          className="gallery-track flex gap-4 overflow-x-auto overflow-y-hidden px-8 scroll-px-8 cursor-grab select-none outline-none focus-visible:ring-2 focus-visible:ring-[#3db94c]/60"
        >
          {images.map((img, idx) => (
            <figure
              key={`${idx}-${img}`}
              className="group/photo relative flex-none w-[78%] sm:w-72 md:w-80 aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 dark:bg-neutral-700"
            >
              <img
                src={img}
                alt={`${title}, photo ${idx + 1}`}
                loading={idx < 3 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/photo:scale-105"
              />
            </figure>
          ))}
        </div>

        {/* soft edges where more photos wait */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 dark:from-neutral-800 to-transparent transition-opacity duration-300 ${atStart ? "opacity-0" : "opacity-100"}`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 dark:from-neutral-800 to-transparent transition-opacity duration-300 ${atEnd ? "opacity-0" : "opacity-100"}`}
        />

        {/* arrows: on computers, always there, fading out at the ends */}
        <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label="Previous photo" className={`${arrowClass} left-3`}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label="Next photo" className={`${arrowClass} right-3`}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* one marker per stop: the showing one stretches into a green pill; any of them glides there */}
      {stops > 1 && (
        <div className="mt-5 flex justify-center gap-1.5 px-8">
          {Array.from({ length: stops }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => glideTo(snapPoints()[i])}
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === active || undefined}
              className="group/dot grid place-items-center h-4"
            >
              <span
                className={`block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === active
                    ? "w-7 bg-[#3db94c]"
                    : "w-1.5 bg-gray-300 dark:bg-neutral-600 group-hover/dot:bg-[#3db94c]/60"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
