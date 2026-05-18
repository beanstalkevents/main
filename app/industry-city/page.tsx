import SiteNav from "@/components/SiteNav";
import PartnerRibbon from "@/components/PartnerRibbon";
import Footer from "@/components/Footer";
import ParallaxChapter from "@/components/ParallaxChapter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry City, Brooklyn — Beanstalk 2026",
  description:
    "Beanstalk 2026 takes place at Industry City in Brooklyn, NY — September 14–16, 2026.",
};

const EYEBROW: React.CSSProperties = {
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  fontSize: "10px",
  letterSpacing: "0.42em",
  textTransform: "none",
  fontWeight: 600,
};

const BIG_HEADLINE: React.CSSProperties = {
  fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
  fontSize: "clamp(2.75rem, 7vw, 6rem)",
  fontWeight: 700,
  lineHeight: 1.0,
  letterSpacing: "-0.015em",
  textTransform: "none",
  margin: 0,
};

const ITALIC_EM: React.CSSProperties = {
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  fontStyle: "italic",
  fontWeight: 400,
  textTransform: "none",
  letterSpacing: "0.01em",
  display: "block",
  marginTop: "0.3em",
  fontSize: "0.42em",
};

const CHAPTER_NUM: React.CSSProperties = {
  ...EYEBROW,
  marginBottom: "1.25rem",
};

const CHAPTER_TITLE: React.CSSProperties = {
  fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif",
  fontSize: "clamp(1.8rem, 4vw, 3rem)",
  fontWeight: 700,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
  textTransform: "none",
  margin: 0,
};

const CHAPTER_SUB: React.CSSProperties = {
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
  lineHeight: 1.55,
  marginTop: "1.5rem",
  maxWidth: "620px",
};

const BODY_P: React.CSSProperties = {
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  fontSize: "1.05rem",
  lineHeight: 1.7,
  margin: 0,
};

const HAIR_RULE = (color = "rgba(35,60,54,0.16)"): React.CSSProperties => ({
  width: "60px",
  height: "1px",
  background: color,
});

