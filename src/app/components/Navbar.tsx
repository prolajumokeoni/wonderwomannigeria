"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", exact: true },
  { label: "Projects", href: "/project" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const whiteBackgroundPages = ["/blog", "/media"];
  const shouldShowGreenBg = whiteBackgroundPages.some((page) =>
    pathname?.startsWith(page)
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const showGreenBackground = shouldShowGreenBg || isScrolled;

  const isActive = (href: string, exact?: boolean) => {
    if (href === "/#contact") return false;
    if (exact) return pathname === href;
    return pathname?.startsWith(href) ?? false;
  };

  const desktopLinkClass = (href: string, exact?: boolean) => {
    const active = isActive(href, exact);
    const base = "font-semibold px-4 py-2 rounded-md transition-all duration-200 text-sm relative";
    if (active) {
      return `${base} text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-[#3db94c] after:rounded-full`;
    }
    return `${base} text-white/80 hover:text-white ${showGreenBackground ? "hover:bg-white/15" : "hover:bg-white/10"}`;
  };

  const mobileLinkClass = (href: string, exact?: boolean) => {
    const active = isActive(href, exact);
    const base = "block font-semibold px-4 py-3 rounded-md transition-all duration-200";
    if (active) return `${base} text-[#3db94c] bg-white/10 border-l-2 border-[#3db94c]`;
    return `${base} text-white hover:bg-white/10`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          showGreenBackground
            ? "bg-[#3db94c]/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Mobile */}
        <div className="md:hidden">
          <nav className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex-shrink-0">
              <Image className="object-cover" width={48} height={48} src="/images/logo.webp" alt="Logo" />
            </Link>
            <div className="flex items-center gap-2">
              {/* Dark mode toggle — mobile */}
              <button
                onClick={toggle}
                className="text-white p-2 rounded-md hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
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
            </div>
          </nav>

          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "opacity-100 max-h-[90vh]" : "max-h-0 opacity-0"}`}>
            <div className="bg-black/95 backdrop-blur-sm h-[90vh] flex flex-col justify-center px-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileLinkClass(link.href, link.exact)}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <nav className="hidden md:block relative w-[90%] mx-auto py-7">
          <div className="flex items-center justify-between">
            {/* Left links */}
            <div className="flex items-center space-x-1 flex-1">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.href} href={link.href} className={desktopLinkClass(link.href, link.exact)}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Centered Logo */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <Image className="object-contain" src="/images/logo.webp" alt="Logo" width={160} height={80} />
            </Link>

            {/* Right links + toggle */}
            <div className="flex items-center space-x-1 flex-1 justify-end">
              {navLinks.slice(3).map((link) => (
                <Link key={link.href} href={link.href} className={desktopLinkClass(link.href, link.exact)}>
                  {link.label}
                </Link>
              ))}
              {/* Dark mode toggle — desktop */}
              <button
                onClick={toggle}
                className="ml-2 text-white/80 hover:text-white p-2 rounded-md hover:bg-white/10 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
