import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Hosted Meetings Program — Beanstalk" };

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", marginBottom: "12px" }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "NewSpirit, Georgia, serif", fontSize: "20px", color: "#233c36", marginTop: "32px", marginBottom: "8px", fontWeight: 700 }}>{children}</h2>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul style={{ paddingLeft: "24px", marginBottom: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>{children}</ul>
);
const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-base leading-relaxed" style={{ color: "#4a4a4a", listStyleType: "disc" }}>{children}</li>
);

function MeetingTable({ block, count, rows }: {
  block: string;
  count: string;
  rows: { num: number; start: string; brk: string; end: string }[];
}) {
  const tdStyle = { padding: "8px 12px", borderBottom: "1px solid #e5e5e5", fontSize: "14px", color: "#4a4a4a", verticalAlign: "top" as const };
  const thStyle = { ...tdStyle, fontWeight: 700, color: "#233c36", background: "#f7f5ee", borderBottom: "2px solid #dfd5bc" };
  return (
    <div style={{ marginBottom: "32px" }}>
      <p style={{ fontWeight: 700, color: "#233c36", marginBottom: "2px", fontSize: "15px" }}>{block}</p>
      <p style={{ color: "#ba9e6e", fontSize: "13px", marginBottom: "12px", fontWeight: 600 }}>{count}</p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #dfd5bc" }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: "40px" }}>#</th>
              <th style={thStyle}>Start</th>
              <th style={thStyle}>Break</th>
              <th style={thStyle}>End</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.num} style={{ background: r.num % 2 === 0 ? "#faf9f4" : "#ffffff" }}>
                <td style={tdStyle}>{r.num}</td>
                <td style={tdStyle}>{r.start}</td>
                <td style={{ ...tdStyle, color: "#888" }}>{r.brk}</td>
                <td style={tdStyle}>{r.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TermsHostedMeetingsPage() {
  return (
    <LegalPage title="Terms and Conditions for Hosted Meetings Program" lastUpdated="July 17, 2026">
      <P>These terms and conditions (<strong>&ldquo;Terms &amp; Conditions&rdquo;</strong>) apply to those individuals (<strong>&ldquo;Hosted Meetings Participant&rdquo;</strong>, <strong>&ldquo;you&rdquo;</strong>, or <strong>&ldquo;your&rdquo;</strong>) participating in Hosted Meetings (<strong>&ldquo;Hosted Meetings&rdquo;</strong>) on behalf of sponsors as part of Beanstalk Events Inc.&rsquo;s (<strong>&ldquo;Beanstalk&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, <strong>&ldquo;us&rdquo;</strong>, or <strong>&ldquo;our&rdquo;</strong>) Meetings Program (<strong>&ldquo;Meetings Program&rdquo;</strong>) scheduled to be held during Beanstalk on September 14 to 16, 2026 in Brooklyn (the <strong>&ldquo;Event&rdquo;</strong>).</P>
      <P>These Terms &amp; Conditions may be modified from time to time, so check back often. So that you are aware changes have been made, we will adjust the &ldquo;Last revised&rdquo; date at the beginning of this document. Continued participation in the Event by you will constitute your acceptance of any changes or revisions to these Terms &amp; Conditions.</P>

      <UL>
        <LI>We will arrange a series of 13-minute meetings (<strong>&ldquo;Hosted Meetings&rdquo;</strong>) between Hosted Retailers &amp; Brands (<strong>&ldquo;Hosted Buyers&rdquo;</strong>), and Hosted Meetings Participants. All Hosted Meetings will take place during Meeting Times, as part of the Event&rsquo;s Meetings Program. Notwithstanding the number of meetings purchased on behalf of any given Hosted Meetings Participant or in aggregate by all Hosted Meetings Participants, we do not guarantee any minimum number of Hosted Buyers or any minimum number of Hosted Meetings for any Hosted Meetings Participant. <em>The number of meetings arranged for any given Hosted Meetings Participant might be below the number purchased.</em></LI>
        <LI><strong>&ldquo;Hosted Retailer &amp; Merchant Buyers&rdquo;</strong> are those qualifying individuals from retailers and merchants (companies that are primarily in the direct-to-consumer business of online or physical retail of consumer goods and services, including traditional retailers, direct-to-consumer brands, online marketplaces, video or mobile games and restaurants) who identify themselves to Beanstalk as buyers or influencers of the purchase of technology and other solutions for their organizations, and who also agree to take up to four (4) 13-minute Hosted Meetings with Hosted Meetings Participants as part of the Hosted Program. Beanstalk provides complimentary tickets to the Event to these Hosted Buyers.</LI>
        <LI><strong>&ldquo;Hosted Meetings Participants&rdquo;</strong> are those individuals who (i) enrolled in the Meetings Program and were designated as Hosted Meetings Representatives for their organization, pursuant to a fully executed contract between their organization and Beanstalk (<strong>&ldquo;Contract&rdquo;</strong>), or (ii) enrolled in the Meetings Program and were designated as Hosted Meetings Representatives for their organization, following their organization directly purchasing Hosted Meetings as part of the Event.</LI>
        <LI><strong>&ldquo;Meeting Times&rdquo;</strong> are predetermined time slots during which Hosted Meetings take place. The Meeting Times are at the sole discretion of Beanstalk, will be provided to Hosted Buyers and Hosted Meetings Participants by Beanstalk and are subject to change by Beanstalk.</LI>
        <LI>Beanstalk will notify Hosted Meetings Participants of the specific times of their meetings within Meeting Times prior to the start of the Event. A failure on the part of Hosted Meetings Participants to be available for all Meeting Times may limit the ability of Beanstalk to arrange Hosted Meetings for those Hosted Meetings Participants.</LI>
        <LI>The number of Hosted Meetings purchased by any given Hosted Meetings Participant either directly or by their organization as part of a Contract is that Hosted Meetings Participant or organization&rsquo;s <strong>&ldquo;Hosted Meetings Cap&rdquo;</strong>. A Hosted Meetings Cap can be increased by purchasing additional Hosted Meetings at any time set forth by Beanstalk (deadlines apply at the sole discretion of Beanstalk).</LI>
        <LI>Hosted Meetings are priced as set forth in the Contract (the price of each meeting being the <strong>&ldquo;Price Per Meeting&rdquo;</strong>) or online during Beanstalk, and the Hosted Meetings Participant must pay an amount equal to the Hosted Meetings Cap multiplied by the Price Per Meeting (<strong>&ldquo;Meetings Payment Amount&rdquo;</strong>). Beanstalk has the right to increase the Price Per Meeting at any time.</LI>
        <LI>Beanstalk will complete a post event reconciliation to determine the number of <strong>&ldquo;Completed Hosted Meetings&rdquo;</strong> which is defined as the number of Hosted Meetings that (i) actually took place, (ii) would have taken place but for the absence of the Hosted Meetings Participant during the Hosted Meeting (including late arrivals resulting in Hosted Meetings that are less than 13 minutes in length), and (iii) would have taken place but for the cancellation of a Hosted Meeting by the Hosted Meetings Participant due to availability or for any other reason.</LI>
        <LI>If the number of Completed Hosted Meetings multiplied by the Price Per Meeting (averaged if more than one Price Per Meeting applies) is less than the Meetings Payment Amount, Beanstalk will provide a refund of the difference (<strong>&ldquo;Refund&rdquo;</strong>) within 60 days following the end of the Event (<strong>&ldquo;Refund Payment Date&rdquo;</strong>).</LI>
      </UL>

      <P>Hosted Meetings Participants must provide relevant information and respond to Beanstalk&rsquo;s requests by our stated deadlines, including:</P>
      <UL>
        <LI>Completing their profiles, which includes information about themselves and their organizations (&ldquo;Profiles&rdquo;). All Profiles are subject to the review and approval of Beanstalk.</LI>
        <LI>Selecting Hosted Buyers for potential meetings and designating such selections as Hosted Meeting Requests.</LI>
        <LI>Adding Hosted Meetings to their calendars as requested by Beanstalk.</LI>
        <LI>A Hosted Meetings Participant, or their organization, may add one or more non-attendees from their organization as Organization Admins. Organization Admins can complete certain pre-event tasks on behalf of Hosted Meeting Participants but cannot attend the Event unless they hold a valid ticket.</LI>
        <LI>Hosted Meetings Participants must comply with Beanstalk&rsquo;s Meetings Program rules and directives, including: holding a valid ticket, being available during Meeting Times, joining meetings at times designated by Beanstalk, preparing for meetings assuming Hosted Buyers have not prepared in advance, and notifying Beanstalk of any Hosted Buyer who was not present.</LI>
        <LI>Hosted Meetings Participants must NOT contact Hosted Buyers prior to the event (unless in the ordinary course of business unrelated to Hosted Meetings), change the scheduled time of their Hosted Meetings, or contact Hosted Buyers who do not show up for their meeting (unless in the ordinary course of business).</LI>
        <LI><strong>Feedback:</strong> The Hosted Meetings Participant must complete a feedback survey following the Event, providing specific evaluations for each meeting. Failure to provide feedback by the Refund Payment Date may delay your Refund until feedback has been completed.</LI>
        <LI>Beanstalk in its sole discretion determines the eligibility of any Hosted Meetings Participant or Hosted Buyer and may end enrollment at any time and for any reason.</LI>
        <LI>Time is of the essence in all Meetings Program deadlines.</LI>
      </UL>

      <H2>Meeting Times</H2>

      <MeetingTable
        block="Sept 15, 2026 — Morning Block (10:15am – 12:00pm)"
        count="7 meetings"
        rows={[
          { num: 1, start: "10:15am", brk: "10:27am – 10:30am (3 min)", end: "10:27am" },
          { num: 2, start: "10:30am", brk: "10:42am – 10:45am (3 min)", end: "10:42am" },
          { num: 3, start: "10:45am", brk: "10:57am – 11:00am (3 min)", end: "10:57am" },
          { num: 4, start: "11:00am", brk: "11:12am – 11:15am (3 min)", end: "11:12am" },
          { num: 5, start: "11:15am", brk: "11:27am – 11:30am (3 min)", end: "11:27am" },
          { num: 6, start: "11:30am", brk: "11:42am – 11:45am (3 min)", end: "11:42am" },
          { num: 7, start: "11:45am", brk: "11:57am – 12:00pm (3 min)", end: "11:57am" },
        ]}
      />

      <MeetingTable
        block="Sept 15, 2026 — Afternoon Block (2:35pm – 4:20pm)"
        count="7 meetings"
        rows={[
          { num: 1, start: "2:35pm", brk: "2:47pm – 2:50pm (3 min)", end: "2:47pm" },
          { num: 2, start: "2:50pm", brk: "3:02pm – 3:05pm (3 min)", end: "3:02pm" },
          { num: 3, start: "3:05pm", brk: "3:17pm – 3:20pm (3 min)", end: "3:17pm" },
          { num: 4, start: "3:20pm", brk: "3:32pm – 3:35pm (3 min)", end: "3:32pm" },
          { num: 5, start: "3:35pm", brk: "3:47pm – 3:50pm (3 min)", end: "3:47pm" },
          { num: 6, start: "3:50pm", brk: "4:02pm – 4:05pm (3 min)", end: "4:02pm" },
          { num: 7, start: "4:05pm", brk: "4:17pm – 4:20pm (3 min)", end: "4:17pm" },
        ]}
      />

      <MeetingTable
        block="Sept 16, 2026 — Morning Block (10:15am – 11:30am)"
        count="5 meetings"
        rows={[
          { num: 1, start: "10:15am", brk: "10:27am – 10:30am (3 min)", end: "10:27am" },
          { num: 2, start: "10:30am", brk: "10:42am – 10:45am (3 min)", end: "10:42am" },
          { num: 3, start: "10:45am", brk: "10:57am – 11:00am (3 min)", end: "10:57am" },
          { num: 4, start: "11:00am", brk: "11:12am – 11:15am (3 min)", end: "11:12am" },
          { num: 5, start: "11:15am", brk: "11:27am – 11:30am (3 min)", end: "11:27am" },
        ]}
      />
    </LegalPage>
  );
}
