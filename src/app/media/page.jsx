"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const videos = [
  { id: "oE21TmA-TFU", title: "Wonder Woman Nigeria — Plastics for Pads" },
  { id: "1TeGmkX1wzI", title: "GBV Sensitization Community Outreach" },
  { id: "h1emT6n2e-w", title: "Menstrual Health & Hygiene Summit 2025" },
  { id: "tJW0OSy4ZnA", title: "Little Sister Project — Period Poverty" },
  { id: "yi1Gmjhg4f8", title: "Random Acts of Kindness Week" },
  { id: "5gISKq4sOD4", title: "Child, Not Bride Campaign" },
];

const articles = [
  {
    category: "GBV • Shelter Project",
    title: "Wonder Women Nigeria, Big Family 360, to provide shelter for homeless GBV victims in Adamawa",
    source: "The Narratives Hub",
    date: "December 13, 2025",
    excerpt: "In commemoration of the 16 Days of Activism, Wonder Woman Nigeria partnered with Big Family 360 Foundation to raise funds through an art exhibition at Institut Français to support construction of a temporary shelter for SGBV survivors in Adamawa State.",
    link: "https://thenarrativeshub.com/wonder-women-nigeria-big-family-360-to-provide-shelter-for-homeless-gbv-victims-in-adamawa/"
  },
  {
    category: "GBV • Awareness",
    title: "There's increase in reporting of GBV",
    source: "Daily Trust",
    date: "December 12, 2024",
    excerpt: "Wonder Woman Nigeria revealed over 400 GBV cases were brought to their attention in the last six years, marking an increase in reporting. Vice President Anne Dirkling emphasized the need for collective action and community awareness.",
    link: "https://dailytrust.com/theres-increase-in-reporting-of-gbv/"
  },
  {
    category: "GBV • Awareness",
    title: "Group receives 400 cases of GBV in 6 years - advocates awareness",
    source: "Vanguard",
    date: "December 2024",
    excerpt: "Wonderwoman Nigeria advocates for increased awareness and reporting of gender-based violence cases to curb the menace in society, highlighting work done through community sensitization programs.",
    link: "https://www.vanguardngr.com/2024/12/group-receives-400-cases-of-gbv-in-6-years-advocates-awareness/"
  },
  {
    category: "GBV • Kaduna",
    title: "Kaduna NGO Sensitises Residents on Dangers of SGBV",
    source: "Blueprint",
    date: "2024",
    excerpt: "Wonderwoman Nigeria conducted sensitization programs in Kaduna, educating residents on the dangers of sexual and gender-based violence and available support services for survivors.",
    link: "https://blueprint.ng/kaduna-ngo-sensitises-residents-on-dangers-of-sgbv/"
  },
  {
    category: "Environment • Sustainability",
    title: "French Institute Transitions Towards Sustainability With Green Initiatives",
    source: "THISDAY",
    date: "December 8, 2024",
    excerpt: "Wonderwoman Nigeria partnered with the French Institute of Nigeria on green initiatives including the 'Plastic for Pads' program, collecting plastic waste to provide sanitary pads for girls at IDP camps while tackling environmental pollution.",
    link: "https://www.thisdaylive.com/index.php/2024/12/08/french-institute-transitions-towards-sustainability-with-green-initiatives/"
  },
  {
    category: "Environment • Partnership",
    title: "Institute urges more sustainability initiatives",
    source: "Leadership",
    date: "2024",
    excerpt: "The French Institute's partnership with Wonderwoman Nigeria demonstrates commitment to environmental sustainability through innovative waste management and community empowerment programs.",
    link: "https://leadership.ng/institute-urges-more-sustainability-initiatives/"
  },
  {
    category: "Environment • Awareness",
    title: "Plastic waste intensifies global warming, says Haddad",
    source: "Guardian",
    date: "2024",
    excerpt: "Collaboration highlighted the critical need for plastic waste reduction and sustainable alternatives, with Wonderwoman Nigeria's 'Plastics for Pads' initiative as a model for environmental and social impact.",
    link: "https://guardian.ng/news/nigeria/national/plastic-waste-intensifies-global-warming-says-haddad/"
  },
  {
    category: "Menstrual Hygiene • Partnership",
    title: "AMAC Partners Wonderwoman to Celebrate Menstrual Day",
    source: "Daily Trust",
    date: "May 2024",
    excerpt: "AMAC Chairman Christopher Maikalangu partnered with Wonderwoman Nigeria to commemorate World Menstrual Hygiene Day, inaugurating plastic collection points across 25 locations within the council area.",
    link: "https://dailytrust.com/amac-partners-wonderwoman-to-celebrate-menstrual-day/"
  },
  {
    category: "Menstrual Hygiene • Campaign",
    title: "AMAC Sensitizes On Menstrual Health, Hygiene & Environmental Sustainability",
    source: "Kapital FM",
    date: "May 28, 2024",
    excerpt: "Comprehensive sensitization campaign launched in partnership with AMAC to educate communities on menstrual health while promoting environmental sustainability through recycling initiatives.",
    link: "https://kapitalfm.gov.ng/2024/05/28/_amac-sensitizes-on-menstrual-health-hygiene-environmental-sustainability_/"
  },
  {
    category: "Menstrual Hygiene • Launch",
    title: "NGO Launches Project To Sensitize Women On Menstrual Hygiene",
    source: "Voice of Nigeria (VON)",
    date: "June 2024",
    excerpt: "In partnership with PSI Nigeria, Wonderwoman launched the Plastic for Pads Project sensitization campaign in Abuja, establishing recycling collection points and distributing menstrual hygiene kits.",
    link: "https://von.gov.ng/ngo-launches-project-to-sensitize-women-on-menstrual-hygiene/"
  },
  {
    category: "Menstrual Hygiene • Education",
    title: "NGO inaugurates menstrual hygiene initiatives in Abuja",
    source: "Daily Legend",
    date: "May 29, 2024",
    excerpt: "Vice President Anne Dirkling inaugurated six recycling containers in AMAC, converting plastic waste into menstrual pads for girls in underprivileged communities while creating safe, litter-free environments.",
    link: "https://dailylegendng.com/2024/05/29/ngo-inaugurates-menstrual-hygiene-initiatives-in-abuja/"
  },
  {
    category: "Menstrual Hygiene • Advocacy",
    title: "Civil society champions national conversation on menstrual health hygiene",
    source: "The Kernel",
    date: "2024",
    excerpt: "Wonderwoman Nigeria joins national conversation on menstrual health, advocating for improved access to sanitary products and breaking taboos around menstruation.",
    link: "https://www.thekernel.ng/health/civil-society-champions-national-conversation-on-menstrual-health-hygiene/"
  },
  {
    category: "Menstrual Hygiene • Collaboration",
    title: "CSOs, Govt Unite to Prioritise Menstrual Health in Nigeria",
    source: "Leadership",
    date: "2024",
    excerpt: "Civil society organizations including Wonderwoman Nigeria collaborate with government agencies to prioritize menstrual health and hygiene management across Nigeria.",
    link: "https://leadership.ng/csos-govt-unite-to-prioritise-menstrual-health-in-nigeria/"
  }
];

