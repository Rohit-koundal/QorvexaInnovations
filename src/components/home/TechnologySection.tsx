import { Cloud, Database, Monitor, Server } from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechnologyBadge } from "@/components/shared/TechnologyBadge";
import { technologies } from "@/data/technologies";

const categoryIcons = [Monitor, Server, Database, Cloud];

export function TechnologySection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow="Our toolkit"
            title="Technology That Powers Our Products"
          />
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg">
            We choose proven, maintainable technologies around the needs of each product—not around trends—so every system can remain dependable as it grows.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {technologies.map((group, index) => {
            const Icon = categoryIcons[index] ?? Monitor;

            return (
              <Reveal key={group.category} delay={index * 0.07}>
                <Card className="h-full p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-extrabold tracking-[-0.03em] text-slate-950">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((technology) => (
                      <TechnologyBadge name={technology} key={technology} />
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
