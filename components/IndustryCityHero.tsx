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

  // Panels slide apart between progress 0.25 → 0.5
  const slide = easeOutCubic(smoothstep(0.25, 0.5, progress));
  // Address card fades in between 0.55 → 0.78, holds, then fades out 0.92 → 1.0
  const cardOpacity =
    smoothstep(0.55, 0.78, progress) * (1 - smoothstep(0.92, 1.0, progress));
  const cardTranslate = (1 - cardOpacity) * 24;

  return (
    <section
      ref={wrapRef}
      className="ic-narrative"
      style={{ position: "relative", height: "300vh", background: "#0a0a0a" }}
    >
      <div className="ic-sticky">
        {/* Layer 0 — sepia exterior image (always under) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/industry-city/historic.jpg"
          alt="Bush Terminal — Industry City exterior"
          className="ic-bg-image"
        />
        <div className="ic-bg-tint" />

        {/* Layer 1 — split-screen panels (Stage 1) — slide out left/right */}
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

        {/* Layer 2 — address card (Stage 3) — fades in over revealed image */}
        <div
          className="ic-address-card"
          style={{
            opacity: cardOpacity,
            transform: `translateY(${cardTranslate}px)`,
            pointerEvents: cardOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <div className="ic-eyebrow ic-eyebrow-tan" style={{ marginBottom: "1rem" }}>
            01 — The Address
          </div>
          <h3 className="ic-card-title">
            Where to find
            <em className="ic-h1-em ic-h1-em-tan">Beanstalk</em>
          </h3>

          <div className="ic-card-rule" />

          <dl className="ic-card-dl">
            <dt className="ic-eyebrow ic-eyebrow-tan">Venue</dt>
            <dd>Industry City — the venue for September 14–16, 2026.</dd>

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
            <dd>
              2nd Avenue, between 34th and 33rd Street. The Courtyard 7/8 gates — registration and the main entrance.
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
