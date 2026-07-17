import type { Metadata } from "next";
import { BarChart3, Cloud, Gauge, Puzzle, Rocket, ShieldCheck, SlidersHorizontal } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { ProductDeviceStage } from "@/components/site/HeroVisuals";
import { ProductGrid } from "@/components/site/ProductGrid";
import { CtaBand, FeatureStrip, PlaceholderNotice, ProcessTimeline, SectionHeader } from "@/components/site/Sections";
import { deliveryPhases, pageContent } from "@/content/pages";
import { productContentNotes, products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products & Platforms",
  description: "Explore Qorvexa product concepts for fashion commerce, hotel management, pet commerce, bookings, and business operations.",
  alternates: { canonical: "/products" },
};

const phaseIcons = [Gauge, SlidersHorizontal, Puzzle, Rocket, BarChart3, Cloud, ShieldCheck];

export default function ProductsPage() {
  return (
    <>
      <EditorialHero
        {...pageContent.products.hero}
        visual={<ProductDeviceStage mode="products" />}
        primary={{ label: "Explore Products", href: "#product-collection" }}
        secondary={{ label: "Book a Consultation", href: "/contact" }}
      />

      <section id="product-collection" className="site-section scroll-mt-24 bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="Product Collection" title="Platform concepts for focused business workflows." description="Each product entry has a reusable detail template, editable modules, and clear placeholders for approved screenshots, technology, and release information." align="center" />
          <div className="mt-8"><PlaceholderNotice>{productContentNotes.status} Product availability is not implied by this catalogue.</PlaceholderNotice></div>
          <div className="mt-10"><ProductGrid items={products} /></div>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell"><FeatureStrip items={[
          { title: "Secure by Design", description: "Access, validation, and data boundaries are planned from the start.", icon: ShieldCheck },
          { title: "Configurable", description: "Modules can be shaped around approved operational requirements.", icon: SlidersHorizontal },
          { title: "Analytics-Ready", description: "Reporting needs are defined alongside the workflows that create the data.", icon: BarChart3 },
          { title: "Integration-Friendly", description: "External systems are connected through clearly scoped interfaces.", icon: Puzzle },
        ]} /></div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="From Idea to Product" title="Designed, built, deployed, and improved as one connected journey." description="The exact timeline and technology are confirmed per product; the delivery sequence remains transparent from the first decision through continued growth." />
          <div className="mt-10"><ProcessTimeline items={deliveryPhases.map((phase, index) => ({ ...phase, icon: phaseIcons[index] }))} /></div>
        </div>
      </section>

      <CtaBand title="Ready to shape your next digital product?" description="Let’s turn a clear business problem into an understandable product plan." />
    </>
  );
}
