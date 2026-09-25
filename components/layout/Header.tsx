"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle background/blur shift once the page has scrolled — no layout jump.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile panel is open, and allow Escape to close it.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-white/10"
          : "bg-transparent backdrop-blur-none border-transparent"
      }`}
    >
      {/* Slimmer, premium height (was 5rem) — logo and nav stay vertically
          centered via items-center below. Main no longer offsets for this
          height: the header is fixed/overlay by design, sitting on top of
          the hero image on load. */}
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo — real RABAM mark only, no duplicate text label */}
        <a
          href="#top"
          className="flex items-center shrink-0"
          aria-label="RABAM FITNESS CLUB — ana sayfa"
        >
          <Image
            src="/images/rabam-logo.png"
            alt="RABAM FITNESS CLUB"
            width={150}
            height={150}
            priority
            className="h-[120px] w-[120px] object-contain"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={`text-[15px] transition-colors duration-200 ${
                i === 0
                  ? "text-on-surface font-semibold"
                  : "text-on-surface-variant hover:text-on-surface font-medium"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#iletisim"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary-container text-on-primary-container text-[14px] font-semibold px-5 py-2.5 transition-colors duration-200 hover:bg-white hover:text-surface-container-lowest"
          >
            Üyelik Bilgisi
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-on-surface"
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 top-0 w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-current transition-opacity duration-150 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel — large, legible, fast fade/height transition */}
      <nav
        id="mobile-nav"
        aria-hidden={!menuOpen}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        className={`lg:hidden overflow-hidden bg-[#0a0a0a] border-t transition-[max-height,opacity] duration-200 ease-out ${
          menuOpen ? "max-h-[28rem] opacity-100 border-white/10" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col divide-y divide-white/5 px-6 py-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={`py-4 text-xl transition-colors duration-200 ${
                i === 0 ? "text-on-surface font-semibold" : "text-on-surface-variant font-medium"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-6 inline-flex items-center justify-center rounded-md bg-primary-container text-on-primary-container text-base font-semibold px-5 py-3.5"
          >
            Üyelik Bilgisi
          </a>
        </div>
      </nav>
    </header>
  );
}
