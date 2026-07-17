import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export function LegalPage({ title, description, updated, sections }: { title: string; description: string; updated: string; sections: readonly LegalSection[] }) {
  return (
    <>
      <section className="warm-grid border-b border-[#e7e1d9] py-16 sm:py-20">
        <div className="site-shell">
          <p className="eyebrow">Legal</p>
          <h1 className="display-title mt-5">{title}</h1>
          <p className="body-lead mt-6">{description}</p>
          <p className="mt-6 inline-flex rounded-full border border-[#e2cda9] bg-white px-4 py-2 text-xs font-bold text-[#7b603a]">Last updated: {updated}</p>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="h-fit lg:sticky lg:top-28">
            <div className="surface-card p-5">
              <div className="flex items-center gap-3"><span className="icon-tile size-9"><FileText className="size-4" aria-hidden="true" /></span><h2 className="text-sm font-extrabold">On this page</h2></div>
              <nav className="mt-5 grid gap-2" aria-label={`${title} sections`}>{sections.map((section) => <a key={section.id} href={`#${section.id}`} className="rounded-lg px-3 py-2 text-xs font-semibold text-[#687079] hover:bg-[#f8f2e9] hover:text-[#8f5d1c]">{section.title}</a>)}</nav>
            </div>
          </aside>
          <article className="legal-copy max-w-4xl">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-[#e7e1d9] pb-9 last:border-0">
                <p className="eyebrow mt-0 before:hidden">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="!mt-3">{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </section>
            ))}
            <div className="surface-card mt-10 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div><h2 className="!mt-0 !text-2xl">Questions about this page?</h2><p className="!mt-2 !text-sm">Email Qorvexa Innovations for website-related enquiries.</p></div>
              <a href="mailto:hello@qorvexainnovations.com" className="primary-button shrink-0"><Mail className="size-4" aria-hidden="true" />Email Qorvexa</a>
            </div>
            <Link href="/contact" className="text-link mt-8">Return to contact <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </article>
        </div>
      </section>
    </>
  );
}
