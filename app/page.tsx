import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beanstalk 2026 — The DTC & Retail Conference",
  description:
    "The largest and most important retail event uniting the Disruptor Brands ecosystem. September 14–16, 2026 at Industry City, Brooklyn.",
};

const testimonials = [
  {
    name: "Sean Frank",
    title: "CEO at Ridge",
    quote:
      "The best founders in America are here. I've met friends for life at this thing… the tips and practical stuff you take out of this is best in class.",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/1dd91b30-e453-45dc-8d83-97d1a271aa60/4.jpg",
  },
  {
    name: "Larry Fitzgerald Jr.",
    title: "NFL All-Pro Wide Receiver & Investor",
    quote:
      "This is one of the premier conferences in the country… you're in the epicenter of commerce here in the country, in New York.",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/8321852d-8819-41ad-9cb6-127666961b69/7.jpg",
  },
  {
    name: "Harley Finkelstein",
    title: "President at Shopify",
    quote:
      "Beanstalk is basically the mecca right now for merchants, builders, entrepreneurs, and Shopify app partners.",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/7ad6e934-c441-43b6-93cc-d9c7ed679740/10.jpg",
  },
  {
    name: "Bruce Smith",
    title: "Founder at Hydrow",
    quote:
      "The best event of the year. Their team does an amazing job curating attendees to make sure that everyone attending brings real value to the table.",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/4b24074c-cd3c-4474-8012-08ef13e4415c/6.jpg",
  },
  {
    name: "Olivia Kory",
    title: "Chief Strategy Officer at Haus",
    quote:
      "I haven't been this excited for a non-Haus hosted event in… ever. Not sure how they managed to get such an amazing list of brands and attendees.",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/120763b9-7f08-4cfe-817e-dddeb7e0437b/8.jpg",
  },
  {
    name: "Paul Yeh",
    title: "Co-Founder & Partner at Conductive VC",
    quote:
      "What an amazing conference with super high quality attendees. I am going to RSVP for next year as soon as registration opens!",
    img: "https://images.squarespace-cdn.com/content/v1/66c4e557a4ad6b7723de12da/9d5544e9-9a9e-4635-9e8a-018f55d25718/9.jpg",
  },
];

const stats = [
  { value: "10,000+", label: "1:1 Executive Meetings" },
  { value: "1,000+", label: "Leaders" },
  { value: "250+", label: "Boardrooms & Power Lunches" },
  { value: "100+", label: "Legendary Speakers" },
];

const whatToExpect = [
  { num: "01", icon: "🤝", title: "10,000+ Executive Meetings", desc: "Powered by real tech that puts you in front of the right people—senior executives only." },
  { num: "02", icon: "🍽", title: "200+ Power Lunches", desc: "Carefully curated groups of up to 8 senior executives across relevant discussion topics." },
  { num: "03", icon: "🎳", title: "40+ Fun Activities", desc: "Relationship building made easier and less awkward. Designed with introverts in mind." },
  { num: "04", icon: "🎙", title: "50+ Boardroom Discussions", desc: "Intimate groups of 15–25 with legends of the industry. Not cold keynotes on massive stages." },
  { num: "05", icon: "🥩", title: "30+ Private Dinners", desc: "Breaking bread is one of the best ways to get to know each other. Leaders only." },
  { num: "06", icon: "🏙", title: "Industry City, Brooklyn", desc: "One of NYC's most iconic campuses—550 founder-led companies, waterfront views, world-class dining." },
];

