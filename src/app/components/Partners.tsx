"use client";

import React from "react";
export default function PartnersPage() {
    
  const defaultLogos = [
    "/images/partners/france.jpeg",
    "/images/partners/german.jpeg",
    "/images/partners/canada.jpeg",
    "/images/partners/fmwa.jpeg",
    "/images/partners/bouygues.jpeg",
    "/images/partners/iom.jpeg",
    "/images/partners/gac.jpeg",
    "/images/partners/liberte.jpeg",
    "/images/partners/plan.jpeg",
    "/images/partners/sesci.jpeg",
    "/images/partners/ad.jpeg",
    "/images/partners/ecobarter.jpeg",
    
  ];


  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Partners and Sponsors
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We’re proud to partner with organizations who support our mission.
          </p>
        </header>

        {/* Grid: 2 cols on xs, 3 on sm, 4 on md, 6 on xl */}
        <section aria-label="Partners logos" className="bg-white rounded-lg p-6 shadow-sm">
          <ul
            role="list"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center justify-center"
          >
            {defaultLogos.map((src, idx) => (
              <li key={idx} className="flex items-center justify-center">
                <div className="w-full flex items-center justify-center p-3 rounded-md hover:scale-105 transform transition duration-200 ease-out">
                  {/*
                    Use next/image in a Next.js project for automatic optimization.
                    Here we use a regular <img> for simplicity. Make sure images are
                    sized similarly (or use object-contain) so the grid looks even.
                  */}
                  <img
                    src={src}
                    alt={`Partner logo ${idx + 1}`}
                    loading="lazy"
                    className="max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 object-contain"
                    onError={(e) => {
                      // graceful fallback: replace broken logos with a neutral placeholder
                      (e.currentTarget as HTMLImageElement).src = "/images/partners/placeholder.jpeg";
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>

          {/* Optional: CTA */}
          <div className="mt-8 text-center">
            <a
              href="/partners/contact"
              className="inline-block px-6 py-2 bg-[#3db94c] text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
            >
              Become a Partner
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
