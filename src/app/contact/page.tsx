import type { Metadata } from "next";
import { BriefcaseBusiness, Compass, Mail, MapPin, MessageCircle, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { EditorialHero } from "@/components/site/EditorialHero";
import { FAQList } from "@/components/site/FAQ";
import { StudioScene } from "@/components/site/HeroVisuals";
import { CtaBand, FeatureGrid, SectionHeader, TrustStrip } from "@/components/site/Sections";
import { contactDetails } from "@/content/contact";
import { contactFaqs, pageContent } from "@/content/pages";

export const metadata: Metadata = {
  title: "Contact Qorvexa",
  description: "Contact Qorvexa Innovations to discuss custom software, digital products, web applications, commerce, bookings, or business platforms.",
  alternates: { canonical: "/contact" },
};

const usefulContext = [
  { icon: Sparkles, label: "The problem or opportunity" },
  { icon: MessageCircle, label: "Who the product is for" },
  { icon: Workflow, label: "The current workflow or product" },
  { icon: ShieldCheck, label: "Known constraints or security needs" },
];

export default function ContactPage() {
  return (
    <>
      <EditorialHero
        {...pageContent.contact.hero}
        visual={<StudioScene variant="contact" />}
        primary={{ label: "Send a Message", href: "#contact-form" }}
        secondary={{ label: "Explore Services", href: "/services" }}
        compact
      />

      <section id="contact-form" className="site-section scroll-mt-24 bg-white">
        <div className="site-shell grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
          <ContactForm />
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="surface-card p-6"><span className="icon-tile"><Mail className="size-5" aria-hidden="true" /></span><p className="mt-4 text-xs font-extrabold uppercase tracking-[.1em] text-[#8f5d1c]">Email</p><a href={`mailto:${contactDetails.email.value}`} className="mt-2 block break-all text-base font-extrabold text-[#071522] hover:text-[#8f5d1c]">{contactDetails.email.value}</a><p className="mt-2 text-xs leading-5 text-[#687079]">Use email for non-sensitive project and partnership enquiries.</p></article>
            <article className="surface-card p-6"><span className="icon-tile"><MapPin className="size-5" aria-hidden="true" /></span><p className="mt-4 text-xs font-extrabold uppercase tracking-[.1em] text-[#8f5d1c]">Location & Collaboration</p><p className="mt-2 text-base font-extrabold text-[#071522]">{contactDetails.country.value}</p><p className="mt-2 text-xs leading-5 text-[#687079]">Remote and hybrid collaboration. A public office address, phone number, and office hours have not been supplied.</p></article>
            <div className="surface-card relative min-h-64 overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-[#f3ede4] bg-[linear-gradient(30deg,transparent_45%,rgba(255,255,255,.9)_46%_48%,transparent_49%),linear-gradient(120deg,transparent_40%,rgba(255,255,255,.9)_41%_44%,transparent_45%)] bg-[size:72px_72px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(216,180,115,.28),transparent_32%)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"><span className="mx-auto grid size-14 place-items-center rounded-full bg-[#b77b2c] text-white shadow-xl"><MapPin className="size-6" aria-hidden="true" /></span><p className="mt-3 text-sm font-extrabold">Public office map not configured</p><p className="mt-1 text-xs text-[#687079]">Location details appear after approval.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Ways to Begin" title="Choose the conversation that fits your current stage." align="center" />
          <div className="mt-10"><FeatureGrid items={[
            { title: "Product Discovery", description: "Clarify the problem, intended users, outcome, and first practical scope.", icon: Compass, href: "#contact-form" },
            { title: "Technical Review", description: "Discuss an existing product, architecture, integration, or delivery challenge.", icon: Workflow, href: "#contact-form" },
            { title: "Project Planning", description: "Share an established brief and explore a structured next-step proposal.", icon: BriefcaseBusiness, href: "#contact-form" },
          ]} columns={3} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div><SectionHeader eyebrow="Before You Send" title="Useful context creates a better first conversation." description="Share non-sensitive information only. Access credentials, customer data, and confidential files should wait for an agreed secure channel." /><div className="mt-7 grid gap-3 text-sm text-[#59636c]">{usefulContext.map(({ icon: Icon, label }) => <p key={label} className="flex items-center gap-3"><span className="icon-tile size-9"><Icon className="size-4" aria-hidden="true" /></span>{label}</p>)}</div></div>
          <div><SectionHeader eyebrow="Frequently Asked Questions" title="A clearer starting point." /><div className="mt-7"><FAQList items={[...contactFaqs]} /></div></div>
        </div>
      </section>

      <CtaBand title="Ready to turn the context into a clear next step?" description="Use the form above or email Qorvexa with a concise, non-sensitive summary." />
      <TrustStrip items={["Custom Software", "Web Apps", "Commerce", "Hospitality", "Booking", "Product Design"]} />
    </>
  );
}
