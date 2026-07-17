import type { Metadata } from "next";
import { BadgeCheck, Code2, Compass, Eye, Lightbulb, MessageCircle, Palette, ShieldCheck } from "lucide-react";

import { getContentIcon } from "@/components/site/ContentIcon";
import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductArchitectureVisual, StudioScene } from "@/components/site/HeroVisuals";
import { CtaBand, ContentSplit, EmptyState, FeatureGrid, FeatureStrip, SectionHeader } from "@/components/site/Sections";
import { company, companyContentNotes, companyValues } from "@/content/company";
import { pageContent, technologyPrinciples } from "@/content/pages";

export const metadata: Metadata = {
  title: "About Qorvexa",
  description: "Learn how Qorvexa brings product thinking, experience design, and software engineering together around meaningful business needs.",
  alternates: { canonical: "/about" },
};

const principleIcons = [Compass, Code2, Palette, ShieldCheck];

export default function AboutPage() {
  return (
    <>
      <EditorialHero
        {...pageContent.about.hero}
        visual={<StudioScene variant="workspace" />}
        primary={{ label: "Our Approach", href: "#who-we-are" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />

      <section id="who-we-are" className="site-section scroll-mt-24 bg-white">
        <div className="site-shell">
          <ContentSplit eyebrow="Who We Are" title="A product-minded engineering partner for digital businesses." description="Qorvexa Innovations is based in India and works through remote and hybrid collaboration. The company combines software engineering and digital product thinking around practical business and user needs.">
            <ProductArchitectureVisual />
          </ContentSplit>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell grid gap-5 md:grid-cols-2">
          <article className="surface-card p-7 lg:p-9"><span className="icon-tile"><Compass className="size-5" aria-hidden="true" /></span><p className="eyebrow mt-5 before:hidden">Mission</p><h2 className="serif mt-2 text-3xl">Build useful digital products with clarity and care.</h2><p className="mt-4 text-sm leading-7 text-[#687079]">{company.mission.value}</p></article>
          <article className="surface-card p-7 lg:p-9"><span className="icon-tile"><Eye className="size-5" aria-hidden="true" /></span><p className="eyebrow mt-5 before:hidden">Vision</p><h2 className="serif mt-2 text-3xl">Create lasting value through practical technology.</h2><p className="mt-4 text-sm leading-7 text-[#687079]">{company.vision.value}</p></article>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Our Values" title="The principles behind thoughtful product work." align="center" />
          <div className="mt-10"><FeatureGrid items={companyValues.map((item) => ({ title: item.title, description: item.description, icon: getContentIcon(item.icon) }))} columns={4} compact /></div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Engineering & Technology Philosophy" title="Choose the right foundation, then build it deliberately." description="The technology should stay understandable to the people who own and operate the finished product." />
          <div className="mt-10"><FeatureStrip items={technologyPrinciples.map((item, index) => ({ ...item, icon: principleIcons[index] }))} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-2">
          <div><SectionHeader eyebrow="Leadership" title="Verified leadership profiles will appear here." description="Names, roles, biographies, portraits, and social links are intentionally not invented." /><div className="mt-7"><EmptyState title="Leadership information awaiting approval" description="The content system is ready for verified profiles when they are provided." href="/contact" action="Contact Qorvexa" /></div></div>
          <div><SectionHeader eyebrow="Our Journey" title="Company milestones will be published with verified dates." description={companyContentNotes.journey} /><div className="mt-7"><EmptyState title="A factual timeline, not a fabricated one" description="Milestones, founding dates, offices, customer counts, and growth figures remain hidden until confirmed." href="/team" action="Explore Our Delivery Model" /></div></div>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#fffdfa]">
        <div className="site-shell"><FeatureStrip items={[
          { title: "Clarity", description: "Make complex product decisions understandable.", icon: Lightbulb },
          { title: "Communication", description: "Keep context, trade-offs, and next steps visible.", icon: MessageCircle },
          { title: "Quality", description: "Consider reliability and usability throughout delivery.", icon: BadgeCheck },
          { title: "Responsibility", description: "Treat security, accessibility, and maintainability as product concerns.", icon: ShieldCheck },
        ]} /></div>
      </section>

      <CtaBand />
    </>
  );
}
