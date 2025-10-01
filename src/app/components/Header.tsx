"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  // Array of background images
  const backgroundImages = [
    "/images/home/bg-corpers.webp",
    "/images/home/bg-kids.webp",
    "/images/home/bg-waste.webp",
    "/images/home/headerbg.jpg",
    "/images/home/bg-market.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Smooth Transitions */}
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

      <div className="absolute inset-0 bg-black/60" />

      {/* Image Indicators */}
      <div className="absolute top-4 right-4 md:top-20 md:right-6 z-50 flex space-x-2">
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

      {/* FIXED: Added fixed positioning and proper background */}
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
                {/* Social Links */}
                <div className="flex justify-center space-x-4 py-3 border-b border-white/20">
                  <a
                    href="https://www.instagram.com/wonderwomannigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img src="/images/IG.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wonderwoman-nigeria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1737CB8aWV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
                  </a>
                </div>

                {/* Navigation Links */}
                <Link
                  href="/"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/volunteer"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Volunteer
                </Link>
                <Link
                  href="/blog"  
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/donate"
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
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/wonderwomannigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img src="/images/IG.svg" alt="Instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/wonderwoman-nigeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img src="/images/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                  href="https://www.facebook.com/share/1737CB8aWV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img src="/images/facebook.svg" alt="Facebook" />
                </a>
              </div>

              {/* Navigation Links - Left */}
              <div className="flex items-center space-x-1">
                <Link
                  href="/"
                  className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
                >
                  Projects
                </Link>
                <Link
                  href="/about"
                  className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Desktop Logo */}
              <Link href="/">
                <img
                  className="h-20 w-40 object-cover"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </Link>

            {/* Right - Additional Links */}
            <div className="flex items-center space-x-1">
              <Link
                href="/volunteer"
                className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
              >
                Volunteer
              </Link>
              <Link
                href="/blog"
                className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="/donate"
                className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
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
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Wonderful Woman for Sustainability Foundation 
          </h1>
          <h3 className="text-[#3db94c] text-lg sm:text-xl md:text-3xl font-bold mb-4">
            Wonder Woman Nigeria
          </h3>
          <p className="font-lato text-sm sm:text-base md:text-lg lg:text-xl text-white/80 my-6 md:my-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed font-medium px-2">
            Women and Girls empowerment, Gender equality, Justice for rape
            victims, Community Development, Menstruation and SRH.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10 px-4">
            <button className="bg-[#3db94c] cursor-pointer font-bold py-3 px-6 rounded text-sm md:text-base transition-all duration-300 transform shadow-lg text-white hover:bg-white hover:text-[#3db94c] w-full sm:w-auto">
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