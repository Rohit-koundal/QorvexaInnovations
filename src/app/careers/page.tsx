import type { Metadata } from "next";
import { BookOpen, Code2, HandHeart, Target, Users, Workflow } from "lucide-react";

import { EditorialHero } from "@/components/site/EditorialHero";
import { StudioScene } from "@/components/site/HeroVisuals";
import { CtaBand, EmptyState, FeatureGrid, PlaceholderNotice, SectionHeader } from "@/components/site/Sections";
import { careersPage, generalApplication, publishedJobs } from "@/content/careers";
import { cultureBenefits, pageContent } from "@/content/pages";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn about Qorvexa's product culture and view verified job openings when they are published.",
  alternates: { canonical: "/careers" },
};

const cultureIcons = [BookOpen, Users, Target, HandHeart];

export default function CareersPage() {
  return (
    <>
      <EditorialHero
        {...pageContent.careers.hero}
        visual={<StudioScene variant="careers" />}
        primary={{ label: "View Open Positions", href: "#open-positions" }}
        secondary={{ label: "Life at Qorvexa", href: "#culture" }}
      />

      <section id="culture" className="site-section bg-white">
        <div className="site-shell">
          <SectionHeader eyebrow="The Culture We Aim to Build" title="A place for thoughtful work, shared context, and better craft." description="These principles describe Qorvexa's intended working culture. Formal benefits and policies are published only after they are confirmed." align="center" />
          <div className="mt-10"><FeatureGrid items={cultureBenefits.map((item, index) => ({ ...item, icon: cultureIcons[index] }))} columns={4} compact /></div>
        </div>
      </section>

      <section id="open-positions" className="site-section scroll-mt-24 border-y border-[#e7e1d9] bg-[#f8f2e9]">
        <div className="site-shell">
          <SectionHeader eyebrow="Open Positions" title="Only verified, active roles appear here." description={careersPage.description} />
          <div className="mt-9">
            {publishedJobs.length ? (
              <div className="grid gap-5 lg:grid-cols-3">
                {publishedJobs.map((job) => <article key={job.slug} className="surface-card p-6"><h3 className="text-lg font-extrabold">{job.title}</h3><p className="mt-3 text-sm text-[#687079]">{job.summary}</p></article>)}
              </div>
            ) : (
              <EmptyState title={careersPage.emptyStateTitle} description={careersPage.emptyStateDescription} href="/contact" action="Contact Qorvexa" />
            )}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="How Work Comes Together" title="Product outcomes are created across disciplines." description="Clear product work depends on strategy, design, engineering, quality, delivery, and communication moving together." />
            <div className="mt-8"><FeatureGrid items={[
              { title: "Product Context", description: "Understand the user, business, and operating reality behind the work.", icon: Target },
              { title: "Engineering Practice", description: "Use reviews, maintainable architecture, and visible technical decisions.", icon: Code2 },
              { title: "Shared Delivery", description: "Coordinate milestones, feedback, and quality across the whole product.", icon: Workflow },
            ]} columns={3} compact /></div>
          </div>
          <div>
            <SectionHeader eyebrow="General Applications" title="Resume collection is not enabled yet." description="Qorvexa has not confirmed a recruitment inbox, applicant privacy process, or resume-retention policy." />
            <div className="mt-8"><PlaceholderNotice>{generalApplication.note}</PlaceholderNotice></div>
          </div>
        </div>
      </section>

      <CtaBand title="No role today, but a product challenge to discuss?" description="Use the contact page for project and partnership enquiries. Career applications are accepted only through published roles." />
    </>
  );
}
