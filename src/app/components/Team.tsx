"use client";

import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { name: "Edith Augustine", position: "Founder / Executive Director", image: "/images/team/elina.webp" },
    { name: "Anne Dirkling", position: "Vice President", image: "/images/team/anne.webp" },
    { name: "Yango Sor", position: "Gender & Inclusion Expert", image: "/images/team/yango.webp" },
    { name: "Hassan Sufyan Abdullahi", position: "Finance / Project Manager", image: "/images/team/hassan.webp" },
    { name: "Oluwatobi Precious Odunubi", position: "PR / Media Manager", image: "/images/team/tobi.webp" },
    { name: "Oni Olajumoke", position: "IT Manager", image: "/images/team/jumoke.webp" },
    { name: "Rahmah Idris", position: "MEAL Coordinator", image: "/images/team/rahmah.webp" },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#3db94c] text-sm font-bold uppercase tracking-widest mb-3">The People Behind the Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-[#3db94c]">Team</span>
          </h2>
          <div className="w-16 h-1 bg-[#3db94c] mx-auto rounded-full mb-5" />
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate leaders dedicated to empowering communities and creating lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl h-80 bg-gray-900 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top brightness-[0.7] group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                  <h3 className="text-white text-lg font-bold leading-tight mb-0.5 group-hover:text-[#3db94c] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm font-medium">{member.position}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-[#3db94c] w-0 group-hover:w-full transition-all duration-400 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
