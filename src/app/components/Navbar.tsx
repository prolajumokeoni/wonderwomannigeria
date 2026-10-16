"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/", exact: true },
  { label: "Projects", href: "/project" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

// pages that open on white rather than on a photo: the bar is the frosted pill from the start
const plainPages = ["/blog", "/media"];

type MenuState = "closed" | "open" | "closing";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuState>("closed");
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [glass, setGlass] = useState<{ x: number; w: number; h: number; full: boolean; ready: boolean } | null>(null);

  const overHero = !plainPages.some((page) => pathname?.startsWith(page));

  // marks the bar as scrolled once the page leaves the top; read once per frame
  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      setIsScrolled(window.scrollY > 72);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const closeMenu = () => {
    window.clearTimeout(closeTimer.current);
    setMenu("closing");
    closeTimer.current = window.setTimeout(() => setMenu("closed"), 200);
  };
  const toggleMenu = () => {
    window.clearTimeout(closeTimer.current);
    if (menu === "open") closeMenu();
    else setMenu("open");
  };

  // while open: Escape and a press outside the bar close the menu
  useEffect(() => {
    if (menu !== "open") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [menu]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const isActive = (href: string, exact?: boolean) => {
    if (href.includes("#")) return false;
    if (exact) return pathname === href;
    return pathname?.startsWith(href) ?? false;
  };

  // the glass of the bar: at rest it is the bar's whole background; on a hovered (or
  // focused) link it springs in to that link, and eases back out to the full bar when the
  // pointer leaves. The current page keeps its own plate underneath (see .link[data-active]).
  const LINK_H = 38;
  const placeGlass = useCallback(() => {
    const bar = rootRef.current;
    if (!bar) return;
    const link = hovered === null ? null : linkRefs.current[hovered];
    setGlass((prev) => {
      const ready = prev !== null;
      // full size is set in % (below) so it follows the bar exactly as the bar morphs on scroll
      if (!link) return { x: 0, w: 0, h: 0, full: true, ready };
      const barBox = bar.getBoundingClientRect();
      const box = link.getBoundingClientRect();
      return { x: box.left - barBox.left, w: box.width, h: LINK_H, full: false, ready };
    });
  }, [hovered]);

  useLayoutEffect(() => {
    placeGlass();
    // the bar widens, narrows and changes height as it morphs: keep the glass fitted to it
    const bar = rootRef.current;
    if (!bar) return;
    const ro = new ResizeObserver(placeGlass);
    ro.observe(bar);
    return () => ro.disconnect();
  }, [placeGlass, isScrolled]);

  return (
    <header
      className={styles.header}
      data-over-hero={overHero || undefined}
      data-scrolled={isScrolled || undefined}
      data-menu-open={menu !== "closed" || undefined}
    >
      <div ref={rootRef} className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="Wonder Woman Nigeria, home">
          <Image
            className={styles.logo}
            src="/images/WonderWomanNigeria-mark.webp"
            alt=""
            width={269}
            height={346}
            priority
          />
        </Link>

        <span
          aria-hidden
          className={styles.glass}
          data-ready={glass?.ready || undefined}
          data-full={glass?.full || undefined}
          style={
            glass
              ? {
                  width: glass.full ? "100%" : glass.w,
                  height: glass.full ? "100%" : glass.h,
                  transform: `translate3d(${glass.x}px, -50%, 0)`,
                }
              : { opacity: 0 }
          }
        />

        <nav ref={navRef} className={styles.inline} aria-label="Primary" onMouseLeave={() => setHovered(null)}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              ref={(el) => { linkRefs.current[i] = el; }}
              href={link.href}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              className={styles.link}
              data-active={isActive(link.href, link.exact) || undefined}
              aria-current={isActive(link.href, link.exact) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.end}>
          <button
            type="button"
            onClick={toggle}
            className={styles.iconButton}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Sun className={styles.themeIcon} data-hidden={theme !== "dark" || undefined} aria-hidden />
            <Moon className={styles.themeIcon} data-hidden={theme === "dark" || undefined} aria-hidden />
          </button>

          {/* Donate is hidden for now
          <Link href="/#contact" className={styles.cta}>
            Donate<span>now</span>
          </Link>
          */}

          <button
            ref={buttonRef}
            type="button"
            className={`${styles.iconButton} ${styles.menuButton}`}
            aria-label={menu === "open" ? "Close menu" : "Menu"}
            aria-expanded={menu === "open"}
            aria-controls={menuId}
            data-open={menu === "open" || undefined}
            onClick={toggleMenu}
          >
            <span className={styles.burger} aria-hidden />
          </button>
        </div>

        {menu !== "closed" && (
          <nav
            id={menuId}
            className={styles.menuPanel}
            aria-label="Primary"
            data-state={menu}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) closeMenu();
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.menuLink}
                style={{ "--i": i } as React.CSSProperties}
                data-active={isActive(link.href, link.exact) || undefined}
                aria-current={isActive(link.href, link.exact) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            {/* Donate is hidden for now
            <Link
              href="/#contact"
              className={`${styles.menuLink} ${styles.menuCta}`}
              style={{ "--i": navLinks.length } as React.CSSProperties}
            >
              Donate now
            </Link>
            */}
          </nav>
        )}
      </div>
    </header>
  );
}
