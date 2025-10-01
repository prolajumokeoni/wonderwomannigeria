"use client";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-gray-300 py-8 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-row items-center justify-between space-y-4">
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 py-3">
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
 

          {/* Copyright */}
          <p className="text-sm text-center">
            &#169; {year} Wonder Woman Nigeria. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
