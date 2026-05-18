import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import AttendeesCarousel from "@/components/AttendeesCarousel";
import Countdown from "@/components/Countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beanstalk 2026 — The DTC & Retail Conference",
  description:
    "The largest and most important retail event uniting the Disruptor Brands ecosystem. September 14–16, 2026 at Industry City, Brooklyn.",
};

const stats = [
  { value: "10,000+", label: "1:1 Executive Meetings" },
  { value: "1,000+", label: "Leaders" },
  { value: "250+", label: "Boardrooms & Power Lunches" },
  { value: "100+", label: "Legendary Speakers" },
];

const whatToExpect = [
  { num: "01", icon: "🤝", title: "10,000+ Executive Meetings", desc: "Powered by real tech that puts you in front of the right people—senior executives only." },
  { num: "02", icon: "🍽", title: "200+ Power Lunches", desc: "Carefully curated groups of up to 8 senior executives across relevant discussion topics." },
  { num: "03", icon: "🎳", title: "40+ Fun Activities", desc: "Relationship building made easier and less awkward. Designed with introverts in mind." },
  { num: "04", icon: "🎙", title: "50+ Boardroom Discussions", desc: "Intimate groups of 15–25 with legends of the industry. Not cold keynotes on massive stages." },
  { num: "05", icon: "🥩", title: "30+ Private Dinners", desc: "Breaking bread is one of the best ways to get to know each other. Leaders only." },
  { num: "06", icon: "🏙", title: "Industry City, Brooklyn", desc: "One of NYC's most iconic campuses—550 founder-led companies, waterfront views, world-class dining." },
];

const trustedLogos = [
  { src: "/logos/tiktok.png", alt: "TikTok" },
  { src: "/logos/shopify.png", alt: "Shopify" },
  { src: "/logos/nbcuniversal.png", alt: "NBCUniversal" },
  { src: "/logos/sage.png", alt: "Sage" },
  { src: "/logos/eko.png", alt: "eko" },
  { src: "/logos/postscript.png", alt: "Postscript" },
  { src: "/logos/northbeam.png", alt: "Northbeam" },
  { src: "/logos/pixis.png", alt: "Pixis" },
  { src: "/logos/aspire.png", alt: "Aspire" },
  { src: "/logos/pattern.png", alt: "Pattern" },
];

