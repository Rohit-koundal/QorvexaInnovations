import type { Metadata } from "next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Bug,
  Code2,
  Layers3,
  Megaphone,
  Palette,
  ServerCog,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { company } from "@/data/company";

const pageDescription =
  "Explore future career areas at Qorvexa Innovations for people who care about useful products, practical problem-solving, thoughtful design, and dependable technology.";

export const metadata: Metadata = {
  title: "Careers",
  description: pageDescription,
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    title: "Careers at Qorvexa Innovations",
    description: pageDescription,
    url: "/careers",
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
    title: "Careers at Qorvexa Innovations",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const careerAreas = [
  {
    title: "Frontend Development",
    description:
      "Build accessible, responsive interfaces and reusable frontend systems that keep complex product journeys clear.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Design dependable APIs, data models, services, and integrations that support secure and scalable product operations.",
    icon: ServerCog,
  },
  {
    title: "Full-Stack Development",
    description:
      "Connect product experiences end to end, making sound decisions across interfaces, application logic, and data.",
    icon: Layers3,
  },
  {
    title: "UI/UX Design",
    description:
      "Translate user needs into thoughtful flows, clear visual systems, and polished experiences across devices.",
    icon: Palette,
  },
  {
    title: "Quality Assurance",
    description:
      "Protect product confidence through structured testing, careful investigation, and a strong understanding of user-critical flows.",
    icon: Bug,
  },
  {
    title: "Sales and Business Development",
    description:
      "Build relevant relationships, understand business challenges, and connect the right opportunities to Qorvexa’s products and capabilities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Digital Marketing",
    description:
      "Explain products clearly, create useful audience touchpoints, and support measured growth through responsible digital channels.",
    icon: Megaphone,
  },
];

const fitSignals = [
  {
    title: "Care for the outcome",
    description:
      "You look beyond task completion and ask whether the result is genuinely useful for the person using it.",
  },
  {
    title: "Think practically",
    description:
      "You can balance ambition with constraints and find a clear next step without losing sight of quality.",
  },
  {
    title: "Learn in the open",
    description:
      "You share context, welcome thoughtful feedback, and treat changed assumptions as part of building something better.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers at Qorvexa"
        title="Build Meaningful Products With Us"
        description="We are interested in people who care about useful products, practical problem-solving, design quality, and dependable technology."
      >
        <div className="flex flex-wrap gap-3">
          <Badge className="border-white/70 bg-white/70 text-slate-700">
            Early-stage environment
          </Badge>
          <Badge className="border-white/70 bg-white/70 text-slate-700">
            {company.workingModel}
          </Badge>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Future opportunities"
                title="Disciplines we expect to grow across"
                description="The categories below describe capability areas that matter to Qorvexa’s future. They are not active job postings unless a specific opening is announced."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-amber-800">
                <Sparkles className="size-4" aria-hidden="true" />
                Talent interest areas
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careerAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal
                  className={index === careerAreas.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
                  delay={Math.min(index * 0.04, 0.16)}
                  key={area.title}
                >
                  <Card className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_45px_rgba(79,70,229,0.09)] sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <ArrowUpRight className="size-5 text-slate-300 transition group-hover:text-indigo-500" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                      {area.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <Reveal>
              <div className="grid size-14 place-items-center rounded-2xl bg-slate-950 text-cyan-300">
                <UsersRound className="size-6" aria-hidden="true" />
              </div>
              <SectionHeading
                className="mt-7"
                eyebrow="Working together"
                title="What we value in a collaborator"
                description="Skills matter. So does the way someone frames a problem, communicates a decision, and takes responsibility for the quality of the outcome."
              />
            </Reveal>

            <div className="grid gap-4">
              {fitSignals.map((signal, index) => (
                <Reveal delay={index * 0.06} key={signal.title}>
                  <Card className="grid grid-cols-[2.75rem_1fr] gap-4 p-5 sm:grid-cols-[3.25rem_1fr] sm:p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-indigo-600 text-sm font-extrabold text-white sm:size-13">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold tracking-[-0.025em] text-slate-950">
                        {signal.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {signal.description}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="No Open Position?"
        description="Send us your profile and tell us how you would like to contribute. We will keep the conversation grounded in the needs and opportunities that actually exist."
        primaryLabel="Send Your Profile"
        primaryHref="/contact"
        secondaryLabel="Meet Our Team"
        secondaryHref="/team"
      />
    </>
  );
}
