"use client";

import Image from "next/image";

// each logo with its own proportions (from the copies in trim/, cut down to the artwork),
// so it can be sized to look as heavy as the others
const logos = [
  { src: "unicef", w: 600, h: 600 },
  { src: "france", w: 599, h: 617 },
  { src: "german", w: 589, h: 216 },
  { src: "canada", w: 600, h: 119 },
  { src: "fmwa", w: 400, h: 400 },
  { src: "bouygues", w: 284, h: 194 },
  { src: "iom", w: 600, h: 300 },
  { src: "gac", w: 600, h: 130 },
  { src: "liberte", w: 600, h: 244 },
  { src: "plan", w: 600, h: 228 },
  { src: "sesci", w: 600, h: 200 },
  { src: "ad", w: 565, h: 582 },
  { src: "afrivan", w: 600, h: 367 },
  { src: "bf", w: 290, h: 174 },
  { src: "drive", w: 600, h: 600 },
  { src: "edu", w: 600, h: 311 },
  { src: "msi", w: 600, h: 519 },
  { src: "nhw", w: 600, h: 248 },
  { src: "psi", w: 253, h: 165 },
  { src: "sayp", w: 361, h: 314 },
  { src: "shak", w: 594, h: 250 },
  { src: "swag", w: 409, h: 213 },
  { src: "water", w: 600, h: 185 },
];

// same visual weight for every shape: a square logo gets ~77px a side, a wide one gets
// more width and less height, all within the tile
const TILE_W = 184;
const TILE_H = 112;
const AREA = 72 * 72 * 1.15;
const sizeFor = (w: number, h: number) => {
  const ratio = w / h;
  let width = Math.sqrt(AREA * ratio);
  let height = width / ratio;
  const maxW = TILE_W - 40;
  const maxH = TILE_H - 32;
  if (width > maxW) { width = maxW; height = width / ratio; }
  if (height > maxH) { height = maxH; width = height * ratio; }
  return { width: Math.round(width), height: Math.round(height) };
};

export default function Partners() {
  // two copies side by side: the row slides one copy's width and starts over unseen
  const loop = [...logos, ...logos];

  return (
    <section className="bg-white dark:bg-black py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="t-eyebrow mb-3">Trusted By</p>
          <h2 className="t-h2 text-gray-900 dark:text-white mb-4">Our Partners and Sponsors</h2>
          <p className="t-lead text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            We are proud to partner with organizations who support our mission.
          </p>
        </div>

        <div className="partners-marquee overflow-hidden carousel-fade-mask py-4">
          <div className="partners-track flex w-max">
            {loop.map((logo, idx) => {
              const { width, height } = sizeFor(logo.w, logo.h);
              return (
                // spacing is padding, not gap, so the two copies are exactly the same width
                <div key={idx} className="pr-5 flex-none" aria-hidden={idx >= logos.length || undefined}>
                  <div
                    className="flex items-center justify-center rounded-2xl bg-white ring-1 ring-gray-200/80 dark:ring-0 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#3db94c]/10"
                    style={{ width: TILE_W, height: TILE_H }}
                  >
                    <Image
                      src={`/images/partners/trim/${logo.src}.webp`}
                      alt={idx < logos.length ? "Partner Logo" : ""}
                      width={width}
                      height={height}
                      className="object-contain"
                      style={{ width, height }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#3db94c] text-white font-semibold rounded-lg hover:bg-[#2fa33e] transition-colors duration-300"
          >
            Become a Partner
          </a>
        </div>
      </div>

      <style>{`
        @keyframes partnersSlide { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
        .partners-track { animation: partnersSlide 60s linear infinite; will-change: transform; }
        .partners-marquee:hover .partners-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .partners-track { animation: none; }
          .partners-marquee { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
