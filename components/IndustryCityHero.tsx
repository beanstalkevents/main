"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const smoothstep = (a: number, b: number, t: number) => {
  if (t <= a) return 0;
  if (t >= b) return 1;
  const x = (t - a) / (b - a);
  return x * x * (3 - 2 * x);
};

/**
 * Industry City hero — sliding doors → history → today.
 *
 * Single sticky 100vh container inside an 1100vh section (1000vh of scrollable
 * progress mapped to 0..1). Two video layers sit underneath everything and
 * crossfade between historic.mp4 and today.mp4 at the History → Today seam.
 *
 * Choreography (progress) — extended dwell times so each stage breathes:
 *   0.00 – 0.06  Stage 1   doors closed (split-screen visible, ~60vh)
 *   0.06 – 0.14  Stage 2   sliding doors open (~80vh)
 *   0.14 – 0.42  Stage 3   HISTORY narrative over historic (~280vh)
 *   0.42 – 0.50  Stage 4   crossfade historic → today (~80vh)
 *   0.50 – 0.80  Stage 5   TODAY narrative over today (~300vh)
 *   0.80 – 1.00  Stage 6   ADDRESS / Where-to-find (~200vh)
 */
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

  const slide = easeOutCubic(smoothstep(0.06, 0.14, progress));

  // Video crossfades — three layers, each ramps in at its stage seam
  const todayOpacity = smoothstep(0.42, 0.50, progress);
  const addressVideoOpacity = smoothstep(0.74, 0.82, progress);

  // Three overlay stages with wider fade ranges + longer holds
  const historyOpacity =
    smoothstep(0.16, 0.23, progress) * (1 - smoothstep(0.34, 0.42, progress));
  const todayTextOpacity =
    smoothstep(0.52, 0.59, progress) * (1 - smoothstep(0.73, 0.80, progress));
  const addressOpacity = smoothstep(0.82, 0.89, progress);

  const ty = (op: number) => (1 - op) * 24;

  // Dark-green tint behind the text overlays so cream copy stays legible
  // against the lighter parts of either image. Ramps up with whichever
  // overlay is on-screen; peaks at ~25% in the middle band, ~10% at edges.
  const tint = Math.max(historyOpacity, todayTextOpacity, addressOpacity);

  return (
    <section
      ref={wrapRef}
      className="ic-hero"
      style={{ position: "relative", height: "1100vh", background: "#0a0a0a" }}
    >
      <div className="ic-sticky">
        {/* Media stack — historic z0 (always visible), today z1 (fades in at seam) */}
        <video
          src="/industry-city/historic.mp4"
          poster="/industry-city/historic.jpg"
          className="ic-bg-image"
          style={{ zIndex: 0 }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <video
          src="/industry-city/today.mp4"
          poster="/industry-city/today.webp"
          className="ic-bg-image ic-bg-image-crossfade"
          style={{ zIndex: 1, opacity: todayOpacity }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <video
          src="/industry-city/address.mp4"
          className="ic-bg-image ic-bg-image-crossfade"
          style={{ zIndex: 2, opacity: addressVideoOpacity }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />

        {/* Shared darkening tint — dark-green gradient that strengthens in the
            middle band where the headline + sub sit. Alpha multiplied by the
            current overlay opacity so it's invisible during the sliding doors. */}
        <div
          className="ic-bg-tint"
          style={{
            background: `linear-gradient(180deg,
              rgba(35, 60, 54, ${0.45 * tint}) 0%,
              rgba(35, 60, 54, ${0.72 * tint}) 35%,
              rgba(35, 60, 54, ${0.72 * tint}) 70%,
              rgba(35, 60, 54, ${0.45 * tint}) 100%)`,
          }}
        />

        {/* Stage 1/2 — split-screen sliding doors */}
        <div className="ic-split">
          <div
            className="ic-split-panel ic-split-left"
            style={{ "--slide": slide } as React.CSSProperties}
          >
            <div className="ic-split-inner">
              <div className="ic-split-top">
                <span className="ic-eyebrow ic-eyebrow-lime">Chapter №2</span>
                <span className="ic-meta">September 14–16, 2026</span>
              </div>
              <div className="ic-split-mid">
                <h1 className="ic-display">
                  Industry<br />
                  <em>city.</em>
                </h1>
                <p className="ic-display-sub">
                  Brooklyn&rsquo;s original entrepreneurial campus — six million square feet of brick, glass, and waterfront.
                </p>
              </div>
            </div>
          </div>

          <div
            className="ic-split-panel ic-split-right"
            style={{ "--slide": slide } as React.CSSProperties}
          >
            <div className="ic-split-inner">
              <div className="ic-split-top">
                <span className="ic-eyebrow ic-eyebrow-tan">The Venue</span>
                <span className="ic-meta ic-meta-on-cream">Brooklyn, NY</span>
              </div>
              <div className="ic-split-mid">
                <h2 className="ic-display ic-display-on-cream">
                  A campus<br />
                  <em>of its own.</em>
                </h2>
                <p className="ic-display-sub ic-display-sub-on-cream">
                  Founded in the early 20th century, redeveloped for $450M, now home to 550 founder-led companies on the Brooklyn waterfront.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 3 — HISTORY narrative over historic.jpg */}
        <div
          className="ic-overlay"
          style={{
            opacity: historyOpacity,
            transform: `translateY(${ty(historyOpacity)}px)`,
          }}
        >
          <div className="ic-overlay-inner">
            <div className="ic-eyebrow ic-eyebrow-lime">— Where Industry Began —</div>
            <h2 className="ic-display">
              A great industrial<br />
              <em>city within a city.</em>
            </h2>
            <p className="ic-display-sub">
              Founded by Irving T. Bush in the early 20th century — the first facility of its kind in New York, employing 25,000 people.
            </p>
            <p className="ic-display-sub">
              One of the <strong>original entrepreneurial hubs</strong> in the United States. Economies of scale let even the smallest companies access facilities normally reserved for large, well-capitalized firms — saving them{" "}
              <strong>$100,000–$400,000 annually</strong> in today&rsquo;s dollars.
            </p>
          </div>
        </div>

        {/* Stage 5 — TODAY narrative over today.webp */}
        <div
          className="ic-overlay"
          style={{
            opacity: todayTextOpacity,
            transform: `translateY(${ty(todayTextOpacity)}px)`,
          }}
        >
          <div className="ic-overlay-inner">
            <div className="ic-eyebrow ic-eyebrow-lime">— Industry City Today —</div>
            <h2 className="ic-display">
              Industry City<br />
              <em>today.</em>
            </h2>
            <p className="ic-display-sub">
              A <strong>$450 million</strong> redevelopment modernized the campus for the innovation economy and brought quality jobs back to the waterfront.
            </p>
            <p className="ic-display-sub">
              Today the campus is home to{" "}
              <strong>550 founder-led companies</strong>{" "}
              — brewing, distilling, archery, bowling, pétanque, and impeccable dining within the city walls.
            </p>
          </div>
        </div>

        {/* Stage 6 — ADDRESS / Where-to-find over today.webp */}
        <div
          className="ic-overlay"
          style={{
            opacity: addressOpacity,
            transform: `translateY(${ty(addressOpacity)}px)`,
          }}
        >
          <div className="ic-overlay-inner">
            <div className="ic-eyebrow ic-eyebrow-lime">— Where to Find Beanstalk —</div>
            <h2 className="ic-display">
              See you at<br />
              <em>Industry City.</em>
            </h2>
            <p className="ic-display-sub">
              571 2nd Avenue, Brooklyn NY 11232 — Courtyard 7/8 gates, on 2nd Avenue between 33rd and 34th Street. September 14–16, 2026.
            </p>
            <a
              href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7"
              target="_blank"
              rel="noopener noreferrer"
              className="ic-overlay-link"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
