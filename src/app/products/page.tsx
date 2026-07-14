import type { Metadata } from "next";
import { Bot, Boxes, BriefcaseBusiness, Clock3, Sparkles } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import { CTASection } from "@/components/shared/CTASection";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products Built for Real Problems",
  description:
    "Explore practical, scalable digital products from Qorvexa Innovations, including the Samira Collection fashion commerce platform.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products Built for Real Problems | Qorvexa Innovations",
    description:
      "Practical digital products shaped by thoughtful design and scalable technology.",
    url: "/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products Built for Real Problems | Qorvexa Innovations",
    description:
      "Practical digital products shaped by thoughtful design and scalable technology.",
    images: ["/images/company/nexora-og.svg"],
  },
};

const researchAreas = [
  { name: "AI tools", icon: Bot },
  { name: "Automation", icon: Sparkles },
  { name: "Business software", icon: BriefcaseBusiness },
  { name: "Digital commerce", icon: Boxes },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Products Built for Real Problems"
        description="Our products are designed to solve practical challenges through technology, thoughtful design, and scalable architecture."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Current Product"
            title="Our product portfolio"
            description="We are starting with focused products that connect strong customer experiences with dependable business operations."
          />

          <div className="mt-10 space-y-8">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.06}>
                <ProductCard product={product} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="upcoming"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <Card className="relative overflow-hidden bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-24 size-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 size-64 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                    <Clock3 className="size-6" aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                    In Research &amp; Development
                  </p>
                  <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">
                    More Products Coming Soon
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                    We are researching and building new products across AI, automation, business
                    software, and digital commerce.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {researchAreas.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex min-h-24 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-extrabold">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Have a product challenge worth exploring?"
        description="Tell us about the people, workflow, or business problem you want to improve. We can start with the problem and work forward."
        primaryLabel="Start a Conversation"
        secondaryLabel="See How We Work"
        secondaryHref="/how-we-work"
      />
    </>
  );
}
