"use client";

import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    { name: "Sarah Johnson", position: "Executive Director", image: "/images/team/elina.jpeg" },
    { name: "Amara Okafor", position: "Program Manager", image: "/images/team/anne.jpeg" },
    { name: "Fatima Abdullah", position: "Community Outreach Lead", image: "/images/team/yango.jpeg" },
    { name: "Chioma Nwosu", position: "Finance Director", image: "/images/team/hassan.jpeg" },
    { name: "Grace Adeyemi", position: "Volunteer Coordinator", image: "/images/team/tobi.jpeg" },
    { name: "Blessing Okeke", position: "Communications Manager", image: "/images/team/jumoke.jpg" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Meet Our <span className="text-[#3db94c]">Team</span>
          </h2>
          <div className="w-24 h-1 bg-[#3db94c] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate leaders dedicated to empowering communities and creating lasting change
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg h-96 bg-gray-900">
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-110 transition-all duration-500"
                />

                {/* Text bottom-right */}
                <div className="absolute bottom-0 right-0 z-10 p-6 text-right text-white  ">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-[#3db94c] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-200 font-medium">{member.position}</p>
                </div>

                {/* Green Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#3db94c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
