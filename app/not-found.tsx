export const dynamic = "force-dynamic";

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#233c36", minHeight: "100vh", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "200px 24px 80px" }}>
          <div style={{ display: "inline-block", background: "#cdf765", color: "#233c36", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 12px", marginBottom: "32px" }}>
            404
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(40px, 7vw, 80px)", color: "#fcf9ec", lineHeight: 1.0, margin: "0 0 16px" }}>
            Page not found
          </h1>
          <p style={{ fontSize: "18px", color: "#c7dccd", maxWidth: "420px", margin: "0 0 40px", lineHeight: 1.6 }}>
            This page doesn&apos;t exist—but the conference does. September 14–16, 2026 in Brooklyn.
          </p>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#cdf765", color: "#233c36", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "12px 20px", textDecoration: "none" }}
          >
            ← Back to Beanstalk
          </Link>
        </div>
      </body>
    </html>
  );
}
