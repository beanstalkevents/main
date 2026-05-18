import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import Script from "next/script";
import GAListener from "./components/GAListener";
import { getSiteUrl, isProduction } from "@/lib/seo";
import "./globals.css";

const GA_ID = "G-HQKR0JKMXZ";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Beanstalk 2026 — Industry City, Brooklyn",
  description:
    "The largest retail and DTC conference in America. September 14–16, 2026 at Industry City, Brooklyn. 1,000+ leaders. 10,000+ executive meetings.",
  alternates: { canonical: "/" },
  robots: isProduction()
    ? { index: true, follow: true }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
  openGraph: {
    title: "Beanstalk 2026",
    description: "The largest retail and DTC conference in America.",
    url: getSiteUrl(),
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>" />
      </head>
      <body>
        {/* Organization JSON-LD */}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beanstalk Events",
              legalName: "Beanstalk Events Inc.",
              url: "https://beanstalkevents.com",
              sameAs: [
                "https://www.linkedin.com/company/beanstalkevents",
                "https://www.youtube.com/@BeanstalkEvents",
              ],
            }),
          }}
        />

        {/* WebSite JSON-LD */}
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Beanstalk",
              url: "https://beanstalkevents.com",
            }),
          }}
        />

        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: false });
          `}
        </Script>
        <GAListener gaId={GA_ID} />

        {/* RB2B — anonymous visitor identification */}
        <Script id="rb2b" strategy="afterInteractive">
          {`!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/5NRP9HGL1YO1.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("5NRP9HGL1YO1");}();`}
        </Script>
      </body>
    </html>
  );
}