function VideoShimmer() {
  return (
    <div className="absolute inset-0 bg-gray-800 overflow-hidden">
      <div className="shimmer-bar absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
          <svg className="w-7 h-7 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function WonderwomanMedia() {
  const [active, setActive] = useState(0);
  const [featuredLoaded, setFeaturedLoaded] = useState(false);

  const selectVideo = (i) => {
    setFeaturedLoaded(false);
    setActive(i);
  };

  const rest = videos.slice(1);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-bar {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">

        {/* ── Video Coverage ── */}
        <h2 className="t-h3 text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-neutral-800">
          Video Coverage
        </h2>


        {/* Featured video — big like blog featured post */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-6 bg-gray-900">
          <div className="relative" style={{ paddingBottom: "52%" }}>
            {!featuredLoaded && <VideoShimmer />}
            <iframe
              key={active}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[active].id}?rel=0`}
              title={videos[active].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setFeaturedLoaded(true)}
              style={{ opacity: featuredLoaded ? 1 : 0, transition: "opacity 0.4s ease" }}
            />
          </div>

          {/* Title bar */}
          <div className="bg-black px-6 py-4 flex items-center justify-between">
            <p className="text-white font-semibold text-sm md:text-base truncate">
              {videos[active].title}
            </p>
            <div className="flex gap-1.5 ml-4 flex-shrink-0">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => selectVideo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-5 h-2 bg-[#3db94c]" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other videos — thumbnail cards in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-20">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => selectVideo(i)}
              className={`group rounded-xl overflow-hidden border-2 transition-all duration-200 text-left ${
                i === active
                  ? "border-[#3db94c] shadow-lg shadow-[#3db94c]/20"
                  : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-200"
              }`}
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                {/* Play icon overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${i === active ? "bg-black/20" : "bg-black/30 group-hover:bg-black/10"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === active ? "bg-[#3db94c]" : "bg-white/70"}`}>
                    <svg className={`w-4 h-4 ml-0.5 ${i === active ? "text-white" : "text-gray-800"}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-black px-2 py-1.5">
                <p className="text-white text-xs font-medium line-clamp-1 leading-snug">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ── Press & Articles ── */}
        <h2 className="t-h3 text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-neutral-800">
          Press &amp; Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-gray-200 dark:ring-neutral-800 hover:ring-[#3db94c]/50 transition-[box-shadow] duration-300 p-6"
            >
              {/* green stays an accent: the category label and the link, not a block of colour */}
              <span className="t-eyebrow text-sm mb-2">{article.category}</span>
              <h3 className="t-h3 !text-[1.125rem] text-gray-900 dark:text-white line-clamp-3 mb-3 group-hover:text-[#2f9c3d] dark:group-hover:text-[#5fd36d] transition-colors duration-300">
                {article.title}
              </h3>
              <div className="flex flex-col flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{article.source} · {article.date}</p>
                <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-5 flex items-center text-[0.9375rem] font-semibold text-[#2f9c3d] dark:text-[#5fd36d]">
                  Read article
                  <svg className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
