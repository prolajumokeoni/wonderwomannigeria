"use client";

import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { name: "Edith Augustine", position: "Founder / Executive Director", image: "/images/team/elina.webp" },
    { name: "Anne Dirkling", position: "Vice President", image: "/images/team/anne.webp" },
    { name: "Yango Sor", position: "Gender & Inclusion Expert", image: "/images/team/yango.webp" },
    { name: "Hassan Sufyan Abdullahi", position: "Finance / Project Manager", image: "/images/team/hassan.webp" },
    { name: "Oluwatobi Precious Odunubi", position: "PR / Media Manager", image: "/images/team/trim/tobi.webp" },
    { name: "Oni Olajumoke", position: "IT Manager", image: "/images/team/jumoke.webp" },
    { name: "Rahmah Idris", position: "MEAL Coordinator", image: "/images/team/rahmah.webp" },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="t-eyebrow mb-3">The People Behind the Work</p>
          <h2 className="t-h2 text-gray-900 dark:text-white mb-4">
            Meet Our <span className="text-[#3db94c]">Team</span>
          </h2>
          <p className="t-lead text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate leaders dedicated to empowering communities and creating lasting change.
          </p>
        </div>

        {/* four to a row; the rest line up under the first row's columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 ring-1 ring-gray-200 dark:ring-neutral-700 hover:ring-[#3db94c]/50 transition-[box-shadow] duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-neutral-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-lg font-bold tracking-[-0.01em] text-gray-900 dark:text-white leading-tight group-hover:text-[#2f9c3d] dark:group-hover:text-[#5fd36d] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#2f9c3d] dark:text-[#5fd36d]">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
