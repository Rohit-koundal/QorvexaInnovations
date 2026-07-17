import type { Metadata } from "next";
import { BadgeCheck, BriefcaseBusiness, Cloud, Code2, Handshake, Layers3, Palette, SearchCheck, Server, Sparkles } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { StudioScene } from "@/components/site/HeroVisuals";
import { CtaBand, EmptyState, FeatureGrid, FeatureStrip, SectionHeader } from "@/components/site/Sections";
import { pageContent, teamDisciplines, whyQorvexa } from "@/content/pages";

export const metadata: Metadata = {
  title: "Team & Delivery Disciplines",
  description: "Explore the product, design, engineering, quality, and delivery disciplines that support Qorvexa's product work.",
  alternates: { canonical: "/team" },
};

const disciplineIcons = [Layers3, Palette, Code2, Server, SearchCheck, Cloud];
const principleIcons = [Sparkles, Code2, Handshake, BadgeCheck];

export default function TeamPage() {
  return (
    <>
      <EditorialHero
        {...pageContent.team.hero}
        visual={<StudioScene variant="team" />}
        primary={{ label: "How We Work", href: "/process" }}
        secondary={{ label: "Open Positions", href: "/careers" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <SectionHeader eyebrow="Leadership Team" title="People are never invented for presentation." description="No approved names, roles, biographies, portraits, or professional profiles are available in the current project data." />
            <div className="mt-7"><EmptyState title="Verified profiles coming later" description="This space will present real people only after Qorvexa supplies and approves their information." href="/contact" action="Contact Qorvexa" /></div>
          </div>
          <div>
            <SectionHeader eyebrow="What Makes the Work Different" title="Shared product responsibility across every discipline." />
            <div className="mt-7"><FeatureGrid items={whyQorvexa.map((item, index) => ({ ...item, icon: principleIcons[index] }))} columns={2} compact /></div>
          </div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Delivery Disciplines" title="The capabilities a complete product needs." description="These are the working disciplines represented in Qorvexa's delivery model. They are not team-size claims or individual employee profiles." />
          <div className="mt-10"><FeatureGrid items={teamDisciplines.map((item, index) => ({ ...item, icon: disciplineIcons[index] }))} columns={3} /></div>
        </div>
      </section>

      <section className="site-section-compact bg-white">
        <div className="site-shell"><FeatureStrip items={[
          { title: "Integrity", description: "Be direct about constraints, risks, and unknowns.", icon: BadgeCheck },
          { title: "Collaboration", description: "Bring the right perspectives into the decision.", icon: Handshake },
          { title: "Ownership", description: "Connect individual work to the finished outcome.", icon: BriefcaseBusiness },
          { title: "Growth", description: "Use feedback and reflection to improve the practice.", icon: Sparkles },
        ]} /></div>
      </section>

      <CtaBand title="Interested in building thoughtful products with Qorvexa?" description="Verified opportunities are published on the careers page when they are available." />
    </>
  );
}
