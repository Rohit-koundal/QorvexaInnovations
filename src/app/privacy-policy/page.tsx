import type { Metadata } from "next";
import {
  Cookie,
  Database,
  ExternalLink,
  FileText,
  Info,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { CONTACT_EMAIL } from "@/lib/constants";

const pageDescription =
  "Read how Qorvexa
Innovations may collect, use, protect, and manage information when you visit our website or contact us.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: pageDescription,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | Qorvexa
Innovations",
    description: pageDescription,
    url: "/privacy-policy",
    siteName: "Qorvexa
Innovations",
    images: [
      {
        url: "/images/company/nexora-og.svg",
        width: 1200,
        height: 630,
        alt: "Qorvexa
Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Qorvexa
Innovations",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const navigation = [
  { href: "#information-collected", label: "Information collected" },
  { href: "#how-information-is-used", label: "How information is used" },
  { href: "#cookies", label: "Cookies" },
  { href: "#third-party-services", label: "Third-party services" },
  { href: "#data-protection", label: "Data protection" },
  { href: "#retention-and-choices", label: "Retention and choices" },
  { href: "#contact-information", label: "Contact information" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains what information may be handled through the Qorvexa
Innovations website, why it may be used, and the choices available to you."
      >
        <Badge className="border-white/70 bg-white/70 text-slate-700">
          Last updated: July 14, 2026
        </Badge>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mb-12 grid gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-amber-100 text-amber-800">
                <Info className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-extrabold text-amber-950">Before-production notice</h2>
                <p className="mt-2 text-sm leading-7 text-amber-950/80">
                  The current website uses a placeholder contact-form workflow. It may validate
                  information in your browser and simulate a successful submission unless a
                  separately configured contact API is available. Before production data
                  collection begins, the form handling, storage, security, retention process,
                  and this policy must be reviewed and updated to describe the real implementation.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Privacy policy sections">
              <Card className="p-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="grid size-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
                    <FileText className="size-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-extrabold text-slate-950">On this page</p>
                </div>
                <nav className="mt-3">
                  <ul className="grid gap-1">
                    {navigation.map((item) => (
                      <li key={item.href}>
                        <a
                          className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Card>
            </aside>

            <article className="min-w-0">
              <Reveal>
                <div className="border-b border-slate-200 pb-10">
                  <p className="text-lg leading-8 text-slate-600">
                    This Privacy Policy applies to the public website operated under the Nexora
                    Innovations name. It does not automatically cover separate products, such as
                    Samira Collection, which may require their own product-specific privacy notices
                    before collecting customer or business data.
                  </p>
                </div>
              </Reveal>

              <div className="divide-y divide-slate-200">
                <Reveal>
                  <section className="scroll-mt-28 py-10" id="information-collected" aria-labelledby="information-collected-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Database className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="information-collected-title">
                        Information collected
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        We may receive information you choose to provide, including your name,
                        email address, phone number, company name, enquiry type, message, and any
                        other details included in your communication.
                      </p>
                      <p>
                        When the website is deployed, hosting, security, or content-delivery
                        providers may process limited technical information such as IP address,
                        browser type, device type, requested pages, timestamps, and diagnostic
                        logs. Nexora does not use this page to claim that every listed data type is
                        currently stored by us.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="how-information-is-used" aria-labelledby="how-information-is-used-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-700">
                        <ShieldCheck className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="how-information-is-used-title">
                        How information is used
                      </h2>
                    </div>
                    <p className="mt-6 leading-8 text-slate-600">
                      When a working submission channel is configured, information may be used to:
                    </p>
                    <ul className="mt-4 grid gap-3 text-slate-600">
                      {[
                        "Review and respond to product, partnership, career, investment, or general enquiries.",
                        "Continue a conversation you asked us to have and provide relevant follow-up.",
                        "Protect the website, investigate errors, and prevent misuse or security incidents.",
                        "Understand broad website performance and improve content or usability where an appropriate analytics setup is disclosed.",
                        "Meet applicable legal obligations or establish and protect legitimate rights.",
                      ].map((item) => (
                        <li className="flex gap-3 leading-7" key={item}>
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 leading-8 text-slate-600">
                      We do not sell personal information. Any future marketing communication
                      should be sent only where there is an appropriate basis and a clear way to
                      opt out.
                    </p>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="cookies" aria-labelledby="cookies-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700">
                        <Cookie className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="cookies-title">
                        Cookies
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        The current static website does not intentionally set advertising or
                        cross-site tracking cookies. Essential technologies may still be used by
                        the hosting or security layer to deliver and protect the website.
                      </p>
                      <p>
                        If analytics, preference storage, embedded media, or advertising tools are
                        introduced later, this policy and any required consent controls must be
                        updated before those tools are enabled.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="third-party-services" aria-labelledby="third-party-services-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700">
                        <ExternalLink className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="third-party-services-title">
                        Third-party services
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        Website hosting, domain, content-delivery, email, security, form-processing,
                        or analytics services may process information on our behalf once those
                        services are configured. Their own terms and privacy practices may also apply.
                      </p>
                      <p>
                        Links to external websites—including social platforms or product sites—are
                        provided for convenience. Their privacy practices are outside this policy,
                        so please review the notice published by the relevant service before
                        providing information there.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="data-protection" aria-labelledby="data-protection-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                        <LockKeyhole className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="data-protection-title">
                        Data protection
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        We aim to use reasonable administrative and technical safeguards appropriate
                        to the information and the way it is processed. Access should be limited to
                        people and service providers who need it for the purposes described here.
                      </p>
                      <p>
                        No website, transmission method, or storage system can be guaranteed to be
                        completely secure. Please avoid sending passwords, payment details,
                        government identifiers, health information, or other highly sensitive data
                        through a general enquiry form.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="retention-and-choices" aria-labelledby="retention-and-choices-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700">
                        <FileText className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="retention-and-choices-title">
                        Retention and choices
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        Information should be retained only as long as reasonably needed for the
                        enquiry, relationship, security, record-keeping, or applicable legal
                        requirement. Actual retention periods must be defined alongside the
                        production contact system.
                      </p>
                      <p>
                        You may contact us to ask what personal information we hold about you or to
                        request correction or deletion. We will assess the request based on the
                        information available and any applicable legal obligations.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="contact-information" aria-labelledby="contact-information-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Mail className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="contact-information-title">
                        Contact information
                      </h2>
                    </div>
                    <p className="mt-6 leading-8 text-slate-600">
                      For a privacy question or request, contact Qorvexa
Innovations at{" "}
                      <a
                        className="font-bold text-indigo-700 underline decoration-indigo-200 underline-offset-4 transition hover:text-indigo-900"
                        href={`mailto:${CONTACT_EMAIL}`}
                      >
                        {CONTACT_EMAIL}
                      </a>
                      . Please include enough context for us to understand the request, but do not
                      email highly sensitive information.
                    </p>
                  </section>
                </Reveal>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
