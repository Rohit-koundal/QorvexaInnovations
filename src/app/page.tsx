import {
  BadgeCheck,
  Boxes,
  Code2,
  Gauge,
  Layers3,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getContentIcon } from "@/components/site/ContentIcon";
import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductDeviceStage } from "@/components/site/HeroVisuals";
import { ProductGrid } from "@/components/site/ProductGrid";
import {
  CtaBand,
  FeatureGrid,
  FeatureStrip,
  ProcessTimeline,
  SectionHeader,
  TrustStrip,
} from "@/components/site/Sections";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { deliveryPhases, pageContent, technologyPrinciples, whyQorvexa } from "@/content/pages";

const whyIcons = [Sparkles, Code2, Palette, BadgeCheck];
const processIcons = [Sparkles, Layers3, Palette, Code2, ShieldCheck, Rocket, Gauge];
const technologyIcons = [Gauge, Boxes, ShieldCheck, Layers3];

export default function HomePage() {
  const serviceItems = services.slice(0, 8).map((service) => ({
    title: service.shortTitle,
    description: service.description,
    icon: getContentIcon(service.icon),
    href: `/services#${service.slug}`,
  }));
  const whyItems = whyQorvexa.map((item, index) => ({ ...item, icon: whyIcons[index] }));
  const phaseItems = deliveryPhases.map((item, index) => ({ ...item, icon: processIcons[index] }));

  return (
    <>
      <EditorialHero
        {...pageContent.home.hero}
        visual={<ProductDeviceStage mode="platform" cinematic />}
        cinematic
        priority
        primary={{ label: "Explore Our Services", href: "/services" }}
        secondary={{ label: "View Our Work", href: "/portfolio" }}
      />
      <TrustStrip items={[...pageContent.home.solutionAreas]} />

      <section className="site-section bg-[#fdfbf8]">
        <div className="site-shell">
          <SectionHeader eyebrow="Our Services & Solutions" title="Everything needed to design, build, and evolve a digital product." description="Focused capabilities combine around the needs of each product rather than a one-size-fits-all delivery package." />
          <div className="mt-10"><FeatureGrid items={serviceItems} columns={4} compact /></div>
        </div>
      </section>

      <section className="site-section bg-[#031b2d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(216,180,115,.16),transparent_28%)]" />
        <div className="site-shell relative">
          <div className="[&_.body-lead]:text-white/60 [&_.eyebrow]:text-[#d8b473] [&_.section-title]:text-white">
            <SectionHeader eyebrow="Product Ecosystem" title="Platform foundations for ambitious digital businesses." description="Each product entry is structured as an editable product concept; availability and technology details are published only after confirmation." />
          </div>
          <div className="mt-10"><ProductGrid items={products} dark /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Why Qorvexa" title="A thoughtful balance of product, design, and engineering." align="center" />
          <div className="mt-10"><FeatureGrid items={whyItems} columns={4} compact /></div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="From Idea to Impact" title="A clear path from discovery to continued growth." description="Every phase has a defined purpose, visible deliverables, and a direct connection to the next decision." />
          <div className="mt-10"><ProcessTimeline items={phaseItems} /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Technology Philosophy" title="Technology choices that serve the product." description="Tools and platforms are selected for fit, maintainability, security, and the realities of operating the finished product." />
          <div className="mt-10">
            <FeatureStrip items={technologyPrinciples.map((item, index) => ({ ...item, icon: technologyIcons[index] }))} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
