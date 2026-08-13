import React from "react";
import Link from "next/link";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white">
              Wonder Woman Nigeria
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering women and girls, advancing gender equality, and
              building sustainable communities through advocacy and action.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/project" },
                { label: "Media", href: "/media" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#3db94c] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:info@wonderwomannigeria.org"
                  className="hover:text-[#3db94c] transition-colors duration-200"
                >
                  info@wonderwomannigeria.org
                </a>
              </li>
              <li><a href="tel:+2348102657973" className="hover:text-[#3db94c] transition-colors">+2348102657973</a></li>
              <li>Abuja, Nigeria</li>
            </ul>
            <div className="mt-6">
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {year} Wonder Woman Nigeria. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Wonderful Woman for Sustainability Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
