import { BadgeCheck, CalendarCheck, Code2, Compass, Gauge, Handshake, Layers3, MessageCircle, Palette, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { ProcessStackVisual } from "@/components/site/HeroVisuals";
import { CtaBand, ContentSplit, FeatureGrid, FeatureStrip, ProcessTimeline, SectionHeader } from "@/components/site/Sections";
import { deliveryPhases, deliveryPrinciples, pageContent } from "@/content/pages";

const phaseIcons = [Compass, Layers3, Palette, Code2, ShieldCheck, Rocket, Gauge];
const principleIcons = [Handshake, MessageCircle, Workflow, BadgeCheck];

export function ProcessPageView() {
  const phases = deliveryPhases.map((phase, index) => ({ ...phase, icon: phaseIcons[index] }));
  return (
    <>
      <EditorialHero
        {...pageContent.process.hero}
        visual={<ProcessStackVisual />}
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Process Overview" title="Seven phases, one connected delivery system." description="The process stays flexible to the product while making the purpose and output of each phase explicit." align="center" />
          <div className="mt-11"><ProcessTimeline items={phases} /></div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="What Happens in Each Phase" title="Visible work, practical deliverables, and clear decisions." />
          <div className="mt-10"><FeatureGrid items={phases.map((phase) => ({ title: phase.title, description: phase.description, bullets: [...phase.deliverables], icon: phase.icon }))} columns={3} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <ContentSplit eyebrow="How We Collaborate" title="Your team stays connected to the decisions that shape the product." description="Reviews, working sessions, written decisions, and predictable checkpoints keep context shared without adding unnecessary process.">
            <FeatureStrip items={deliveryPrinciples.map((item, index) => ({ ...item, icon: principleIcons[index] }))} />
          </ContentSplit>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#fffdfa]">
        <div className="site-shell"><FeatureStrip items={[
          { title: "Working Sessions", description: "Focused conversations for requirements, trade-offs, and decisions.", icon: Handshake },
          { title: "Reviewable Increments", description: "Regular product increments make feedback concrete and useful.", icon: Sparkles },
          { title: "Decision Records", description: "Important choices and their reasoning remain visible to the team.", icon: Layers3 },
          { title: "Delivery Rhythm", description: "Milestones and checkpoints are tailored to the scope and team context.", icon: CalendarCheck },
        ]} /></div>
      </section>

      <CtaBand title="Ready to start with a clearer process?" description="Bring the idea, problem, or existing product. We’ll help define the next practical step." />
    </>
  );
}
