import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Mail,
  Sparkles,
} from "lucide-react";

import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/Motion";
import { BrandMark } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("section-title mt-4", align === "center" && "mx-auto")}>
        {title} {accent ? <span className="gold-text">{accent}</span> : null}
      </h2>
      {description ? (
        <p className={cn("body-lead mt-5", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </Reveal>
  );
}

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-[#e7e1d9] bg-white" aria-label="Qorvexa solution areas">
      <div className="site-shell py-7">
        <p className="mb-5 text-[.64rem] font-extrabold uppercase tracking-[.22em] text-[#8a9096]">
          Designed for modern business models
        </p>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-xs font-extrabold tracking-[.12em] text-[#626970] uppercase">
              <span className="size-1.5 rounded-full bg-[#b77b2c]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type FeatureCardItem = {
  id?: string;
  title: string;
  description: string;
  icon: IconType;
  href?: string;
  bullets?: string[];
  meta?: string;
};

export function FeatureGrid({
  items,
  columns = 3,
  compact = false,
}: {
  items: FeatureCardItem[];
  columns?: 2 | 3 | 4;
  compact?: boolean;
}) {
  const columnClass = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <StaggerGrid className={cn("grid gap-5 sm:grid-cols-2", columnClass)}>
      {items.map(({ id, title, description, icon: Icon, href, bullets, meta }) => (
        <StaggerItem key={title}>
          <article id={id} className={cn("surface-card interactive-card h-full scroll-mt-28", compact ? "p-5" : "p-6 lg:p-7")}>
            <div className="flex items-start justify-between gap-4">
              <span className="icon-tile"><Icon className="size-5" aria-hidden="true" /></span>
              {meta ? <span className="rounded-full bg-[#f8f2e9] px-3 py-1 text-[.68rem] font-bold text-[#8f5d1c]">{meta}</span> : null}
            </div>
            <h3 className="mt-5 text-[1.08rem] font-extrabold leading-tight text-[#071522]">{title}</h3>
            <p className="mt-2.5 text-sm leading-6 text-[#687079]">{description}</p>
            {bullets?.length ? (
              <ul className="mt-5 grid gap-2.5">
                {bullets.slice(0, 4).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[.78rem] font-semibold leading-5 text-[#4f5962]">
                    <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-[#b77b2c]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
            {href ? (
              <Link className="text-link mt-6" href={href}>
                Explore <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ) : null}
          </article>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}

export function FeatureStrip({
  items,
}: {
  items: { title: string; description: string; icon: IconType }[];
}) {
  return (
    <div className="surface-card grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ title, description, icon: Icon }, index) => (
        <div key={title} className={cn("flex gap-4 p-6", index > 0 && "border-t border-[#e7e1d9] sm:border-l", index === 1 && "sm:border-t-0", index > 1 && "lg:border-t-0")}>
          <Icon className="mt-1 size-7 shrink-0 text-[#b77b2c]" aria-hidden="true" />
          <div>
            <h3 className="text-sm font-extrabold text-[#071522]">{title}</h3>
            <p className="mt-1.5 text-xs leading-5 text-[#687079]">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export type ImageCardItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  bullets?: string[];
  badge?: string;
};

export function ImageCardGrid({
  items,
  columns = 3,
}: {
  items: ImageCardItem[];
  columns?: 2 | 3 | 5;
}) {
  const columnsClass = columns === 5 ? "xl:grid-cols-5" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <StaggerGrid className={cn("grid gap-5 sm:grid-cols-2", columnsClass)}>
      {items.map((item) => (
        <StaggerItem key={item.title}>
          <article className="surface-card interactive-card group flex h-full flex-col overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#f8f2e9]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.035]"
              />
              {item.badge ? <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[.65rem] font-extrabold text-[#8f5d1c] shadow-sm backdrop-blur">{item.badge}</span> : null}
            </div>
            <div className="flex flex-1 flex-col p-5 lg:p-6">
              <p className="text-[.67rem] font-extrabold uppercase tracking-[.12em] text-[#b77b2c]">{item.category}</p>
              <h3 className="serif mt-2 text-2xl leading-tight text-[#071522]">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-[#687079]">{item.description}</p>
              {item.bullets?.length ? (
                <ul className="mt-4 grid gap-2">
                  {item.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs font-semibold leading-5 text-[#4f5962]">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#b77b2c]" aria-hidden="true" /> {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.href ? (
                <Link className="text-link mt-auto pt-5" href={item.href}>
                  View details <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </article>
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}

export function ProcessTimeline({
  items,
}: {
  items: { title: string; description: string; deliverables?: readonly string[]; icon: IconType }[];
}) {
  return (
    <ol className="relative grid gap-5 lg:grid-cols-7">
      <span className="absolute left-[7%] right-[7%] top-7 hidden border-t border-dashed border-[#d8b473] lg:block" aria-hidden="true" />
      {items.map(({ title, description, deliverables, icon: Icon }, index) => (
        <li key={title} className="surface-card interactive-card relative z-10 p-5">
          <div className="flex items-center gap-3 lg:block">
            <span className="icon-tile relative bg-white"><Icon className="size-5" aria-hidden="true" /></span>
            <span className="text-[.68rem] font-extrabold text-[#b77b2c] lg:absolute lg:right-4 lg:top-4">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-4 text-sm font-extrabold text-[#071522]">{title}</h3>
          <p className="mt-2 text-xs leading-5 text-[#687079]">{description}</p>
          {deliverables?.length ? (
            <ul className="mt-4 border-t border-[#e7e1d9] pt-3">
              {deliverables.slice(0, 2).map((item) => <li key={item} className="mt-1 text-[.68rem] font-semibold text-[#59636c]">• {item}</li>)}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function QuoteCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <Reveal className="surface-card relative h-full p-7 lg:p-8">
      <span className="serif absolute right-6 top-2 text-7xl text-[#efe0c6]" aria-hidden="true">“</span>
      <Sparkles className="size-6 text-[#b77b2c]" aria-hidden="true" />
      <blockquote className="mt-5 text-base leading-7 text-[#293440]">{quote}</blockquote>
      <p className="mt-5 text-xs font-extrabold uppercase tracking-[.1em] text-[#8f5d1c]">{attribution}</p>
    </Reveal>
  );
}

export function ContentSplit({
  eyebrow,
  title,
  description,
  children,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <Reveal delay={.08}>{children}</Reveal>
    </div>
  );
}

export function PlaceholderNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#e2cda9] bg-[#fff9ef] p-4 text-sm leading-6 text-[#6c502d]">
      <Sparkles className="mt-0.5 size-5 shrink-0 text-[#b77b2c]" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export function CtaBand({
  title = "Ready to build something extraordinary?",
  description = "Let’s create a clear, dependable digital solution around your real business goals.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="site-shell mb-16">
      <div className="relative overflow-hidden rounded-[1.1rem] border border-[#e2c18d] bg-[linear-gradient(115deg,#fff9ef,#f5dfbd)] px-6 py-7 shadow-[inset_0_1px_0_#fff] sm:px-8 lg:px-12">
        <div className="absolute -right-16 -top-28 size-72 rounded-full border border-white/55" />
        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <BrandMark className="hidden size-14 sm:grid" />
            <div>
              <h2 className="serif text-2xl leading-tight text-[#071522] sm:text-3xl">{title}</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#626970]">{description}</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className="primary-button shrink-0">Let&apos;s Build Together <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <a href="mailto:hello@qorvexainnovations.com" className="secondary-button shrink-0"><Mail className="size-4" aria-hidden="true" /> Email Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmptyState({ title, description, href, action }: { title: string; description: string; href: string; action: string }) {
  return (
    <div className="surface-card mx-auto max-w-3xl p-8 text-center sm:p-12">
      <span className="icon-tile mx-auto"><Sparkles className="size-5" aria-hidden="true" /></span>
      <h3 className="serif mt-5 text-3xl">{title}</h3>
      <p className="body-lead mx-auto mt-3 text-sm">{description}</p>
      <Link className="primary-button mt-7" href={href}>{action} <ChevronRight className="size-4" aria-hidden="true" /></Link>
    </div>
  );
}
