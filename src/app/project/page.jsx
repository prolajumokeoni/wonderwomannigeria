"use client";

import Impact from "../components/Impact";
import Navbar from "../components/Navbar"
import { useState, useEffect, } from "react";
import Account from "../components/Account";
import Footer from "../components/Footer"
import ProjectGallery from "../components/ProjectGallery";
import { Check } from "lucide-react";

const ImpactHeader = () => (
  <div className="pt-20 pb-6 text-center">
    <div className="max-w-3xl mx-auto px-4">
      <p className="t-eyebrow mb-3">Our Projects</p>
      <h2 className="t-h2 text-gray-900 dark:text-white">
        Making a difference <span className="text-[#3db94c]">across Nigeria</span>
      </h2>
    </div>
  </div>
);

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
        "/images/projects/pfp/pfp.webp",
        "/images/projects/pfp/pfp2.webp",
        "/images/projects/pfp/pfp3.webp",
        "/images/projects/pfp/pfp4.webp",
        "/images/projects/pfp/pfp5.webp",
        "/images/projects/pfp/pfp6.webp",
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
        "/images/projects/lsp/lsp1.webp",
        "/images/projects/lsp/lsp2.webp",
        "/images/projects/lsp/lsp3.webp",
        "/images/projects/lsp/lsp4.webp",
        "/images/projects/lsp/lsp5.webp",
        "/images/projects/lsp/lsp6.webp",
        "/images/projects/lsp/lsp7.webp",
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
        "/images/projects/nmhs/nmhs.webp",
        "/images/projects/nmhs/nmhs1.webp",
        "/images/projects/nmhs/nmhs2.webp",
        "/images/projects/nmhs/nmhs3.webp",
        "/images/projects/nmhs/nmhs4.webp",
        "/images/projects/nmhs/nmhs5.webp",
        "/images/projects/nmhs/nmhs6.webp",
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
        "/images/projects/gbv/gbv.webp",
        "/images/projects/gbv/gbv1.webp",
        "/images/projects/gbv/gbv2.webp",
        "/images/projects/gbv/gbv3.webp",
        "/images/projects/gbv/gbvv4.webp",
        "/images/projects/gbv/gbvv5.webp",
        "/images/projects/gbv/gbvv6.webp",
        "/images/projects/gbv/gbvv7.webp",
        "/images/projects/gbv/gbvv8.webp",
        "/images/projects/gbv/gbvv9.webp",
        "/images/projects/gbv/gbvv10.webp",
        "/images/projects/gbv/gbvv11.webp",
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
        "/images/projects/cnb/cnb.webp", 
        "/images/projects/cnb/cnb3.webp", 
        "/images/projects/cnb/cnb4.webp", 
        "/images/projects/cnb/cnb5.webp", 
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
        "/images/projects/lsp/lsp.webp",
        "/images/projects/la/la.webp",
        "/images/projects/la/la1.webp",
        "/images/projects/la/la3.webp",
        "/images/projects/la/la5.webp",
        "/images/projects/la/la4.webp",
        
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
        "/images/projects/rcu/rcu1.webp",
        "/images/projects/rcu/rcu.webp",
        "/images/projects/rcu/rcu2.webp",
        "/images/projects/rcu/rcu4.webp",
        "/images/projects/rcu/rcu3.webp",
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
        "/images/projects/rak/rak11.webp", 
        "/images/projects/rak/rak12.webp", 
        "/images/projects/rak/rak15.webp", 
        "/images/projects/rak/rak16.webp", 
        "/images/projects/rak/rak14.webp", 
        "/images/projects/rak/rak17.webp", 
        "/images/projects/rak/rak18.webp", 
        "/images/projects/rak/rak19.webp", 
        "/images/projects/rak/rak21.webp", 
        "/images/projects/rak/rak1.webp", 
        "/images/projects/rak/rak3.webp", 
        "/images/projects/rak/rak4.webp", 
        "/images/projects/rak/rak5.webp", 
        "/images/projects/rak/rak2.webp", 
        "/images/projects/rak/rak6.webp", 
        "/images/projects/rak/rak10.webp", 
        "/images/projects/rak/rak7.webp", 
        "/images/projects/rak/rak8.webp", 
        "/images/projects/rak/rak9.webp", 
        "/images/projects/rak/rak10.webp", 
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Impact/>
      <ImpactHeader />

      <section className="max-w-7xl mx-auto px-4 pt-6 pb-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#3db94c] text-white border border-[#3db94c] shadow-lg shadow-[#3db94c]/30"
                  : "bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border border-[#3db94c]/25 hover:border-[#3db94c] hover:bg-[#3db94c]/5 hover:text-[#2f9c3d] dark:hover:text-[#5fd36d]"
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
      <Account />
      <Footer />
    </div>
  );
}

// "Title – details" and "Label: value" lines read better split in two; anything else stays whole
function splitLead(text, separators, maxLead) {
  for (const sep of separators) {
    const i = text.indexOf(sep);
    if (i > 0 && i <= maxLead) return [text.slice(0, i).trim(), text.slice(i + sep.length).trim()];
  }
  return [null, text.trim()];
}

function ProjectCard({ project }) {
  return (
    <article id={`project-${project.id}`} className="scroll-mt-28 bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden transition-colors duration-300">
      <header className="p-8 md:p-10 grid lg:grid-cols-[1fr_1.35fr] gap-6 lg:gap-14 items-end">
        <div>
          <p className="t-eyebrow mb-2">{project.year}</p>
          <h2 className="text-[1.75rem] md:text-[2rem] leading-tight font-bold tracking-[-0.02em] text-gray-900 dark:text-white">{project.title}</h2>
          <p className="mt-3 t-lead text-gray-500 dark:text-gray-400">{project.tagline}</p>
        </div>
        <p className="t-lead text-gray-700 dark:text-gray-300">{project.description}</p>
      </header>

      <ProjectGallery images={project.images} title={project.title} />

      <div className="p-8 md:p-10 grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14">
        <section>
          <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
            {project.objectives.map((objective, idx) => {
              const [lead, rest] = splitLead(objective, [" – ", " - ", ": "], 70);
              return (
                <li key={idx} className="flex gap-4 py-4">
                  <span className="mt-0.5 grid place-items-center flex-none w-6 h-6 rounded-full bg-[#3db94c]/12 text-[#2f9c3d] dark:text-[#5fd36d]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {lead && <span className="block font-semibold text-gray-900 dark:text-white mb-0.5">{lead}</span>}
                    {rest}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="self-start rounded-2xl bg-[#f3faf4] dark:bg-neutral-800/60 p-6 md:p-8">
          <h3 className="t-h3 text-gray-900 dark:text-white mb-5">Impact Highlights:</h3>
          <dl className="space-y-4">
            {project.impact.stats.map((stat, idx) => {
              const [label, value] = splitLead(stat, [": ", " – "], 40);
              return (
                <div key={idx}>
                  {label && <dt className="text-sm font-semibold text-[#2f9c3d] dark:text-[#5fd36d]">{label}</dt>}
                  <dd className="text-gray-800 dark:text-gray-200 leading-relaxed">{value}</dd>
                </div>
              );
            })}
          </dl>
          <p className="mt-6 pt-6 border-t border-[#3db94c]/20 text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.impact.story}
          </p>
        </aside>
      </div>
    </article>
  );
}