export default function IndustryCityPage() {
  return (
    <div style={{ background: "var(--cream)", color: "#233c36" }}>
      <SiteNav />
      <PartnerRibbon />

      {/* HERO — split screen ink/cream */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          minHeight: "100vh",
          paddingTop: "0",
        }}
        className="ic-hero hero-bleed"
      >
        {/* LEFT PANEL (dark) */}
        <div
          style={{
            background: "#233c36",
            color: "#fcf9ec",
            padding: "9rem 3rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "70vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ ...EYEBROW, color: "#cdf765", opacity: 0.75 }}>Chapter №2</span>
            <span style={{ fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(252,249,236,0.55)" }}>
              September 14–16, 2026
            </span>
          </div>

          <div style={{ marginTop: "auto", width: "100%" }}>
            <h1 style={{ ...BIG_HEADLINE, color: "#fcf9ec" }}>
              Industry
              <em style={{ ...ITALIC_EM, color: "#cdf765" }}>city</em>
            </h1>
            <div style={{ width: "80px", height: "1px", background: "rgba(252,249,236,0.35)", margin: "2.5rem 0 1.75rem" }} />
            <p
              style={{
                fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
                fontStyle: "italic",
                fontSize: "1.2rem",
                lineHeight: 1.55,
                maxWidth: "420px",
                color: "rgba(252,249,236,0.78)",
              }}
            >
              Brooklyn&rsquo;s original entrepreneurial campus &mdash; six million square feet of brick, glass, and waterfront.
            </p>
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(252,249,236,0.12)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ ...EYEBROW, color: "rgba(252,249,236,0.55)" }}>571 2nd Ave · Brooklyn NY</span>
              <span style={{ fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(252,249,236,0.55)" }}>
                Courtyard 7/8 gates
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (cream) */}
        <div
          style={{
            background: "#fcf9ec",
            color: "#233c36",
            padding: "9rem 3rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderLeft: "1px solid var(--beige)",
            minHeight: "70vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ ...EYEBROW, color: "var(--tan)" }}>The Venue</span>
            <span style={{ fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(35,60,54,0.55)" }}>
              Brooklyn, NY
            </span>
          </div>

          <div style={{ marginTop: "auto" }}>
            <h2 style={{ ...BIG_HEADLINE, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#233c36" }}>
              A campus
              <em style={{ ...ITALIC_EM, color: "var(--tan)" }}>of its own</em>
            </h2>
            <div style={{ width: "80px", height: "1px", background: "var(--beige)", margin: "2.5rem 0 1.75rem" }} />
            <p
              style={{
                fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
                fontStyle: "italic",
                fontSize: "1.2rem",
                lineHeight: 1.55,
                maxWidth: "440px",
                color: "rgba(35,60,54,0.75)",
              }}
            >
              Founded in the early 20th century, redeveloped for $450M, and now home to 550 founder-led companies on the Brooklyn waterfront.
            </p>
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--beige)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <a
                href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...EYEBROW,
                  color: "#233c36",
                  borderBottom: "1px solid rgba(35,60,54,0.3)",
                  paddingBottom: "2px",
                }}
              >
                Open in Maps →
              </a>
              <span style={{ fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif", fontStyle: "italic", fontSize: "0.95rem", color: "rgba(35,60,54,0.55)" }}>
                33rd – 34th St
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 01 — ADDRESS */}
      <section
        style={{
          background: "#efe7d3",
          padding: "8rem 2rem",
          borderBottom: "1px solid rgba(35,60,54,0.08)",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ ...CHAPTER_NUM, color: "var(--tan)" }}>01 — The Address</div>
          <h2 style={CHAPTER_TITLE}>
            Where to find
            <em
              style={{
                fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: "0",
                color: "var(--tan)",
                fontSize: "1.04em",
                display: "block",
                marginTop: "0.2em",
              }}
            >
              Beanstalk
            </em>
          </h2>
          <p style={{ ...CHAPTER_SUB, color: "rgba(35,60,54,0.78)" }}>
            Take the R train to 36th St, the F or D to 9th Ave, or walk in from the waterfront. Either way, look for the Courtyard 7/8 gates &mdash; that&rsquo;s where everything begins.
          </p>

          <div style={{ ...HAIR_RULE(), margin: "4rem 0 2.5rem" }} />

          <dl style={{ display: "grid", gridTemplateColumns: "minmax(140px, 180px) 1fr", gap: "1.75rem 2.5rem", margin: 0 }}>
            <dt style={{ ...EYEBROW, color: "var(--tan)", paddingTop: "6px" }}>Venue</dt>
            <dd style={{ ...BODY_P, margin: 0 }}>Industry City &mdash; the venue for September 14&ndash;16, 2026.</dd>

            <dt style={{ ...EYEBROW, color: "var(--tan)", paddingTop: "6px" }}>Address</dt>
            <dd style={{ ...BODY_P, margin: 0 }}>
              571 2nd Avenue, Brooklyn NY 11232
              <span style={{ display: "block", marginTop: "4px", fontStyle: "italic", color: "rgba(35,60,54,0.6)" }}>
                <a href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7" target="_blank" rel="noopener noreferrer" style={{ color: "#233c36", borderBottom: "1px solid rgba(35,60,54,0.4)" }}>
                  Open in Maps
                </a>
              </span>
            </dd>

            <dt style={{ ...EYEBROW, color: "var(--tan)", paddingTop: "6px" }}>Entrance</dt>
            <dd style={{ ...BODY_P, margin: 0 }}>
              2nd Avenue, between 34th and 33rd Street. The Courtyard 7/8 gates &mdash; registration and the main entrance.
            </dd>
          </dl>
        </div>
      </section>

      {/* CHAPTER 02 — HISTORY (parallax over historic photo) */}
      <ParallaxChapter src="/industry-city/historic.jpg" alt="Bush Terminal — A Great Industrial City Within A City" scrollHeight="320vh">
        <div style={{ ...CHAPTER_NUM, color: "#cdf765" }}>02 — The History</div>
        <h2 style={{ ...CHAPTER_TITLE, color: "#fcf9ec" }}>
          A great industrial
          <em
            style={{
              fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontStyle: "italic",
              fontWeight: 400,
              textTransform: "none",
              letterSpacing: "0",
              color: "#cdf765",
              fontSize: "1.04em",
              display: "block",
              marginTop: "0.2em",
            }}
          >
            city within a city
          </em>
        </h2>
        <p style={{ ...CHAPTER_SUB, color: "rgba(252,249,236,0.78)" }}>
          Founded by iconic American entrepreneur <em>Irving T. Bush</em> in the early 20th century, then known as Bush Terminal &mdash; the first facility of its kind in New York, employing more than 25,000 people.
        </p>

        <div style={{ ...HAIR_RULE("rgba(252,249,236,0.22)"), margin: "3rem 0 2rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "rgba(252,249,236,0.9)", maxWidth: "720px" }}>
          <p style={BODY_P}>
            Bush Terminal was one of the <strong style={{ color: "#cdf765", fontWeight: 600 }}>original entrepreneurial hubs</strong> in the United States, offering economies of scale that let even the smallest companies access facilities normally reserved for large, well-capitalized firms.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
              lineHeight: 1.55,
              color: "rgba(252,249,236,0.95)",
              fontWeight: 400,
              letterSpacing: 0,
              margin: "1.25rem 0 0",
            }}
          >
            In today&rsquo;s dollars, companies were able to save{" "}
            <span style={{ color: "#cdf765", fontWeight: 500 }}>$100,000&ndash;$400,000 annually</span>{" "}
            by locating in Industry City.
          </p>
        </div>
      </ParallaxChapter>

      {/* CHAPTER 03 — TODAY (parallax over modern photo) */}
      <ParallaxChapter src="/industry-city/today.webp" alt="Industry City courtyard at sunset" scrollHeight="320vh">
        <div style={{ ...CHAPTER_NUM, color: "#cdf765" }}>03 — Today</div>
        <h2 style={{ ...CHAPTER_TITLE, color: "#fcf9ec" }}>
          Industry city
          <em
            style={{
              fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontStyle: "italic",
              fontWeight: 400,
              textTransform: "none",
              letterSpacing: "0",
              color: "#cdf765",
              fontSize: "1.04em",
              display: "block",
              marginTop: "0.2em",
            }}
          >
            today
          </em>
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
              <strong style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: "#fcf9ec", lineHeight: 1 }}>{s.v}</strong>
              <span style={{ ...EYEBROW, color: "#cdf765", opacity: 0.7 }}>{s.l}</span>
            </div>
          ))}
        </div>
      </ParallaxChapter>

      {/* CLOSING CTA */}
      <section style={{ background: "#cdf765" }}>
        <div className="max-w-content mx-auto px-6 md:px-12" style={{ padding: "4rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.5rem" }}>
          <span style={{ ...EYEBROW, color: "#233c36", opacity: 0.7 }}>RSVP</span>
          <p style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700, color: "#233c36", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", lineHeight: 1.15, maxWidth: "640px" }}>
            See you in Brooklyn &mdash; September 14&ndash;16, 2026.
          </p>
          <a
            href="/tickets"
            style={{
              ...EYEBROW,
              background: "#233c36",
              color: "#cdf765",
              padding: "1rem 1.75rem",
              letterSpacing: "0.25em",
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
