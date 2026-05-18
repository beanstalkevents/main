"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Tickets", href: "/tickets" },
  { label: "Stay", href: "/stay" },
  { label: "Sponsor", href: "/#sponsor" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.6);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <>
      <nav
        className={`site-nav${scrolled ? " scrolled" : ""}`}
        aria-label="Primary"
      >
        <Link className="site-nav-logo" href="/">
          <span className="site-nav-sprout">🌱</span>
          <span>
            Beanstalk <em>2026</em>
          </span>
        </Link>

        <ul className="site-nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link className="site-nav-cta" href="/tickets">
          <span>Apply</span>
          <span className="site-nav-cta-arrow" aria-hidden>
            →
          </span>
        </Link>

        <button
          className="site-nav-menu"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="site-nav-drawer">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
