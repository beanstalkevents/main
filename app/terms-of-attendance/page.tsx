import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Attendance & Participation — Beanstalk" };

export default function TermsAttendancePage() {
  return (
    <LegalPage title="Terms of Attendance & Participation" lastUpdated="January 2025">
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        By registering for and attending Beanstalk 2026, you agree to these Terms of Attendance and Participation. These terms apply to all attendees, speakers, sponsors, and guests.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Code of Conduct</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        All attendees are expected to treat fellow attendees, speakers, sponsors, and staff with respect. Harassment of any kind will not be tolerated and may result in immediate removal from the event without refund.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Photography & Recording</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        By attending Beanstalk, you consent to being photographed and recorded for promotional purposes. If you have concerns about specific sessions, please contact our team in advance.
      </p>
      <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "22px", color: "#233c36" }}>Cancellation Policy</h2>
      <p className="text-base leading-relaxed" style={{ color: "#4a4a4a" }}>
        Ticket cancellations made more than 30 days before the event are eligible for a full refund. Cancellations within 30 days are non-refundable but transferable. Beanstalk Events reserves the right to cancel or reschedule the event.
      </p>
    </LegalPage>
  );
}
