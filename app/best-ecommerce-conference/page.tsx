import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ecommerce Conferences 2026 — Beanstalk",
  description:
    "Looking for the best ecommerce conferences in 2026? Beanstalk is the #1 DTC and retail conference in America — 1,000+ leaders, 10,000+ meetings, Brooklyn NY.",
  keywords: [
    "best ecommerce conferences 2026",
    "DTC conference 2026",
    "retail conference New York",
    "ecommerce summit",
    "direct to consumer conference",
  ],
};

const comparisons = [
  {
    name: "Beanstalk",
    location: "Brooklyn, NY",
    dates: "Sept 14–16, 2026",
    focus: "DTC / Disruptor Brands",
    format: "1:1 meetings, boardrooms, dinners",
    attendees: "1,000+ senior execs",
    highlight: true,
  },
  {
    name: "Shoptalk",
    location: "Las Vegas, NV",
    dates: "Spring",
    focus: "Broad retail",
    format: "Keynotes, sessions",
    attendees: "10,000+",
    highlight: false,
  },
  {
    name: "NRF",
    location: "New York, NY",
    dates: "January",
    focus: "Enterprise retail",
    format: "Expo, keynotes",
    attendees: "40,000+",
    highlight: false,
  },
  {
    name: "eTail",
    location: "Various",
    dates: "Various",
    focus: "Ecommerce ops",
    format: "Sessions, networking",
    attendees: "1,000–2,000",
    highlight: false,
  },
];

const reasons = [
  {
    num: "01",
    title: "Curated attendees only",
    desc: "Every attendee is vetted. No badge-collectors, no tourists. Founders, CEOs, CMOs, and CFOs from the DTC and retail world.",
  },
  {
    num: "02",
    title: "10,000+ executive 1:1 meetings",
    desc: "The meeting engine at Beanstalk is what sets it apart. You leave with real relationships, not a stack of business cards.",
  },
  {
    num: "03",
    title: "Intimate formats by design",
    desc: "Boardrooms of 15–25, dinners of 20–30, table talks of 5–6. Designed for depth, not breadth.",
  },
  {
    num: "04",
    title: "Industry City, Brooklyn",
    desc: "An iconic venue that reflects the energy of the brands attending. Not a convention center.",
  },
  {
    num: "05",
    title: "The people who matter",
    desc: "Sean Frank, Harley Finkelstein, Larry Fitzgerald Jr., and 1,000+ more. The DTC ecosystem, in one room.",
  },
  {
    num: "06",
    title: "No fluff",
    desc: "No cold keynotes where everyone checks their phone. Real conversations with people who have actually done the thing.",
  },
];

export default function BestEcommerceConferencePage() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      {/* HERO */}
      <header style={{ background: "#233c36", paddingTop: "120px" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            2026 Guide
          </div>
          <h1 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 78px)", color: "#fcf9ec", lineHeight: 1.0, maxWidth: "840px" }}>
            The Best Ecommerce Conferences in 2026
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#c7dccd", maxWidth: "580px" }}>
            There are dozens of retail and ecommerce conferences every year. One stands above the rest for DTC and digitally native brands: Beanstalk.
          </p>
          <a
            href="/tickets"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase px-6 py-3"
            style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.08em" }}
          >
            🎟️ Request an Invite to Beanstalk 2026
          </a>
        </div>
      </header>

      {/* INTRO TEXT */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16" style={{ maxWidth: "760px" }}>
          <div className="section-label">Overview</div>
          <h2 className="mb-5" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 38px)", color: "#233c36" }}>
            What makes an ecommerce conference worth attending?
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
            <p>
              The best ecommerce conferences aren&apos;t defined by their size—they&apos;re defined by who&apos;s in the room and what happens when those people get together. For DTC founders and retail executives, that means access to peers who understand the actual challenges of scaling a consumer brand.
            </p>
            <p>
              Most large trade shows are built for vendors to sell to buyers. Beanstalk is built differently: it&apos;s designed for the operators themselves—the founders, CEOs, and senior execs who are running the brands that define modern retail.
            </p>
            <p>
              Below, we&apos;ve laid out the landscape of major ecommerce and retail conferences in 2026, and why Beanstalk tops our list for DTC and digitally native brands.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label dark">Comparison</div>
          <h2 className="mb-10" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#fcf9ec" }}>
            2026 Ecommerce Conference Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Conference", "Location", "Dates", "Focus", "Format", "Attendees"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#5a8a7a", letterSpacing: "0.1em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisons.map((conf) => (
                  <tr
                    key={conf.name}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      background: conf.highlight ? "rgba(205,247,101,0.07)" : "transparent",
                    }}
                  >
                    <td className="py-4 px-4 font-semibold" style={{ color: conf.highlight ? "#cdf765" : "#fcf9ec", fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif" fontWeight: 700, }}>
                      {conf.name} {conf.highlight && "⭐"}
                    </td>
                    <td className="py-4 px-4" style={{ color: "#c7dccd" }}>{conf.location}</td>
                    <td className="py-4 px-4" style={{ color: "#c7dccd" }}>{conf.dates}</td>
                    <td className="py-4 px-4" style={{ color: "#c7dccd" }}>{conf.focus}</td>
                    <td className="py-4 px-4" style={{ color: "#c7dccd" }}>{conf.format}</td>
                    <td className="py-4 px-4" style={{ color: "#c7dccd" }}>{conf.attendees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY BEANSTALK */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label">Why Beanstalk</div>
          <h2 className="mb-10" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 40px)", color: "#233c36" }}>
            Why Beanstalk tops the list for DTC brands
          </h2>
          <div className="grid md:grid-cols-2 gap-px" style={{ border: "1px solid var(--beige)" }}>
            {reasons.map((r) => (
              <div key={r.num} className="p-7 flex flex-col gap-3" style={{ background: "#fcf9ec" }}>
                <span className="text-xs font-semibold" style={{ color: "#ba9e6e", fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif" fontWeight: 700, }}>{r.num}</span>
                <h3 style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "18px", color: "#233c36" }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF PULL QUOTE */}
      <div style={{ background: "#cdf765" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-12 flex flex-col gap-4">
          <p style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(20px, 3vw, 32px)", color: "#233c36", lineHeight: 1.2, maxWidth: "700px" }}>
            &ldquo;Beanstalk is basically the mecca right now for merchants, builders, entrepreneurs, and Shopify app partners.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: "#315c52" }}>
            — Harley Finkelstein, President at Shopify
          </p>
          <a
            href="/tickets"
            className="self-start text-xs font-semibold tracking-wider uppercase px-5 py-3 mt-2"
            style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}
          >
            Request an Invite to Beanstalk 2026 →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
