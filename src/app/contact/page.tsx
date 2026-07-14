import type { Metadata } from "next";
import { Clock3, Globe2, Mail, MapPin, MessageSquareText } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { company } from "@/data/company";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Qorvexa Innovations about a product idea, business challenge, partnership, investment enquiry, or career interest.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let’s Build Something Meaningful | Qorvexa Innovations",
    description:
      "Tell us about your product idea, business challenge, partnership, or career interest.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let’s Build Something Meaningful | Qorvexa Innovations",
    description:
      "Tell us about your product idea, business challenge, partnership, or career interest.",
    images: ["/images/company/nexora-og.svg"],
  },
};

const contactDetails = [
  {
    label: "Business Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "Location",
    value: company.location,
    icon: MapPin,
  },
  {
    label: "Working Model",
    value: company.workingModel,
    icon: Globe2,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Qorvexa"
        title="Let’s Build Something Meaningful"
        description="Tell us about your product idea, business challenge, partnership, or career interest."
      />

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                  <MessageSquareText className="size-6" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                  Start with the context
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  You do not need a finished brief. Tell us what is happening today, who it
                  affects, and what a better outcome would look like.
                </p>

                <div className="mt-8 space-y-3">
                  {contactDetails.map(({ label, value, href, icon: Icon }) => (
                    <Card key={label} className="flex items-start gap-4 p-4 sm:p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-1 block break-words font-extrabold text-slate-900 underline-offset-4 hover:text-indigo-700 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 font-extrabold leading-6 text-slate-900">{value}</p>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-cyan-950">
                  <Clock3 className="mt-0.5 size-5 shrink-0 text-cyan-700" aria-hidden="true" />
                  <p>
                    Qorvexa works remotely and through hybrid collaboration, so conversations can
                    begin from anywhere in India.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
