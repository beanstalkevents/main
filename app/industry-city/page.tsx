import SiteNav from "@/components/SiteNav";
import PartnerRibbon from "@/components/PartnerRibbon";
import Footer from "@/components/Footer";
import IndustryCityHero from "@/components/IndustryCityHero";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industry City, Brooklyn — Beanstalk 2026",
  description:
    "Beanstalk 2026 takes place at Industry City in Brooklyn, NY — September 14–16, 2026.",
  alternates: { canonical: canonical("/industry-city") },
};

export default function IndustryCityPage() {
  return (
    <div style={{ background: "#0a0a0a", color: "#fcf9ec" }}>
      <SiteNav variant="hero" />
      <PartnerRibbon />
      <IndustryCityHero />
      <Footer />
    </div>
  );
}
