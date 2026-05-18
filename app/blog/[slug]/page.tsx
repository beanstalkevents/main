import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Beanstalk`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <div style={{ background: "var(--cream)" }}>
      <Nav />

      {/* HERO */}
      <header className="relative" style={{ background: "#233c36", paddingTop: "120px" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 pb-16">
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
            <Link href="/" style={{ color: "#c7dccd" }}>Beanstalk</Link>
            <span style={{ color: "#3d6358" }}>›</span>
            <Link href="/blog" style={{ color: "#c7dccd" }}>Blog</Link>
            <span style={{ color: "#3d6358" }}>›</span>
            <span style={{ color: "#dfd5bc" }}>Profile</span>
          </nav>
          <div className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-6" style={{ background: "#cdf765", color: "#233c36", letterSpacing: "0.14em" }}>
            Speaker Profile
          </div>
          <h1 className="mb-4" style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 64px)", color: "#fcf9ec", lineHeight: 1.05, maxWidth: "800px" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#c7dccd", letterSpacing: "0.1em" }}>
            <span>{post.author}</span>
            <span style={{ color: "#3d6358" }}>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section style={{ background: "#fcf9ec" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-16">
          {/* Cover image */}
          <div className="md:col-span-1">
            <div className="overflow-hidden sticky top-24" style={{ border: "1px solid var(--beige)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full object-cover"
                style={{ maxHeight: 400, objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Body */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <p className="text-lg font-semibold leading-relaxed" style={{ color: "#233c36" }}>
              {post.excerpt}
            </p>
            {paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
                {para}
              </p>
            ))}

            {/* CTA */}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--beige)" }}>
              <p className="text-sm mb-4" style={{ color: "#4a4a4a" }}>
                Want to meet speakers like {post.title.split(",")[0]} at Beanstalk 2026?
              </p>
              <a
                href="/tickets"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-3"
                style={{ background: "#233c36", color: "#cdf765", letterSpacing: "0.08em" }}
              >
                🎟️ Request an Invite →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      <section style={{ background: "#233c36" }}>
        <div className="max-w-content mx-auto px-6 md:px-12 py-12">
          <div className="section-label dark">More profiles</div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="overflow-hidden" style={{ height: 140 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3 style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontWeight: 700, fontSize: "15px", color: "#fcf9ec", lineHeight: 1.2 }}>
                      {p.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#cdf765", letterSpacing: "0.08em" }}>
                      Read →
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
