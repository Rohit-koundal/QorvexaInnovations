import { Blocks, BrainCircuit, BriefcaseBusiness, Store } from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const capabilities = [
  {
    title: "E-commerce Platforms",
    description: "Modern storefronts, inventory systems, payment flows, and order management.",
    icon: Store,
  },
  {
    title: "Business Applications",
    description: "Digital tools that simplify operations, data, and everyday workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI-Powered Tools",
    description: "Smart products for automation, analysis, recommendations, and productivity.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Digital Products",
    description: "Scalable software products designed around specific real-world problems.",
    icon: Blocks,
  },
];

export function WhatWeBuild() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Build"
            description="Focused product engineering for the systems people use, teams depend on, and businesses grow with."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {capabilities.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <Card className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)] sm:p-7">
                <div className="grid size-12 place-items-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600 transition duration-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-[-0.035em] text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
                <div className="mt-auto pt-6" aria-hidden="true">
                  <span className="block h-px w-10 bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-indigo-500" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
