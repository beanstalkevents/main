import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Hosted Meetings Program — Beanstalk" };

export default function TermsHostedMeetingsPage() {
  return (
    <LegalPage title="Terms of Hosted Meetings Program" lastUpdated="January 2025">
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        The Beanstalk Hosted Meetings Program facilitates 1:1 meetings between attendees during the conference. By participating in the Hosted Meetings Program, you agree to the following terms.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Program Overview</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        The Hosted Meetings Program uses technology to match attendees for 1:1 meetings based on mutual interests and business objectives. Meetings are scheduled in advance and take place during designated meeting blocks at the conference.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Attendee Responsibilities</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Participants must honor confirmed meeting requests. No-shows without advance notice may result in removal from the program. All attendees are expected to engage professionally and in good faith.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Modifications</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Beanstalk Events reserves the right to modify the Hosted Meetings Program at any time. Participants will be notified of material changes.
      </p>
    </LegalPage>
  );
}
