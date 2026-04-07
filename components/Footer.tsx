import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: "#141414", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "24px", color: "#cdf765" }}>
            Beanstalk
          </span>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(199,220,205,0.5)", letterSpacing: "0.1em" }}>
            September 14–16, 2026 · Industry City, Brooklyn
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms-of-use" },
            { label: "Hosted Meetings Terms", href: "/terms-of-hosted-meetings" },
            { label: "Attendance Terms", href: "/terms-of-attendance" },
            { label: "Exhibitor Rules", href: "/exhibitor-rules" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="footer-link"
              style={{ color: "rgba(199,220,205,0.4)", fontSize: "11px" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 md:px-12 pb-6 text-xs" style={{ color: "rgba(199,220,205,0.25)", fontSize: "11px" }}>
        © Beanstalk Events, Inc.
      </div>
    </footer>
  );
}
