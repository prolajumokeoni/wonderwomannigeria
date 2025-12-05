"use client";
import Image from "next/image";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-5">
      <a
        href="https://www.instagram.com/wonderwomannigeria"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Image src="/images/IG.svg" alt="Instagram" className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/company/wonderwoman-nigeria/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Image src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/share/1737CB8aWV"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <Image src="/images/facebook.svg" alt="Facebook" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
