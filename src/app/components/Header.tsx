"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat zoom-bg "
        style={{
          backgroundImage: 'url("/images/headerbg.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <header className="fixed top-0 left-0 w-full z-50 h-[50px] bg-transparent">
        <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-6 py-2 h-full mt-10">
          <div className="flex gap-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src="/images/youtube.svg" alt="" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src="/images/IG.svg" alt="" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src="/images/linkedin.svg" alt="" />
              </a>
            </div>
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

          <div className="absolute left-1/2 transform -translate-x-1/2 top-[-70px]">
            <Link href="/">
              <img
                className="h-60 w-60 object-contain"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Right - Additional Links */}
          <div className="flex items-center space-x-1">
            <Link
              href="/donate"
              className="font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm text-white hover:bg-white/10"
            >
              Donate
            </Link>

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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-end justify-center min-h-screen px-4 ">
        {/* Hero Content */}
        <div className="relative z-10 text-center mx-auto">
          <h1 className="font-poppins text-nowrap text-6xl font-bold text-white mb-6 tracking-tight">

            Wonderful woman for sustainability foundation 

         
          </h1>
          <h6 className="text-[#3db94c]">
          Wonder Woman Nigeria
          </h6>
          <p className="font-lato text-sm md:text-xl text-white/80 my-8 max-w-2xl mx-auto leading-snug  font-medium">
            Women and Girls empowerment, Gender equality, Justice for rape
            victims, Community Development, Menstruation and SRH.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="bg-[#3db94c] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-white">
              Donate Now
            </button>
            <button className="bg-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-gray-100">
              Discover More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
