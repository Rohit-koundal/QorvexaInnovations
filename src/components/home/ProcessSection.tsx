import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const processSteps = [
  {
    title: "Problem Discovery",
    description: "Understand the challenge, context, users, and desired outcome.",
  },
  {
    title: "Research and Validation",
    description: "Test assumptions and identify what creates genuine value.",
  },
  {
    title: "Product Planning",
    description: "Shape the scope, priorities, architecture, and roadmap.",
  },
  {
    title: "UI/UX Design",
    description: "Turn complex workflows into clear, accessible experiences.",
  },
  {
    title: "Development and Testing",
    description: "Build reliable systems and verify them across real use cases.",
  },
  {
    title: "Launch and Improvement",
    description: "Release thoughtfully, learn from feedback, and keep evolving.",
  },
];

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="From Problem to Product"
            description="A disciplined process keeps every decision connected to the problem, the user, and the long-term product goal."
            align="center"
          />
        </Reveal>

        <div className="relative mt-14 lg:mt-16">
          <div
            className="absolute left-[8.333%] right-[8.333%] top-6 hidden h-px bg-gradient-to-r from-indigo-200 via-cyan-300 to-indigo-200 xl:block"
            aria-hidden="true"
          />
          <div className="grid gap-0 md:grid-cols-2 md:gap-x-7 md:gap-y-10 xl:grid-cols-6 xl:gap-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="group relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 pb-9 md:block md:pb-0 md:text-center">
                  {index < processSteps.length - 1 ? (
                    <span
                      className="absolute left-[1.45rem] top-12 h-[calc(100%-2.5rem)] w-px bg-slate-200 md:hidden"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative z-10 grid size-12 place-items-center rounded-full border-4 border-slate-50 bg-slate-950 text-sm font-black text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition duration-300 group-hover:bg-indigo-600 md:mx-auto">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 pt-1 md:pt-6">
                    <h3 className="text-base font-extrabold tracking-[-0.025em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
