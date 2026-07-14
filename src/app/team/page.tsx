import type { Metadata } from "next";
import {
  Blocks,
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  Palette,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeamCard } from "@/components/shared/TeamCard";
import { team } from "@/data/team";

const pageDescription =
  "Meet the founders of Qorvexa Innovations and learn how product, technology, design, and business thinking come together behind the company.";

export const metadata: Metadata = {
  title: "Team",
  description: pageDescription,
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    title: "The Team Building Qorvexa Innovations",
    description: pageDescription,
    url: "/team",
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
    title: "The Team Building Qorvexa Innovations",
    description: pageDescription,
    images: ["/images/company/nexora-og.svg"],
  },
};

const futureDisciplines = [
  { label: "Developers", icon: Code2 },
  { label: "Designers", icon: Palette },
  { label: "Product thinkers", icon: Lightbulb },
  { label: "Quality engineers", icon: ShieldCheck },
  { label: "Business professionals", icon: BriefcaseBusiness },
  { label: "Growth collaborators", icon: TrendingUp },
];

const leadershipPrinciples = [
  {
    title: "One product direction",
    description:
      "Product, design, engineering, and business choices are considered together around the same user problem.",
  },
  {
    title: "Hands-on ownership",
    description:
      "At this stage, leadership stays close to the details—from defining the product to reviewing the experience and implementation.",
  },
  {
    title: "Room to challenge ideas",
    description:
      "Strong decisions come from clear reasoning, open discussion, and the willingness to improve an early assumption.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The Team Building Qorvexa"
        description="A focused founding team bringing product vision, technology, design, brand, and business thinking together to build practical digital products."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Close to the problem. Accountable for the product."
              description="Qorvexa is early-stage and founder-led. Our leadership works directly across strategy and execution while we establish the company’s products and foundations."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {team.map((member, index) => (
              <Reveal delay={index * 0.07} key={member.name}>
                <TeamCard member={member} showResponsibilities />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div
          className="absolute -left-28 top-1/4 size-72 rounded-full bg-indigo-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-28 bottom-0 size-72 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <Reveal>
              <div className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                <Blocks className="size-6" aria-hidden="true" />
              </div>
              <SectionHeading
                className="mt-7"
                eyebrow="How we lead"
                title="Complementary disciplines, shared responsibility"
                description="Building a coherent product requires more than handing work from one role to another. We connect the decisions that shape what the product is, how it feels, and how reliably it works."
                inverse
              />
            </Reveal>
            <div className="grid gap-4">
              {leadershipPrinciples.map((principle, index) => (
                <Reveal delay={index * 0.06} key={principle.title}>
                  <div className="grid grid-cols-[2.75rem_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5 sm:grid-cols-[3.25rem_1fr] sm:p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-indigo-500/20 text-sm font-extrabold text-indigo-200 sm:size-13">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{principle.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <UsersRound className="size-6" aria-hidden="true" />
              </div>
              <SectionHeading
                className="mt-7"
                eyebrow="The team ahead"
                title="Growing With the Right People"
                description="Qorvexa Innovations is building a team of developers, designers, product thinkers, quality engineers, and business professionals."
              />
              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                We care about thoughtful craft, practical problem-solving, honest collaboration,
                and the patience to make a product genuinely useful. We will grow deliberately
                as the work and product roadmap require it.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-extrabold text-slate-950">
                  Disciplines we expect to grow across
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {futureDisciplines.map((discipline) => {
                    const Icon = discipline.icon;
                    return (
                      <div
                        className="flex min-h-14 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                        key={discipline.label}
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-indigo-600 shadow-sm">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        {discipline.label}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
                  These are areas of future team development, not a claim that every discipline
                  currently has an open position.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Interested in Building With Us?"
        description="Explore the disciplines we care about and share how your skills, perspective, and product mindset could contribute to Qorvexa’s journey."
        primaryLabel="Explore Careers"
        primaryHref="/careers"
        secondaryLabel="Contact the Team"
        secondaryHref="/contact"
      />
    </>
  );
}
