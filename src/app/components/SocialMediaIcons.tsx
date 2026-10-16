"use client";

// the icons are drawn as masks filled with the link's text colour, so hover can turn them green
const links = [
  { href: "https://www.instagram.com/wonderwomannigeria", label: "Instagram", icon: "/images/IG.svg" },
  { href: "https://www.linkedin.com/company/wonderwoman-nigeria/", label: "LinkedIn", icon: "/images/linkedin.svg" },
  { href: "https://www.facebook.com/share/1737CB8aWV", label: "Facebook", icon: "/images/facebook.svg" },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-5">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-white hover:text-[#3db94c] hover:scale-110 transition-[color,transform] duration-300"
        >
          <span
            aria-hidden
            className="block w-6 h-6 bg-current"
            style={{
              WebkitMask: `url("${link.icon}") center / contain no-repeat`,
              mask: `url("${link.icon}") center / contain no-repeat`,
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
