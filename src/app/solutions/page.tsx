import type { Metadata } from "next";
import { BadgeCheck, Handshake, Layers3, ShieldCheck } from "lucide-react";

import { getContentIcon } from "@/components/site/ContentIcon";
import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductDeviceStage } from "@/components/site/HeroVisuals";
import { CtaBand, FeatureGrid, FeatureStrip, SectionHeader } from "@/components/site/Sections";
import { pageContent } from "@/content/pages";
import { crossSolutionFeatures, solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Industry Digital Solutions",
  description: "Digital product solutions for commerce, hospitality, pet care, booking, corporate, internal software, education, healthcare, real estate, and professional services.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const solutionItems = solutions.map((solution) => ({
    id: solution.slug,
    title: solution.title,
    description: solution.description,
    icon: getContentIcon(solution.icon),
    bullets: [...solution.features],
    href: solution.cta.href,
  }));
  const sharedFeatures = crossSolutionFeatures.map((feature) => ({
    title: feature.title,
    description: "Scoped to the approved workflow and product requirements.",
    icon: getContentIcon(feature.icon),
  }));

  return (
    <>
      <EditorialHero
        {...pageContent.solutions.hero}
        visual={<ProductDeviceStage mode="solutions" />}
        primary={{ label: "Explore Solutions", href: "#industry-solutions" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />

      <section id="industry-solutions" className="site-section scroll-mt-24 bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Industry Solutions" title="Digital foundations shaped around each operating model." description="These solution areas describe the types of challenges Qorvexa can explore. Final scope, features, integrations, and compliance requirements are confirmed during discovery." />
          <div className="mt-11"><FeatureGrid items={solutionItems} columns={3} /></div>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Shared Platform Capabilities" title="Reusable building blocks, adapted to the workflow." align="center" />
          <div className="mt-9"><FeatureGrid items={sharedFeatures} columns={4} compact /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Why the Model Matters" title="Technology should fit the business, not force the business to fit the tool." align="center" />
          <div className="mt-10"><FeatureStrip items={[
            { title: "Industry Context", description: "Understand the operational reality before proposing a product shape.", icon: Layers3 },
            { title: "Secure Foundations", description: "Plan access, validation, data, and operational safeguards deliberately.", icon: ShieldCheck },
            { title: "Scalable Structure", description: "Create modular systems that can evolve with approved needs.", icon: BadgeCheck },
            { title: "End-to-End Partnership", description: "Connect product thinking, design, delivery, and continued improvement.", icon: Handshake },
          ]} /></div>
        </div>
      </section>

      <CtaBand title="Ready to shape a solution around your industry?" description="Start with the business model, current workflow, and outcome you want to create." />
    </>
  );
}
