import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | TrustForce Advisors" },
      {
        name: "description",
        content: "Terms governing the use of TheTrustForce.com.",
      },
    ],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalPage
      eyebrow="Website Terms"
      title="Terms of Use"
      intro="These Terms of Use govern access to and use of TheTrustForce.com. By using the website, you agree to these terms."
      sections={[
        {
          title: "Website Purpose",
          content: (
            <p>
              The website provides general information about TrustForce Advisors and its potential
              fiduciary support, administrative, organizational, consultation, and recordkeeping
              services. Website content is provided for general informational purposes and may not
              reflect every service, qualification, requirement, or limitation applicable to a
              particular matter.
            </p>
          ),
        },
        {
          title: "No Professional Relationship",
          content: (
            <p>
              Visiting the website, sending a message, or receiving general information does not
              create an attorney-client, fiduciary, trustee-beneficiary, financial advisory,
              accountant-client, healthcare, or other professional relationship. A service or
              fiduciary relationship exists only when TrustForce Advisors expressly agrees in a
              written engagement or appointment and any required approvals are obtained.
            </p>
          ),
        },
        {
          title: "Permitted Use",
          content: (
            <>
              <p>You may use the website for lawful, personal, and informational purposes. You may not:</p>
              <ul>
                <li>Attempt to gain unauthorized access to the website, systems, or information.</li>
                <li>Interfere with website operation, security, availability, or other users.</li>
                <li>Use automated tools to scrape, harvest, or reproduce substantial website content.</li>
                <li>Submit unlawful, deceptive, infringing, malicious, or harmful material.</li>
                <li>Misrepresent your identity or affiliation with another person or organization.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Intellectual Property",
          content: (
            <p>
              The website design, text, graphics, logos, guides, downloads, and other content are
              owned by or licensed to TrustForce Advisors and are protected by applicable
              intellectual-property laws. You may view and print reasonable portions for personal,
              noncommercial use. No other reproduction, distribution, modification, republication,
              or commercial use is permitted without prior written authorization.
            </p>
          ),
        },
        {
          title: "Third-Party Services and Links",
          content: (
            <p>
              The website may link to or depend on third-party websites, platforms, or service
              providers. TrustForce Advisors does not control and is not responsible for their
              availability, content, security, terms, or privacy practices. A link does not imply
              endorsement.
            </p>
          ),
        },
        {
          title: "Website Availability and Accuracy",
          content: (
            <p>
              We may modify, suspend, or discontinue website content or features at any time.
              Although we aim to provide useful and accurate information, content may contain
              errors, become outdated, or not apply to your circumstances. You are responsible for
              verifying important information with an appropriately qualified professional.
            </p>
          ),
        },
        {
          title: "Disclaimers and Limitation of Liability",
          content: (
            <p>
              To the fullest extent permitted by law, the website is provided on an "as is" and "as
              available" basis without warranties of uninterrupted availability, accuracy,
              merchantability, fitness for a particular purpose, or noninfringement. TrustForce
              Advisors will not be liable for indirect, incidental, special, consequential, or
              punitive damages arising from website use. Nothing in these terms excludes liability
              that cannot lawfully be excluded.
            </p>
          ),
        },
        {
          title: "Governing Law and Updates",
          content: (
            <p>
              These terms are governed by the laws of the State of Mississippi, without regard to
              conflict-of-law rules. Any dispute must be brought in a court with lawful
              jurisdiction, subject to any separate written agreement. We may update these terms,
              and continued use after an update constitutes acceptance of the revised terms.
            </p>
          ),
        },
      ]}
    />
  );
}
