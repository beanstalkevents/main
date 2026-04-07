import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry City, Brooklyn — Beanstalk 2026",
  description:
    "Beanstalk 2026 takes place at Industry City in Brooklyn, NY — September 14–16, 2026.",
};

const dining = [
  { name: "Japan Village", desc: "A Japanese market with six food stalls, an izakaya, a sake store, a specialty grocery, and more." },
  { name: "Hometown Bar-B-Que", desc: "A rustic BBQ spot featuring slow smoked meats, craft beer & live music on weekends." },
  { name: "Waku Waku", desc: "Traditional Japanese izakaya serving Teishoku lunch sets and full dinner service featuring yakitori and chuhai cocktails." },
  { name: "Frying Pan", desc: "An American eatery with an indoor bar, an outdoor courtyard, and a Game Room." },
];

const activities = [
  { emoji: "🏰", title: "Rock Climbing", desc: "Scale the castle walls" },
  { emoji: "🏹", title: "Archery", desc: "Join the Queensguard" },
  { emoji: "⚫️", title: "Pétanque", desc: "Royal lawn games" },
  { emoji: "🎳", title: "Bowling", desc: "Peasantry fun" },
  { emoji: "🍻", title: "Brewery & Distilleries", desc: "Drink mead with new friends" },
];

export default function IndustryCityPage() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden" style={{ background: "#233c36", paddingTop: "120px" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
            <a href="/" style={{ color: "#c7dccd" }}>Beanstalk</a>
            <span style={{ color: "#3d6358" }}>›</span>
            <span style={{ color: "#dfd5bc" }}>Location</span>
          </nav>
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            Brooklyn, New York
          </div>
          <h1 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(44px, 6vw, 80px)", color: "#fcf9ec", lineHeight: 1.0, maxWidth: "720px" }}>
            Industry City
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c7dccd", maxWidth: "560px" }}>
            571 2nd Ave, Brooklyn NY 11232 — between 33rd and 34th Street. Courtyard 7/8 gates for main entrance and registration.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid border-t" style={{ gridTemplateColumns: "repeat(3, 1fr)", borderColor: "rgba(255,255,255,0.08)" }}>
          {[
            { value: "550+", label: "Founder-led companies on campus" },
            { value: "$450M", label: "Campus redevelopment" },
            { value: "1910s", label: "Original founding era" },
          ].map((s, i) => (
            <div key={i} className="px-8 py-7 flex flex-col gap-1" style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <strong style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "28px", color: "#cdf765", lineHeight: 1 }}>{s.value}</strong>
              <span className="text-xs font-semibold uppercase" style={{ color: "#4a7a6a", letterSpacing: "0.12em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* MAP / ADDRESS */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Getting there</div>
              <h2 className="mb-4" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#233c36" }}>
                Venue Address
              </h2>
              <div className="flex flex-col gap-2 mb-6 text-base" style={{ color: "#4a4a4a" }}>
                <p><strong style={{ color: "#233c36" }}>Venue:</strong> Industry City</p>
                <p><strong style={{ color: "#233c36" }}>Address:</strong> 571 2nd Avenue, Brooklyn NY 11232</p>
                <p><strong style={{ color: "#233c36" }}>Entrance:</strong> Courtyard 7/8 gates on 2nd Ave between 33rd and 34th Street</p>
              </div>
              <a
                href="https://maps.app.goo.gl/oUYZxaHBgV3YGUmG7"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
                style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}
              >
                Open in Maps →
              </a>
            </div>
            <div>
              <div className="section-label">History</div>
              <h2 className="mb-4" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#233c36" }}>
                An Entrepreneurial Legacy
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "#4a4a4a" }}>
                Industry City was founded by iconic American entrepreneur <strong>Irving T. Bush</strong> in the early 20th century, known at the time as Bush Terminal—the first facility of its kind in NYC, employing more than 25,000 people.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
                One of the original entrepreneurial hubs in the US, it offered economies of scale that gave even the smallest companies access to facilities normally reserved for large, well-capitalized firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CITY TODAY */}
      <section style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label dark">The campus today</div>
          <h2 className="mb-6" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#fcf9ec" }}>
            Industry City Today
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#c7dccd", maxWidth: "720px" }}>
            A $450 million redevelopment modernized the campus to support the modern innovation economy. Today it&apos;s home to 550 founder-led companies buzzing with creatives across industries who build their businesses together on campus.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#c7dccd", maxWidth: "720px" }}>
            During Beanstalk you&apos;ll have opportunities to scale castle walls, become an expert archer, play pétanque, go bowling with new friends, and enjoy a selection of beers and spirits across five distilleries and beer halls within the city walls.
          </p>
        </div>
      </section>

      {/* DINING */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label">On campus</div>
          <h2 className="mb-10" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#233c36" }}>
            Dining Options
          </h2>
          <div className="grid md:grid-cols-2 gap-px" style={{ border: "1px solid var(--beige)" }}>
            {dining.map((d) => (
              <div key={d.name} className="p-7 flex flex-col gap-2" style={{ background: "#fcf9ec" }}>
                <h3 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "20px", color: "#233c36" }}>{d.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label dark">Productive playtime</div>
          <h2 className="mb-10" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#fcf9ec" }}>
            Activities at Beanstalk
          </h2>
          <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", border: "1px solid rgba(255,255,255,0.08)" }}>
            {activities.map((a) => (
              <div key={a.title} className="p-7 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)" }}>
                <span className="text-3xl">{a.emoji}</span>
                <h3 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "18px", color: "#fcf9ec" }}>{a.title}</h3>
                <p className="text-sm" style={{ color: "#c7dccd" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOUNGE */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Exhibit</div>
            <h2 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#233c36" }}>
              The Lounge Experience
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a" }}>
              The original Box Factory floor will house a new production line, showcasing some of the most innovative technology and infrastructure companies in the retail industry.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
              Each Lounge will be home to a unique series of Teardowns featuring the world&apos;s leading experts breaking down the inner workings of some of their greatest accomplishments. Lounges are also the primary gathering place for Table Talks—small groups of 5 to 6 individuals.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Teardown Sessions", desc: "Expert breakdowns of real accomplishments" },
              { label: "Table Talks", desc: "Peer learning in groups of 5–6" },
              { label: "Sponsor Lounges", desc: "Branded activations from leading vendors" },
              { label: "Product Demos", desc: "Live demos from the innovators themselves" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5" style={{ background: "#fcf9ec", border: "1px solid var(--beige)" }}>
                <span style={{ color: "#cdf765", background: "#233c36", padding: "4px 8px", fontSize: "11px", fontWeight: 600 }}>✓</span>
                <div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color: "#233c36", fontFamily: "NewSpirit, serif" }}>{item.label}</div>
                  <div className="text-xs" style={{ color: "#4a4a4a" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-8 px-6 md:px-12" style={{ background: "#cdf765" }}>
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "NewSpirit, Georgia, serif", color: "#233c36", fontSize: "clamp(18px, 2.5vw, 24px)" }}>
            September 14–16, 2026 in Brooklyn.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP-JFqLpDlqk5cnVsZ0s1RzJXu7oe6Jwmlb8WSI2JtjwaytA/viewform"
            target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-semibold tracking-wider uppercase px-5 py-3"
            style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}
          >
            Get Tickets →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
