"use client";

import { useRef, useEffect, useState } from "react";
import { Heart, Users, Globe, Award } from "lucide-react";

const Impact = () => {
  const stats = [
    { number: 10000, suffix: "+", label: "Lives Impacted", icon: <Heart className="w-6 h-6" /> },
    { number: 36, suffix: "+", label: "Communities Served", icon: <Globe className="w-6 h-6" /> },
    { number: 110, suffix: "+", label: "Active Volunteers", icon: <Users className="w-6 h-6" /> },
    { number: 7, suffix: "", label: "Years of Service", icon: <Award className="w-6 h-6" /> },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 1200;
    const start = performance.now();

    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(stats.map((stat) => Math.floor(stat.number * progress)));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [visible]);

  return (
    <div className="  ">
      <section
        ref={sectionRef}
        className="relative bg-cover bg-center bg-no-repeat flex items-end  h-screen"
        style={{
          backgroundImage: "url('/images/impact/impact.jpeg')",
        }}
      >
        {/* 🔹 Overlay that covers the entire section */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* 🔹 Content area pinned to bottom */}
        <div className="relative z-10 w-full pb-10">
          <div className="container mx-auto px-4 text-white text-center">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-center mb-2 text-red-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-1">
                    {counts[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
