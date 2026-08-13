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

const About = () => {
  const stats = [
    { number: 10000, suffix: "+", label: "Lives Impacted", icon: <Heart className="w-6 h-6" />, color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/30" },
    { number: 36, suffix: "+", label: "Communities Served", icon: <Globe className="w-6 h-6" />, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30" },
    { number: 110, suffix: "+", label: "Active Volunteers", icon: <Users className="w-6 h-6" />, color: "text-[#3db94c]", bg: "bg-green-50 dark:bg-green-950/30" },
    { number: 7, suffix: "", label: "Years of Service", icon: <Award className="w-6 h-6" />, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
  ];

  const programs = [
    { id: 1, icon: <Droplet className="w-7 h-7" />, title: "Plastics for Pads Project", description: "It is a pioneering circular economy model that tackles two urgent challenges: period poverty and plastic pollution, and empowers girls and women to experience their menstrual periods in a safe, confident, and dignified way.", iconColor: "text-red-500", iconBg: "bg-red-50 dark:bg-red-950/30", accent: "border-red-400" },
    { id: 9, icon: <HandHelping className="w-7 h-7" />, title: "Random Acts of Kindness Week & Outreaches", description: "Periodic street outreaches to support street children and orphans with food supplies, shoes, clothes, school bags and materials that we receive from donations.", iconColor: "text-blue-500", iconBg: "bg-blue-50 dark:bg-blue-950/30", accent: "border-blue-400" },
    { id: 4, icon: <VenusAndMars className="w-7 h-7" />, title: "GBV Awareness & Support", description: "Community sensitization programs with women leaders, schools, and youth groups; referrals of survivors to legal, medical, and psychosocial services.", iconColor: "text-[#3db94c]", iconBg: "bg-green-50 dark:bg-green-950/30", accent: "border-[#3db94c]" },
    { id: 6, icon: <BookOpen className="w-7 h-7" />, title: "Literacy Promotion", description: "Reading classes, book donations, and public library rehabilitation initiatives in underserved communities.", iconColor: "text-cyan-500", iconBg: "bg-cyan-50 dark:bg-cyan-950/30", accent: "border-cyan-400" },
    { id: 2, icon: <HeartPlus className="w-7 h-7" />, title: "The Little Sister Project", description: "Supporting vulnerable adolescent girls with menstrual kits, mentorship, and sexual/reproductive health education in 12 communities.", iconColor: "text-orange-500", iconBg: "bg-orange-50 dark:bg-orange-950/30", accent: "border-orange-400" },
    { id: 5, icon: <Shield className="w-7 h-7" />, title: "Child, Not Bride Campaign", description: "Awareness drives in northern Nigeria against child marriage, helping families keep girls in school.", iconColor: "text-purple-500", iconBg: "bg-purple-50 dark:bg-purple-950/30", accent: "border-purple-400" },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((stat) => Math.floor(stat.number * eased)));
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [visible]);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Programs Section */}
      <section id="programs" className="py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#3db94c] text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Flagship Programs &amp; Initiatives
            </h2>
            <div className="w-16 h-1 bg-[#3db94c] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-xl border-t-4 ${program.accent} transition-all duration-300 hover:-translate-y-1 flex flex-col p-7`}
              >
                <div className={`w-14 h-14 ${program.iconBg} ${program.iconColor} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">{program.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{program.description}</p>
                <button
                  onClick={() => handleLearnMore(program.id)}
                  className={`cursor-pointer mt-auto ${program.iconColor} font-semibold flex items-center gap-1 text-sm hover:gap-2 transition-all duration-200`}
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
        <div className="flex w-full mx-auto flex-col lg:flex-row">
          <img className="lg:w-1/2 object-cover lg:object-top h-[320px] lg:h-[560px]" src="images/about/girl.webp" alt="Our Mission" />
          <div className="flex items-center flex-col justify-center lg:w-1/2 gap-4 p-10 lg:p-16 bg-white dark:bg-black transition-colors duration-300">
            <div className="w-14 h-14 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center mb-2">
              <Target className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Our Mission</h3>
            <div className="w-10 h-0.5 bg-[#3db94c] rounded-full mb-2" />
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-center text-lg leading-relaxed">
              Our mission is to improve the lives of women and girls by addressing systemic barriers to dignity, education, and inclusion through advocacy, innovative solutions, and community-driven initiatives.
            </p>
          </div>
        </div>

        <div className="flex w-full mx-auto flex-col lg:flex-row">
          <div className="order-2 lg:order-1 flex items-center flex-col justify-center lg:w-1/2 gap-4 bg-gray-50 dark:bg-neutral-900 p-10 lg:p-16 transition-colors duration-300">
            <div className="w-14 h-14 bg-green-50 dark:bg-green-950/30 rounded-2xl flex items-center justify-center mb-2">
              <Eye className="w-7 h-7 text-[#3db94c]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
            <div className="w-10 h-0.5 bg-[#3db94c] rounded-full mb-2" />
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-center text-lg leading-relaxed">
              To create a Nigeria where gender equality, environmental sustainability, and community resilience are an upheld standard and menstrual dignity is a right for every woman and girl.
            </p>
          </div>
          <img className="lg:w-1/2 object-cover lg:object-top h-[320px] order-1 lg:order-2 lg:h-[560px]" src="images/about/schoolgirls.webp" alt="Our Vision" />
        </div>
      </section>

      {/* Stats */}
      <section ref={sectionRef} className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.bg} rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300`}>
                <div className={`flex justify-center mb-3 ${stat.color}`}>{stat.icon}</div>
                <div className={`text-4xl font-extrabold mb-1 ${stat.color}`}>{counts[index]}{stat.suffix}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
