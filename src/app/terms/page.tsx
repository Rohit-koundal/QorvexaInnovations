import type { Metadata } from "next";
import {
  Copyright,
  ExternalLink,
  FilePenLine,
  FileText,
  Globe2,
  Info,
  Mail,
  PackageSearch,
  Scale,
  TriangleAlert,
} from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { CONTACT_EMAIL } from "@/lib/constants";

const pageDescription =
  "Review the terms that apply when accessing and using the Qorvexa Innovations company website and its public content.";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: pageDescription,
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    title: "Terms and Conditions | Qorvexa Innovations",
    description: pageDescription,
    url: "/terms",
    siteName: "Qorvexa Innovations",
    images: [
      {
        url: "/images/company/nexora-og.svg",
        width: 1200,
        height: 630,
        alt: "Qorvexa Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Qorvexa Innovations",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const navigation = [
  { href: "#website-use", label: "Website use" },
  { href: "#intellectual-property", label: "Intellectual property" },
  { href: "#product-information", label: "Product information" },
  { href: "#external-links", label: "External links" },
  { href: "#limitation-of-liability", label: "Limitation of liability" },
  { href: "#updates-to-terms", label: "Updates to terms" },
  { href: "#contact-information", label: "Contact information" },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="These terms set out the basic rules for using the Qorvexa Innovations public website and the information made available through it."
      >
        <Badge className="border-white/70 bg-white/70 text-slate-700">
          Last updated: July 14, 2026
        </Badge>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mb-12 grid gap-4 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 sm:grid-cols-[auto_1fr] sm:gap-5 sm:p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-indigo-100 text-indigo-700">
                <Info className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-extrabold text-slate-950">Scope of these terms</h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  These terms apply to the public company website. A Qorvexa product, customer
                  engagement, partnership, or paid service may be governed by separate terms,
                  policies, proposals, or agreements. If a separate agreement conflicts with this
                  page for that specific relationship, the separate agreement will control.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Terms and conditions sections">
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
                    By accessing or using this website, you agree to these Terms and Conditions. If
                    you do not agree, please stop using the website. References to “Qorvexa,” “we,”
                    “us,” or “our” mean Qorvexa Innovations in the context of this website.
                  </p>
                </div>
              </Reveal>

              <div className="divide-y divide-slate-200">
                <Reveal>
                  <section className="scroll-mt-28 py-10" id="website-use" aria-labelledby="website-use-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Globe2 className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="website-use-title">
                        Website use
                      </h2>
                    </div>
                    <p className="mt-6 leading-8 text-slate-600">
                      You may use the website for lawful, informational purposes. You agree not to:
                    </p>
                    <ul className="mt-4 grid gap-3 text-slate-600">
                      {[
                        "Use the website in a way that violates applicable law or another person’s rights.",
                        "Attempt to gain unauthorised access to the website, its infrastructure, accounts, or connected systems.",
                        "Introduce malicious code, interfere with availability, or bypass reasonable security controls.",
                        "Misrepresent your identity or send fraudulent, abusive, unlawful, or misleading enquiries.",
                        "Copy, extract, or reuse substantial website content through automated means where that use is not permitted by law or written approval.",
                      ].map((item) => (
                        <li className="flex gap-3 leading-7" key={item}>
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 leading-8 text-slate-600">
                      We may restrict access where reasonably necessary to protect the website,
                      users, systems, or legal rights.
                    </p>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="intellectual-property" aria-labelledby="intellectual-property-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700">
                        <Copyright className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="intellectual-property-title">
                        Intellectual property
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        Unless stated otherwise, the website’s original text, visual design,
                        interface elements, graphics, branding, logos, and other content are owned
                        by Qorvexa Innovations or used with appropriate permission. Product names and
                        third-party marks remain the property of their respective owners.
                      </p>
                      <p>
                        You may view and reference public pages for personal or internal business
                        evaluation. No ownership right or licence to reproduce, modify, publish,
                        distribute, commercially exploit, or create derivative works is granted
                        except where applicable law allows it or we give prior written permission.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="product-information" aria-labelledby="product-information-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-50 text-cyan-700">
                        <PackageSearch className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="product-information-title">
                        Product information
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        Product descriptions, mockups, roadmaps, planned areas, features, and
                        availability information are provided for general context. They may change
                        as products are researched, tested, improved, or prepared for release.
                      </p>
                      <p>
                        Nothing on this website is a binding offer, guarantee of future
                        functionality, or commitment to a release date, price, service level, or
                        commercial arrangement. Confirm important requirements directly with us and
                        review any product-specific terms before relying on a product for business use.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="external-links" aria-labelledby="external-links-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700">
                        <ExternalLink className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="external-links-title">
                        External links
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        The website may link to third-party websites, social platforms, tools, or
                        services for convenience. A link does not by itself mean we control,
                        endorse, or guarantee the external content, availability, security, or
                        privacy practices.
                      </p>
                      <p>
                        You access external services at your own discretion and should review the
                        terms and policies that apply to them.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="limitation-of-liability" aria-labelledby="limitation-of-liability-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-rose-50 text-rose-700">
                        <TriangleAlert className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="limitation-of-liability-title">
                        Limitation of liability
                      </h2>
                    </div>
                    <div className="mt-6 space-y-4 leading-8 text-slate-600">
                      <p>
                        The website and its public content are provided on an “as available” basis
                        for general information. We aim to keep content useful and accurate, but do
                        not promise that every page will always be complete, current, uninterrupted,
                        secure, or free from errors.
                      </p>
                      <p>
                        To the maximum extent permitted by applicable law, Qorvexa Innovations will
                        not be liable for indirect, incidental, special, or consequential loss
                        arising solely from access to, inability to access, or reliance on this
                        public website or a third-party link. Nothing in these terms excludes
                        liability that cannot lawfully be excluded or limited.
                      </p>
                    </div>
                  </section>
                </Reveal>

                <Reveal>
                  <section className="scroll-mt-28 py-10" id="updates-to-terms" aria-labelledby="updates-to-terms-title">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                        <FilePenLine className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-slate-950" id="updates-to-terms-title">
                        Updates to terms
                      </h2>
                    </div>
                    <p className="mt-6 leading-8 text-slate-600">
                      We may revise these terms to reflect changes to the website, products,
                      operations, or legal requirements. The revised version will be posted on this
                      page with an updated date. Continued use of the website after a revision means
                      the version then published applies to that later use.
                    </p>
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
                      For a question about these terms or permission to use website content,
                      contact Qorvexa Innovations at{" "}
                      <a
                        className="font-bold text-indigo-700 underline decoration-indigo-200 underline-offset-4 transition hover:text-indigo-900"
                        href={`mailto:${CONTACT_EMAIL}`}
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                    <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                      <Scale className="mt-1 size-4 shrink-0 text-slate-500" aria-hidden="true" />
                      <p>
                        If you are evaluating a specific Qorvexa product or engagement, ask for the
                        terms that apply to that product or arrangement rather than relying only on
                        this general website page.
                      </p>
                    </div>
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
