import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Lounge/Exhibitor Rules & Regulations — Beanstalk" };

export default function ExhibitorRulesPage() {
  return (
    <LegalPage title="Lounge / Exhibitor Rules & Regulations" lastUpdated="January 2025">
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        These rules apply to all companies and individuals operating a Lounge or exhibitor space at Beanstalk 2026. By confirming your sponsorship, you agree to comply with these regulations.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Setup & Breakdown</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Exhibitors will receive setup windows prior to the event opening. All materials must be confined to your designated space. Breakdown must be completed within the allotted window after the final session on the last day.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Content Standards</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        All signage, displays, and materials must be professional and appropriate for a business audience. Beanstalk Events reserves the right to require removal of any content deemed inappropriate or inconsistent with the event&apos;s brand standards.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Activities & Demonstrations</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        All Lounge activities and product demonstrations must be approved by Beanstalk Events in advance. Noise levels must not disrupt adjacent programming. Audio equipment requires prior approval.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Liability</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Exhibitors are responsible for their own materials, equipment, and staff. Beanstalk Events is not liable for loss or damage to exhibitor property. All exhibitors must carry appropriate insurance.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Questions</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Contact <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a> with any questions about exhibitor regulations.
      </p>
    </LegalPage>
  );
}
