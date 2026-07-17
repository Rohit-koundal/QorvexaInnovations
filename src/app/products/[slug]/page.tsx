import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, Boxes, CalendarCheck, CheckCircle2, Gauge, LayoutDashboard, Layers3, Puzzle, ShieldCheck, ShoppingBag, SlidersHorizontal, Sparkles, Workflow } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductArchitectureVisual, ProductDeviceStage } from "@/components/site/HeroVisuals";
import { CtaBand, ContentSplit, FeatureGrid, FeatureStrip, PlaceholderNotice, ProcessTimeline, SectionHeader } from "@/components/site/Sections";
import { deliveryPhases } from "@/content/pages";
import { getProductBySlug, productRouteSlugs } from "@/content/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

const moduleIcons = [ShoppingBag, Boxes, CalendarCheck, LayoutDashboard, SlidersHorizontal, BarChart3, Workflow, ShieldCheck, Layers3, Puzzle];
const phaseIcons = [Sparkles, Layers3, SlidersHorizontal, Workflow, CheckCircle2, Gauge, BarChart3];

export function generateStaticParams() {
  return productRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const moduleItems = product.modules.map((module, index) => ({
    title: module,
    description: `A configurable ${module.toLowerCase()} module within the proposed ${product.name} product structure.`,
    icon: moduleIcons[index % moduleIcons.length],
  }));

  return (
    <>
      <EditorialHero
        eyebrow={product.category}
        title="A Focused Product Foundation for"
        accent={`${product.name}.`}
        description={product.description}
        visual={<ProductDeviceStage mode="products" />}
        primary={{ label: "Discuss This Product", href: `/contact?product=${product.slug}` }}
        secondary={{ label: "All Products", href: "/products" }}
      />

      <section className="site-section bg-white">
        <div className="site-shell">
          <PlaceholderNotice>This page presents an editable product concept and module plan. Public availability, live customers, final technology, screenshots, pricing, and performance outcomes have not been verified.</PlaceholderNotice>
          <div className="mt-10"><ContentSplit eyebrow="Product Overview" title={product.name} description={product.summary}><ProductArchitectureVisual /></ContentSplit></div>
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Key Modules" title="A modular structure for the product's core workflows." description="Modules are configuration targets from the product brief and remain subject to discovery, validation, and approved scope." align="center" />
          <div className="mt-10"><FeatureGrid items={moduleItems} columns={3} compact /></div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Interface Preview" title="Responsive product thinking across customer and operator journeys." description="The live device composition is an original interface placeholder built from HTML and CSS. It demonstrates visual direction without pretending to be a finished product screenshot." />
            <div className="mt-8"><FeatureStrip items={[
              { title: "Responsive", description: "Adapt task flows to mobile, tablet, and desktop contexts.", icon: Gauge },
              { title: "Role-Aware", description: "Present the right tools and information to each approved role.", icon: ShieldCheck },
              { title: "Integrated", description: "Connect modules through consistent data and workflow boundaries.", icon: Puzzle },
              { title: "Observable", description: "Plan reporting and operational visibility with the workflow.", icon: BarChart3 },
            ]} /></div>
          </div>
          <ProductDeviceStage mode="products" />
        </div>
      </section>

      <section className="site-section border-y border-[#e7e1d9] bg-[#fffdfa]">
        <div className="site-shell">
          <SectionHeader eyebrow="Delivery Path" title="Shape, validate, build, and launch the right version first." description="The implementation approach follows Qorvexa's shared process while remaining flexible to product scope and risk." />
          <div className="mt-10"><ProcessTimeline items={deliveryPhases.map((phase, index) => ({ ...phase, icon: phaseIcons[index] }))} /></div>
        </div>
      </section>

      <CtaBand title={`Want to explore ${product.name}?`} description="Share the workflow, intended users, and outcome you need. Availability and scope are confirmed through a direct conversation." />
    </>
  );
}
