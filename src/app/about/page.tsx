import type { Metadata } from "next";
import {
  ArrowDownRight,
  Building2,
  CheckCircle2,
  Compass,
  Layers3,
  Network,
} from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company, coreValues, journey } from "@/data/company";

const pageDescription =
  "Learn why Qorvexa Innovations builds practical, scalable digital products and how our vision, mission, values, and journey guide the work.";

export const metadata: Metadata = {
  title: "About Us",
  description: pageDescription,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "About Qorvexa Innovations",
    description: pageDescription,
    url: "/about",
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
    title: "About Qorvexa Innovations",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const reasons = [
  {
    title: "Solve real-world problems",
    description:
      "Start with a genuine need and understand the people, constraints, and context around it.",
    icon: Compass,
  },
  {
    title: "Build useful products",
    description:
      "Turn insight into focused digital tools that make everyday work or decisions easier.",
    icon: CheckCircle2,
  },
  {
    title: "Support practical progress",
    description:
      "Help businesses adopt technology that fits how they operate and can evolve with them.",
    icon: Building2,
  },
  {
    title: "Create product ecosystems",
    description:
      "Design connected foundations that can improve over time instead of short-lived one-off fixes.",
    icon: Network,
  },
  {
    title: "Make technology meaningful",
    description:
      "Keep experiences understandable and accessible so capability translates into real value.",
    icon: Layers3,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Qorvexa"
        title="We Build With Purpose"
        description="Qorvexa Innovations is a product-based technology company focused on transforming meaningful problems into practical digital solutions."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="A product company grounded in usefulness"
                description="We create digital products that balance thoughtful design, dependable technology, and the realities of how people and businesses work."
              />
              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Our work begins before a feature list. We study the underlying problem,
                  identify what would create meaningful value, and shape a product around a
                  clear purpose.
                </p>
                <p>
                  From there, we design and build for usability, maintainability, and future
                  growth. The goal is not software for its own sake—it is a reliable product
                  that people can understand, use, and continue to benefit from.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="relative overflow-hidden bg-slate-950 p-7 text-white sm:p-9">
                <div
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-indigo-500/20 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-300">
                    Our focus
                  </p>
                  <blockquote className="mt-6 text-balance text-2xl font-extrabold leading-snug tracking-[-0.035em] sm:text-3xl">
                    “Useful first. Thoughtful throughout. Ready to grow.”
                  </blockquote>
                  <dl className="mt-8 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Company
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-white">{company.type}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Based in
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-white">{company.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Model
                      </dt>
                      <dd className="mt-2 text-sm font-semibold text-white">
                        Remote &amp; hybrid
                      </dd>
                    </div>
                  </dl>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Qorvexa was started"
              title="Technology should earn its place"
              description="Qorvexa began with a simple conviction: the best digital products are shaped by a clear problem, a practical purpose, and a long-term view."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal
                  className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                  delay={Math.min(index * 0.04, 0.16)}
                  key={reason.title}
                >
                  <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_45px_rgba(79,70,229,0.09)] sm:p-7">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold tracking-[-0.025em] text-slate-950">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Direction"
              title="Vision and mission"
              description="These principles keep our product decisions connected to the value we want to create."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="relative h-full overflow-hidden border-indigo-100 bg-indigo-50/60 p-7 sm:p-9">
                <div className="flex items-center justify-between gap-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
                    Our vision
                  </p>
                  <span className="grid size-11 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <Compass className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-8 text-xl font-bold leading-9 tracking-[-0.025em] text-slate-900 sm:text-2xl sm:leading-10">
                  {company.vision}
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.07}>
              <Card className="relative h-full overflow-hidden border-cyan-100 bg-cyan-50/60 p-7 sm:p-9">
                <div className="flex items-center justify-between gap-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-700">
                    Our mission
                  </p>
                  <span className="grid size-11 place-items-center rounded-xl bg-white text-cyan-700 shadow-sm">
                    <ArrowDownRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-8 text-xl font-bold leading-9 tracking-[-0.025em] text-slate-900 sm:text-2xl sm:leading-10">
                  {company.mission}
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core values"
              title="How we intend to build"
              description="Values matter most when they influence daily choices. These six guide how we think, collaborate, and care for the products we create."
              inverse
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal delay={Math.min(index * 0.04, 0.16)} key={value.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.08] sm:p-7">
                    <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-cyan-300">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Company journey"
                title="Early by design. Ambitious in direction."
                description="We are at the beginning of the journey, building carefully from one real product toward a broader, connected portfolio."
              />
            </Reveal>
            <div className="relative">
              <div
                className="absolute bottom-6 left-[1.45rem] top-6 w-px bg-slate-200 sm:left-[2.95rem]"
                aria-hidden="true"
              />
              <ol className="space-y-5">
                {journey.map((milestone, index) => (
                  <li key={`${milestone.date}-${milestone.title}`}>
                    <Reveal delay={Math.min(index * 0.06, 0.12)}>
                      <div className="relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[6rem_1fr] sm:gap-6">
                        <div className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-[0.65rem] font-extrabold uppercase text-white shadow-md sm:size-14 sm:text-xs">
                          {milestone.date}
                        </div>
                        <Card className="p-6 sm:p-7">
                          <h3 className="text-lg font-extrabold tracking-[-0.025em] text-slate-950">
                            {milestone.title}
                          </h3>
                          <p className="mt-3 leading-7 text-slate-600">
                            {milestone.description}
                          </p>
                        </Card>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let’s Build Something That Matters"
        description="Have a product idea, business challenge, or collaboration in mind? Share the problem with us and let’s explore what a useful solution could look like."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="See How We Work"
        secondaryHref="/how-we-work"
      />
    </>
  );
}
