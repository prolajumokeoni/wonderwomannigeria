"use client";

import Impact from "../components/Impact";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect, } from "react";


const ImpactHeader = () => <div className="bg-[#3db94c] text-white py-12 text-center"><h2 className="text-3xl font-bold">Our Projects</h2><p className="mt-2">Making a difference across Nigeria</p></div>;

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      category: "mhhm",
      title: "Plastics for Pads Project",
      year: "Since 2022",
      tagline: "Turning waste into dignity",
      images: [
        "/images/projects/pfp/pfp.jpeg",
        "/images/projects/pfp/pfp2.jpeg",
        "/images/projects/pfp/pfp3.jpeg",
        "/images/projects/pfp/pfp4.jpeg",
        "/images/projects/pfp/pfp5.jpeg",
        "/images/projects/pfp/pfp6.jpeg",
      ],
      description: "At Wonder Woman Nigeria, we believe that young girls and women should not be left alone to make these tough choices. They should be supported, empowered and allowed to have their menstrual periods in a safe, confident and dignified manner.",
      objectives: [
        "Plastic Collection Stations – Compound, community-based and/or school-based drop-off points for PET bottles, cans, and hard plastics (and paper/cardboard, glass, e-waste). Plastic/waste collection and drop off in the station.",
        "Recycling Partnerships – Our recycling partner Ecobarter collects the waste when container is full (call for pick up when containers are filled to 80% capacity!). Plastics are sold to recycling partner(s); proceeds are reinvested.",
        "Reusable Pads Distribution – Funds purchase durable, eco-friendly reusable sanitary pads for adolescent girls, often packaged in dignity kits with soap and deodorant in a chosen, underserved community.",
        "Education & Awareness – Menstrual hygiene workshops, peer learning networks, and community sensitization (including men and boys).",
        "Community Empowerment – Women leaders and volunteers manage collection points and safe spaces, generating income and fostering leadership."
      ],
      impact: {
        stats: [
          "Coverage: 32 communities and 10 enclosed office/residential compounds equipped with collection stations across 4 states (Abuja FCT, Kaduna, Benue and Plateau States). Abuja FCT with a total of 32 stations across 4 area councils.",
          "Reach: Since 2022, a total of 3,800+ girls provided with over 10,000 reusable pads (3 per girl)",
          "Recycling Impact: Over 21,815 kg of recyclable waste collected across 4 states in 3+ years (including clean-up drives)",
          "Absenteeism: reduced by 78% among school girls during menstruation",
          "Community Engagement: 50+ outreach events"
        ],
        story: "The Plastics for Pads project demonstrates how environmental sustainability and gender equity can work hand in hand. By exchanging recyclable plastics for reusable sanitary pads, the project simultaneously promotes menstrual dignity and environmental stewardship."
      }
    },
    {
      id: 2,
      category: "mhhm",
      title: "The Little Sister Project",
      year: "Since 2020",
      tagline: "Protecting dignity, enabling futures",
      images: [
        "/images/projects/lsp/lsp1.jpeg",
        "/images/projects/lsp/lsp2.jpeg",
        "/images/projects/lsp/lsp3.jpeg",
        "/images/projects/lsp/lsp4.jpeg",
        "/images/projects/lsp/lsp5.jpeg",
        "/images/projects/lsp/lsp6.jpeg",
        "/images/projects/lsp/lsp7.jpg",
      ],
      description: "Born from the mission to combat period poverty, The Little Sister Project provides comprehensive menstrual health support to vulnerable adolescent girls. Through individual donor support, we've adopted girls in target communities, ensuring they have consistent access to menstrual hygiene products and education.",
      objectives: [
          "Birthed with the maxime to combat period poverty, we have adopted girls in" +
          "our target communities through the support of individual donors and cater for their monthly menstrustration hygiene" +
          "needs to cover sanitation hygiene and avoid girls being abused, molested, sexually taken advantage of and/or" +
          "dropping out of school. Further, we hold intimate talks about sexual/body education as well as discussions about consent, women rights and rape/GBV"
      ],
      impact: {
        stats: [
          "692 girls aged 12-18 years currently supported",
          "Active in 12 communities across Northern Nigeria",
          "Monthly menstrual kits including reusable pads, soap, and hygiene essentials",
          "Regular intimate talks and mentorship sessions"
        ],
        story: "Beyond providing menstrual products, this project creates a protective network around vulnerable girls. Many beneficiaries have shared how the consistent support has kept them in school, protected them from exploitation, and given them confidence to pursue their education."
      }
    },
    {
      id: 3,
      category: "mhhm",
      title: "National MHH Summit 2025",
      year: "2025",
      tagline: "From grassroots advocacy to national policy",
      images: [
        "/images/projects/nmhs/nmhs.jpeg",
        "/images/projects/nmhs/nmhs1.jpeg",
        "/images/projects/nmhs/nmhs2.jpeg",
        "/images/projects/nmhs/nmhs3.jpeg",
        "/images/projects/nmhs/nmhs4.jpeg",
        "/images/projects/nmhs/nmhs5.jpeg",
        "/images/projects/nmhs/nmhs6.jpeg",
      ],
      description: "Wonder Woman Nigeria co-convened Nigeria's historic first National Menstrual Health and Hygiene Management Summit with the Federal Ministry of Women Affairs. This landmark event brought together policymakers, advocates, and stakeholders to address menstrual health as a national priority.",
      objectives: [
        "Elevate menstrual health to national policy priority",
        "Finalize and implement Nigeria's first National MHH Policy",
        "Integrate MHH into gender-responsive national budgets",
        "Support local production and disability-inclusive product innovation",
        "Launch youth-led period banks across Nigeria"
      ],
      impact: {
        stats: [
          "Contributed to validation of Nigeria's first National MHH Policy (2025)",
          "Secured commitment for policy finalization by Q4 2025",
          "Integration into National Development Plan (2026-30) confirmed",
          "Multiple state governments committed to MHH budget lines"
        ],
        story: "This summit represents years of grassroots advocacy finally reaching the highest levels of government. The theme 'Empowering Lives, Breaking Barriers, Building Dignity' captured our vision of menstrual health as a fundamental right, not a privilege."
      }
    },
    {
      id: 4,
      category: "gbv",
      title: "Community Sensitization on GBV",
      year: "Since 2019",
      tagline: "Breaking silence, building safety",
      images: [
        "/images/projects/gbv/gbv.jpeg",
        "/images/projects/gbv/gbv1.jpeg",
        "/images/projects/gbv/gbv2.jpeg",
        "/images/projects/gbv/gbv3.jpeg",
        "/images/projects/gbv/gbvv4.jpeg",
        "/images/projects/gbv/gbvv5.jpeg",
        "/images/projects/gbv/gbvv6.jpeg",
        "/images/projects/gbv/gbvv7.jpeg",
        "/images/projects/gbv/gbvv8.jpeg",
        "/images/projects/gbv/gbvv9.jpeg",
        "/images/projects/gbv/gbvv10.jpeg",
        "/images/projects/gbv/gbvv11.jpeg",
      ],
      description: "Our GBV sensitization program engages entire communities in preventing and responding to gender-based violence. By working with traditional and religious leaders, women's groups, youth organizations, and schools, we're creating comprehensive support networks for survivors and shifting cultural norms.",
      objectives: [
        "Raise awareness about all forms of GBV including rape, assault, and domestic violence",
        "Engage men, boys, and community leaders as allies against GBV",
        "Create functional referral pathways for survivors",
        "Reduce stigma and victim-blaming in communities",
        "Establish WWN as a trusted contact point for GBV cases"
      ],
      impact: {
        stats: [
          "50+ outreach and sensitization events conducted",
          "4,000+ community members reached directly",
          "Partnerships with FNP, hospitals, and GBV support centers",
          "Traditional and religious leaders engaged as advocates"
        ],
        story: "By working with respected community leaders, we've seen remarkable shifts in how GBV is discussed and addressed. Communities that once remained silent now actively report cases and support survivors in accessing justice and healing."
      }
    },
    {
      id: 5,
      category: "education",
      title: "Child, Not Bride Campaign",
      year: "2021",
      tagline: "Childhood restored, futures protected",
      images: [
        "/images/projects/cnb/cnb.jpg", 
        "/images/projects/cnb/cnb3.jpg", 
        "/images/projects/cnb/cnb4.jpg", 
        "/images/projects/cnb/cnb5.jpg", 
      ],
      description: "Addressing the critical issue of child marriage in Northern Nigeria, this campaign combines family counseling with community-wide awareness activities. We work directly with parents and families to demonstrate the importance of education and the devastating risks of early marriage.",
      objectives: [
        "End child marriages through targeted family interventions",
        "Provide counseling to parents considering early marriage for daughters",
        "Educate communities about risks of teenage pregnancy",
        "Promote girl child education as pathway to empowerment",
        "Create support networks to keep girls in school"
      ],
      impact: {
        stats: [
          "15 families directly engaged and counseled",
          "100% of girls from program families still in school",
          "Multiple community awareness sessions in Northern communities",
          "Partnerships with local leaders to change cultural practices"
        ],
        story: "Every girl who remains in school represents not just an individual victory, but a shift in family and community mindsets. Parents who once saw early marriage as inevitable now champion their daughters' education."
      }
    },
    {
      id: 6,
      category: "education",
      title: "Literacy Awareness & Promotion",
      year: "Since 2020",
      tagline: "Building literate, empowered communities",
      images: [
        "/images/projects/lsp/lsp.jpeg",
        "/images/projects/la/la.jpeg",
        "/images/projects/la/la1.jpeg",
        "/images/projects/la/la3.jpg",
        "/images/projects/la/la5.jpg",
        "/images/projects/la/la4.jpeg",
        
      ],
      description: "In partnership with Tanar Kaduna Education Consultancy, we're fostering literacy development and reading culture in underserved communities. Our comprehensive approach includes book donations, reading classes, competitions, and advocacy for public library rehabilitation.",
      objectives: [
        "Promote literacy development in underserved communities",
        "Build sustainable reading culture among children and youth",
        "Support Almajiri children with education opportunities",
        "Advocate for comprehensive public library rehabilitation",
        "Make books accessible to everyone, regardless of background"
        
      ],
      impact: {
        stats: [
          "Weekly classes for Almajiri children in Kaduna South",
          "Book donations to multiple schools and communities",
          "Primary and secondary school reading competitions hosted",
          "Education aid provided to vulnerable children",
          "Advocacy for library rehabilitation gaining traction"
        ],
        story: "Literacy is the foundation of opportunity. Through our reading programs, we've watched children discover the joy of stories and the power of knowledge, opening doors to futures they once thought impossible."
      }
    },
    {
      id: 8,
      category: "environment",
      title: "Periodic Clean-Up Activities",
      year: "Since 2021",
      tagline: "Clean communities, healthy futures",
      images: [
        "/images/projects/rcu/rcu1.jpeg",
        "/images/projects/rcu/rcu.jpeg",
        "/images/projects/rcu/rcu2.jpeg",
        "/images/projects/rcu/rcu4.png",
        "/images/projects/rcu/rcu3.jpeg",
      ],
      description: "Our regular clean-up drives mobilize communities to tackle plastic pollution while building environmental consciousness. These activities directly feed into our Plastics for Pads initiative, creating a closed loop where waste collection serves both environmental and social good.",
      objectives: [
        "Reduce plastic pollution in communities and waterways",
        "Build community environmental awareness and stewardship",
        "Collect recyclable materials for Plastics for Pads program",
        "Engage youth and volunteers in environmental action",
        "Create visible improvements in community cleanliness"
      ],
      impact: {
        stats: [
          "Active in 4 states and 36+ communities",
          "21,815+ kg of recyclable waste collected total",
          "200+ regular volunteers mobilized",
          "Thousands of kilograms diverted from dumpsites and waterways",
          "Integration with income generation through recycling"
        ],
        story: "Clean-up activities do more than remove waste—they transform how communities see their environment and their role in protecting it. Areas once littered with plastic are now maintained by proud community members."
      }
    },
    {
      id: 9,
      category: "community",
      title: "Random Acts of Kindness Week",
      year: "Since 2018",
      tagline: "Compassion in action since day one",
      images: [
        "/images/projects/rak/rak1.jpeg", 
        "/images/projects/rak/rak3.jpeg", 
        "/images/projects/rak/rak4.jpeg", 
        "/images/projects/rak/rak5.jpeg", 
        "/images/projects/rak/rak2.jpeg", 
        "/images/projects/rak/rak6.jpeg", 
        "/images/projects/rak/rak10.jpeg", 
        "/images/projects/rak/rak7.jpeg", 
        "/images/projects/rak/rak8.jpeg", 
        "/images/projects/rak/rak9.jpeg", 
      ],
      description: "Our founding program, Random Acts of Kindness represents WWN's core values of compassion and community engagement. Through periodic outreaches, we support street children, orphans, and IDP residents with essential supplies while serving as a visible contact point for GBV cases and community needs.",
      objectives: [
        "Provide immediate support to most vulnerable community members",
        "Create visible presence as GBV contact point",
        "Build community awareness of WWN's mission and values",
        "Respond to emergency needs in IDP camps and underserved areas",
        "Demonstrate compassion as foundation of social change"
      ],
      impact: {
        stats: [
          "Annual outreaches since 2018 across multiple states",
          "Support provided: food, clothes, shoes, school supplies, medical aid",
          "IDP camps in Abuja, Kaduna regularly served",
          "Community debates and awareness sessions conducted",
          "Established as trusted community resource"
        ],
        story: "From our very first outreach in Kaduna in 2018 to today's comprehensive programs, Random Acts of Kindness embodies our belief that sustainable change begins with immediate compassion and presence in communities."
      }
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "mhhm", name: "Menstrual Health" },
    { id: "gbv", name: "GBV & Justice" },
    { id: "education", name: "Education" },
    { id: "environment", name: "Environment" },
    { id: "community", name: "Community" }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}, []);
    
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Impact/>
      <ImpactHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#3db94c] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ProjectCard({ project }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = (e) => {
    const container = e.currentTarget;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scrollToLeft = () => {
    const container = document.getElementById(`scroll-${project.id}`);
    if (container) {
      container.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollToRight = () => {
    const container = document.getElementById(`scroll-${project.id}`);
    if (container) {
      container.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <div id={`project-${project.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-sm text-[#3db94c] font-semibold mb-1">{project.year}</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-lg text-gray-600 italic">{project.tagline}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Image Gallery Section - Drag to Scroll */}
      <div className="relative px-8 py-6 bg-gray-50 group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollToLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollToRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

    
    
      <div
        id={`scroll-${project.id}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        className="overflow-x-auto overflow-y-hidden custom-scrollbar whitespace-nowrap cursor-grab pb-3"
      >
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="inline-block w-64 h-48 rounded-lg object-cover mr-4"
          />
        ))}
      </div>


      </div>

      {/* Content Section */}
      <div className="p-8 pt-6">
        {/* Objectives */}
        <div className="mb-6">
          <ul className="space-y-2">
            {project.objectives.map((objective, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#3db94c] mt-1 flex-shrink-0">✓</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Stats */}
        <div className="bg-[#3db94c]/5 rounded-lg p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Impact Highlights:</h3>
          <ul className="space-y-2 mb-4">
            {project.impact.stats.map((stat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#3db94c] mt-1 flex-shrink-0">■</span>
                <span className="font-medium">{stat}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 italic border-l-4 border-[#3db94c] pl-4">
            {project.impact.story}
          </p>
        </div>
      </div>
    </div>
  );
}