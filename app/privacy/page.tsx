import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Beanstalk" };

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", marginBottom: "12px" }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", fontSize: "20px", color: "#233c36", marginTop: "28px", marginBottom: "8px", fontWeight: 700 }}>{children}</h2>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul style={{ paddingLeft: "24px", marginBottom: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>{children}</ul>
);
const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="text-base leading-relaxed" style={{ color: "#4a4a4a", listStyleType: "disc" }}>{children}</li>
);

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="November 8, 2024">
      <P>This Privacy Policy describes how Beanstalk, organized by Beanstalk Events Inc., (<strong>&ldquo;Company,&rdquo;</strong> <strong>&ldquo;we,&rdquo;</strong> <strong>&ldquo;us&rdquo;</strong> or <strong>&ldquo;our&rdquo;</strong>) collects, stores, uses, discloses, and transfers your Personal Information (as defined below) through your use of our websites, mobile apps, or events (<strong>&ldquo;Services&rdquo;</strong>). This Privacy Policy applies to all Services where it is linked or referenced, including on our event websites. By accessing and using our Services or attending events, you acknowledge you have read and understood our privacy practices as described in this Privacy Policy.</P>
      <P>The term <strong>&ldquo;Personal Information&rdquo;</strong> as used herein includes any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular individual or household, and includes any information that is subject to applicable data protection laws.</P>

      <H2>Information We Collect</H2>
      <P>Depending on how you interact with our Services, we may collect the following information:</P>
      <UL>
        <LI><strong>Communications between you and Company.</strong> When you communicate with us, such as through e-mail, text message, or by submitting an inquiry through a request form on our website, we may collect and save a record of your communication and any Personal Information provided during the communication.</LI>
        <LI><strong>Registration information.</strong> When you register to attend our event, or register for a user account on our Services, we will ask you for certain Personal Information such as your name, contact information, and other registration details and preferences like payment information.</LI>
        <LI><strong>Exhibitor and Sponsorship information.</strong> If you are an exhibitor, partner or sponsor for one of our events, we may collect additional information about you and/or your entity, including your name, contact information, and payment information.</LI>
        <LI><strong>Information you provide to us.</strong> When you request information from us, contact us, or join our email list, we collect Personal Information in order to communicate with you and send you communications, including marketing communications that you opt-in to.</LI>
        <LI><strong>Automatically collected technical information</strong> such as traffic data, location data, logs, and other communication data and the resources that you access and use on the Site.</LI>
        <LI><strong>Device information.</strong> Information about your computer and internet connection, including your IP address, operating system, and browser type.</LI>
        <LI><strong>Information collected from third parties:</strong> From time to time, we may receive the categories of personal information described above from authorized third parties and sources other than through our Service, such as our partners and exhibitors. This may happen, for example, if your employer is exhibiting or sponsoring an event and signs you up for the event or shares your contact details for purposes of event coordination, or if a co-sponsor of an event provides us with your contact details for purposes of communications about the event.</LI>
      </UL>

      <H2>How We Use Information Collected</H2>
      <P>We use the Personal Information we collect from you for the following purposes:</P>
      <UL>
        <LI>To provide our Services.</LI>
        <LI>To notify you of offers or promotions that we believe may be of interest to you, or send you marketing materials, including our newsletter.</LI>
        <LI>To send you information about events and how to register as a sponsor or exhibitor.</LI>
        <LI>To process your event registration.</LI>
        <LI>To perform actions at your direction and to respond to inquiries.</LI>
        <LI>To improve user experiences by making our Services easier to use and navigate.</LI>
        <LI>To develop and test new services and features.</LI>
        <LI>For other legitimate business purposes.</LI>
      </UL>

      <H2>How We Share and/or Disclose Information</H2>
      <P>We may share or disclose information to the following categories of third parties and for the following reasons:</P>
      <UL>
        <LI><strong>Service Providers or Processors.</strong> We may disclose information to third-party service providers or contractors (processors) who use this information to perform services for us, such as hosting providers, auditors, advisors, consultants, customer service and/or support providers and other similar service providers.</LI>
        <LI><strong>Event Sponsors and Partners.</strong> We may share information with third parties that sponsor our events or otherwise partner with us to provide the Services. For example, we may share the list of event attendees with our event sponsors or exhibitors.</LI>
        <LI><strong>Advertising and Marketing Partners.</strong> We may share information with third parties that provide advertising, campaign measurement, promotions, online and/or mobile analytics, and related services.</LI>
        <LI><strong>Related Entities.</strong> We may share information with our parent companies, subsidiaries, or other related entities.</LI>
        <LI><strong>Law Enforcement.</strong> Under certain circumstances, we may be required to disclose your information if required to do so by law or in response to valid requests by public authorities.</LI>
        <LI><strong>Legal Requirements.</strong> We may disclose your information to law enforcement, government officials, or other third parties when we believe that disclosure is necessary to comply with a legal obligation.</LI>
        <LI><strong>Business Transfers.</strong> We may share some or all of your information in preparation for, during negotiation of, or in the process of any merger, financing, acquisition, or dissolution transaction or proceeding.</LI>
        <LI><strong>Protect our Rights and our Users.</strong> We may disclose Personal information where we believe it necessary to respond to claims asserted against us, to enforce or administer our agreements, terms, and policies.</LI>
        <LI><strong>Other Disclosures.</strong> We may disclose information to other parties and for other purposes based on (a) your consent, (b) at your direction, (c) as described to you at the time the information is collected.</LI>
      </UL>

      <H2>Cookies and Analytics</H2>
      <P>We use cookies, pixels, tags, and other technologies, which may be provided by third parties, on our Services to enable certain functionality and for security and fraud detection and prevention, as well as to collect usage information about our Website and the emails that we send and to personalize content and provide more relevant ads and information.</P>

      <H2>Your Choices</H2>
      <P>You may have certain rights and choices regarding the Personal Information we hold about you, including the right to access, correct, or delete your information. To exercise these rights, please contact us at the address below.</P>

      <H2>Security</H2>
      <P>We implement reasonable security measures to protect your Personal Information from unauthorized access, disclosure, alteration, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</P>

      <H2>Contact Us</H2>
      <P>If you have questions about this Privacy Policy, please contact Beanstalk Events Inc. at <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a>.</P>
    </LegalPage>
  );
}
