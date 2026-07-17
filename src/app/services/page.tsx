import type { Metadata } from "next";
import { Gauge, Handshake, Layers3, MonitorSmartphone, ScanSearch, ShieldCheck } from "lucide-react";

import { getContentIcon } from "@/components/site/ContentIcon";
import { EditorialHero } from "@/components/site/EditorialHero";
import { FAQList } from "@/components/site/FAQ";
import { ProductDeviceStage } from "@/components/site/HeroVisuals";
import { CtaBand, FeatureGrid, FeatureStrip, SectionHeader } from "@/components/site/Sections";
import { pageContent, serviceFaqs } from "@/content/pages";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Digital Product & Software Services",
  description: "Custom software, web applications, e-commerce, hotel systems, mobile apps, product design, APIs, cloud delivery, QA, and support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const serviceItems = services.map((service) => ({
    id: service.slug,
    title: service.title,
    description: service.description,
    icon: getContentIcon(service.icon),
    bullets: [...service.keyCapabilities],
    href: service.cta.href,
  }));

  return (
    <>
      <EditorialHero
        {...pageContent.services.hero}
        visual={<ProductDeviceStage mode="services" />}
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Core Services" title="Specialist capabilities, connected around one product goal." description="Every service is scoped to the needs of the product. Capability and technology claims are finalized in the project plan rather than assumed in advance." align="center" />
          <div className="mt-11"><FeatureGrid items={serviceItems} columns={3} /></div>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="What You Get" title="The foundations of dependable product delivery." align="center" />
          <div className="mt-9"><FeatureStrip items={[
            { title: "Clear Scope", description: "A shared understanding of outcomes, priorities, and constraints.", icon: ScanSearch },
            { title: "Scalable Thinking", description: "Architecture and interfaces designed for expected product evolution.", icon: Layers3 },
            { title: "Responsive Experience", description: "Layouts and interactions considered across real device sizes.", icon: MonitorSmartphone },
            { title: "Quality Controls", description: "Validation, review, and release readiness built into delivery.", icon: ShieldCheck },
          ]} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="A Practical Engagement" title="Start with clarity, then choose the right delivery shape." description="Project scope, team shape, cadence, and continued support are defined after the problem and product context are understood." />
            <div className="mt-8"><FeatureGrid items={[
              { title: "Discovery First", description: "Clarify needs before committing to features, timelines, or architecture.", icon: ScanSearch },
              { title: "Visible Delivery", description: "Use reviewable increments, direct communication, and documented decisions.", icon: Handshake },
              { title: "Built to Evolve", description: "Make maintainability and the next likely product stage part of today's choices.", icon: Gauge },
            ]} columns={3} compact /></div>
          </div>
          <div>
            <SectionHeader eyebrow="Common Questions" title="What to expect before work begins." />
            <div className="mt-8"><FAQList items={[...serviceFaqs]} /></div>
          </div>
        </div>
      </section>

      <CtaBand title="Have a product or platform challenge?" description="Share the context and Qorvexa will help frame the next practical step." />
    </>
  );
}
