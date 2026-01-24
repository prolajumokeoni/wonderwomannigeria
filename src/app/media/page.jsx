
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WonderwomanMedia() {
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

  const videos = [
    { id: "oE21TmA-TFU", title: "Video 1" },
    { id: "1TeGmkX1wzI", title: "Video 2" },
    { id: "h1emT6n2e-w", title: "Video 3" },
    { id: "tJW0OSy4ZnA", title: "Video 4" },
    { id: "yi1Gmjhg4f8", title: "Video 5" },
    { id: "5gISKq4sOD4", title: "Video 6" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

      <Navbar />



        <section>
          <h2 className="text-3xl font-bold mb-8 mt-24"  >
            Video Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border-2"
                style={{ 
                  borderColor: '#3db94c',
                  backgroundColor: '#3DB94C12'
                }}
              >
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Articles Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 mt-12" >
            Press & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: '#3db94c' }}
              >
                <div className="p-4" style={{ backgroundColor: '#3db94c' }}>
                  <p className="text-xs text-white font-semibold uppercase tracking-wide mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white opacity-90">
                    {article.source}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm mb-3" style={{ color: '#666' }}>
                    {article.date}
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#333' }}>
                    {article.excerpt}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#3db94c' }}
                  >
                    Read Article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

    </div>
  );
}