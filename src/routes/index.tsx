import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, Scale, FileText, Users, HeartHandshake, Landmark,
  Briefcase, Award, ClipboardList, BookOpen, Phone, Mail, MapPin,
  Clock, ArrowRight, CheckCircle2, Star, Facebook, Linkedin, Instagram,
  Building2, UserCheck, Gavel, Wallet, FileCheck, Library,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import logoAsset from "@/assets/trustforce-logo.png.asset.json";
import heroImg from "@/assets/hero-consultation.jpg";
import aboutImg from "@/assets/about-documents.jpg";
import founderImg from "@/assets/founder-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustForce Advisors | Fiduciary, Conservatorship & Guardianship Support in Mississippi" },
      { name: "description", content: "TrustForce Advisors provides professional fiduciary, conservatorship, guardianship, trust administration, veteran fiduciary, court reporting, and recordkeeping support services in Mississippi." },
      { name: "keywords", content: "Fiduciary services Mississippi, Conservatorship support, Guardianship support, Trust administration, Veteran fiduciary support, Court accounting preparation, Greenville MS fiduciary, TrustForce Advisors" },
      { property: "og:title", content: "TrustForce Advisors | Fiduciary Support in Mississippi" },
      { property: "og:description", content: "Professional fiduciary, conservatorship, guardianship, and trust support services in Greenville, Mississippi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "TrustForce Advisors",
          description: "Fiduciary, conservatorship, guardianship and trust support services.",
          telephone: "(629) 258-7878",
          email: "hello@TheTrustForce.com",
          url: "https://TheTrustForce.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "442 S Martin Luther King Blvd, Suite B",
            addressLocality: "Greenville",
            addressRegion: "MS",
            postalCode: "38703",
            addressCountry: "US",
          },
          areaServed: "Mississippi",
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#who", label: "Who We Help" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const whoWeHelp = [
  { icon: Users, title: "Families", text: "Support for families managing difficult transitions involving aging parents, disability, illness, estate matters, or fiduciary responsibilities." },
  { icon: Shield, title: "Trustees", text: "Support for trustees managing trust documents, beneficiary communication, distributions, and recordkeeping." },
  { icon: Wallet, title: "Conservators", text: "Assistance with organizing financial records, preparing reports, tracking assets, and managing documentation." },
  { icon: UserCheck, title: "Guardians", text: "Support for guardians handling care-related documentation, communication, and administrative responsibilities." },
  { icon: Award, title: "Veterans & Veteran Families", text: "Support for veterans, families, and representatives managing benefit-related fiduciary responsibilities." },
  { icon: Gavel, title: "Attorneys & Law Firms", text: "Administrative and fiduciary support for legal professionals assisting clients with conservatorship, guardianship, trust, and estate matters." },
  { icon: Landmark, title: "Banks & Financial Institutions", text: "Organized documentation and fiduciary support for matters involving assets, accounts, and financial oversight." },
  { icon: HeartHandshake, title: "Social Workers & Care Professionals", text: "A trusted referral resource for families who need fiduciary-related support and organization." },
];

const services = [
  { icon: Shield, title: "Conservatorship Support", text: "Assistance with managing assets, records, reporting, and financial responsibilities for protected persons." },
  { icon: UserCheck, title: "Guardianship Support", text: "Support for guardians handling care coordination, documentation, and decision-making responsibilities." },
  { icon: FileText, title: "Trust Administration Assistance", text: "Guidance with organizing trust documents, tracking assets, communicating with beneficiaries, and supporting trustee duties." },
  { icon: ClipboardList, title: "Fiduciary Recordkeeping", text: "Professional organization of receipts, bank records, reports, and financial documentation." },
  { icon: Award, title: "Veteran Fiduciary Support", text: "Support services designed for veterans, families, and representatives managing benefits and fiduciary responsibilities." },
  { icon: Gavel, title: "Court Reporting Preparation", text: "Assistance preparing organized reports, accountings, summaries, and documentation for court or institutional review." },
  { icon: HeartHandshake, title: "Beneficiary Support Services", text: "Support for beneficiaries who need help understanding communications, organizing documents, and preparing for discussions with fiduciaries or professionals." },
  { icon: Briefcase, title: "Estate Administration Support", text: "Administrative assistance with estate-related organization, document tracking, communication, and record preparation." },
  { icon: Wallet, title: "Financial Organization Services", text: "Help organizing bills, statements, account information, receipts, budgets, and important financial records." },
  { icon: Users, title: "Family Fiduciary Consultation", text: "Consultations for families who need guidance on fiduciary responsibilities, next steps, documentation, and service options." },
];

