"use client";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div
        className="absolute inset-0 bg-white bg-cover bg-center opacity-40  zoom-bg"
      />

      <div className="absolute inset-0 bg-black/60" />

      <Image
        src="/images/logo.png"
        alt="Logo"
        width={192}
        height={192}  
        className="object-contain z-50"
      />

      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-Poppins">
          Website Under Maintenance
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We are updating our site. In the meantime, connect with us on social media or contact us directly.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/wonderwomannigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src="/images/IG.svg" alt="Instagram" className="h-10 w-10" />
          </a>
          <a
            href="https://www.linkedin.com/company/wonderwoman-nigeria/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src="/images/linkedin.svg" alt="LinkedIn" className="h-10 w-10" />
          </a>
          <a
            href="https://www.facebook.com/share/1737CB8aWV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src="/images/facebook.svg" alt="Facebook" className="h-10 w-10" />
          </a>
        </div>

        <a
          href="mailto:Annedirkling@gmail.com"
          className="inline-block bg-[#3db94c] text-black font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
