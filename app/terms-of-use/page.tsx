import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use — Beanstalk" };

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="January 2025">
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        By accessing or using the Beanstalk Events website and services, you agree to be bound by these Terms of Use. Please read them carefully.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Use of the Site</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        You may use this site for lawful purposes only. You may not use it in any way that violates applicable laws or regulations, or that is harmful to others.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Intellectual Property</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        All content on this site, including text, graphics, logos, and images, is the property of Beanstalk Events, Inc. and is protected by applicable intellectual property laws.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Contact</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Questions about these terms? Email <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a>.
      </p>
    </LegalPage>
  );
}
