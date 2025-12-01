"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Menu,
  X,
  Heart,
  Users,
  BookOpen,
  Droplet,
  HandHelping,
  VenusAndMars,
  HeartPlus,
  Shield,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
  Target,
  Eye,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      number: 10000,
      suffix: "+",
      label: "Lives Impacted",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: 36,
      suffix: "+",
      label: "Communities Served",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: 110,
      suffix: "+",
      label: "Active Volunteers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: 7,
      suffix: "",
      label: "Years of Service",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const programs = [
    {
      id: 1,
      icon: <Droplet className="w-8 h-8" />,
      title: "Plastics for Pads Project ",
      description: "It is a pioneering circular economy model that tackles two urgent challenges: period poverty and plastic pollution, and empowers girls and women to experience their menstrual periods in a safe, confident, and dignified way.",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 9,
      icon: <HandHelping className="w-8 h-8" />,
      title: "Random Acts of Kindness Week & Outreaches",
      description:
        "Periodic street outreaches to support street children and orphans with food supplies, shoes, clothes, school bags and materials that we receive from donations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 4,
      icon: <VenusAndMars className="w-8 h-8" />,
      title: "GBV Awareness & Support",
      description:
        "Community sensitization programs with women leaders, schools, and youth groups; referrals of survivors to legal, medical, and psychosocial services.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      icon: <BookOpen className="w-8 h-8" />,
      title: "Literacy Promotion",
      description:
        " Reading classes, book donations, and public library rehabilitation initiatives in underserved communities.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      id: 2,
      icon: <HeartPlus className="w-8 h-8" />,
      title: "The Little Sister Project",
      description:
        "Supporting vulnerable adolescent girls  with menstrual kits, mentorship, and sexual/reproductive health  education in 12 communities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      icon: <Shield className="w-8 h-8" />,
      title: "Child, Not Bride Campaign",
      description:
        "Awareness drives in northern Nigeria against child marriage, helping families keep girls in school.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);



const router = useRouter();

const handleLearnMore = (programId) => {
  router.push(`/project#project-${programId}`);
};


  // Observe when section comes into view
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

  // Animate counters when visible
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
    <div className="min-h-screen bg-white">
      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Flagship Programs & Initiatives
            </h2>
            <div className="w-24 h-1 bg-[#3db94c] mx-auto mb-6"></div>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering communities through targeted programs focusing on
              gender-based violence prevention, literacy, menstrual health
              advocacy, and child protection.
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                <div
                  className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {program.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {program.description}
                </p>
              <button
                onClick={() => handleLearnMore(program.id)}
                className="cursor-pointer mt-auto text-red-500 font-medium hover:text-red-600 flex items-center space-x-1"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="" className=" bg-gray-50">
        <div className=" ">
          <div className="flex w-full mx-auto flex-col lg:flex-row">
            <img
              className="  lg:w-1/2   object-cover lg:object-top h-[300px]  lg:h-[600px]"
              src="images/about/girl.webp"
              alt=""
            />

            <div className="flex items-center flex-col justify-center lg:w-1/2 gap-4 bg-white p-6 lg:p-0">
              <div className="w-16 h-16  bg-[#fcf0f0]  rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8  text-red-500" />
              </div>
              <h3 className="text-3xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 max-w-md mx-auto text-center text-xl">
                Our mission is to improve the lives of women and girls by
                addressing systemic barriers to dignity, education, and
                inclusion through advocacy, innovative solutions, and
                community-driven initiatives.
              </p>
            </div>
          </div>

          <div className="flex w-full mx-auto flex-col lg:flex-row ">
            <div className="order-2 lg:order-2   flex items-center flex-col justify-center lg:w-1/2 gap-4 bg-white p-6 lg:p-0">
              <div className="w-16 h-16 rounded-full  bg-[#d7f3da]  flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[#3db94c]" />
              </div>
              <h3 className="text-3xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600 max-w-md mx-auto text-center text-xl">
                To create a Nigeria where gender equality, environmental
                sustainability, and community resilience are an upheld standard
                and menstrual dignity is a right for every woman and girl.{" "}
              </p>
            </div>
            <img
              className="lg:w-1/2 object-cover lg:object-top h-[300px] order-1 lg:order-2  lg:h-[600px]"
              src="images/about/schoolgirls.webp"
              alt=""
            />
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid   md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-center mb-2 text-red-500">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
