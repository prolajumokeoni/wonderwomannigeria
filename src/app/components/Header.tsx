"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const backgroundImages = [
  "/images/home/bg-corpers.webp",
  "/images/home/bg-kids.webp",
  "/images/home/bg-waste.webp",
  "/images/home/headerbg.webp",
  "/images/home/bg-market.webp",
];

const SLIDE_MS = 6000;

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // each slide plays for SLIDE_MS; picking a dot restarts the clock from that slide
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentImageIndex((i) => (i + 1) % backgroundImages.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Slideshow images: a slow crossfade, each slide drifting in as it plays */}
      {backgroundImages.map((image, index) => {
        const active = index === currentImageIndex;
        return (
          <div
            key={image}
            aria-hidden
            className={`hero-slide absolute inset-0 bg-cover bg-center bg-no-repeat ${active ? "is-active" : ""}`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        );
      })}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Top gradient so the clear navigation reads over any photo */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      <Navbar />

      {/* Hero content — centered */}
      <section className="relative flex items-end justify-center min-h-screen px-6 md:px-16 pb-20">
        <div className="relative z-10 max-w-3xl text-center">
          <p className="hero-rise t-eyebrow text-[#5fd36d] md:text-lg mb-4" style={{ "--d": "500ms" } as React.CSSProperties}>
            Wonder Woman Nigeria
          </p>

          <h1 className="hero-rise t-display text-white mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]" style={{ "--d": "600ms" } as React.CSSProperties}>
            Wonderful Woman for Sustainability Foundation
          </h1>

          <p className="hero-rise t-lead text-white/85 max-w-xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mx-auto" style={{ "--d": "720ms" } as React.CSSProperties}>
            Empowering women and girls, advancing gender equality, and building
            sustainable communities through advocacy and action.
          </p>

          <div className="hero-rise flex flex-col sm:flex-row gap-3 justify-center" style={{ "--d": "840ms" } as React.CSSProperties}>
            {/* Donate is hidden for now
            <a
              href="#contact"
              className="press inline-block bg-[#3db94c] text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-[#2fa33e] hover:shadow-lg hover:shadow-[#3db94c]/30 text-center"
            >
              Donate Now
            </a>
            */}
            <a
              href="#programs"
              className="press inline-block bg-[#3db94c] text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-[#2fa33e] hover:shadow-lg hover:shadow-[#3db94c]/30 text-center"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Slide dots — the current one fills as its slide plays */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {backgroundImages.map((image, index) => {
          const active = index === currentImageIndex;
          return (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={active || undefined}
              className={`relative h-1.5 overflow-hidden rounded-full bg-white/35 transition-[width,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/60 ${active ? "w-8" : "w-1.5"}`}
            >
              {active && (
                <span
                  key={currentImageIndex}
                  className="hero-dot-fill absolute inset-y-0 left-0 bg-white"
                  style={{ animationDuration: `${SLIDE_MS}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
