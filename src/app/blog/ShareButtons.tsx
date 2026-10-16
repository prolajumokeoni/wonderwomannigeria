"use client";

import { useEffect, useState } from "react";
import { Check, Facebook, Link2, Linkedin, Twitter } from "lucide-react";

export default function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => setUrl(window.location.href), []);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: Twitter },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: Facebook },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: Linkedin },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const button =
    "press grid place-items-center w-10 h-10 rounded-full ring-1 ring-gray-200 dark:ring-neutral-800 text-gray-600 dark:text-gray-300 hover:text-[#2f9c3d] dark:hover:text-[#5fd36d] hover:ring-[#3db94c]/50 transition-colors duration-200";

  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={button}>
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button type="button" onClick={copy} aria-label="Copy link" className={button}>
        {copied ? <Check className="w-4 h-4 text-[#2f9c3d] dark:text-[#5fd36d]" /> : <Link2 className="w-4 h-4" />}
      </button>
      <span aria-live="polite" className="sr-only">{copied ? "Link copied" : ""}</span>
    </div>
  );
}
