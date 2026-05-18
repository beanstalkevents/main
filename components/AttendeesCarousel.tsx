import guests from "@/data/guests.json";

type Guest = { name: string; org: string; title: string; headshot: string };

const ROWS = 3;

function partition<T>(items: T[], rows: number): T[][] {
  const out: T[][] = Array.from({ length: rows }, () => []);
  items.forEach((it, i) => out[i % rows].push(it));
  return out;
}

function Card({ g }: { g: Guest }) {
  return (
    <div
      style={{
        position: "relative",
        flexShrink: 0,
        width: "165px",
        height: "165px",
        borderRadius: "14px",
        overflow: "hidden",
        background: "#1a2e29",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={g.headshot}
        alt={g.name}
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "32px 12px 10px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#fcf9ec",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {g.name}
        </div>
        {g.title && (
          <div
            style={{
              fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
              fontSize: "11px",
              color: "rgba(252,249,236,0.78)",
              lineHeight: 1.15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {g.title}
          </div>
        )}
        <div
          style={{
            fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
            fontSize: "11px",
            color: "#cdf765",
            lineHeight: 1.15,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {g.org}
        </div>
      </div>
    </div>
  );
}

function Row({ items, reverse, duration }: { items: Guest[]; reverse: boolean; duration: number }) {
  if (items.length === 0) return null;
  const loop = [...items, ...items];
  return (
    <div className="attendee-row-wrap" style={{ overflow: "hidden", padding: "6px 0" }}>
      <div
        className={reverse ? "attendee-row attendee-row-reverse" : "attendee-row"}
        style={{
          display: "flex",
          gap: "14px",
          width: "max-content",
          animationDuration: `${duration}s`,
        }}
      >
        {loop.map((g, i) => (
          <Card key={`${g.name}-${i}`} g={g} />
        ))}
      </div>
    </div>
  );
}

export default function AttendeesCarousel() {
  const data = guests as Guest[];
  const rows = partition(data, ROWS).filter((r) => r.length > 0);

  return (
    <section id="attendees" style={{ background: "#233c36" }}>
      <div className="max-w-content mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="section-label dark">Past attendees</div>
        <h2
          className="mb-4"
          style={{
            fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#fcf9ec",
          }}
        >
          Who&apos;s Coming
        </h2>
        <p className="text-base mb-2" style={{ color: "#c7dccd" }}>
          1,000+ founders and senior executives from the world&apos;s most innovative consumer brands.
        </p>
      </div>

      <div
        style={{
          paddingBottom: "60px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {rows.map((items, i) => (
          <Row
            key={i}
            items={items}
            reverse={i % 2 === 1}
            duration={320 + i * 40}
          />
        ))}
      </div>
    </section>
  );
}
