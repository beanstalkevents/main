import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = { title: "Lounge/Exhibitor Rules & Regulations — Beanstalk", alternates: { canonical: canonical("/exhibitor-rules") } };

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
const SUBLI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-base leading-relaxed" style={{ color: "#4a4a4a", listStyleType: "circle", marginLeft: "20px" }}>{children}</li>
);

export default function ExhibitorRulesPage() {
  return (
    <LegalPage title="Exhibitor Rules & Regulations" lastUpdated="November 8, 2024">
      <P>Each exhibitor (each such party an <strong>&ldquo;Exhibitor&rdquo;</strong>) at the Beanstalk (the <strong>&ldquo;Event&rdquo;</strong>) hereby agrees to abide by the terms and conditions of this agreement (this <strong>&ldquo;Agreement&rdquo;</strong>), together with such additional terms and conditions as may be adopted by Beanstalk Events Inc., a Delaware limited liability company, with an address at 41 West 82nd Street, 6B, New York, NY 10024 (<strong>&ldquo;Beanstalk&rdquo;</strong>) and provided to Exhibitor from time to time.</P>

      <H2>1. Term</H2>
      <UL>
        <LI>This Agreement shall remain in force from the date entered into by the parties until the last day of the Event unless terminated earlier in accordance with the provisions of this Agreement.</LI>
        <LI>Without prejudice to the termination rights set out in Section 6 or 7 below, either party has the right at any time to terminate this Agreement immediately by giving written notice to the other in the event that the other: (i) has committed a material breach and has not remedied such breach within fourteen (14) days of being required to do so by written notice; or (ii) files a voluntary petition in bankruptcy or similar relief; or (iii) suffers the entry by a court of an order approving a petition seeking reorganization, liquidation, dissolution, or similar relief.</LI>
        <LI>If this Agreement is terminated by Beanstalk: (i) where such termination occurs prior to commencement of the Event, Exhibitor shall be obliged to pay the Exhibit Fees; (ii) Beanstalk shall be entitled to re-sell the exhibit space; (iii) there shall be no obligation on Beanstalk to refund any sums paid; and (iv) if applicable, any Exhibitor&rsquo;s property at the Event shall be removed by Exhibitor immediately.</LI>
        <LI>Termination of this Agreement by either party for any reason shall be without prejudice to any rights or obligations that may have accrued as at the date of such termination.</LI>
      </UL>

      <H2>2. Assignment of Exhibit Space and Event Rights</H2>
      <UL>
        <LI>In exchange for a stand-alone exhibit fee or for an exhibit fee included as part of sponsorship fee (in either case, referred to herein as the <strong>&ldquo;Exhibit Fee&rdquo;</strong>), Beanstalk shall provide Exhibitor with an assigned exhibit space for certain hours defined by Beanstalk during the Event. Beanstalk reserves the right to assign, or relocate, exhibit areas or reconfigure the exhibition area in its sole discretion. Exhibit space sharing in whole or in part with any third party is expressly prohibited.</LI>
      </UL>

      <H2>3. Operation of Exhibits</H2>
      <UL>
        <LI>Displays in exhibit spaces must be designed and operated in a manner that respects the rights of other Exhibitors and attendees. Displays shall not block or obstruct the view of or create noise or other disturbance for a neighboring Exhibitor.</LI>
        <LI>The following activities are expressly prohibited in exhibit spaces: preparation of food or beverages, promotional contests that require physical skill, unauthorized taking of photographs, derogatory advertisements of other Exhibitors, or activities which would be deemed inaccurate, defamatory, abusive, profane or offensive by a reasonable person.</LI>
        <LI>Exhibitor warrants that it is legally entitled by ownership or license to use the items exhibited or materials relating to the activities carried out in exhibit space, and that the same shall not infringe the rights of any third party.</LI>
        <LI>Exhibit space must be staffed by at least one member of the Exhibitor&rsquo;s employees at all times during scheduled exhibit hours. Unless prior written permission is received from Beanstalk, all Exhibitor personnel must be 21 years of age or older.</LI>
        <LI>The Exhibitor shall ensure that the exhibit space is left in good order and in a clean condition at the end of the Event.</LI>
      </UL>

      <H2>4. Terms of Payment</H2>
      <UL>
        <LI>Payment of the Exhibit Fee is due in accordance with and as stated in the applicable invoice sent by Beanstalk to Exhibitor.</LI>
      </UL>

      <H2>5. Cancellation by Exhibitor</H2>
      <UL>
        <LI>Exhibitor acknowledges and agrees that actual occupancy of the exhibit space reserved by the Exhibitor is of the essence of this Agreement during and throughout the Event. In the event that Exhibitor does not occupy its allocated exhibit space by the opening time on the first day of the Event, Beanstalk may occupy, re-allocate to a third party or cause said space to be occupied in its sole discretion.</LI>
        <LI>Exhibitor shall forfeit the full amount of its Exhibit Fee in the event that Exhibitor cancels its commitment for some or all of its assigned exhibit space. The parties agree that this forfeiture represents a reasonable and genuine pre-estimate of the damages which would be suffered by Beanstalk in the event of Exhibitor&rsquo;s cancellation.</LI>
      </UL>

      <H2>6. Cancellation of Exhibit Space by Beanstalk</H2>
      <UL>
        <LI>Exhibit space may be canceled by Beanstalk for failure to make payments when due or failure by Exhibitor to comply with the applicable terms and conditions of this Agreement. If exhibit space is so canceled by Beanstalk, Exhibitor shall forfeit all payments made.</LI>
      </UL>

      <H2>7. Alteration or Cancellation of Event by Beanstalk</H2>
      <UL>
        <LI>In the event that the Event does not occur on the scheduled date for any reason, Beanstalk may determine in its sole discretion to roll forward this Agreement to an alternative date within 12 months of the scheduled date. In the event the Event is unable to be rescheduled within twelve (12) months, Exhibitor may elect to have the Exhibit Fee previously paid refunded, which refund will be Exhibitor&rsquo;s sole and exclusive remedy.</LI>
      </UL>

      <H2>8. Attendance</H2>
      <UL>
        <LI>Beanstalk shall use its commercially reasonable efforts to market the Event and attract attendees, but does not guarantee specific levels of attendance at the Event or any particular exhibit space location.</LI>
      </UL>

      <H2>9. Insurance</H2>
      <UL>
        <LI>Exhibitor and its independent contractors, at their sole expense, shall obtain and maintain during the Event the following insurance coverage and provide Beanstalk Events Inc. with a certificate of insurance at least thirty (30) days prior to use of the premises:</LI>
        <SUBLI>Worker&rsquo;s Compensation Insurance as required by local or state law;</SUBLI>
        <SUBLI>Employers&rsquo; Liability Insurance in minimum limits of $1,000,000 per occurrence;</SUBLI>
        <SUBLI>Commercial General Liability Insurance with minimum limits of at least $2,000,000 in any one occurrence and $2,000,000 in the aggregate;</SUBLI>
        <SUBLI>Personal Property Insurance on all personal property in the care, control or custody of an insured party.</SUBLI>
        <LI>All insurance policies shall be with insurers rated at least A VII by AM Best, and be endorsed to provide thirty (30) days prior written notice of cancellation, non-renewal or reduction in coverage.</LI>
      </UL>

      <H2>10. Security</H2>
      <UL>
        <LI>In no case will Beanstalk be responsible for theft, loss or damage to Exhibitor&rsquo;s products or exhibit space or display. Exhibitor agrees that it is wholly responsible for protecting its property on and off the premises.</LI>
      </UL>

      <H2>11. Liability</H2>
      <UL>
        <LI>Beanstalk shall not be liable for any injury to persons or damage to property arising out of the acts or omissions of Exhibitor, its employees, agents or independent contractors. Exhibitor shall indemnify, defend and hold harmless Beanstalk against all claims, damages, losses, costs and expenses (including reasonable attorneys&rsquo; fees) arising from Exhibitor&rsquo;s participation in the Event.</LI>
      </UL>

      <H2>12. Governing Law</H2>
      <P>This Agreement shall be governed by the laws of the State of New York. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of the federal and state courts located in New York.</P>

      <H2>13. Contact</H2>
      <P>Questions about these Exhibitor Rules &amp; Regulations? Email us at <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a>.</P>
    </LegalPage>
  );
}
