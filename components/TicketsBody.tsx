"use client";

import { useEffect } from "react";

export default function TicketsBody() {
  useEffect(() => {
    // ── Tier-by-tier rate ladders (ETZ midnight boundaries are loose — compare to local "today").
    // `end` is inclusive (so a price valid "by Apr 30" means anything before May 1).
    const LADDERS: Record<string, { start: string; end: string; price: number }[]> = {
      investors: [
        { start: "2026-01-05", end: "2026-04-30", price: 1995 },
        { start: "2026-05-01", end: "2026-05-31", price: 2350 },
        { start: "2026-06-01", end: "2026-06-30", price: 2650 },
        { start: "2026-07-01", end: "2026-07-31", price: 2850 },
        { start: "2026-08-01", end: "2026-08-20", price: 2950 },
        { start: "2026-08-21", end: "2026-09-16", price: 3050 },
      ],
      sponsors: [
        { start: "2026-01-05", end: "2026-04-30", price: 3695 },
        { start: "2026-05-01", end: "2026-05-31", price: 3895 },
        { start: "2026-06-01", end: "2026-06-30", price: 3995 },
        { start: "2026-07-01", end: "2026-07-31", price: 4095 },
        { start: "2026-08-01", end: "2026-08-20", price: 4295 },
        { start: "2026-08-21", end: "2026-09-16", price: 4695 },
      ],
      media: [
        { start: "2026-01-05", end: "2026-04-30", price: 1995 },
        { start: "2026-05-01", end: "2026-05-31", price: 2350 },
        { start: "2026-06-01", end: "2026-06-30", price: 2650 },
        { start: "2026-07-01", end: "2026-07-31", price: 2850 },
        { start: "2026-08-01", end: "2026-08-20", price: 2950 },
        { start: "2026-08-21", end: "2026-09-16", price: 3050 },
      ],
    };

    const fmt = (n: number) => "$" + n.toLocaleString("en-US");

    const shortDeadline = (endStr: string) => {
      const parts = endStr.split("-");
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return "By " + months[parseInt(parts[1], 10) - 1] + " " + parseInt(parts[2], 10);
    };

    const today = () => {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${dd}`;
    };

    const currentTierIndex = (ladder: { end: string }[], todayStr: string) => {
      for (let i = 0; i < ladder.length; i++) {
        if (todayStr <= ladder[i].end) return i;
      }
      return ladder.length - 1;
    };

    const t = today();

    document.querySelectorAll<HTMLElement>(".tier-col[data-audience]").forEach((col) => {
      const aud = col.getAttribute("data-audience") || "";
      const base = parseInt(col.getAttribute("data-base") || "0", 10);
      const ladder = LADDERS[aud];
      if (!ladder) return;

      const idx = currentTierIndex(ladder, t);
      const currentPrice = ladder[idx].price;
      const save = base - currentPrice;

      const nowEl = col.querySelector("[data-now]");
      const baseEl = col.querySelector("[data-base-display]");
      if (nowEl) nowEl.textContent = fmt(currentPrice);
      if (baseEl) baseEl.textContent = fmt(base);

      const saveEl = col.querySelector("[data-save]");
      if (saveEl) {
        saveEl.innerHTML =
          save > 0 ? `Apply today and save <strong>${fmt(save)}</strong>` : "Final pricing";
      }

      const ladderEl = col.querySelector(".price-ladder");
      if (ladderEl) {
        ladderEl.innerHTML = "";
        ladder.forEach((tier, i) => {
          const rung = document.createElement("div");
          rung.className = "price-list-rung";
          if (i < idx) rung.classList.add("past");
          if (i === idx) rung.classList.add("current");
          const dl = document.createElement("span");
          dl.className = "price-list-rung-deadline";
          dl.textContent = shortDeadline(tier.end);
          const amt = document.createElement("span");
          amt.className = "price-list-rung-amount";
          amt.textContent = fmt(tier.price);
          rung.appendChild(dl);
          rung.appendChild(amt);
          ladderEl.appendChild(rung);
        });
      }
    });

    // ── Slow, eased scroll for "See pricing" CTA ──
    const easeInOutCubic = (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const slowScrollTo = (targetY: number, duration: number) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const seePricingBtn = document.querySelector<HTMLAnchorElement>(".pathway-btn.down");
    const onPricingClick = (e: Event) => {
      const target = document.getElementById("pricing");
      if (!target) return;
      e.preventDefault();
      const prefersReduced =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = target.getBoundingClientRect().top + window.pageYOffset - 20;
      if (prefersReduced) {
        window.scrollTo(0, top);
      } else {
        slowScrollTo(top, 1400);
      }
    };
    seePricingBtn?.addEventListener("click", onPricingClick);

    // ── Fade-up reveal as elements enter view ──
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => io!.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }

    // Safety net: if anything stays hidden (browser quirk, observer race,
    // hash-link landing past the section, etc.), force-reveal after 1.5s.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }, 1500);

    return () => {
      seePricingBtn?.removeEventListener("click", onPricingClick);
      io?.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      {/* ─────── INVITATION CARD ─────── */}
      <section className="invite-page">
        <div className="invite-card">
          <div className="invite-monogram">
            <div className="invite-monogram-sprout">🌱</div>
            <div className="invite-monogram-rule">
              <span className="line"></span>
              <span>Beanstalk · MMXXVI</span>
              <span className="line"></span>
            </div>
          </div>

          <div className="invite-formal">
            Beanstalk requests the company<br />of founders, operators, and investors at
          </div>

          <h1 className="invite-headline">
            The 2026<br />
            <em>gathering.</em>
          </h1>

          <div className="invite-date-block">
            <div className="invite-date">September 14 — 16, 2026</div>
            <div className="invite-location">Industry City · Brooklyn, NY</div>
          </div>

          <p className="invite-body">
            Beanstalk is invite-only. The room is built before the doors open — 1,000+ founders,
            operators, and investors, 90%+ at VP and above. Each year we host three days of
            small-group conversation, peer-to-peer learning, and the most important relationships
            in consumer.
          </p>

          <div className="invite-pathways">
            <div className="pathway">
              <div className="pathway-label">For Brands Only</div>
              <div className="pathway-title">
                Request your<br />
                <em>Brand Invite</em>
              </div>
              <div className="pathway-desc">
                Approved brand guests attend complimentary. Must be a member of the C-Suite of an
                8-figure revenue brand or higher.
              </div>
              <a
                className="pathway-btn lime"
                href="https://beanstalk26-registration.personatech.com/form/initiate?fId=N2NkZGE3M2ItZjJjNy00NmZmLTg4YzctMGY5NDBlNGNjZmQ3"
              >
                Apply
              </a>
            </div>
            <div className="pathway">
              <div className="pathway-label">For All Others</div>
              <div className="pathway-title">
                See your<br />
                <em>ticket options</em>
              </div>
              <div className="pathway-desc">
                For Sponsors, Investors,<br />Creators &amp; Media
              </div>
              <a className="pathway-btn down" href="#pricing">
                See pricing
              </a>
            </div>
          </div>

          <div className="invite-signoff">
            With warm regards,<br />
            <strong>The Beanstalk Team</strong>
          </div>
        </div>
      </section>

      {/* ─────── WHO'S IN THE ROOM ─────── */}
      <section className="roomstrip">
        <div className="roomstrip-inner">
          <div className="roomstrip-label">A partial guest list</div>
          <h2>
            Who&rsquo;s in the <em>room.</em>
          </h2>
          <div className="roomstrip-names">
            <div className="name">Jennifer Hyman <em>Rent the Runway</em></div>
            <div className="name">David Heath <em>Bombas</em></div>
            <div className="name">Sean Frank <em>Ridge</em></div>
            <div className="name">Abhi Ramesh <em>Misfits Market</em></div>
            <div className="name">Jordan Nathan <em>Caraway</em></div>
            <div className="name">Eric Grossberg <em>Brilliant Earth</em></div>
            <div className="name">Ben Diamond <em>True Classic</em></div>
            <div className="name">Aman Advani <em>Ministry of Supply</em></div>
            <div className="name">Hillary Peterson <em>True Botanicals</em></div>
            <div className="name">Aurelian Lis <em>Dermalogica</em></div>
            <div className="name">Gonzalve Bich <em>BIC</em></div>
            <div className="name">Eline de Graaf <em>Dyson</em></div>
            <div className="name">Adam Goldston <em>APL</em></div>
            <div className="name">Jacob Zuppke <em>Whisker</em></div>
            <div className="name">Greg Sewitz <em>Magic Spoon</em></div>
            <div className="name">Mary van Praag <em>Milani</em></div>
            <div className="name">Brian Berger <em>Mack Weldon</em></div>
            <div className="name">Andrew Perlmutter <em>NBA Take-Two</em></div>
            <div className="name">Julie Bornstein <em>Daydream</em></div>
            <div className="name">Ann Chung <em>Blackstone</em></div>
            <div className="name">Jon Owsley <em>L Catterton</em></div>
            <div className="name">+ 950 others</div>
          </div>
        </div>
      </section>

      {/* ─────── TRANSITION ─────── */}
      <section className="transition" id="pricing">
        <div className="transition-label reveal">— Choose your audience —</div>
        <h2 className="reveal delay-1">
          Your ticket<br />
          <em>options.</em>
        </h2>
        <p className="reveal delay-2">
          Self-serve pricing, tiered by deadline. Investors and Media &amp; Creators receive a
          discounted rate. Hosted meetings are available to Solution Providers as a
          performance-based add-on.
        </p>
      </section>

      {/* ─────── SPONSOR TICKETS ─────── */}
      <section className="pricing-section">
        <div className="pricing-section-inner">
          <div className="tier-grid">
            <div className="tier-col reveal delay-1" data-audience="investors" data-base="3050">
              <div className="tier-num">— Audience 01 —</div>
              <div className="tier-name">
                Investors<br />&amp; Capital
              </div>
              <div className="tier-tagline">
                For institutional investors, venture capital, growth equity, and family offices
                actively deploying into consumer brands.
              </div>
              <div className="tier-divider"></div>
              <div className="price-hero-label">Current rate</div>
              <div className="price-hero">
                <span className="price-hero-now" data-now></span>
                <span className="price-hero-base" data-base-display></span>
              </div>
              <div className="tier-divider"></div>
              <div className="price-ladder"></div>
              <a
                className="tier-btn"
                href="https://beanstalk26-registration.personatech.com/form/initiate?fId=MGRlODllNmUtNDU0Ni00Y2M5LTkwOTctYjBiMGExMzdlOWNl"
              >
                Apply now
              </a>
              <div className="tier-save" data-save></div>
            </div>

            <div
              className="tier-col featured reveal delay-2"
              data-audience="sponsors"
              data-base="4695"
            >
              <div className="tier-num">— Audience 02 —</div>
              <div className="tier-name">
                Solution<br />Providers
              </div>
              <div className="tier-tagline">
                For vendors, agencies, and SaaS companies selling into the Disruptor Brands
                ecosystem. Hosted meetings available as an add-on.
              </div>
              <div className="tier-divider"></div>
              <div className="price-hero-label">Current rate</div>
              <div className="price-hero">
                <span className="price-hero-now" data-now></span>
                <span className="price-hero-base" data-base-display></span>
              </div>
              <div className="tier-divider"></div>
              <div className="price-ladder"></div>
              <a
                className="tier-btn"
                href="https://beanstalk26-registration.personatech.com/form/initiate?fId=OTI4OWI0NjQtYjFlYS00YzA3LWI4M2YtYmJlODEyOGVjNmI5"
              >
                Apply now
              </a>
              <div className="tier-save" data-save></div>
            </div>

            <div className="tier-col reveal delay-3" data-audience="media" data-base="3050">
              <div className="tier-num">— Audience 03 —</div>
              <div className="tier-name">
                Media &amp;<br />Creators
              </div>
              <div className="tier-tagline">
                For journalists, podcasters, newsletter operators, and content creators covering
                the consumer brand ecosystem.
              </div>
              <div className="tier-divider"></div>
              <div className="price-hero-label">Current rate</div>
              <div className="price-hero">
                <span className="price-hero-now" data-now></span>
                <span className="price-hero-base" data-base-display></span>
              </div>
              <div className="tier-divider"></div>
              <div className="price-ladder"></div>
              <a
                className="tier-btn"
                href="https://beanstalk26-registration.personatech.com/form/initiate?fId=YWE4ZTFhMDEtM2RhYi00NWU0LWI4NmEtNzUyYzUxMDY3OTM3"
              >
                Apply now
              </a>
              <div className="tier-save" data-save></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── FOOTER BAND ─────── */}
      <section className="outro-band">
        <div className="outro-band-inner">
          <div className="outro-band-label">Looking for more?</div>
          <h3>
            Meetings, dinners,<br />
            <em>and the rest.</em>
          </h3>
          <p>
            Hosted 1:1 meetings. Private dinners with legendary Guests of Honor. Track-named
            stages. Branded lounges. Reception co-hosts. The full sponsorship menu is available on
            request.
          </p>
          <a href="https://forms.gle/PMu7eZQzrorGAsRL7" className="outro-band-link">
            Apply to receive sponsorship options
          </a>
        </div>
      </section>
    </>
  );
}
