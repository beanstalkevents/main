"use client";

import { useEffect, useRef } from "react";

// Feature flag — flip to `true` to restore the Beekman card + intro + outro.
// Currently false: Beekman block is under negotiation, only the Moxy section
// is shown. Intro + outro are hidden too because they reference "two hotels".
const SHOW_BEEKMAN = false;

export default function StayBody() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = root.querySelectorAll<HTMLElement>(".section");
    const dots = root.querySelectorAll<HTMLButtonElement>(".pagination-dot");
    const videos: Record<string, HTMLVideoElement | null> = {
      beekman: root.querySelector<HTMLVideoElement>("#video-beekman"),
      moxy: root.querySelector<HTMLVideoElement>("#video-moxy"),
    };
    const activeName = root.querySelector<HTMLDivElement>("#active-name");
    const motionBtn = root.querySelector<HTMLButtonElement>("#motion-toggle");
    const motionLabel = root.querySelector<HTMLSpanElement>("#motion-label");

    let currentVideo: string | null = null;
    let currentIndex = -1;

    function setVideo(key: string | null) {
      if (key === currentVideo) return;
      Object.keys(videos).forEach((k) => {
        videos[k]?.classList.toggle("active", k === key);
      });
      currentVideo = key;
    }

    function setActiveSection(idx: number) {
      if (idx === currentIndex) return;
      currentIndex = idx;
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
      const sec = sections[idx];
      const name = sec.getAttribute("data-name") || "";
      if (activeName) {
        activeName.textContent = name;
        activeName.style.opacity = name ? "0.7" : "0";
      }
    }

    // IntersectionObserver — section in-view animation + video switching
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Array.prototype.indexOf.call(sections, entry.target);
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (entry.intersectionRatio > 0.55) {
              setVideo((entry.target as HTMLElement).getAttribute("data-video"));
              setActiveSection(idx);
            }
          }
        });
      },
      { threshold: [0.15, 0.55, 0.85], rootMargin: "0px" }
    );

    sections.forEach((sec) => io.observe(sec));

    // Initialize first section
    setVideo(sections[0]?.getAttribute("data-video") || null);
    setActiveSection(0);
    sections[0]?.classList.add("in-view");

    // Pagination click → eased scroll
    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function slowScrollTo(targetY: number, duration: number) {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const startTime = performance.now();
      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    const dotHandlers: Array<() => void> = [];
    dots.forEach((d, i) => {
      const handler = () => {
        const target = sections[i].getBoundingClientRect().top + window.pageYOffset;
        const reduce =
          window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) window.scrollTo(0, target);
        else slowScrollTo(target, 1300);
      };
      d.addEventListener("click", handler);
      dotHandlers.push(() => d.removeEventListener("click", handler));
    });

    // Motion toggle
    let paused = false;
    const motionHandler = () => {
      paused = !paused;
      Object.keys(videos).forEach((k) => {
        const v = videos[k];
        if (!v) return;
        if (paused) v.pause();
        else v.play().catch(() => {});
      });
      motionBtn?.classList.toggle("paused", paused);
      if (motionLabel) motionLabel.textContent = paused ? "Motion off" : "Motion on";
    };
    motionBtn?.addEventListener("click", motionHandler);

    // Respect reduced-motion: start paused
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      motionBtn?.click();
    }

    // Book CTA: unlock-swipe, then navigate
    const ctaCleanups: Array<() => void> = [];
    root.querySelectorAll<HTMLAnchorElement>(".hotel-cta").forEach((cta) => {
      const handler = (e: Event) => {
        const reduce =
          window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return;
        e.preventDefault();
        const href = cta.getAttribute("href") || "#";
        cta.classList.add("unlocking");
        setTimeout(() => {
          window.open(href, "_blank", "noopener");
          setTimeout(() => cta.classList.remove("unlocking"), 600);
        }, 1100);
      };
      cta.addEventListener("click", handler);
      ctaCleanups.push(() => cta.removeEventListener("click", handler));
    });

    return () => {
      io.disconnect();
      dotHandlers.forEach((fn) => fn());
      motionBtn?.removeEventListener("click", motionHandler);
      ctaCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div ref={rootRef} className="stay-page">
      {/* Fixed background video stack */}
      <div className="video-stack">
        <video
          className="video-layer"
          id="video-beekman"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/beekman-loop-slow.mp4" type="video/mp4" />
        </video>
        <video
          className="video-layer"
          id="video-moxy"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/moxy-loop-slow.mp4" type="video/mp4" />
        </video>
        <div className="video-tint"></div>
        <div className="video-scrim"></div>
      </div>

      {/* Right-side pagination — hidden when only one hotel is shown */}
      {SHOW_BEEKMAN && (
        <nav className="pagination" id="pagination">
          <button className="pagination-dot" data-target="0" aria-label="Intro"></button>
          <button className="pagination-dot" data-target="1" aria-label="The Beekman"></button>
          <button className="pagination-dot" data-target="2" aria-label="Moxy NYC Downtown"></button>
          <button className="pagination-dot" data-target="3" aria-label="Both options"></button>
        </nav>
      )}

      {/* Bottom chrome */}
      <footer className="chrome-bottom">
        <button className="motion-toggle" id="motion-toggle" aria-label="Toggle motion">
          <span id="motion-label">Motion on</span>
        </button>
        <div className="chrome-eyebrow" id="active-name">
          {SHOW_BEEKMAN ? "The Beekman" : "Moxy NYC Downtown"}
        </div>
      </footer>

      {/* Scroll sections */}
      <main>
        {SHOW_BEEKMAN && (
        <section className="section" data-video="beekman" data-name="">
          <div className="section-inner intro-inner">
            <div className="intro-eyebrow">— Where to stay —</div>
            <h1 className="intro-headline">
              Two hotels<br />
              in <em>Manhattan.</em>
            </h1>
            <p className="intro-deck">
              Beanstalk has reserved blocks at two hotels in Manhattan, both 20 minutes from
              Industry City. Morning shuttles to the venue are provided by Beanstalk. Pick the
              one that fits your week.
            </p>
            <div className="intro-scroll-cue">Scroll</div>
          </div>
        </section>
        )}

        {SHOW_BEEKMAN && (
        <section className="section" data-video="beekman" data-name="The Beekman">
          <div className="section-inner hotel-inner">
            <div className="hotel-num">— Option 01 —</div>
            <h2 className="hotel-name">
              The<br />
              <em>Beekman.</em>
            </h2>
            <div className="hotel-meta">
              <div>
                <div className="meta-item-label">Address</div>
                <a
                  className="meta-item-value meta-link"
                  href="https://www.google.com/maps/dir/?api=1&origin=The+Beekman+Hotel+123+Nassau+St+New+York+NY+10038&destination=Industry+City+220+36th+St+Brooklyn+NY+11232"
                  target="_blank"
                  rel="noopener"
                >
                  123 Nassau Street
                  <br />
                  New York, NY 10038
                  <span className="meta-link-cue">Get directions →</span>
                </a>
              </div>
              <div>
                <div className="meta-item-label">Beanstalk rate</div>
                <div className="meta-item-value">
                  <em>$695</em> / night<br />
                  <span className="strike">$935</span>{" "}
                  <span className="save-pill">Save 28%</span>
                  <span className="deadline-note">Book by August 21, 2026</span>
                </div>
              </div>
            </div>
            <a
              href="https://www.thompsonhotels.com/hotels/new-york/the-beekman/"
              className="hotel-cta"
              data-hotel="beekman"
            >
              <span className="cta-label">Book by August 21</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </section>
        )}

        <section className="section" data-video="moxy" data-name="Moxy NYC Downtown">
          <div className="section-inner hotel-inner">
            <div className="hotel-num">— Option 02 —</div>
            <h2 className="hotel-name">
              Moxy<br />
              <em>Downtown.</em>
            </h2>
            <div className="hotel-meta">
              <div>
                <div className="meta-item-label">Address</div>
                <a
                  className="meta-item-value meta-link"
                  href="https://www.google.com/maps/dir/?api=1&origin=Moxy+NYC+Downtown+26+Ann+St+New+York+NY+10038&destination=Industry+City+220+36th+St+Brooklyn+NY+11232"
                  target="_blank"
                  rel="noopener"
                >
                  26 Ann Street
                  <br />
                  New York, NY 10038
                  <span className="meta-link-cue">Get directions →</span>
                </a>
              </div>
              <div>
                <div className="meta-item-label">
                  Beanstalk rate
                  <span
                    className="rate-info"
                    tabIndex={0}
                    aria-label="Booking details"
                  >
                    i
                    <span className="rate-info-tip" role="tooltip">
                      <strong>Group rate for Beanstalk 2026.</strong> Booking
                      window: Sept 12 – Sept 16, 2026. Last day to book at this
                      rate: <strong>Friday, August 21, 2026</strong>.{" "}
                      <strong>Destination Fee waived</strong> — it may show at
                      booking due to Marriott&rsquo;s system, but our team
                      removes it at check-out.
                    </span>
                  </span>
                </div>
                <div className="meta-item-value">
                  <em>$389</em> / night<br />
                  <span className="strike">$589</span>{" "}
                  <span className="save-pill">Save 34%</span>
                  <span className="deadline-note">Book by August 21, 2026</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.marriott.com/reslink?id=1779136733533&key=GRP&app=resvlink"
              className="hotel-cta"
              data-hotel="moxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cta-label">Book by August 21</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </section>

        {SHOW_BEEKMAN && (
        <section className="section" data-video="moxy" data-name="">
          <div className="section-inner outro-inner">
            <div className="intro-eyebrow">— One more thing —</div>
            <h2 className="outro-headline">
              Need help <em>deciding?</em>
            </h2>
            <p className="outro-deck">
              Both hotels sit in the Financial District, a five-minute walk from each other. The
              Beekman is the historic option — atrium, library, cocktail bar. The Moxy is the
              social option — rooftop, smaller rooms, livelier scene. Either way, you&rsquo;re 20
              minutes from Industry City, with morning shuttles provided by Beanstalk.
            </p>
          </div>
        </section>
        )}
      </main>
    </div>
  );
}
