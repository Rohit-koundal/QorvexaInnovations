import type { Metadata } from "next";
import { BarChart3, Layers3, Palette, ShieldCheck } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductDeviceStage } from "@/components/site/HeroVisuals";
import { PortfolioFilter } from "@/components/site/PortfolioFilter";
import { CtaBand, FeatureStrip, PlaceholderNotice, SectionHeader } from "@/components/site/Sections";
import { pageContent } from "@/content/pages";
import { portfolioContentNote, portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: "Explore the Qorvexa case-study structure and verified project stories as they are approved for publication.",
  alternates: { canonical: "/portfolio" },
};

const categoryLabels = {
  web: "Web",
  "e-commerce": "E-Commerce",
  hospitality: "Hospitality",
  booking: "Booking",
  "custom-software": "Custom Software",
  "mobile-app": "Mobile Apps",
} as const;

export default function PortfolioPage() {
  const items = portfolioProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
    category: categoryLabels[project.category],
    summary: project.summary,
    imageAlt: `${project.title} illustrative interface placeholder`,
    challenge: project.challenge ?? "Awaiting an approved client challenge and project context.",
    solution: project.solution ?? "Awaiting an approved solution narrative and implementation details.",
    published: project.published,
  }));

  return (
    <>
      <EditorialHero
        {...pageContent.portfolio.hero}
        visual={<ProductDeviceStage mode="platform" />}
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "View Our Services", href: "/services" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Project Library" title="A transparent structure for verified project stories." description="The interface follows the supplied portfolio direction while unapproved customers, results, screenshots, and technologies remain clearly hidden." />
          <div className="mt-8"><PlaceholderNotice>{portfolioContentNote}</PlaceholderNotice></div>
          <div className="mt-9"><PortfolioFilter items={items} /></div>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell"><FeatureStrip items={[
          { title: "Challenge", description: "Explain the verified business and user problem in context.", icon: Layers3 },
          { title: "Design", description: "Show the approved flows, interface decisions, and iterations.", icon: Palette },
          { title: "Engineering", description: "Document confirmed architecture, integrations, and technology.", icon: ShieldCheck },
          { title: "Outcome", description: "Publish results only when evidence and client approval are available.", icon: BarChart3 },
        ]} /></div>
      </section>

      <CtaBand title="Have a project that should become the next verified story?" description="Start with the outcome you want and the workflow that needs to change." />
    </>
  );
}
