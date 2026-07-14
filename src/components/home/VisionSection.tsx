import { Compass, Eye } from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";

const direction = [
  {
    label: "Vision",
    title: "The future we are building toward",
    description: company.vision,
    icon: Eye,
    accent: "from-indigo-600 to-violet-500",
  },
  {
    label: "Mission",
    title: "How we turn intent into products",
    description: company.mission,
    icon: Compass,
    accent: "from-cyan-600 to-sky-500",
  },
];

export function VisionSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Built for lasting value"
            title="Clear Direction. Practical Action."
            description="Our vision sets the destination; our mission shapes the product decisions we make every day."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2">
          {direction.map(({ label, title, description, icon: Icon, accent }, index) => (
            <Reveal key={label} delay={index * 0.08}>
              <Card className="relative h-full overflow-hidden p-6 sm:p-9 lg:p-10">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} aria-hidden="true" />
                <div className="flex items-center gap-4">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${accent}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-600">{label}</p>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
