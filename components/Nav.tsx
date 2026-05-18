"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "What to Expect", href: "/#expect" },
  { label: "Location", href: "/industry-city" },
  { label: "Stay", href: "/stay" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Attendees", href: "/#attendees" },
  { label: "Speak", href: "/#speak" },
  { label: "Sponsor", href: "/#sponsor" },
  { label: "Blog", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(35, 60, 54, 0.96)"
          : "rgba(35, 60, 54, 0.92)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          {/* Text logo as fallback until image is placed */}
          <span
            style={{
              fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
              fontSize: "22px",
              color: "#cdf765",
              letterSpacing: "-0.01em",
            }}
          >
            Beanstalk
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs font-semibold tracking-widest uppercase transition-colors"
              style={{ letterSpacing: "0.08em", fontSize: "11px" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/tickets"
          className="hidden md:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-2 transition-all"
          style={{
            background: "#cdf765",
            color: "#233c36",
            letterSpacing: "0.08em",
            fontSize: "11px",
          }}
        >
          🎟️ Request an Invite
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all"
            style={{ background: "#cdf765" }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{ background: "#cdf765" }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{ background: "#cdf765" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(35,60,54,0.97)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest uppercase py-2 border-b"
              style={{
                color: "rgba(199,220,205,0.8)",
                borderColor: "rgba(255,255,255,0.06)",
                letterSpacing: "0.1em",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/tickets"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase px-4 py-3 mt-2"
            style={{ background: "#cdf765", color: "#233c36" }}
          >
            🎟️ Request an Invite
          </a>
        </div>
      )}
    </nav>
  );
}
