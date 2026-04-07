import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Beanstalk" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="January 2025">
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Beanstalk Events, Inc. (&ldquo;Beanstalk,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or attend our events.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Information We Collect</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        We collect information you provide directly to us, such as when you register for an event, request an invitation, or contact us. This may include your name, email address, company, title, and other professional information.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>How We Use Your Information</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        We use your information to process registrations, facilitate networking at events, send updates about Beanstalk, and improve our services. We do not sell your personal information to third parties.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Contact</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        For privacy-related questions, contact us at <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a>.
      </p>
    </LegalPage>
  );
}
