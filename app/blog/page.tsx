import SiteNav from "@/components/SiteNav";
import PartnerRibbon from "@/components/PartnerRibbon";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Beanstalk 2026",
  description: "Speaker profiles and insights from the Beanstalk community.",
};

export default function BlogIndex() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <SiteNav variant="solid" />
      <PartnerRibbon />

      {/* HERO */}
      <header className="relative hero-bleed" style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
            <a href="/" style={{ color: "#c7dccd" }}>Beanstalk</a>
            <span style={{ color: "#3d6358" }}>›</span>
            <span style={{ color: "#dfd5bc" }}>Blog</span>
          </nav>
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            Speaker Profiles
          </div>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 72px)", color: "#fcf9ec", lineHeight: 1.0 }}>
            The Beanstalk Blog
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#c7dccd", maxWidth: "500px" }}>
            Profiles, insights, and stories from the leaders joining us in Brooklyn.
          </p>
        </div>
      </header>

      {/* POSTS GRID */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col transition-all"
                style={{ border: "1px solid var(--beige)", background: "#fcf9ec" }}
              >
                {/* Cover image */}
                <div className="overflow-hidden" style={{ height: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: "#ba9e6e" }}>{post.author}</span>
                    <span className="text-xs" style={{ color: "#ba9e6e" }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontWeight: 700, fontSize: "18px", color: "#233c36", lineHeight: 1.2 }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#4a4a4a" }}>
                    {post.excerpt}
                  </p>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider mt-2 transition-colors"
                    style={{ color: "#315c52", letterSpacing: "0.08em" }}
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
