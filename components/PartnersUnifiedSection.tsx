import React from "react";
import { featuredPartners, allPartners } from "@/lib/partners";

function formatLeadName(name: string) {
  if (name.toLowerCase().startsWith("nbcuniversal")) {
    return (
      <>
        NBC<em>Universal</em>
      </>
    );
  }
  return name;
}

const formatYears = (years: number[]) =>
  years.map((y) => `'${String(y).slice(2)}`).join(" · ");

function Ornament({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`pp-ornament${footer ? " pp-ornament-footer" : ""}`} aria-hidden>
      <span className="rule" />
      <span className="mark">◆</span>
      <span className="rule" />
    </div>
  );
}

export default function PartnersUnifiedSection() {
  return (
    <section className="past-partners" id="partners">
      <div className="past-partners-inner">
        {/* Header */}
        <div className="pp-eyebrow">Partners</div>
        <h2 className="pp-headline">
          In good <em>company.</em>
        </h2>
        <p className="pp-deck">
          The operators, platforms, and capital partners who&rsquo;ve helped power Beanstalk over the years.
        </p>

        <Ornament />

        {/* Featured four-row block */}
        <div className="pp-featured">
          {featuredPartners.map((p) => (
            <div key={p.slug} className={`partners-row${p.lead ? " lead" : ""}`}>
              <div className="partners-role">{p.role}</div>
              <div className="partners-name">
                {p.lead ? formatLeadName(p.name) : p.name}
              </div>
            </div>
          ))}
        </div>

        {/* Spacer between featured block and the full archive */}
        <div className="pp-archive-spacer" />

        {/* The full archive */}
        <div className="pp-eyebrow pp-eyebrow-archive">The full archive</div>

        <div className="pp-legend">
          <span className="pp-legend-swatch" />
          <span>
            <span className="pp-legend-label">Highlighted</span>
            &nbsp;·&nbsp; Sponsoring 2026
          </span>
        </div>

        {/* Alphabetical wall — one flowing paragraph of <a> + <span> separator */}
        <p className="pp-wall">
          {allPartners.map((p, i) => (
            <React.Fragment key={p.slug}>
              <a
                className={`pp-name${p.current ? " pp-name--current" : ""}`}
                href={`/partners/${p.slug}`}
              >
                {p.name}
                <span className="pp-years">{formatYears(p.years)}</span>
              </a>
              {i < allPartners.length - 1 && (
                <span className="pp-sep" aria-hidden>
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </p>

        <Ornament footer />
      </div>
    </section>
  );
}
