import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | TrustForce Advisors" },
      {
        name: "description",
        content: "Important limitations concerning TrustForce Advisors website information.",
      },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage
      eyebrow="Important Information"
      title="Disclaimer"
      intro="Please read these important limitations before relying on website content or submitting information to TrustForce Advisors."
      sections={[
        {
          title: "General Information Only",
          content: (
            <p>
              Website content, resource previews, checklists, FAQs, and communications provided
              before a written engagement are general information only. They are not a substitute
              for advice based on a complete review of your facts, documents, deadlines, court
              orders, governing instruments, and applicable law.
            </p>
          ),
        },
        {
          title: "No Legal, Tax, Investment, Medical, or Financial Advice",
          content: (
            <p>
              TrustForce Advisors provides fiduciary support and administrative assistance. Unless
              expressly stated in a written engagement by a properly licensed professional acting
              in that capacity, we do not provide legal, tax, accounting, investment, securities,
              medical, mental-health, or other licensed professional advice. Consult an
              appropriately qualified professional before making decisions in those areas.
            </p>
          ),
        },
        {
          title: "No Fiduciary or Professional Relationship",
          content: (
            <p>
              Website use, a consultation request, or preliminary communication does not appoint
              TrustForce Advisors as a fiduciary and does not create an attorney-client, financial
              advisory, trustee-beneficiary, guardian-ward, conservator-protected person, or other
              professional relationship. Any engagement depends on written terms, conflict and
              suitability review, applicable authority, and any required court or agency approval.
            </p>
          ),
        },
        {
          title: "Deadlines and Emergencies",
          content: (
            <p>
              Do not rely on the website or a general message to protect a filing deadline, appeal
              period, court date, benefit deadline, medical need, safety concern, or emergency.
              Contact the appropriate court, attorney, agency, emergency service, or licensed
              professional promptly. Calling or sending a message does not guarantee acceptance of
              a matter or immediate response.
            </p>
          ),
        },
        {
          title: "No Guarantee of Results",
          content: (
            <p>
              Descriptions of services, processes, examples, or client experiences do not promise
              or guarantee any outcome. Results depend on facts, documentation, third parties,
              governing instruments, courts, agencies, institutions, timing, and other factors
              beyond our control.
            </p>
          ),
        },
        {
          title: "Accuracy, External Information, and Confidentiality",
          content: (
            <p>
              We make reasonable efforts to keep website information useful, but it may be
              incomplete, outdated, or inapplicable to your situation. We are not responsible for
              third-party content or linked websites. Do not send confidential or highly sensitive
              information through a general form or unsecured email until a secure method and the
              scope of any relationship have been established.
            </p>
          ),
        },
      ]}
    />
  );
}
