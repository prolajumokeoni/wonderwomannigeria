"use client";

import { useRef, useEffect, useState } from "react";

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

const NGOWebsite = () => {
 
  const stats = [
    { number: 200, suffix: "+", label: "Lives Impacted", icon: <Heart className="w-6 h-6" /> },
    { number: 36, suffix: "+", label: "Communities Served", icon: <Globe className="w-6 h-6" /> },
    { number: 110, suffix: "+", label: "Active Volunteers", icon: <Users className="w-6 h-6" /> },
    { number: 7, suffix: "", label: "Years of Service", icon: <Award className="w-6 h-6" /> },
  ];
  
 

 
  const programs = [
    {
      icon: <HandHelping className="w-8 h-8" />,
      title: "Random Acts of Kindness Week & Outreaches",
      description:
        "Periodic street outreaches to support street children and orphans with food supplies, shoes, clothes, school bags and materials that we receive from donations.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <VenusAndMars className="w-8 h-8" />,
      title: "GBV Awareness & Support",
      description:
        "Community sensitization programs with women leaders, schools, and youth groups; referrals of survivors to legal, medical, and psychosocial services.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Literacy Promotion",
      description:
        " Reading classes, book donations, and public library rehabilitation initiatives in underserved communities.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: <HeartPlus className="w-8 h-8" />,
      title: "The Little Sister Project",
      description:
        "Supporting vulnerable adolescent girls  with menstrual kits, mentorship, and sexual/reproductive health  education in 12 communities.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Child, Not Bride Campaign",
      description:
        "Emergency response and rebuilding efforts for communities affected by natural disasters.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Plastics for Pads Project ",
      description:
        "Safeguarding children's rights and providing safe spaces for vulnerable youth.",
      color: "bg-purple-100 text-purple-600",
    },
  ];
 
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
      setCounts(
        stats.map((stat) => Math.floor(stat.number * progress))
      );
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
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="text-red-500 font-medium hover:text-red-600 flex items-center space-x-1">
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
          <div className="flex w-fullmx-auto ">
              <img className="  w-1/2   object-cover object-top  h-[600px]" src="images/about/girl.webp" alt="" />

            <div className="flex items-center flex-col justify-center w-1/2 gap-4 bg-white">
              <div className="w-16 h-16  bg-[#fcf0f0]  rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8  text-red-500" />

              </div>
              <h3 className="text-3xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 max-w-md mx-auto text-center text-xl">
              Our mission is to improve the lives of women and girls by addressing systemic barriers to dignity, education, and
                inclusion through advocacy, innovative solutions, and community-driven initiatives.  
          
              </p>
            </div>
          </div>

          <div className="flex w-full mx-auto ">

            <div className="flex items-center flex-col justify-center w-1/2 gap-4 bg-white">
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
            <img className="  w-1/2 object-cover   object-top h-[600px]" src="images/about/schoolgirls.webp" alt="" />
          </div>
        </div>

      </section>

   <section ref={sectionRef} className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-2 text-red-500">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
            <div className="w-24 h-1 bg-[#3db94c] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us in our mission to create lasting positive change. Every
              contribution makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">info@wonderwomannigeria.org</p>
              <p className="text-gray-300">volunteer@wonderwomannigeria.org</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">+2348102657973</p>
              {/* <p className="text-gray-300">Emergency: +1 (555) 987-6543</p> */}
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Abuja Nigeria</h3>
              {/* <p className="text-gray-300 mb-2">123 Hope Street</p> */}
              {/* <p className="text-gray-300">Compassion City, CC 12345</p> */}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#3db94c] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors mr-4">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOWebsite;
