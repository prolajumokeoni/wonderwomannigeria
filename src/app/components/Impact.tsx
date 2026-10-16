"use client";

import { useRef, useEffect, useState } from "react";
import { Heart, Users, Globe, Award } from "lucide-react";

// the foundation started in 2018; the count grows by itself each year
const FOUNDED_YEAR = 2018;
const yearsOfService = () => new Date().getFullYear() - FOUNDED_YEAR;

const stats = [
  { number: 10000, suffix: "+", label: "Lives Impacted", icon: Heart },
  { number: 36, suffix: "+", label: "Communities Served", icon: Globe },
  { number: 110, suffix: "+", label: "Active Volunteers", icon: Users },
  { number: yearsOfService(), suffix: "", label: "Years of Service", icon: Award },
];

const COUNT_MS = 2000;
const STAGGER_MS = 150;

// fast at first, settling gently onto the final number
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

const Impact = () => {
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

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(stats.map((s) => s.number));
      return;
    }

    // each number starts a beat after the one before it, as its column rises in
    let raf = 0;
    const start = performance.now();
    const update = (now: number) => {
      const next = stats.map((stat, i) => {
        const t = Math.min(Math.max((now - start - i * STAGGER_MS) / COUNT_MS, 0), 1);
        return Math.round(stat.number * easeOutExpo(t));
      });
      setCounts(next);
      if (now - start < COUNT_MS + STAGGER_MS * stats.length) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div className="bg-black">
      <section
        ref={sectionRef}
        className="relative bg-cover bg-center bg-no-repeat flex items-end h-screen"
        style={{
          backgroundImage: "url('/images/impact/impact.webp')",
        }}
      >
        {/* Overlay, deeper at the bottom where the numbers sit */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Content area pinned to bottom */}
        <div className="relative z-10 w-full pb-14">
          <div className="container mx-auto px-4 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-white/15">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`rise-in px-4 ${visible ? "is-visible" : ""}`}
                    style={{ "--d": `${index * STAGGER_MS}ms` } as React.CSSProperties}
                  >
                    <div className="mx-auto mb-4 grid place-items-center w-12 h-12 rounded-full bg-[#3db94c]/20 ring-1 ring-[#3db94c]/40 text-[#5fd36d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-4xl md:text-[2.75rem] leading-none font-extrabold mb-3 tabular-nums tracking-tight">
                      {counts[index]}
                      <span className="text-[#5fd36d]">{stat.suffix}</span>
                    </div>
                    <div className="text-base md:text-lg font-medium text-white/80">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
