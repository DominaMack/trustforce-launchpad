import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TrustForce Advisors" },
      {
        name: "description",
        content:
          "Learn how TrustForce Advisors collects, uses, protects, and shares information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Your Information"
      title="Privacy Policy"
      intro="This policy explains how TrustForce Advisors collects, uses, discloses, and protects information when you visit TheTrustForce.com or contact us."
      sections={[
        {
          title: "Information We Collect",
          content: (
            <>
              <p>We may collect information that you voluntarily provide, including:</p>
              <ul>
                <li>Your name, email address, phone number, and mailing address.</li>
                <li>Information included in consultation requests, messages, emails, or calls.</li>
                <li>Documents or records you choose to provide after establishing contact.</li>
                <li>Business relationship and service information needed to respond to an inquiry.</li>
              </ul>
              <p>
                Our website or hosting providers may also automatically receive limited technical
                information, such as your IP address, browser type, device type, referring page,
                pages visited, and approximate access time. Please do not send Social Security
                numbers, financial account credentials, medical records, court-protected
                information, or other highly sensitive material through a general website form or
                unsecured email unless we specifically provide a secure method.
              </p>
            </>
          ),
        },
        {
          title: "How We Use Information",
          content: (
            <>
              <p>We may use information to:</p>
              <ul>
                <li>Respond to questions and consultation requests.</li>
                <li>Evaluate whether our services may be appropriate for your needs.</li>
                <li>Provide, administer, improve, and secure our services and website.</li>
                <li>Maintain business records and communicate about an existing relationship.</li>
                <li>Comply with legal, court, regulatory, professional, or contractual obligations.</li>
                <li>Prevent fraud, misuse, security incidents, or harm.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Cookies and Website Technology",
          content: (
            <p>
              The website may use cookies or similar technologies that are necessary for site
              functionality, security, performance, or hosting. We do not currently use this
              website to sell personal information or for cross-context behavioral advertising.
              If our technology or practices materially change, this policy will be updated.
            </p>
          ),
        },
        {
          title: "How Information May Be Shared",
          content: (
            <>
              <p>We may disclose information:</p>
              <ul>
                <li>
                  To service providers that support hosting, communications, security, document
                  management, payment processing, or other business operations.
                </li>
                <li>
                  To attorneys, accountants, courts, government agencies, financial institutions,
                  care professionals, or other parties when authorized, necessary for requested
                  services, or required by law.
                </li>
                <li>
                  To protect the rights, safety, property, confidentiality, or security of clients,
                  TrustForce Advisors, or others.
                </li>
                <li>
                  In connection with a merger, reorganization, financing, sale, or transfer of all
                  or part of the business, subject to appropriate confidentiality protections.
                </li>
              </ul>
              <p>We do not sell personal information for money.</p>
            </>
          ),
        },
        {
          title: "Retention and Security",
          content: (
            <p>
              We retain information only as long as reasonably necessary for the purposes described
              here, our professional and business records, dispute resolution, and applicable legal
              obligations. We use reasonable administrative, technical, and physical safeguards,
              but no internet transmission, email, or storage system can be guaranteed completely
              secure.
            </p>
          ),
        },
        {
          title: "Your Choices and Rights",
          content: (
            <p>
              You may ask to review, correct, or delete personal information that we maintain about
              you, subject to identity verification and legal, contractual, court, recordkeeping,
              or professional obligations. You may also opt out of nonessential promotional email
              by using the instructions in the message or contacting us. Rights vary by location,
              and we will respond as required by applicable law.
            </p>
          ),
        },
        {
          title: "Children, External Sites, and Changes",
          content: (
            <>
              <p>
                This website is not directed to children under 13, and we do not knowingly collect
                their personal information through the website. Links to third-party sites are
                governed by those parties' privacy practices, not this policy.
              </p>
              <p>
                We may revise this policy as our services, technology, or legal obligations change.
                The effective date above identifies the latest version.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
