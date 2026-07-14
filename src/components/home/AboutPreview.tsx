import { Boxes, Layers3, Search } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const principles = [
  {
    title: "Problem First",
    description: "We begin by understanding the real challenge, users, and business needs.",
    icon: Search,
    number: "01",
  },
  {
    title: "Product Focused",
    description: "We create long-term digital products instead of temporary solutions.",
    icon: Boxes,
    number: "02",
  },
  {
    title: "Built to Scale",
    description: "Our products are designed for performance, maintainability, and future growth.",
    icon: Layers3,
    number: "03",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Our foundation"
            title="Innovation With a Purpose"
            description="At Qorvexa
Innovations, we identify real-world problems and transform them into meaningful digital products. Our focus is not only on building software, but on creating solutions that are useful, scalable, and easy to use."
          />
          <Button href="/about" variant="secondary" showArrow className="w-full sm:w-fit">
            Learn More About Us
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {principles.map(({ title, description, icon: Icon, number }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Card className="group relative h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] sm:p-8">
                <div className="absolute right-5 top-4 text-5xl font-black tracking-[-0.08em] text-slate-100 transition group-hover:text-indigo-50">
                  {number}
                </div>
                <div className="relative grid size-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10 transition group-hover:bg-indigo-600">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="relative mt-7 text-xl font-extrabold tracking-[-0.035em] text-slate-950">
                  {title}
                </h3>
                <p className="relative mt-3 leading-7 text-slate-600">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
