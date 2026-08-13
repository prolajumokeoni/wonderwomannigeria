"use client";

import Image from "next/image";

export default function Partners() {
  const logos = [
    "/images/partners/unicef.webp", "/images/partners/france.webp", "/images/partners/german.webp",
    "/images/partners/canada.webp", "/images/partners/fmwa.webp", "/images/partners/bouygues.webp",
    "/images/partners/iom.webp", "/images/partners/gac.webp", "/images/partners/liberte.webp",
    "/images/partners/plan.webp", "/images/partners/sesci.webp", "/images/partners/ad.webp",
    "/images/partners/afrivan.webp", "/images/partners/bf.webp", "/images/partners/drive.webp",
    "/images/partners/edu.webp", "/images/partners/msi.webp", "/images/partners/nhw.webp",
    "/images/partners/psi.webp", "/images/partners/sayp.webp", "/images/partners/shak.webp",
    "/images/partners/swag.webp", "/images/partners/water.webp",
  ];

  const doubledLogos = [...logos, ...logos];

  return (
    <section className="bg-white dark:bg-black py-20 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#3db94c] text-sm font-bold uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Our Partners and Sponsors</h2>
          <div className="w-16 h-1 bg-[#3db94c] mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            We are proud to partner with organizations who support our mission.
          </p>
        </div>

        <div className="overflow-hidden carousel-fade-mask py-4">
          <div className="flex gap-6 w-max animate-slide">
            {doubledLogos.map((src, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-gray-50 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 rounded-xl flex-shrink-0 hover:border-[#3db94c]/30 hover:bg-green-50/30 dark:hover:bg-green-950/20 transition-all duration-300"
                style={{ width: 130, height: 90 }}
              >
                <Image
                  src={src}
                  alt="Partner Logo"
                  width={110}
                  height={70}
                  className="object-contain p-2 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#3db94c] text-white font-semibold rounded-lg shadow-md hover:bg-[#2fa33e] hover:shadow-lg hover:shadow-[#3db94c]/20 transition-all duration-300"
          >
            Become a Partner
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-slide { animation: slide 45s linear infinite; }
        .animate-slide:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