const steps = [
  { n: "01", title: "Schedule a Consultation", text: "Clients contact TrustForce Advisors to discuss their situation and service needs." },
  { n: "02", title: "Needs Assessment", text: "TrustForce Advisors reviews the type of support needed, including documents, deadlines, responsibilities, and goals." },
  { n: "03", title: "Document Organization", text: "Important records, account information, court documents, trust documents, or fiduciary materials are organized." },
  { n: "04", title: "Support Plan", text: "A clear support plan is developed based on the client's needs and responsibilities." },
  { n: "05", title: "Ongoing Guidance & Reporting", text: "TrustForce Advisors provides ongoing assistance, organization, communication support, and reporting preparation as needed." },
];

const whyPoints = [
  { icon: Shield, title: "Integrity First", text: "Ethical service focused on responsibility, transparency, and care." },
  { icon: ClipboardList, title: "Organized & Accountable", text: "Strong recordkeeping, documentation, and communication practices." },
  { icon: HeartHandshake, title: "Family-Focused", text: "Support designed to reduce confusion and help families move forward with clarity." },
  { icon: Award, title: "Veteran-Friendly", text: "Understanding of veteran-related fiduciary concerns and benefit responsibilities." },
  { icon: MapPin, title: "Mississippi-Based", text: "Located in Greenville, Mississippi, with service available across Mississippi and surrounding areas." },
  { icon: FileCheck, title: "Confidential & Professional", text: "Sensitive information is handled with discretion, professionalism, and care." },
];

const faqs = [
  { q: "What is a fiduciary?", a: "A fiduciary is a person or organization responsible for acting in the best interests of another person, beneficiary, estate, trust, or protected individual." },
  { q: "What does TrustForce Advisors do?", a: "TrustForce Advisors provides fiduciary support, conservatorship support, guardianship support, trust administration assistance, recordkeeping, document organization, reporting preparation, and family consultation services." },
  { q: "Does TrustForce Advisors provide legal advice?", a: "TrustForce Advisors provides fiduciary support and administrative assistance. Legal advice should be obtained from a licensed attorney unless legal services are specifically provided by a licensed attorney acting in that capacity." },
  { q: "What is the difference between a conservator and a guardian?", a: "A conservator typically manages financial affairs, assets, and property. A guardian typically handles personal, healthcare, or care-related decisions. The exact duties depend on the court order and applicable law." },
  { q: "What is a trustee?", a: "A trustee is responsible for managing trust property according to the trust document and applicable legal duties." },
  { q: "Can TrustForce Advisors help with court-required reports?", a: "Yes. TrustForce Advisors can help organize records, prepare summaries, and assist with documentation needed for court reporting or institutional review." },
  { q: "Can TrustForce Advisors serve as a fiduciary?", a: "Service availability depends on the type of matter, applicable rules, and engagement terms. Clients may schedule a consultation to discuss whether TrustForce Advisors can provide support or serve in a fiduciary capacity." },
  { q: "Do you help veterans?", a: "Yes. TrustForce Advisors provides support for veterans, veteran families, and representatives managing fiduciary-related benefit responsibilities." },
  { q: "What records should a conservator keep?", a: "A conservator should generally keep bank statements, receipts, invoices, account records, property records, court filings, budgets, inventories, and documentation supporting financial decisions." },
  { q: "What records should a trustee keep?", a: "A trustee should generally keep trust documents, bank statements, investment records, tax records, distribution records, beneficiary communications, receipts, and accountings." },
  { q: "What records should a guardian keep?", a: "A guardian should generally keep care-related records, medical communications, service provider information, placement information, appointment notes, and records of important decisions." },
  { q: "Can you help if my records are disorganized?", a: "Yes. TrustForce Advisors can help organize available documents, identify missing information, and create a clearer system for future recordkeeping." },
  { q: "Do you work with attorneys, banks, or social workers?", a: "Yes. TrustForce Advisors can serve as a professional support resource for attorneys, financial institutions, care providers, and referral partners." },
  { q: "How much do services cost?", a: "Pricing depends on the type of service, complexity of the matter, urgency, and level of ongoing support needed. A consultation is recommended to determine the appropriate service option." },
  { q: "Is my information confidential?", a: "Yes. Client information is handled with professionalism, discretion, and confidentiality." },
  { q: "Do you offer virtual consultations?", a: "Yes. TrustForce Advisors may offer phone or virtual consultations depending on the client's needs and location." },
  { q: "Where is TrustForce Advisors located?", a: "TrustForce Advisors is located at 442 S Martin Luther King Blvd, Suite B, Greenville, MS 38703." },
  { q: "What areas do you serve?", a: "TrustForce Advisors serves Mississippi and surrounding areas." },
  { q: "How do I get started?", a: "Call (629) 258-7878, email hello@TheTrustForce.com, or complete the consultation form on TheTrustForce.com." },
];

