import { featuredPartners } from "@/lib/partners";

export default function PartnerRibbon() {
  return (
    <div className="partner-ribbon" role="region" aria-label="Beanstalk 2026 partners">
      <div className="partner-ribbon-track">
        {[0, 1].map((g) => (
          <div
            key={g}
            className="partner-ribbon-group"
            aria-hidden={g === 1 ? "true" : undefined}
          >
            {featuredPartners.map((p, i) => (
              <span key={`${p.name}-${g}-${i}`} className="partner-ribbon-cell">
                <a
                  className={`partner-ribbon-item${p.lead ? " lead" : ""}`}
                  href={`/partners/${p.slug}`}
                  tabIndex={g === 1 ? -1 : undefined}
                >
                  <span className="partner-ribbon-role">{p.role}</span>
                  <span className="partner-ribbon-name">{p.name}</span>
                </a>
                <span className="partner-ribbon-sep" aria-hidden>
                  ●
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
