import SiteNav from "@/components/SiteNav";
import PartnerRibbon from "@/components/PartnerRibbon";
import Footer from "@/components/Footer";
import ParallaxChapter from "@/components/ParallaxChapter";
import IndustryCityHero from "@/components/IndustryCityHero";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industry City, Brooklyn — Beanstalk 2026",
  description:
    "Beanstalk 2026 takes place at Industry City in Brooklyn, NY — September 14–16, 2026.",
  alternates: { canonical: canonical("/industry-city") },
};

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.42em",
};

const CHAPTER_TITLE: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.8rem, 4vw, 3rem)",
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  margin: 0,
  fontVariationSettings: "'opsz' 72",
};

const CHAPTER_SUB: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
  lineHeight: 1.55,
  marginTop: "1.5rem",
  maxWidth: "620px",
  fontVariationSettings: "'opsz' 14",
};

const BODY_P: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  margin: 0,
  fontVariationSettings: "'opsz' 14",
};

const HAIR_RULE = (color = "rgba(35,60,54,0.16)"): React.CSSProperties => ({
  width: "60px",
  height: "1px",
  background: color,
});

const CHAPTER_NUM: React.CSSProperties = { ...EYEBROW, marginBottom: "1.25rem" };

const ITALIC_EM_LIME: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontStyle: "italic",
  fontWeight: 400,
  letterSpacing: "0.01em",
  color: "#cdf765",
  fontSize: "1.04em",
  display: "block",
  marginTop: "0.2em",
};

export default function IndustryCityPage() {
  return (
    <div style={{ background: "var(--cream)", color: "#233c36" }}>
      <SiteNav variant="hero" />
      <PartnerRibbon />

      {/* STAGES 1–4 — scroll-driven hero (split-screen → image → address → history) */}
      <IndustryCityHero />

      {/* STAGE 5 — today */}
      <ParallaxChapter
        src="/industry-city/today.webp"
        alt="Industry City courtyard at sunset"
        scrollHeight="320vh"
      >
        <div style={{ ...CHAPTER_NUM, color: "#cdf765" }}>03 — Today</div>
        <h2 style={{ ...CHAPTER_TITLE, color: "#fcf9ec" }}>
          Industry city
          <em style={ITALIC_EM_LIME}>today</em>
        </h2>
        <p style={{ ...CHAPTER_SUB, color: "rgba(252,249,236,0.78)" }}>
          Keeping to the entrepreneurial spirit of the property, a $450 million redevelopment modernized the campus to support the modern innovation economy and bring quality jobs back to the waterfront.
        </p>

        <div style={{ ...HAIR_RULE("rgba(252,249,236,0.22)"), margin: "3rem 0 2rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "rgba(252,249,236,0.9)", maxWidth: "720px" }}>
          <p style={BODY_P}>
            Today the campus is home to <strong style={{ color: "#cdf765", fontWeight: 600 }}>550 founder-led companies</strong>, buzzing with creatives across industries who build their businesses together on campus.
          </p>
          <p style={BODY_P}>
            During your time at Beanstalk, you&rsquo;ll have opportunities to join the king&rsquo;s army and become an expert archer 🏹, learn the esoteric nuances of the hundred-year-old game of pétanque ⚫, wind down by going bowling with new friends 🎳, and enjoy an impeccable selection of beers and spirits across five <em>royal</em> distilleries 🥃 and beer halls 🍻 within the city walls.
          </p>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(252,249,236,0.18)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "720px",
          }}
        >
          {[
            { v: "550+", l: "Founder-led companies" },
            { v: "$450M", l: "Redevelopment" },
            { v: "6M sq ft", l: "Industrial floor space" },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <strong
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
                  fontWeight: 600,
                  color: "#fcf9ec",
                  lineHeight: 1,
                  fontVariationSettings: "'opsz' 72",
                }}
              >
                {s.v}
              </strong>
              <span style={{ ...EYEBROW, color: "#cdf765", opacity: 0.7 }}>{s.l}</span>
            </div>
          ))}
        </div>
      </ParallaxChapter>

      {/* CLOSING CTA */}
      <section style={{ background: "#cdf765" }}>
        <div
          className="max-w-content mx-auto px-6 md:px-12"
          style={{
            padding: "4rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <span style={{ ...EYEBROW, color: "#233c36", opacity: 0.7 }}>RSVP</span>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              color: "#233c36",
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              lineHeight: 1.15,
              maxWidth: "640px",
              fontVariationSettings: "'opsz' 72",
            }}
          >
            See you in Brooklyn — September 14–16, 2026.
          </p>
          <a
            href="/tickets"
            style={{
              ...EYEBROW,
              background: "#233c36",
              color: "#cdf765",
              padding: "1rem 1.75rem",
              textDecoration: "none",
            }}
          >
            Request an invite →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
