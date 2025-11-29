"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DonateButton from "./DonateButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#3db94c]/75 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "bg-[#3db94c]/75" : "bg-transparent"
          }`}
        >
          <nav className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-12 w-12 object-cover"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 border border-white/30 rounded-md hover:bg-white/10 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-black backdrop-blur-sm h-[90vh] flex justify-around pb-10 flex-col overflow-hidden">
              <div className="px-4 py-2 space-y-2">
                <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:text-black"
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
                {/* <Link
                  href="/#"
                  className="block font-semibold px-4 py-3 text-white hover:bg-white/10 rounded-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block relative w-[90%] mx-auto  py-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 flex-1">
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
                  href="/project"
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

            {/* Centered Logo */}
            <Link
              href="/#"
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <img
                className="h-20 w-40 object-contain"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>

            {/* Right Links */}
            <div className="flex gap-4 flex-1 justify-end">
              <div className="flex">
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
                <Link
                  href="#contact"
                  className={`font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    isScrolled
                      ? "text-white hover:text-black hover:bg-white/90"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <div className="fixed top-6 right-[12%] z-50 hidden md:block">
        <DonateButton />
      </div> */}
    </>
  );
}