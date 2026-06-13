import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | TrustForce Advisors" },
      {
        name: "description",
        content: "TrustForce Advisors' commitment to accessible website experiences.",
      },
    ],
  }),
  component: AccessibilityStatement,
});

function AccessibilityStatement() {
  return (
    <LegalPage
      eyebrow="Inclusive Access"
      title="Accessibility Statement"
      intro="TrustForce Advisors is committed to providing a website that is usable by the widest practical audience, including people with disabilities."
      sections={[
        {
          title: "Our Commitment",
          content: (
            <p>
              We work to improve the accessibility and usability of TheTrustForce.com and aim to
              follow generally recognized accessibility practices, including relevant aspects of
              the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA where reasonably
              applicable. Accessibility is an ongoing process, and this statement is not a
              certification that every page or feature currently satisfies every guideline.
            </p>
          ),
        },
        {
          title: "Accessibility Measures",
          content: (
            <>
              <p>Our ongoing accessibility efforts may include:</p>
              <ul>
                <li>Using semantic headings, labels, and page structure.</li>
                <li>Providing text alternatives for meaningful images.</li>
                <li>Supporting keyboard navigation and visible focus indicators.</li>
                <li>Maintaining readable typography and sufficient color contrast.</li>
                <li>Designing layouts that adapt to different screen sizes and zoom levels.</li>
                <li>Reviewing forms, links, documents, and interactive controls for usability.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Third-Party Content and Documents",
          content: (
            <p>
              Some third-party platforms, embedded features, linked websites, or legacy documents
              may be outside our direct control and may not provide the same level of accessibility.
              We welcome notice of barriers involving content that we provide or control.
            </p>
          ),
        },
        {
          title: "Alternative Access and Feedback",
          content: (
            <p>
              If you have difficulty accessing information or using a feature, contact us and
              describe the page, document, feature, assistive technology, and problem encountered.
              We will make reasonable efforts to provide the information through an alternative
              method and address confirmed barriers. You may call{" "}
              <a href="tel:6292587878">(629) 258-7878</a> or email{" "}
              <a href="mailto:Hello@TheTrustForce.com">Hello@TheTrustForce.com</a>.
            </p>
          ),
        },
        {
          title: "Ongoing Review",
          content: (
            <p>
              We periodically review the website as content and technology evolve. Accessibility
              feedback helps us prioritize improvements and maintain a more inclusive experience.
            </p>
          ),
        },
      ]}
    />
  );
}
