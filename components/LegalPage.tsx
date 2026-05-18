import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      <header style={{ background: "#233c36", paddingTop: "100px" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-12">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
            <Link href="/" style={{ color: "#c7dccd" }}>Beanstalk</Link>
            <span style={{ color: "#3d6358" }}>›</span>
            <span style={{ color: "#dfd5bc" }}>Legal</span>
          </nav>
          <h1 style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontSize: "clamp(28px, 4vw, 52px)", color: "#fcf9ec", lineHeight: 1.05 }}>
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-xs mt-3 font-semibold uppercase tracking-wider" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </header>

      <section style={{ background: "#fcf9ec" }}>
        <div
          className="max-w-content mx-auto px-6 md:px-12 py-16"
          style={{ maxWidth: "760px" }}
        >
          <div className="prose-beanstalk flex flex-col gap-6">
            {children}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