const resources = [
  { icon: ClipboardList, title: "Conservatorship Checklist", text: "A helpful guide for organizing records and responsibilities." },
  { icon: UserCheck, title: "Guardianship Basics", text: "An overview of common guardian responsibilities and documentation needs." },
  { icon: FileText, title: "Trustee Recordkeeping Guide", text: "A guide for trustees who need to organize records, communications, and financial information." },
  { icon: Award, title: "Veteran Fiduciary Support Guide", text: "A resource for veterans and families managing fiduciary-related responsibilities." },
  { icon: Gavel, title: "Court Accounting Preparation Guide", text: "A guide for preparing organized financial records and summaries." },
  { icon: Library, title: "Fiduciary Glossary", text: "Simple definitions of common fiduciary, trust, conservatorship, and guardianship terms." },
];

const testimonials = [
  { quote: "TrustForce Advisors helped us understand the responsibilities involved and gave our family peace of mind.", author: "Family Client" },
  { quote: "Professional, organized, and compassionate. They made a difficult process feel manageable.", author: "Conservatorship Client" },
  { quote: "Their attention to detail and recordkeeping support was exactly what we needed.", author: "Trustee Support Client" },
];

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Founder />
        <WhoWeHelp />
        <Services />
        <Process />
        <WhyChoose />
        <FAQ />
        <Resources />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="TrustForce Advisors logo" className="h-12 w-auto" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg font-semibold text-primary">TrustForce Advisors</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Fiduciary · Conservatorship · Guardianship</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:6292587878" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4 text-gold" /> (629) 258-7878
          </a>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-glow">
            <a href="#contact">Schedule</a>
          </Button>
          <button
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-6 bg-current mb-1.5" />
            <span className="block h-0.5 w-6 bg-current mb-1.5" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/80">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top_right,oklch(0.76_0.13_80/0.5),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
            <Shield className="h-3.5 w-3.5" /> Mississippi Fiduciary Advisors
          </div>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Trusted Fiduciary Support <span className="text-gold">When Families Need It Most</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 leading-relaxed">
            TrustForce Advisors helps individuals, families, veterans, and court-appointed decision-makers manage fiduciary responsibilities with professionalism, care, and accountability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold">
              <a href="#contact">Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              <a href="#services">Request Information</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Greenville, MS</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Veteran-Friendly</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> Confidential & Ethical</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold/20 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Advisor reviewing fiduciary documents with a family in a Mississippi office"
            width={1536}
            height={1024}
            className="relative w-full rounded-2xl border border-white/10 shadow-2xl object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub, light }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className={`text-xs uppercase tracking-[0.22em] font-semibold ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</div>
      <h2 className={`mt-3 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
      <div className="mx-auto mt-6 h-0.5 w-16 bg-gold" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-gold">About Us</div>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            About TrustForce Advisors
          </h2>
          <div className="mt-6 h-0.5 w-16 bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            TrustForce Advisors was created to provide reliable, ethical, and organized fiduciary support for individuals and families navigating conservatorships, guardianships, trusts, and estate-related responsibilities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our mission is to protect vulnerable individuals, support responsible decision-making, and provide peace of mind through clear communication, accurate records, and compassionate service.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: "Ethical", v: "Service" },
              { k: "Organized", v: "Records" },
              { k: "Trusted", v: "Support" },
              { k: "Mississippi", v: "Based" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-secondary px-4 py-3">
                <div className="font-serif text-xl font-semibold text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-gold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={aboutImg} alt="Advisor and client reviewing organized trust documents" width={1280} height={960} loading="lazy" className="w-full rounded-2xl object-cover aspect-[4/3] shadow-[var(--shadow-elegant)]" />
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-xl">
            <Shield className="h-8 w-8 text-gold" />
            <div>
              <div className="font-serif text-lg">Integrity & Care</div>
              <div className="text-xs text-primary-foreground/70">In every engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2 relative">
          <img src={founderImg} alt="TrustForce Advisors professional office" width={1280} height={960} loading="lazy" className="w-full rounded-2xl object-cover aspect-square shadow-[var(--shadow-elegant)]" />
          <div className="absolute top-4 left-4 rounded-md bg-background/90 px-3 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
            <img src={logoAsset.url} alt="" className="inline h-6 w-auto mr-2 align-middle" />Founder
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-gold">Leadership</div>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
            Meet DC McCraney
          </h2>
          <div className="mt-6 h-0.5 w-16 bg-gold" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            TrustForce Advisors was founded by <strong className="text-primary">DC McCraney</strong> to provide families, fiduciaries, beneficiaries, veterans, and professionals with organized support during some of life's most important transitions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            DC McCraney brings a multidisciplinary background in law, dispute resolution, project management, technology, and client advocacy. TrustForce Advisors was built on the belief that fiduciary responsibilities should be handled with integrity, transparency, accountability, and care.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Law", "Dispute Resolution", "Project Management", "Technology", "Client Advocacy"].map((t) => (
              <span key={t} className="rounded-full border border-primary/15 bg-background px-4 py-1.5 text-xs font-medium text-primary">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section id="who" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Who We Serve" title="Support for the People Who Need It Most" sub="From families and trustees to attorneys and veterans, TrustForce Advisors brings clarity and structure to fiduciary responsibilities." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whoWeHelp.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="group border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-gold/40">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-gold transition-colors group-hover:bg-gold group-hover:text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Services" title="Professional Fiduciary Services" sub="Comprehensive support across conservatorship, guardianship, trusts, estates, and recordkeeping." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Card key={title} className={`relative overflow-hidden border-border bg-background ${i === 0 || i === 6 ? "xl:col-span-2" : ""}`}>
              <div className="absolute top-0 left-0 h-1 w-full bg-gold opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Our Process" title="The TrustForce Process" sub="A clear, structured path from first call to ongoing support." />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-background p-6">
              <div className="font-serif text-5xl font-bold text-gold/30">{s.n}</div>
              <h3 className="mt-3 font-serif text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-10 hidden h-5 w-5 text-gold lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Why TrustForce" title="Why Choose TrustForce Advisors" sub="Six commitments that guide every engagement." light />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" sub="Answers to the questions families, fiduciaries, and professionals ask most." />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Resource Center" title="Guides & Resources" sub="Helpful resources for fiduciaries, families, and professionals. Coming soon." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="group border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <BookOpen className="ml-auto h-4 w-4 text-gold/60" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">Coming Soon</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Testimonials" title="What Clients Say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border bg-background">
              <CardContent className="p-8">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 font-serif text-lg italic leading-relaxed text-primary">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4 text-sm font-semibold uppercase tracking-wider text-gold">
                  — {t.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Get in Touch" title="Contact TrustForce Advisors" sub="Have questions about fiduciary support, conservatorship, guardianship, trust administration, or recordkeeping? Contact TrustForce Advisors to start the conversation." />
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <ContactItem icon={Phone} label="Phone" value="(629) 258-7878" href="tel:6292587878" />
            <ContactItem icon={Mail} label="Email" value="hello@TheTrustForce.com" href="mailto:hello@TheTrustForce.com" />
            <ContactItem icon={MapPin} label="Office" value="442 S Martin Luther King Blvd, Suite B, Greenville, MS 38703" />
            <ContactItem icon={Building2} label="Service Area" value="Mississippi and surrounding areas" />
            <div className="rounded-xl border border-border bg-background p-6">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-lg font-semibold">Business Hours</h3>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-primary">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-primary">By Appointment</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-primary">Closed</span></li>
              </ul>
            </div>
          </div>
          <Card className="lg:col-span-3 border-border bg-background">
            <CardContent className="p-8">
              <form
                className="grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  setTimeout(() => {
                    setSubmitting(false);
                    (e.target as HTMLFormElement).reset();
                    toast.success("Message sent. We'll be in touch shortly.");
                  }, 600);
                }}
              >
                <Field id="name" label="Name" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone" type="tel" />
                <Field id="service" label="Service Needed" placeholder="e.g. Conservatorship Support" />
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-primary">Message</Label>
                  <Textarea id="message" name="message" required rows={5} className="mt-2 border-border" placeholder="Tell us briefly about your situation…" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary-glow sm:w-auto">
                    {submitting ? "Sending…" : "Send Message"} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">By submitting this form you agree to be contacted by TrustForce Advisors regarding your inquiry.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required, placeholder }: { id: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-semibold text-primary">{label}{required && <span className="text-gold"> *</span>}</Label>
      <Input id={id} name={id} type={type} required={required} placeholder={placeholder} className="mt-2 border-border" />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-gold">{label}</div>
        <div className="mt-1 text-base font-medium text-primary">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a> : <div>{inner}</div>;
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white p-1.5">
                <img src={logoAsset.url} alt="TrustForce Advisors" className="h-12 w-auto" />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold">TrustForce Advisors</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Fiduciary · Conservatorship · Guardianship · Trust Support</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Professional fiduciary support for families, trustees, conservators, guardians, veterans, and the professionals who serve them — based in Greenville, Mississippi.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-primary-foreground transition-colors hover:bg-gold hover:text-primary hover:border-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" /> 442 S Martin Luther King Blvd, Suite B, Greenville, MS 38703</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold mt-0.5" /><a href="tel:6292587878">(629) 258-7878</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold mt-0.5" /><a href="mailto:hello@TheTrustForce.com">hello@TheTrustForce.com</a></li>
              <li className="flex gap-2"><Scale className="h-4 w-4 shrink-0 text-gold mt-0.5" /> TheTrustForce.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-gold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-gold transition-colors">{n.label}</a></li>
              ))}
              <li><a href="#resources" className="hover:text-gold transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-8">
          <p className="text-xs leading-relaxed text-primary-foreground/70">
            TrustForce Advisors provides fiduciary support services and does not provide legal advice unless otherwise stated by a licensed attorney.
          </p>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 text-xs text-primary-foreground/70 sm:flex-row sm:items-center">
            <p>© 2026 TrustForce Advisors. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="hover:text-gold">Privacy Policy</a>
              <a href="#" className="hover:text-gold">Terms of Use</a>
              <a href="#" className="hover:text-gold">Accessibility Statement</a>
              <a href="#" className="hover:text-gold">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