const verticals = [
  "🥗 Food & Beverage", "🪒 Personal Care", "🐶 Pets", "👕 Apparel & Footwear",
  "📺 Electronics", "🏋🏻 Health & Wellness", "🪑 Home & Decor", "🧸 Toys & Games", "⚽️ Sports & Outdoors",
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      {/* HERO */}
      <header id="hero" className="relative overflow-hidden" style={{ background: "#233c36", paddingTop: "120px", paddingBottom: 0 }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16">
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            September 14–16, 2026 · Industry City, Brooklyn
          </div>
          <h1 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(48px, 7vw, 92px)", color: "#fcf9ec", lineHeight: 1.0, maxWidth: "820px" }}>
            Where Disruptor<br />Brands Come<br />to Grow
          </h1>
          <p className="mb-10 text-lg leading-relaxed" style={{ color: "#c7dccd", maxWidth: "540px" }}>
            The largest and most important retail event uniting the Disruptor Brands ecosystem. Founders, operators, and investors—all in one room.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP-JFqLpDlqk5cnVsZ0s1RzJXu7oe6Jwmlb8WSI2JtjwaytA/viewform"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase px-6 py-3"
            style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.08em" }}
          >
            🎟️ Request an Invite
          </a>
        </div>
        <div className="grid border-t" style={{ gridTemplateColumns: "repeat(4, 1fr)", borderColor: "rgba(255,255,255,0.08)" }}>
          {stats.map((s, i) => (
            <div key={i} className="px-8 py-7 flex flex-col gap-1" style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <strong style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "28px", color: "#cdf765", lineHeight: 1 }}>{s.value}</strong>
              <span className="text-xs font-semibold uppercase" style={{ color: "#4a7a6a", letterSpacing: "0.12em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: "#141414" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="section-label dark">Social proof</div>
          <h2 className="mb-12" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 42px)", color: "#fcf9ec" }}>
            What people are saying
          </h2>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col gap-4 p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-3">
                  <div className="rounded-full overflow-hidden flex-shrink-0" style={{ width: 44, height: 44, background: "#315c52" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#fcf9ec", fontFamily: "NewSpirit, serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#ba9e6e" }}>{t.title}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#c7dccd" }}>&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS BEANSTALK */}
      <section id="about" style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">About</div>
            <h2 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", color: "#233c36", lineHeight: 1.15 }}>
              What is Beanstalk?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a" }}>
              Beanstalk is the largest and most important retail event that unites the entire Disruptor Brands ecosystem. Disruptor Brands—also known as direct-to-consumer or digitally native brands—typically generate annual revenues from double-digit millions to single-digit billions, and are the defining brands of tomorrow.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
              Attendees include Brand Founders & Senior Executives, Commerce Enablement Companies, Social Media & Marketplace Platforms, Lenders & Investors, and Influencers & Creators.
            </p>
          </div>
          <div>
            <div className="section-label">Verticals</div>
            <h2 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(26px, 3.5vw, 38px)", color: "#233c36", lineHeight: 1.15 }}>
              Retail categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {verticals.map((v) => (
                <span key={v} className="text-sm px-3 py-1.5 font-semibold" style={{ background: "#c7dccd", color: "#233c36", fontSize: "12px" }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section id="expect" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20">
          <div className="section-label dark">Format</div>
          <h2 className="mb-12" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#fcf9ec", lineHeight: 1.1 }}>
            This isn&apos;t your grandpa&apos;s conference
          </h2>
          <div className="grid gap-px" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", border: "1px solid rgba(255,255,255,0.08)" }}>
            {whatToExpect.map((item) => (
              <div key={item.num} className="p-7 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold" style={{ color: "#cdf765", fontFamily: "NewSpirit, serif" }}>{item.num}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "18px", color: "#fcf9ec" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#c7dccd" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT BAR */}
      <div className="py-8 px-6 md:px-12" style={{ background: "#cdf765" }}>
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "NewSpirit, Georgia, serif", color: "#233c36", fontSize: "clamp(18px, 2.5vw, 26px)" }}>
            And just to remind you again — it&apos;s the leaders who come out to Beanstalk.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScP-JFqLpDlqk5cnVsZ0s1RzJXu7oe6Jwmlb8WSI2JtjwaytA/viewform"
            target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 text-xs font-semibold tracking-wider uppercase px-5 py-3"
            style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}
          >
            Request an Invite →
          </a>
        </div>
      </div>

      {/* AGENDA */}
      <section id="agenda" style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20">
          <div className="section-label">Schedule</div>
          <h2 className="mb-4" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#233c36" }}>Agenda</h2>
          <p className="text-base mb-8" style={{ color: "#4a4a4a" }}>September 14–16, 2026 · Industry City, Brooklyn</p>
          <div className="grid grid-cols-3 gap-px" style={{ border: "1px solid var(--beige)" }}>
            {["Sunday, Sept 14", "Monday, Sept 15", "Tuesday, Sept 16"].map((day) => (
              <div key={day} className="p-6 flex flex-col gap-3" style={{ background: "#fcf9ec" }}>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#ba9e6e" }}>{day}</div>
                <p className="text-sm" style={{ color: "#4a4a4a" }}>Full agenda coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTENDEES */}
      <section id="attendees" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20">
          <div className="section-label dark">Past attendees</div>
          <h2 className="mb-4" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#fcf9ec" }}>Who&apos;s Coming</h2>
          <p className="text-base mb-10" style={{ color: "#c7dccd" }}>1,000+ founders and senior executives from the world&apos;s most innovative consumer brands.</p>
          <div className="flex items-center justify-center py-16" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(199,220,205,0.3)", fontSize: "13px" }}>
            Attendee grid — populated from master data set
          </div>
        </div>
      </section>

      {/* SPEAK */}
      <section id="speak" style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label">Apply</div>
            <h2 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#233c36", lineHeight: 1.1 }}>
              Speak at Beanstalk
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a" }}>
              We curate every speaker. If you have something genuinely useful to share with the DTC and retail community, we want to hear from you. No pitches. No fluff.
            </p>
            <a href="https://speak.beanstalksummit.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
              style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}>
              Apply to Speak →
            </a>
          </div>
          <div className="p-8 flex flex-col gap-0" style={{ background: "#233c36", border: "1px solid rgba(255,255,255,0.08)" }}>
            {["Boardroom Discussions (15–25 people)", "Teardown Sessions", "Table Talks (5–6 people)", "Main Stage (select speakers)"].map((format) => (
              <div key={format} className="flex items-center gap-3 py-4 border-b text-sm" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#c7dccd" }}>
                <span style={{ color: "#cdf765" }}>✓</span>{format}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section id="sponsor" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label dark">Partner</div>
            <h2 className="mb-5" style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#fcf9ec", lineHeight: 1.1 }}>
              Sponsor Beanstalk
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#c7dccd" }}>
              Put your brand in front of 1,000+ decision-makers from the world&apos;s most innovative consumer companies. Lounge activations, Private Dinners, Title sponsorships and more.
            </p>
            <a href="mailto:daniel@beanstalkevents.com"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
              style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.08em" }}>
              Get Sponsorship Info →
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { tier: "Title Sponsor", desc: "Maximum visibility across all touchpoints" },
              { tier: "Private Dinner", desc: "Host 20–30 senior executives at your table" },
              { tier: "Lounge Activation", desc: "Branded space in the main conference hall" },
              { tier: "Power Lunch", desc: "Curated roundtable with 8 decision-makers" },
            ].map((s) => (
              <div key={s.tier} className="flex items-center justify-between px-5 py-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: "#fcf9ec", fontFamily: "NewSpirit, serif" }}>{s.tier}</div>
                  <div className="text-xs" style={{ color: "#c7dccd" }}>{s.desc}</div>
                </div>
                <span style={{ color: "#cdf765" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
