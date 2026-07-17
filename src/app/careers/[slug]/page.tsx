import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BriefcaseBusiness, CheckCircle2, ClipboardCheck, MapPin, Send, Sparkles } from "lucide-react";

import { CtaBand, FeatureStrip, PlaceholderNotice, SectionHeader } from "@/components/site/Sections";
import { getJobBySlug, jobs } from "@/content/careers";

type JobPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
    robots: job.published ? undefined : { index: false, follow: false },
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job || !job.published) notFound();

  return (
    <>
      <section className="warm-grid border-b border-[#e7e1d9] py-16 sm:py-20">
        <div className="site-shell">
          <Link href="/careers" className="text-link"><ArrowLeft className="size-4" aria-hidden="true" />All careers</Link>
          <p className="eyebrow mt-8">Open Position</p>
          <h1 className="display-title mt-4">{job.title}</h1>
          <p className="body-lead mt-6">{job.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold text-[#59636c]">
            {[job.location, job.workMode, job.experience, job.employmentType].filter(Boolean).map((item) => <span key={item} className="rounded-full border border-[#e7e1d9] bg-white px-3 py-2">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_.78fr]">
          <div className="grid gap-10">
            <div><SectionHeader eyebrow="Responsibilities" title="What this role will own." /><ul className="mt-7 grid gap-3">{job.responsibilities.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#59636c]"><CheckCircle2 className="mt-1 size-4 shrink-0 text-[#b77b2c]" aria-hidden="true" />{item}</li>)}</ul></div>
            <div><SectionHeader eyebrow="Requirements" title="What will help you succeed." /><ul className="mt-7 grid gap-3">{job.requirements.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#59636c]"><CheckCircle2 className="mt-1 size-4 shrink-0 text-[#b77b2c]" aria-hidden="true" />{item}</li>)}</ul></div>
          </div>
          <aside className="surface-card h-fit p-7 lg:sticky lg:top-28">
            <span className="icon-tile"><Send className="size-5" aria-hidden="true" /></span><h2 className="serif mt-5 text-3xl">Apply for this role</h2><p className="mt-3 text-sm leading-7 text-[#687079]">Use the approved application channel below. Do not include sensitive personal information beyond what the role requests.</p>
            {job.applicationHref ? <Link href={job.applicationHref} className="primary-button mt-6 w-full">Apply Now <Send className="size-4" aria-hidden="true" /></Link> : <div className="mt-6"><PlaceholderNotice>No application channel has been configured for this role.</PlaceholderNotice></div>}
          </aside>
        </div>
      </section>

      <section className="site-section-compact border-y border-[#e7e1d9] bg-[#f8f2e9]"><div className="site-shell"><FeatureStrip items={[
        { title: "Application", description: "Submit through the approved role-specific channel.", icon: Send },
        { title: "Review", description: "The hiring team reviews relevant experience and context.", icon: ClipboardCheck },
        { title: "Conversation", description: "Selected applicants discuss the role and working context.", icon: Sparkles },
        { title: "Decision", description: "Next steps and expectations are communicated directly.", icon: BriefcaseBusiness },
      ]} /></div></section>
      <CtaBand title="Looking for another opportunity?" description="Only active, verified roles are listed on the Qorvexa careers page." />
    </>
  );
}
