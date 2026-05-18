"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const smoothstep = (a: number, b: number, t: number) => {
  if (t <= a) return 0;
  if (t >= b) return 1;
  const x = (t - a) / (b - a);
  return x * x * (3 - 2 * x);
};

export default function IndustryCityHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(r.height - vh, 1);
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Stages over a 500vh section (400vh of scroll inside a 100vh sticky):
  //   0.00 – 0.15  Stage 1: split-screen visible
  //   0.15 – 0.30  Stage 2: panels slide out, image revealed
  //   0.30 – 0.50  Stage 3: address card fades in, holds, fades out
  //   0.50 – 0.95  Stage 4: history narrative fades in, holds, fades out
  //   0.95 – 1.00  release (image still visible)
  const slide = easeOutCubic(smoothstep(0.15, 0.30, progress));

  const cardOpacity =
    smoothstep(0.30, 0.42, progress) * (1 - smoothstep(0.48, 0.55, progress));
  const cardTy = (1 - cardOpacity) * 24;

  const historyOpacity =
    smoothstep(0.55, 0.68, progress) * (1 - smoothstep(0.88, 0.95, progress));
  const historyTy = (1 - historyOpacity) * 24;

  // Darken the image while text layers are showing
  const overlay =
    smoothstep(0.30, 0.55, progress) * 0.55 +
    smoothstep(0.55, 0.7, progress) * 0.25;

  return (
    <section
      ref={wrapRef}
      className="ic-narrative"
      style={{ position: "relative", height: "500vh", background: "#0a0a0a" }}
    >
      <div className="ic-sticky">
        {/* Layer 0 — historic exterior, continuous through Stages 2–4 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/industry-city/historic.jpg"
          alt="Bush Terminal — Industry City exterior"
          className="ic-bg-image"
        />
        <div
          className="ic-bg-tint"
          style={{ background: `rgba(0, 0, 0, ${overlay})` }}
        />

        {/* Layer 1 — Stage 1 split-screen panels */}
        <div className="ic-split">
          <div
            className="ic-split-panel ic-split-left"
            style={{ transform: `translateX(${-slide * 110}%)` }}
          >
            <div className="ic-split-inner">
              <div className="ic-split-top">
                <span className="ic-eyebrow ic-eyebrow-lime">Chapter №2</span>
                <span className="ic-meta">September 14–16, 2026</span>
              </div>
              <div className="ic-split-mid">
                <h1 className="ic-h1">
                  Industry
                  <em className="ic-h1-em ic-h1-em-lime">city</em>
                </h1>
                <div className="ic-rule ic-rule-on-dark" />
                <p className="ic-sub ic-sub-on-dark">
                  Brooklyn&rsquo;s original entrepreneurial campus — six million square feet of brick, glass, and waterfront.
                </p>
                <div className="ic-split-foot ic-split-foot-on-dark">
                  <span className="ic-eyebrow ic-eyebrow-faint">571 2nd Ave · Brooklyn NY</span>
                  <span className="ic-meta">Courtyard 7/8 gates</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="ic-split-panel ic-split-right"
            style={{ transform: `translateX(${slide * 110}%)` }}
          >
            <div className="ic-split-inner">
              <div className="ic-split-top">
                <span className="ic-eyebrow ic-eyebrow-tan">The Venue</span>
                <span className="ic-meta ic-meta-on-cream">Brooklyn, NY</span>
              </div>
              <div className="ic-split-mid">
                <h2 className="ic-h2-cream">
                  A campus
                  <em className="ic-h1-em ic-h1-em-tan">of its own</em>
                </h2>
                <div className="ic-rule ic-rule-on-cream" />
                <p className="ic-sub ic-sub-on-cream">
                  Founded in the early 20th century, redeveloped for $450M, and now home to 550 founder-led companies on the Brooklyn waterfront.
                </p>
                <div className="ic-split-foot ic-split-foot-on-cream">
                  <a
                    href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ic-maplink"
                  >
                    Open in Maps →
                  </a>
                  <span className="ic-meta ic-meta-on-cream">33rd – 34th St</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 — Stage 3 address card */}
        <div
          className="ic-address-card"
          style={{
            opacity: cardOpacity,
            transform: `translateY(${cardTy}px)`,
            pointerEvents: cardOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="ic-eyebrow ic-eyebrow-tan" style={{ marginBottom: "0.75rem" }}>
            01 — The Address
          </div>
          <h3 className="ic-card-title">
            Where to find
            <em className="ic-h1-em ic-h1-em-tan">Beanstalk</em>
          </h3>
          <div className="ic-card-rule" />
          <dl className="ic-card-dl">
            <dt className="ic-eyebrow ic-eyebrow-tan">Venue</dt>
            <dd>Industry City — Sept 14–16, 2026.</dd>

            <dt className="ic-eyebrow ic-eyebrow-tan">Address</dt>
            <dd>
              571 2nd Avenue, Brooklyn NY 11232
              <span style={{ display: "block", marginTop: "4px" }}>
                <a
                  href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ic-maplink"
                >
                  Open in Maps →
                </a>
              </span>
            </dd>

            <dt className="ic-eyebrow ic-eyebrow-tan">Entrance</dt>
            <dd>2nd Ave, between 33rd and 34th — Courtyard 7/8 gates.</dd>
          </dl>
        </div>

        {/* Layer 3 — Stage 4 history narrative (replaces the standalone History
                     ParallaxChapter so the same sticky image stays continuous) */}
        <div
          className="ic-history-overlay"
          style={{
            opacity: historyOpacity,
            transform: `translateY(${historyTy}px)`,
            pointerEvents: historyOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="ic-history-inner">
            <div className="ic-eyebrow ic-eyebrow-lime" style={{ marginBottom: "1rem" }}>
              02 — The History
            </div>
            <h2 className="ic-history-title">
              A great industrial
              <em className="ic-h1-em ic-h1-em-lime">city within a city</em>
            </h2>
            <p className="ic-history-sub">
              Founded by iconic American entrepreneur <em>Irving T. Bush</em> in the early 20th century — the first facility of its kind in New York, employing 25,000 people.
            </p>
            <div className="ic-card-rule ic-card-rule-on-dark" />
            <p className="ic-history-body">
              Bush Terminal was one of the{" "}
              <strong style={{ color: "#cdf765", fontWeight: 600 }}>
                original entrepreneurial hubs
              </strong>{" "}
              in the United States, offering economies of scale that let even the smallest companies access facilities normally reserved for large, well-capitalized firms.
            </p>
            <p className="ic-history-quote">
              In today&rsquo;s dollars, companies could save{" "}
              <span style={{ color: "#cdf765", fontWeight: 500, fontStyle: "normal" }}>
                $100,000–$400,000 annually
              </span>{" "}
              by locating in Industry City.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
