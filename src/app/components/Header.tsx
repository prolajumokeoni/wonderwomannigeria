"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Header() {
  // Array of background images
  const backgroundImages = [
    "/images/home/bg-corpers.webp",
    "/images/home/bg-kids.webp",
    "/images/home/bg-waste.webp",
    "/images/home/headerbg.JPG",
    "/images/home/bg-market.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const slideIntervalRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const startSlideshow = () => {
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 6000);
    };

    startSlideshow();

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(slideIntervalRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backgroundImages.length]);

  // 👇 Function to handle manual image click
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);

    // Pause the current interval
    clearInterval(slideIntervalRef.current);

    // Restart slideshow after 10 seconds
    slideIntervalRef.current = setTimeout(() => {
      slideIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 6000);
    }, 10000);
  };

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat zoom-bg transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50  pointer-events-none" />

      <div className="absolute top-4 right-4 md:top-25 md:right-6 z-50 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            
          />
        ))}
      </div>

      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#3db94c]/75 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        {/* Mobile Header */}
        <div className={`md:hidden transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900/95' : 'bg-gray-700'
        } backdrop-blur-sm`}>
          <nav className="flex items-center justify-between px-4 py-3">
            {/* Mobile Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-12 w-12 object-cover"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>

            {/* FIXED: Enhanced Mobile Menu Button with better visibility */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 border border-white/30 rounded-md hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* FIXED: Mobile Menu with smooth animation */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'opacity-100  ' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-700 backdrop-blur-sm h-[100vh] ">
              <div className="px-4 py-2 space-y-2">
               <SocialMediaIcons />

                {/* Navigation Links */}
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:text-black  

                  "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  href="/#"  
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <nav className="hidden md:block relative max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
             
             <SocialMediaIcons />

              {/* Navigation Links - Left */}
              <div className="flex items-center space-x-1">
              <Link
                  href="/#"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/#"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/#"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                 About
                </Link>
              </div>
            </div>

            {/* Desktop Logo */}
              <Link href="/#">
                <img
                  className="h-20 w-40 object-contain"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>

            {/* Right - Additional Links */}
            <div className="flex gap-4">
            <div className="flex items-center space-x-1">
            <Link
                  href="/#"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Volunteer
                </Link>
                <Link
                  href="/#"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                 Contact
                </Link>
            </div>

                          <Link
                href="/#"
                className={`font-semibold px-5 py-2 rounded-md transition-all duration-300 text-sm border shadow-sm ${
                  isScrolled
                    ? "bg-white text-[#3db94c] border-[#3db94c] hover:bg-[#3db94c] hover:text-white"
                    : "bg-[#3DB94C12] text-[#3db94c] border-[#3db94c] hover:bg-[#3db94c] hover:text-white"
                }`}
              >
                Donate
              </Link>

          </div>
          </div>
        </nav>
      </header>

      {/* FIXED: Hero Section with proper top padding for fixed header */}
      <section className="relative flex-1 flex items-center md:items-end justify-center min-h-screen px-4 pt-16 md:pt-0">
        {/* Hero Content */}
        <div className="relative z-10 text-center mx-auto">
        <h1 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Wonderful Woman for Sustainability Foundation
          </h1>

          <h3 className="text-[#3db94c] text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-wide uppercase">
            Wonder Woman Nigeria
          </h3>

          <p className="font-lato text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8 px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Empowering women and girls, advancing gender equality, and building sustainable communities through advocacy and action.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10 px-4">
          <button className="bg-[#3DB94C12] border border-[#3db94c] text-[#3db94c] font-bold py-3 px-6 rounded-md text-sm md:text-base transition-all duration-300 transform shadow-sm hover:bg-[#3db94c] hover:text-white w-full sm:w-auto">
            Donate Now
          </button>

            <button className="bg-black cursor-pointer text-white font-bold py-3 px-6 rounded-lg text-sm md:text-base transition-all duration-300 transform shadow-lg hover:bg-white hover:text-[#3db94c] w-full sm:w-auto">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}