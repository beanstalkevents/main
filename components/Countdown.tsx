"use client";

import { useEffect, useState } from "react";

// Sept 14, 2026, 12:00 PM EDT (UTC-4) → 16:00 UTC
const TARGET = new Date("2026-09-14T16:00:00Z").getTime();

function diff(now: number) {
  const ms = Math.max(0, TARGET - now);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

function Unit({ value, label }: { value: number; label: string }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        flex: 1,
        padding: "20px 12px",
      }}
    >
      <div
        style={{
          fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700,
          fontSize: "clamp(48px, 9vw, 120px)",
          lineHeight: 1,
          color: "#233c36",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {padded}
      </div>
      <div
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ba9e6e",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff>>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setT(diff(Date.now()));
    const id = setInterval(() => setT(diff(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="agenda" style={{ background: "#fcf9ec" }}>
      <div className="max-w-content mx-auto px-6 md:px-12 py-24">
        <div className="section-label">Schedule</div>
        <h2
          className="mb-3"
          style={{
            fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#233c36",
          }}
        >
          Beanstalk starts in
        </h2>
        <p className="text-base mb-10" style={{ color: "#4a4a4a" }}>
          September 14–16, 2026 · Industry City, Brooklyn
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            border: "1px solid var(--beige)",
            background: "#fff",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Unit value={t.days} label="Days" />
          <div style={{ width: "1px", background: "var(--beige)" }} />
          <Unit value={t.hours} label="Hours" />
          <div style={{ width: "1px", background: "var(--beige)" }} />
          <Unit value={t.minutes} label="Minutes" />
          <div style={{ width: "1px", background: "var(--beige)" }} />
          <Unit value={t.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
