import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use — Beanstalk" };

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", marginBottom: "12px" }}>{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "var(--font-serif), 'Iowan Old Style', Georgia, serif", fontSize: "20px", color: "#233c36", marginTop: "28px", marginBottom: "8px", fontWeight: 700 }}>{children}</h2>
);

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="November 8, 2024">
      <P>Beanstalk Events Inc., (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), owns and operates this website (our &ldquo;Site&rdquo;). References to Beanstalk&rsquo;s Website should also be read to include subdomains of the Beanstalk website.</P>
      <P>We offer our Site, including all information, products and services available from our Site, to you the user, conditioned upon your acceptance of all the terms, conditions, policies and notices stated here. Your continued use of our Site constitutes your agreement to all such terms, conditions, policies and notices.</P>

      <H2>Acceptance of Terms of Use</H2>
      <P>You agree to the terms and conditions outlined in these Terms of Use with respect to our Site. These Terms of Use constitute the entire and only agreement between you and us, and supersede all prior or contemporaneous agreements, representations, warranties and understandings with respect to our Site, the content, products or services provided by or through our Site, and the subject matter of these Terms of Use. These Terms of Use may be amended at any time by us without specific notice to you. The latest Terms of Use will be posted on our Site, and you should review these prior to using our Site.</P>

      <H2>Copyright</H2>
      <P>The content, organization, graphics, design, compilation, digital conversion and other matters related to our Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of our Site, except as allowed by Section 4, is strictly prohibited. You do not acquire ownership rights to any content, document or other materials viewed through our Site. The posting of information or materials on our Site does not constitute a waiver of any right in such information and materials.</P>

      <H2>Service Marks</H2>
      <P>Products and names mentioned on our Site may be trademarks of their respective owners.</P>

      <H2>Limited Right to Use</H2>
      <P>The accessing, viewing, browsing, printing, or downloading of any content, graphic, form or document from our Site grants you only a limited, nonexclusive license for use solely by you for your own personal use and not for republication, distribution, assignment, sublicense, sale, preparation of derivative works or other use. Any other use is prohibited without our prior, express permission.</P>

      <H2>Editing, Deleting and Modification</H2>
      <P>We reserve the right in our sole discretion to edit or delete any documents, information or other content appearing on our Site.</P>

      <H2>Indemnification</H2>
      <P>You agree to indemnify, defend and hold harmless us and our affiliates and subsidiaries, and their officers, directors, employees, contractors, agents, licensors and suppliers, from and against all losses, liabilities, expenses, damages and costs, including reasonable attorneys&rsquo; fees and court costs, arising or resulting from any violation of these Terms of Use or any activity related to your account or password, if any (including but not limited to negligent or wrongful conduct), by you or any other person accessing our Site using your account or password.</P>

      <H2>Nontransferable</H2>
      <P>Your right to use our Site is not transferable. Any password or right given to you to obtain information or documents is not transferable.</P>

      <H2>Disclaimer and Limits</H2>
      <P>THE INFORMATION FROM OR THROUGH OUR SITE IS PROVIDED &ldquo;AS-IS,&rdquo; &ldquo;AS AVAILABLE,&rdquo; AND ALL WARRANTIES, EXPRESS OR IMPLIED, ARE DISCLAIMED TO THE FULLEST EXTENT PROVIDED BY APPLICABLE LAW. WE HAVE NO LIABILITY WHATSOEVER FOR YOUR USE OF ANY INFORMATION OR SERVICE. IN PARTICULAR, BUT NOT AS A LIMITATION THEREOF, WE ARE NOT LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES, WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR MAXIMUM LIABILITY TO YOU UNDER ALL CIRCUMSTANCES WILL BE EQUAL TO THE PURCHASE PRICE YOU PAY FOR ANY GOODS, SERVICES OR INFORMATION ON OUR SITE.</P>

      <H2>Use of Information</H2>
      <P>We will not be required to treat any remarks, suggestions, ideas, graphics, material or other information communicated by you to us through our Site (collectively, the &ldquo;Submission&rdquo;) as confidential. Without limitation, you hereby grant us with a perpetual, exclusive, unrestricted, non-revocable, royalty-free license to use, print, publish, sell, copy, distribute, make derivative works of, and license others to use each Submission in any form or medium.</P>

      <H2>Third-Party Services</H2>
      <P>We may allow access to or advertise third-party product or service providers (&ldquo;Merchants&rdquo;) from which you may purchase certain goods or services. You understand that we do not operate or control the products or services offered by Merchants. USE OF SUCH MERCHANTS IS AT YOUR SOLE RISK AND IS WITHOUT WARRANTIES OF ANY KIND BY US.</P>

      <H2>Privacy Policy</H2>
      <P>Our Privacy Policy (available at <a href="/privacy" style={{ color: "#315c52" }}>https://www.beanstalkevents.com/privacy</a>), as it may change from time to time, is a part of these Terms of Use.</P>

      <H2>Governing Law</H2>
      <P>These Terms of Use shall be governed by the laws of the State of New York. Any dispute arising under these Terms of Use shall be subject to the exclusive jurisdiction of the federal and state courts located in New York.</P>

      <H2>Contact</H2>
      <P>Questions about these Terms of Use? Email us at <a href="mailto:hello@beanstalkevents.com" style={{ color: "#315c52" }}>hello@beanstalkevents.com</a>.</P>
    </LegalPage>
  );
}
