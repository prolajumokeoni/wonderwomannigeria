"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const backgroundImages = [
    "/images/home/bg-corpers.webp",
    "/images/home/bg-kids.webp",
    "/images/home/bg-waste.webp",
    "/images/home/headerbg.webp",
    "/images/home/bg-market.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    const startSlideshow = () => {
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, 6000);
    };

    startSlideshow();

    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, [backgroundImages.length]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    clearInterval(slideIntervalRef.current);

    slideIntervalRef.current = setTimeout(() => {
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, 6000);
    }, 10000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Slideshow images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat zoom-bg transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      <Navbar />

      {/* Hero content — centered */}
      <section className="relative flex items-end justify-center min-h-screen px-6 md:px-16 pb-14">
        <div className="relative z-10 max-w-3xl text-center">
          <p className="fade-in-up text-[#3db94c] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
            Wonder Woman Nigeria
          </p>

          <h1 className="fade-in-up-delay-1 font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            Wonderful Woman for Sustainability Foundation
          </h1>

          <p className="fade-in-up-delay-2 font-lato text-base sm:text-lg md:text-xl text-white/85 max-w-xl leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mx-auto">
            Empowering women and girls, advancing gender equality, and building
            sustainable communities through advocacy and action.
          </p>

          <div className="fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-block bg-[#3db94c] text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-[#2fa33e] hover:shadow-lg hover:shadow-[#3db94c]/30 text-center"
            >
              Donate Now
            </a>
            <a
              href="#programs"
              className="inline-block border border-white/70 text-white font-bold py-3 px-8 rounded-md text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-gray-900 text-center"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Slide dots — bottom-center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? "w-6 h-2 bg-[#3db94c]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
