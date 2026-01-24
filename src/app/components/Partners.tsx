"use client";

import Image from "next/image"; 

export default function Partners() {
  const logos = [
    "/images/partners/unicef.png",
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
    "/images/partners/afrivan.jpeg",
    "/images/partners/bf.png",
    "/images/partners/drive.png",
    "/images/partners/edu.png",
    "/images/partners/msi.png",
    "/images/partners/nhw.png",
    "/images/partners/psi.jpg",
    "/images/partners/sayp.jpeg",
    "/images/partners/shak.png",
    "/images/partners/swag.png",
    "/images/partners/water.png",
  ];


         
  const doubledLogos = [...logos, ...logos];

  return (
    <main className="bg-gray-50 py-12 px-4">
      <div className=" mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Partners and Sponsors
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            We are proud to partner with organizations who support our mission.
          </p>
        </header>

        <div className="overflow-hidden p-10 mt-12">
          <div className="flex gap-8 w-max animate-slide">
              {doubledLogos.map((src, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white rounded-lg flex-shrink-0n object-contain"
                  style={{ width: 120, height: 100 }}
                >
                  <Image
                    src={src}
                    alt="Partner Logo"
                    width={120}
                    height={80}
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>

        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-[#3db94c] text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 40s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}