import { PARTNERS } from "@/lib/partners";

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

export default function PartnersSection() {
  return (
    <section id="partners" className="partners-section">
      <div className="partners-section-inner">
        <div className="partners-section-eyebrow">In partnership with</div>
        {PARTNERS.map((p) => (
          <div key={p.name} className={`partners-row${p.lead ? " lead" : ""}`}>
            <div className="partners-role">{p.role}</div>
            <div className="partners-name">
              {p.lead ? formatLeadName(p.name) : p.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
