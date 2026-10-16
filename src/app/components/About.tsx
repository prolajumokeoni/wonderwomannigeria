"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Heart,
  Users,
  BookOpen,
  Droplet,
  HandHelping,
  VenusAndMars,
  HeartPlus,
  Shield,
  Globe,
  ChevronRight,
  Award,
  Target,
  Eye,
} from "lucide-react";

// the foundation started in 2018; the count grows by itself each year
const FOUNDED_YEAR = 2018;
const yearsOfService = () => new Date().getFullYear() - FOUNDED_YEAR;

const About = () => {
  const stats = [
    { number: 10000, suffix: "+", label: "Lives Impacted", icon: <Heart className="w-6 h-6" /> },
    { number: 36, suffix: "+", label: "Communities Served", icon: <Globe className="w-6 h-6" /> },
    { number: 110, suffix: "+", label: "Active Volunteers", icon: <Users className="w-6 h-6" /> },
    { number: yearsOfService(), suffix: "", label: "Years of Service", icon: <Award className="w-6 h-6" /> },
  ];

  const programs = [
    { id: 1, icon: <Droplet className="w-7 h-7" />, title: "Plastics for Pads Project", description: "It is a pioneering circular economy model that tackles two urgent challenges: period poverty and plastic pollution, and empowers girls and women to experience their menstrual periods in a safe, confident, and dignified way.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
    { id: 9, icon: <HandHelping className="w-7 h-7" />, title: "Random Acts of Kindness Week & Outreaches", description: "Periodic street outreaches to support street children and orphans with food supplies, shoes, clothes, school bags and materials that we receive from donations.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
    { id: 4, icon: <VenusAndMars className="w-7 h-7" />, title: "GBV Awareness & Support", description: "Community sensitization programs with women leaders, schools, and youth groups; referrals of survivors to legal, medical, and psychosocial services.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
    { id: 6, icon: <BookOpen className="w-7 h-7" />, title: "Literacy Promotion", description: "Reading classes, book donations, and public library rehabilitation initiatives in underserved communities.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
    { id: 2, icon: <HeartPlus className="w-7 h-7" />, title: "The Little Sister Project", description: "Supporting vulnerable adolescent girls with menstrual kits, mentorship, and sexual/reproductive health education in 12 communities.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
    { id: 5, icon: <Shield className="w-7 h-7" />, title: "Child, Not Bride Campaign", description: "Awareness drives in northern Nigeria against child marriage, helping families keep girls in school.", iconColor: "text-[#2f9c3d] dark:text-[#5fd36d]", iconBg: "bg-[#3db94c]/10", accent: "" },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);
  const [missionIn, setMissionIn] = useState(false);
  const [visionIn, setVisionIn] = useState(false);
  const router = useRouter();

  const handleLearnMore = (programId) => {
    router.push(`/project#project-${programId}`);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pairs: [HTMLDivElement | null, (v: boolean) => void][] = [
      [missionRef.current, setMissionIn],
      [visionRef.current, setVisionIn],
    ];
    const observers = pairs.map(([el, set]) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) { set(true); o.disconnect(); } },
        { threshold: 0.25 }
      );
      o.observe(el);
      return o;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // the numbers count up fast and settle gently, each a beat after the one before
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(stats.map((s) => s.number));
      return;
    }
    const duration = 2000;
    const stagger = 150;
    const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
    let raf = 0;
    const start = performance.now();
    function update(now: number) {
      setCounts(stats.map((stat, i) => {
        const t = Math.min(Math.max((now - start - i * stagger) / duration, 0), 1);
        return Math.round(stat.number * easeOutExpo(t));
      }));
      if (now - start < duration + stagger * stats.length) raf = requestAnimationFrame(update);
    }
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="t-eyebrow mb-3">What We Do</p>
            <h2 className="t-h2 text-gray-900 dark:text-white">
              Flagship Programs &amp; Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 hover:border-[#3db94c]/60 transition-colors duration-300 flex flex-col p-7`}
              >
                <div className={`w-14 h-14 ${program.iconBg} ${program.iconColor} rounded-xl flex items-center justify-center mb-5`}>
                  {program.icon}
                </div>
                <h3 className="t-h3 text-gray-900 dark:text-white mb-3">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 flex-grow">{program.description}</p>
                <button
                  onClick={() => handleLearnMore(program.id)}
                  className={`cursor-pointer mt-auto ${program.iconColor} font-semibold flex items-center gap-1 text-[0.9375rem] hover:gap-2 transition-all duration-200`}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white dark:bg-black transition-colors duration-300">
        <div ref={missionRef} className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={`rise-in relative ${missionIn ? "is-visible" : ""}`}>
            <img
              className="w-full aspect-[4/3] object-cover object-top rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
              src="/images/about/girl.webp"
              alt="Our Mission"
            />
          </div>
          <div className={`rise-in ${missionIn ? "is-visible" : ""}`} style={{ "--d": "150ms" } as React.CSSProperties}>
            <p className="t-eyebrow mb-4">Our Mission</p>
            <p className="t-statement text-gray-800 dark:text-gray-100 max-w-xl">
              Our mission is to improve the lives of women and girls by addressing systemic barriers to{" "}
              <span className="rounded-md bg-[#3db94c]/15 px-1 -mx-0.5 box-decoration-clone text-[#1f7a2c] dark:bg-[#3db94c]/25 dark:text-[#8be597]">dignity, education, and inclusion</span> through advocacy,
              innovative solutions, and community-driven initiatives.
            </p>
          </div>
        </div>

        <div className="bg-[#f3faf4] dark:bg-[#0c1a0f] transition-colors duration-300">
          <div ref={visionRef} className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className={`rise-in order-2 lg:order-1 ${visionIn ? "is-visible" : ""}`} style={{ "--d": "150ms" } as React.CSSProperties}>
              <p className="t-eyebrow mb-4">Our Vision</p>
              <p className="t-statement text-gray-800 dark:text-gray-100 max-w-xl">
                To create a Nigeria where gender equality, environmental sustainability, and community resilience are an
                upheld standard and <span className="rounded-md bg-[#3db94c]/15 px-1 -mx-0.5 box-decoration-clone text-[#1f7a2c] dark:bg-[#3db94c]/25 dark:text-[#8be597]">menstrual dignity is a right for every woman and girl</span>.
              </p>
            </div>
            <div className={`rise-in relative order-1 lg:order-2 ${visionIn ? "is-visible" : ""}`}>
              <img
                className="w-full aspect-[4/3] object-cover object-top rounded-2xl ring-1 ring-black/5 dark:ring-white/10"
                src="/images/about/schoolgirls.webp"
                alt="Our Vision"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={sectionRef} className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-gray-200 dark:md:divide-neutral-800">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rise-in text-center ${visible ? "is-visible" : ""}`}
                style={{ "--d": `${index * 150}ms` } as React.CSSProperties}
              >
                <div className="text-4xl md:text-[2.75rem] leading-none font-extrabold mb-3 tabular-nums tracking-tight text-gray-900 dark:text-white">
                  {counts[index]}<span className="text-[#3db94c]">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
