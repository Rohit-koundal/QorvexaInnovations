import type { Metadata } from "next";
import {
  Boxes,
  Gauge,
  Layers3,
  MonitorSmartphone,
  PackageSearch,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductHero } from "@/components/products/ProductHero";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechnologyBadge } from "@/components/shared/TechnologyBadge";
import { flagshipProduct } from "@/data/products";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Samira Collection | Fashion Commerce Platform",
  description:
    "Explore Samira Collection, a responsive fashion commerce platform for storefront, product, inventory, order, offer, and customer management.",
  alternates: { canonical: "/products/samira-collection" },
  openGraph: {
    title: "Samira Collection | Qorvexa Innovations",
    description:
      "A complete digital commerce platform for modern fashion businesses.",
    url: "/products/samira-collection",
    images: [
      {
        url: "/images/products/samira-look.svg",
        width: 800,
        height: 1000,
        alt: "Samira Collection fashion commerce platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samira Collection | Qorvexa Innovations",
    description: "A complete digital commerce platform for modern fashion businesses.",
    images: ["/images/products/samira-look.svg"],
  },
};

const problemPoints = [
  {
    title: "Manual product uploads",
    description: "Repetitive catalogue updates make it hard to keep product information current.",
    icon: PackageSearch,
  },
  {
    title: "Difficult inventory management",
    description: "Disconnected stock records make variants and availability harder to control.",
    icon: Boxes,
  },
  {
    title: "Complicated order tracking",
    description: "Teams lose visibility when fulfilment information lives across separate tools.",
    icon: ShoppingBag,
  },
  {
    title: "Poor mobile shopping",
    description: "Cluttered, desktop-first journeys create friction for customers on smaller screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Disconnected operations",
    description: "Catalogue, customers, orders, and content become difficult to coordinate.",
    icon: Layers3,
  },
  {
    title: "Limited offer control",
    description: "Rigid content and promotion tools slow down day-to-day merchandising changes.",
    icon: SlidersHorizontal,
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Cloud storage",
  "REST APIs",
  "Payment integration",
];

const benefits = [
  {
    title: "Faster product management",
    description: "A structured catalogue workflow makes product and variant updates easier to manage.",
    icon: PackageSearch,
  },
  {
    title: "Better customer experience",
    description: "Clear discovery, product details, checkout, and account flows reduce shopping friction.",
    icon: Sparkles,
  },
  {
    title: "Centralized operations",
    description: "Core commerce activity is managed through one connected administrative platform.",
    icon: Layers3,
  },
  {
    title: "Responsive design",
    description: "Storefront and management experiences adapt across mobile and desktop screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Scalable architecture",
    description: "A modular frontend, API, and data foundation supports continued product growth.",
    icon: Gauge,
  },
  {
    title: "Business-ready platform",
    description: "Customer experience and operational controls work together as one product system.",
    icon: ShoppingBag,
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: flagshipProduct.name,
  description: flagshipProduct.longDescription,
  category: flagshipProduct.category,
  url: `${SITE_URL}${flagshipProduct.href}`,
  image: `${SITE_URL}/images/products/samira-look.svg`,
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  additionalProperty: flagshipProduct.features.map((feature) => ({
    "@type": "PropertyValue",
    name: "Platform capability",
    value: feature,
  })),
};

export default function SamiraCollectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ProductHero product={flagshipProduct} />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Problem"
            title="Fashion commerce becomes harder when every task lives somewhere else"
            description="Growing a digital storefront involves more than listing products. Teams need to keep the shopping experience, stock, fulfilment, offers, and content working together."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problemPoints.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.05}>
                <Card className="h-full p-5 transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div className="absolute -right-32 -top-40 size-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="The Solution"
                title="One integrated platform for shopping and operations"
                description="Samira Collection brings the customer storefront and the admin workflow into one connected product. Catalogue, inventory, orders, offers, customers, and content can move through a shared commerce system instead of isolated processes."
                inverse
              />
              <p className="mt-6 text-base leading-8 text-slate-300">
                The result is a clearer experience for customers and a more manageable day-to-day
                workspace for the people running the business.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-2xl bg-white p-5">
                    <ShoppingBag className="size-6 text-indigo-600" aria-hidden="true" />
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-indigo-600">Experience</p>
                    <p className="mt-1 font-extrabold text-slate-950">Customer storefront</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Browse, decide, buy, and manage orders.</p>
                  </div>
                  <div className="mx-auto flex size-10 rotate-90 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 sm:rotate-0">
                    <span className="text-lg font-black" aria-hidden="true">↔</span>
                    <span className="sr-only">Connected with</span>
                  </div>
                  <div className="rounded-2xl bg-white p-5">
                    <SlidersHorizontal className="size-6 text-cyan-700" aria-hidden="true" />
                    <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-cyan-700">Control</p>
                    <p className="mt-1 font-extrabold text-slate-950">Admin platform</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">Operate products, stock, content, and orders.</p>
                  </div>
                </div>
                <div className="mx-auto mt-4 max-w-sm rounded-xl border border-indigo-300/20 bg-indigo-400/10 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-200">
                  Shared commerce foundation
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ProductFeatures />
      <ProductGallery />

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Technology Stack"
                title="A practical foundation for modern commerce"
                description="Samira Collection combines a responsive web interface with an API-driven backend, flexible data storage, and essential commerce integrations."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-8">
                {technologies.map((technology) => (
                  <TechnologyBadge key={technology} name={technology} />
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Business Benefits"
            title="Built to make commerce easier to run and easier to use"
            description="The platform connects operational clarity with a customer experience designed for modern devices."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.05}>
                <Card className="h-full p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to Build or Use a Similar Product?"
        description="Tell us about your commerce idea, operational challenge, or platform requirements. We would be glad to understand the problem with you."
        primaryLabel="Talk to Qorvexa"
        primaryHref="/contact"
        secondaryLabel="Explore All Products"
        secondaryHref="/products"
      />
    </>
  );
}
