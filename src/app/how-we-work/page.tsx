import type { Metadata } from "next";
import {
  CheckCircle2,
  Code2,
  ListChecks,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const pageDescription =
  "See how Qorvexa Innovations moves from problem discovery and product definition through design, development, launch, and continuous improvement.";

export const metadata: Metadata = {
  title: "How We Work",
  description: pageDescription,
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    type: "website",
    title: "How Qorvexa Innovations Works",
    description: pageDescription,
    url: "/how-we-work",
    siteName: "Qorvexa Innovations",
    images: [
      {
        url: "/images/company/nexora-og.svg",
        width: 1200,
        height: 630,
        alt: "Qorvexa Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Qorvexa Innovations Works",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const processSteps = [
  {
    title: "Discover",
    description:
      "We understand the problem, users, business goals, current workflows, and the constraints that will shape a useful solution.",
    focus: ["User context", "Business goals", "Problem evidence"],
    icon: Search,
  },
  {
    title: "Define",
    description:
      "We turn what we learned into a focused product scope, clear requirements, sensible priorities, and a roadmap everyone can understand.",
    focus: ["Product scope", "Requirements", "Priorities & roadmap"],
    icon: ListChecks,
  },
  {
    title: "Design",
    description:
      "We shape user flows, wireframes, visual direction, reusable design systems, and responsive interfaces around real tasks.",
    focus: ["User flows", "Interface states", "Design system"],
    icon: Palette,
  },
  {
    title: "Develop",
    description:
      "We build maintainable frontends, backends, APIs, databases, and integrations with room for the product to evolve.",
    focus: ["Scalable foundation", "Secure integrations", "Maintainable code"],
    icon: Code2,
  },
  {
    title: "Test",
    description:
      "We check functionality, usability, responsiveness, performance, accessibility, and reliability before release decisions are made.",
    focus: ["Critical flows", "Device coverage", "Release confidence"],
    icon: ShieldCheck,
  },
  {
    title: "Launch",
    description:
      "We deploy the product, configure production-ready infrastructure, verify essential journeys, and prepare for real use.",
    focus: ["Deployment", "Production checks", "Operational readiness"],
    icon: Rocket,
  },
  {
    title: "Improve",
    description:
      "We use feedback, product signals, and changing needs to refine the experience and choose the next valuable improvements.",
    focus: ["User feedback", "Product learning", "Focused iteration"],
    icon: RefreshCw,
  },
];

const workingPrinciples = [
  {
    title: "Clarity before complexity",
    description:
      "We make the problem, priorities, and trade-offs visible before adding more features or technology.",
  },
  {
    title: "Progress you can inspect",
    description:
      "Work is broken into understandable stages so decisions can be reviewed while change is still practical.",
  },
  {
    title: "Quality across the product",
    description:
      "Experience, engineering, content, performance, and reliability are treated as parts of one product—not separate finish lines.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="From Idea to Impact"
        description="A strong product is not created in one leap. We move through clear stages that connect user needs, business priorities, design decisions, and dependable technology."
      >
        <Badge className="border-white/70 bg-white/70 text-slate-700">
          Seven connected stages
        </Badge>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="The product path"
                title="Deliberate where it matters, flexible where it helps"
                description="The stages provide structure without turning product development into a rigid hand-off. Learning can move us back to an earlier decision when that produces a better outcome."
              />
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 text-sm leading-6 text-slate-700">
                <Waypoints className="mt-0.5 size-5 shrink-0 text-indigo-600" aria-hidden="true" />
                <p>
                  Scope and depth change with the product. The commitment to understanding,
                  validation, and production readiness does not.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              <div
                className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-indigo-300 via-cyan-300 to-emerald-300 sm:left-8"
                aria-hidden="true"
              />
              <ol className="relative space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li className="relative" key={step.title}>
                      <Reveal delay={Math.min(index * 0.035, 0.18)}>
                        <Card className="group grid grid-cols-[3rem_1fr] gap-4 p-5 transition duration-300 hover:border-indigo-200 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:grid-cols-[4rem_1fr] sm:gap-6 sm:p-7">
                          <div className="relative z-10 grid size-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15 transition group-hover:bg-indigo-600 sm:size-16">
                            <Icon className="size-5 sm:size-6" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h2 className="text-xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                                {step.title}
                              </h2>
                              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigo-500">
                                Stage {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${step.title} focus areas`}>
                              {step.focus.map((item) => (
                                <li
                                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                                  key={item}
                                >
                                  <CheckCircle2 className="size-3.5 text-emerald-600" aria-hidden="true" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Working principles"
              title="A process built for useful decisions"
              description="Good process should reduce uncertainty, protect quality, and keep the work connected to its purpose."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {workingPrinciples.map((principle, index) => (
              <Reveal delay={index * 0.06} key={principle.title}>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-indigo-600 text-sm font-extrabold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-extrabold tracking-[-0.025em] text-slate-950">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Bring Us the Problem, Not a Perfect Brief"
        description="You do not need every requirement figured out. Tell us what is difficult today, who it affects, and what a better outcome could mean."
        primaryLabel="Discuss Your Idea"
        primaryHref="/contact"
        secondaryLabel="Explore Our Products"
        secondaryHref="/products"
      />
    </>
  );
}
