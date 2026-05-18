import SiteNav from "@/components/SiteNav";
import PartnerRibbon from "@/components/PartnerRibbon";
import Footer from "@/components/Footer";
import TicketsBody from "@/components/TicketsBody";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets — Beanstalk 2026",
  description:
    "Beanstalk is invite-only. Apply for a Brand invite, or self-serve tickets for Investors, Solution Providers, and Media & Creators. September 14–16, 2026, Industry City, Brooklyn.",
};

export default function TicketsPage() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <SiteNav variant="solid" />
      <PartnerRibbon />
      <TicketsBody />
      <Footer />
    </div>
  );
}
