import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.beanstalkevents.com"),
  title: "Beanstalk 2026 — Industry City, Brooklyn",
  description:
    "The largest retail and DTC conference in America. September 14–16, 2026 at Industry City, Brooklyn. 1,000+ leaders. 10,000+ executive meetings.",
  openGraph: {
    title: "Beanstalk 2026",
    description: "The largest retail and DTC conference in America.",
    url: "https://www.beanstalkevents.com",
    siteName: "Beanstalk",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beanstalk 2026",
    description: "The largest retail and DTC conference in America.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
