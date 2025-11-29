"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const backgroundImages = [
    "/images/home/bg-corpers.webp",
    "/images/home/bg-kids.webp",
    "/images/home/bg-waste.webp",
    "/images/home/headerbg.JPG",
    "/images/home/bg-market.jpg",
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
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat zoom-bg transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="absolute top-24 right-4 md:top-25 md:right-6 z-50 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <Navbar />

      <section className="relative flex-1 flex items-center md:items-end justify-center min-h-screen px-4 pt-16 md:pt-0">
        <div className="relative z-10 text-center mx-auto">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Wonderful Woman for Sustainability Foundation
          </h1>

          <h3 className="text-[#3db94c] text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase">
            Wonder Woman Nigeria
          </h3>

          <p className="font-lato text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Empowering women and girls, advancing gender equality, and building
            sustainable communities through advocacy and action.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10 px-4">
            {/* <button className="bg-[#3DB94C] cursor-pointer border border-[#3db94c] text-[#3db94c] font-bold py-3 px-6 rounded-md text-sm md:text-base transition-all duration-300 transform shadow-sm hover:bg-[#3db94c] hover:text-white w-full sm:w-auto">
              Donate Now
            </button> */}

            <button className="bg-[#3DB94C] cursor-pointer text-white font-bold py-3 px-6 rounded-lg text-sm md:text-base transition-all duration-300 transform shadow-lg hover:bg-white hover:text-[#3db94c] w-full sm:w-auto">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}