import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Attendance & Participation — Beanstalk" };

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", marginBottom: "12px" }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontSize: "20px", color: "#233c36", marginTop: "28px", marginBottom: "8px", fontWeight: 700 }}>{children}</h2>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul style={{ paddingLeft: "24px", marginBottom: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>{children}</ul>
);
const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-base leading-relaxed" style={{ color: "#4a4a4a", listStyleType: "disc" }}>{children}</li>
);

export default function TermsAttendancePage() {
  return (
    <LegalPage title="Terms of Attendance and Participation" lastUpdated="April 13, 2026">
      <P>As a registered attendee or participant (<strong>&ldquo;you&rdquo;</strong>) in Beanstalk (the <strong>&ldquo;Event&rdquo;</strong>) you agree to these terms and conditions (collectively, the <strong>&ldquo;Agreement&rdquo;</strong>) with Beanstalk Events Inc. (<strong>&ldquo;Beanstalk&rdquo;</strong>). If you are completing the registration on behalf of another individual, you warrant that you have made the attendee or participant aware of this Agreement and that he or she has accepted these terms and conditions.</P>

      <H2>1. Attendee Requirements</H2>
      <UL>
        <LI><strong>Admittance.</strong> Your registration entitles you only to admittance to the Event. All other costs associated with your attendance (e.g., travel and accommodation expenses) shall be borne solely by you.</LI>
        <LI><strong>Use of Likeness.</strong> By attending the Event you grant Beanstalk the right at the Event to record, film, photograph, or capture your likeness in any media and to distribute, broadcast, use, or otherwise disseminate, in perpetuity, such media without any further approval from or any payment to you.</LI>
        <LI><strong>Event Content.</strong> Beanstalk, in its sole discretion, reserves the right to change any and all aspects of the Event, including but not limited to, the Event name, themes, content, programs, speakers, moderators, venue and time.</LI>
        <LI><strong>Identification.</strong> At time of check in, you must provide a form of photo identification.</LI>
        <LI><strong>Attendee Badge Usage.</strong> Attendee badges must be worn at all times in Event areas.</LI>
        <LI><strong>Visa Requirements.</strong> It is solely your responsibility to comply with any government visa requirements and failure to do so does not constitute a basis for a refund.</LI>
        <LI>You will treat our staff, visitors, other customers and service providers with fairness, integrity, dignity and respect.</LI>
        <LI>You will respect the values, beliefs, cultures and religions of such persons.</LI>
        <LI>You will comply with all reasonable instructions given by our employees whilst participating in our events.</LI>
      </UL>

      <H2>2. Prohibited Conduct</H2>
      <UL>
        <LI>No form of harassment, victimization, bullying, discrimination or threatening, malicious or abusive language or conduct will be tolerated towards our staff, visitors, other customers or service providers.</LI>
        <LI><strong>Limitations on Use.</strong> By registering, you agree not to share, transfer, sell or trade your badge. If you violate this policy, Beanstalk may cancel your attendance and retain any payments.</LI>
        <LI><strong>Photography, Recording, and Videotaping.</strong> You may not record audio or video of sessions at the Event. Beanstalk allows cameras on the show floor. You may take pictures within the show for purposes of company or annual reports, company media pieces, marketing materials, etc.</LI>
        <LI><strong>Denial of Admission.</strong> Beanstalk reserves the right to deny admission to anyone for any reason.</LI>
        <LI><strong>Hacking, Unauthorized Software Access or Modification:</strong> Any attempts to insert code, scripts, use unauthorized tools or otherwise hack, access or modify the software Beanstalk provides will result in immediate cancellation (with no notice or refund) of your attendance.</LI>
      </UL>

      <H2>3. Fees</H2>
      <UL>
        <LI><strong>Payment.</strong> Applicable fees are due upon registration. If payment is insufficient or declined for any reason, Beanstalk may refuse to admit you.</LI>
        <LI><strong>Taxes.</strong> Fees may be subject to sales tax, value added tax, or other taxes and duties, which, if applicable, will be charged to you in addition to the fees.</LI>
        <LI><strong>No Retroactive Fees Adjustments.</strong> Once you have registered, your fees will not be adjusted downward based on any sponsorship, discount or any other reason.</LI>
        <LI><strong>Discount Codes.</strong> No discount codes will be honored for onsite attendance. Discount codes may not be used with certain promotions.</LI>
      </UL>

      <H2>4. Cancellation, Substitution and Lost Badge Policy</H2>
      <UL>
        <LI><strong>Attendee Fees are Nonrefundable.</strong> Beanstalk does not refund fees.</LI>
        <LI><strong>No Carry Over Fees.</strong> There will be no carry over of registrations or fees to subsequent events.</LI>
        <LI><strong>Badge Issuance.</strong> Once you have received your badge on site, it cannot be changed, substituted or reissued to a different person.</LI>
        <LI><strong>Substitutions.</strong> Ticket transfers to other individuals from your organization are possible using the Beanstalk platform. Recipients of ticket transfers made after August 29, 2026 will be unable to participate in Beanstalk&rsquo;s Meetings Program. The final date for ticket transfers is August 29, 2026.</LI>
      </UL>

      <H2>5. Privacy Policy</H2>
      <P>Beanstalk is committed to protecting the privacy of its attendees and participants. Beanstalk&rsquo;s privacy policy is available at <a href="/privacy" style={{ color: "#315c52" }}>https://www.beanstalkevents.com/privacy</a>.</P>

      <H2>6. Intellectual Property</H2>
      <P>All intellectual property rights in and to the Event, the Event content, and all materials distributed at or in connection with the Event are owned by Beanstalk or the Event sponsors or speakers at the Event. You may not use or reproduce or allow anyone to use or reproduce any trademarks (including without limitation &ldquo;Beanstalk&rdquo;) or other trade names appearing at the Event without the prior written permission of Beanstalk.</P>

      <H2>7. Disclaimer of Warranties, Limitation of Liability</H2>
      <UL>
        <LI>Beanstalk gives no warranties in respect of any aspect of the Event or any materials related thereto and, to the fullest extent possible under the laws governing this Agreement, disclaims all implied warranties, including but not limited to warranties of fitness for a particular purpose, accuracy, timeliness, and merchantability.</LI>
        <LI>Except as required by law, Beanstalk shall not be liable for any direct, indirect, special, incidental, or consequential costs, damages or losses arising directly or indirectly from the Event.</LI>
        <LI>The maximum aggregate liability of Beanstalk for any claim in any way connected with the Event shall be limited to the amount paid by you to Beanstalk under this Agreement.</LI>
      </UL>

      <H2>8. Miscellaneous</H2>
      <P>This Agreement shall be governed by the internal laws of the State of New York and the parties shall submit to the exclusive jurisdiction of the federal and State courts located in the State of New York. Neither party shall be liable for any failure to fulfill its obligations under this agreement due to causes beyond its control, including but not limited to, fire, earthquake, epidemic, pandemic or any other Force Majeure Event. Without limiting the foregoing, Beanstalk shall not be liable for the cancellation or postponement of the Event for a period longer than twelve (12) months as a result of any such Force Majeure Event, and your sole and exclusive remedy will be the reimbursement of the ticket fee.</P>

      <H2>9. Terms of Participation for Beanstalk&rsquo;s Meetings Program</H2>
      <UL>
        <LI><strong>Registration deadlines.</strong> If you register your ticket before midnight of Monday May 26, 2026, your Beanstalk ticket entitles you to inclusion in Beanstalk&rsquo;s Meetings Program. No extensions or exceptions can be granted to this deadline. Individuals from Sponsor organizations who will be designated as Hosted Meetings Representatives must register before midnight of Monday August 25, 2026 (only applies to Sponsors who have purchased Hosted Meetings).</LI>
        <LI><strong>Deadlines are subject to change</strong> at the discretion of Beanstalk.</LI>
        <LI><strong>Pre-Event process and timelines.</strong> Beanstalk will provide you with clear guidelines and instructions on the inputs required from you (and associated deadlines) preceding the Event as part of the Meetings Program. Failure to provide inputs on a timely basis will result in a sub-optimal experience and may result in your inability to participate in the Meetings Program.</LI>
        <LI><strong>Meetings.</strong> All meetings that Beanstalk schedules are double opt-in (both participants must express interest in meeting each other) and subject to onsite availability, interest levels, and other scheduling factors. Beanstalk does not guarantee that participants will receive meetings.</LI>
      </UL>
    </LegalPage>
  );
}