function TrustedBy() {
  const loop = [...trustedLogos, ...trustedLogos];
  return (
    <div
      style={{
        background: "#ffffff",
        borderTop: "1px solid var(--beige)",
        borderBottom: "1px solid var(--beige)",
        height: "80px",
        display: "flex",
        alignItems: "center",
        gap: "32px",
        overflow: "hidden",
        padding: "0 48px",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--tan)",
          whiteSpace: "nowrap",
          flexShrink: 0,
          paddingRight: "24px",
          borderRight: "1px solid var(--beige)",
        }}
      >
        Trusted by
      </div>
      <div
        style={{
          overflow: "hidden",
          flex: 1,
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="ticker-track" style={{ display: "flex", alignItems: "center", gap: "56px", width: "max-content" }}>
          {loop.map((l, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, height: "48px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.alt}
                style={{
                  height: "38px",
                  width: "auto",
                  maxWidth: "150px",
                  objectFit: "contain",
                  display: "block",
                  opacity: 0.8,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const verticals = [
  "🥗 Food & Beverage", "🪒 Personal Care", "🐶 Pets", "👕 Apparel & Footwear",
  "📺 Electronics", "🏋🏻 Health & Wellness", "🪑 Home & Decor", "🧸 Toys & Games", "⚽️ Sports & Outdoors",
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      {/* HERO */}
      <header id="hero" className="relative overflow-hidden" style={{ background: "#233c36", paddingTop: "120px", paddingBottom: 0 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.35, pointerEvents: "none" }}
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(35,60,54,0.55) 0%, rgba(35,60,54,0.82) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16 relative" style={{ zIndex: 2 }}>
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            September 14–16, 2026 · Industry City, Brooklyn
          </div>
          <h1 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(48px, 7vw, 92px)", color: "#fcf9ec", lineHeight: 1.0, maxWidth: "820px" }}>
            Where Disruptor<br />Brands Come<br />to Grow
          </h1>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "#c7dccd", maxWidth: "540px" }}>
            The largest and most important retail event uniting the Disruptor Brands ecosystem. Founders, operators, and investors—all in one room.
          </p>
          <a
            href="/tickets"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase px-6 py-3"
            style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.08em" }}
          >
            🎟️ Request an Invite
          </a>
        </div>
        <div className="grid border-t relative" style={{ gridTemplateColumns: "repeat(4, 1fr)", borderColor: "rgba(255,255,255,0.08)", zIndex: 2 }}>
          {stats.map((s, i) => (
            <div key={i} className="px-8 py-7 flex flex-col gap-1" style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <strong style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "28px", color: "#cdf765", lineHeight: 1 }}>{s.value}</strong>
              <span className="text-xs font-semibold uppercase" style={{ color: "#4a7a6a", letterSpacing: "0.12em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* TRUSTED BY */}
      <TrustedBy />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* WHAT IS BEANSTALK */}
      <section id="about" style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">About</div>
            <h2 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 38px)", color: "#233c36", lineHeight: 1.15 }}>
              What is Beanstalk?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a" }}>
              Beanstalk is the largest and most important retail event that unites the entire Disruptor Brands ecosystem. Disruptor Brands—also known as direct-to-consumer or digitally native brands—typically generate annual revenues from double-digit millions to single-digit billions, and are the defining brands of tomorrow.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
              Attendees include Brand Founders & Senior Executives, Commerce Enablement Companies, Social Media & Marketplace Platforms, Lenders & Investors, and Influencers & Creators.
            </p>
          </div>
          <div>
            <div className="section-label">Verticals</div>
            <h2 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 38px)", color: "#233c36", lineHeight: 1.15 }}>
              Retail categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {verticals.map((v) => (
                <span key={v} className="text-sm px-3 py-1.5 font-semibold" style={{ background: "#c7dccd", color: "#233c36", fontSize: "12px" }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section id="expect" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20">
          <div className="section-label dark">Format</div>
          <h2 className="mb-12" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#fcf9ec", lineHeight: 1.1 }}>
            This isn&apos;t your grandpa&apos;s conference
          </h2>
          <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", border: "1px solid rgba(255,255,255,0.08)" }}>
            {whatToExpect.map((item) => (
              <div key={item.num} className="p-7 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold" style={{ color: "#cdf765", fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif" fontWeight: 700, }}>{item.num}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "18px", color: "#fcf9ec" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#c7dccd" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <Countdown />

      {/* ATTENDEES */}
      <AttendeesCarousel />

      {/* SPEAK */}
      <section id="speak" style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Apply</div>
            <h2 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#233c36", lineHeight: 1.1 }}>
              Speak at Beanstalk
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a" }}>
              We curate every speaker. If you have something genuinely useful to share with the DTC and retail community, we want to hear from you. No pitches. No fluff.
            </p>
            <a href="https://speak.beanstalksummit.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
              style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}>
              Apply to Speak →
            </a>
          </div>
          <div className="p-8 flex flex-col gap-0" style={{ background: "#233c36", border: "1px solid rgba(255,255,255,0.08)" }}>
            {["Boardroom Discussions (15–25 people)", "Teardown Sessions", "Table Talks (5–6 people)", "Main Stage (select speakers)"].map((format) => (
              <div key={format} className="flex items-center gap-3 py-4 border-b text-sm" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#c7dccd" }}>
                <span style={{ color: "#cdf765" }}>✓</span>{format}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section id="sponsor" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label dark">Partner</div>
            <h2 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 44px)", color: "#fcf9ec", lineHeight: 1.1 }}>
              Sponsor Beanstalk
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#c7dccd" }}>
              Put your brand in front of 1,000+ decision-makers from the world&apos;s most innovative consumer companies. Lounge activations, Private Dinners, Title sponsorships and more.
            </p>
            <a href="mailto:daniel@beanstalkevents.com"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
              style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.08em" }}>
              Get Sponsorship Info →
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { tier: "Title Sponsor", desc: "Maximum visibility across all touchpoints" },
              { tier: "Private Dinner", desc: "Host 20–30 senior executives at your table" },
              { tier: "Lounge Activation", desc: "Branded space in the main conference hall" },
              { tier: "Power Lunch", desc: "Curated roundtable with 8 decision-makers" },
            ].map((s) => (
              <div key={s.tier} className="flex items-center justify-between px-5 py-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: "#fcf9ec", fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif" fontWeight: 700, }}>{s.tier}</div>
                  <div className="text-xs" style={{ color: "#c7dccd" }}>{s.desc}</div>
                </div>
                <span style={{ color: "#cdf765" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
