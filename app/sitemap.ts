import { blogPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.beanstalkevents.com";

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/industry-city`, priority: 0.8 },
    { url: `${base}/blog`, priority: 0.8 },
    { url: `${base}/best-ecommerce-conference`, priority: 0.9 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms-of-use`, priority: 0.3 },
    { url: `${base}/terms-of-hosted-meetings`, priority: 0.3 },
    { url: `${base}/terms-of-attendance`, priority: 0.3 },
    { url: `${base}/exhibitor-rules`, priority: 0.3 },
  ].map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
