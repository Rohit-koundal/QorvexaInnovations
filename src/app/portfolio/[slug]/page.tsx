import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, Code2, Layers3, Palette, Route, ShieldCheck } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductArchitectureVisual, ProductDeviceStage } from "@/components/site/HeroVisuals";
import { CtaBand, EmptyState, FeatureGrid, PlaceholderNotice, SectionHeader } from "@/components/site/Sections";
import { getPortfolioProjectBySlug, portfolioRouteSlugs } from "@/content/portfolio";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    robots: project.published ? undefined : { index: false, follow: true },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <EditorialHero
        eyebrow={`${project.industry} Case Study`}
        title="Project Story:"
        accent={project.title}
        description={project.summary}
        visual={<ProductDeviceStage mode="platform" />}
        primary={{ label: "Discuss a Similar Project", href: "/contact" }}
        secondary={{ label: "All Case Studies", href: "/portfolio" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell">
          {!project.published ? <PlaceholderNotice>This case-study route is a prepared template, not a published client claim. Client identity, challenge, solution, screenshots, technology, and outcomes remain hidden until verified and approved.</PlaceholderNotice> : null}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div><SectionHeader eyebrow="The Challenge" title={project.challenge ?? "Verified challenge awaiting approval."} description="This section will explain the business and user context without exposing confidential information." /></div>
            <div><SectionHeader eyebrow="The Solution" title={project.solution ?? "Approved solution narrative awaiting publication."} description="This section will document product decisions and implementation details after client review." /></div>
          </div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Case Study Structure" title="From user flow to architecture and approved outcome." description="The page is ready for a complete, evidence-based project story as soon as the required source material is available." align="center" />
          <div className="mt-10"><FeatureGrid items={[
            { title: "User Flow", description: "Document the approved journey, roles, and critical tasks.", icon: Route },
            { title: "Interface Gallery", description: "Present approved screens with accessible descriptions.", icon: Palette },
            { title: "Architecture", description: "Explain verified components, boundaries, and integrations.", icon: Layers3 },
            { title: "Technology Stack", description: "List only technologies confirmed for the project.", icon: Code2 },
            { title: "Quality & Security", description: "Describe approved validation and safeguard decisions.", icon: ShieldCheck },
            { title: "Outcome", description: "Publish results only with evidence and permission.", icon: BarChart3 },
          ]} columns={3} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><SectionHeader eyebrow="Architecture Preview" title="A clear visual model for the finished technical story." description="The diagram below is a generic template and does not claim to represent this project until the architecture is verified." /><div className="mt-7"><ProductArchitectureVisual /></div></div>
          <EmptyState title="Approved UI gallery pending" description="Product screens and results remain unavailable until the project owner supplies approved assets and content." href="/contact" action="Discuss Your Project" />
        </div>
      </section>

      <CtaBand title="Want to create a product story worth sharing?" description="Start with the problem, users, and outcome. Qorvexa can help shape the product behind the future case study." />
    </>
  );
}
