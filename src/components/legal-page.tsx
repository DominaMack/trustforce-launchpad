import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility Statement" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-secondary">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/trustforce-logo.png"
              alt="TrustForce Advisors"
              className="h-12 w-auto"
              width={72}
              height={48}
            />
            <div>
              <div className="font-serif text-xl font-semibold text-primary">
                TrustForce Advisors
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold">
                Fiduciary Support
              </div>
            </div>
          </a>
          <a
            href="/"
            className="rounded-md border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Return Home
          </a>
        </div>
      </header>

      <main>
        <section className="bg-primary px-4 py-16 text-primary-foreground md:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {eyebrow}
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {intro}
            </p>
            <p className="mt-5 text-sm font-medium text-gold">Effective June 13, 2026</p>
          </div>
        </section>

        <section className="px-4 py-14 md:px-6 md:py-20">
          <article className="mx-auto max-w-4xl rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-card)] sm:p-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-primary [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-gold/30 bg-gold/10 p-6">
              <h2 className="font-serif text-xl font-semibold text-primary">Questions or Requests</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Contact TrustForce Advisors at{" "}
                <a className="font-semibold text-primary" href="tel:6292587878">
                  (629) 258-7878
                </a>{" "}
                or{" "}
                <a
                  className="font-semibold text-primary"
                  href="mailto:Hello@TheTrustForce.com"
                >
                  Hello@TheTrustForce.com
                </a>
                .
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer className="bg-primary px-4 py-8 text-primary-foreground md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-primary-foreground/70">
            © 2026 TrustForce Advisors. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-primary-foreground/80 hover:text-gold">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
