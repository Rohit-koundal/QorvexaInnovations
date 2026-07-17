"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  published: boolean;
};

const filters = ["All", "Web", "E-Commerce", "Hospitality", "Booking", "Custom Software", "Mobile Apps"];

export function PortfolioFilter({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => active === "All" ? items : items.filter((item) => item.category === active),
    [active, items],
  );

  return (
    <div>
      <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Filter case studies">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={cn("min-h-11 shrink-0 snap-start rounded-lg border px-5 text-xs font-extrabold transition", active === filter ? "border-[#b77b2c] bg-[#b77b2c] text-white" : "border-[#e7e1d9] bg-white text-[#293440] hover:border-[#d8b473]")}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {visible.length ? (
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article key={item.slug} className="surface-card interactive-card group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(145deg,#f8f2e9,#e9dcc8)]" role="img" aria-label={item.imageAlt}>
                <div className="absolute inset-[9%] overflow-hidden rounded-lg border border-white/70 bg-white shadow-[0_18px_32px_rgba(7,21,34,.13)] transition duration-500 group-hover:scale-[1.025]">
                  <div className="flex h-[16%] items-center justify-between border-b border-[#e7e1d9] px-[4%]"><span className="size-2 rounded-full bg-[#b77b2c]"/><span className="h-1.5 w-1/3 rounded bg-[#e7e1d9]"/></div>
                  <div className="grid h-[84%] grid-cols-[25%_1fr]"><div className="border-r border-[#e7e1d9] bg-[#071522] p-[10%]"><div className="size-5 rounded bg-[#b77b2c]"/><div className="mt-[20%] grid gap-[14%]">{[1,2,3,4].map(value => <span key={value} className="h-1.5 rounded bg-white/15"/>)}</div></div><div className="p-[6%]"><div className="grid grid-cols-3 gap-[4%]">{[1,2,3].map(value => <span key={value} className="aspect-[1.5/1] rounded bg-[#f6f1ea]"/>)}</div><div className="mt-[5%] grid grid-cols-[1.2fr_.8fr] gap-[5%]"><div className="flex h-full min-h-16 items-end gap-[4%] rounded bg-[#faf7f2] p-[6%]">{[42,70,55,86,68].map(height => <span key={height} className="flex-1 rounded-t-sm bg-[#d8b473]" style={{height:`${height}%`}}/>)}</div><div className="rounded bg-[#f6f1ea]"/></div></div></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-[#b77b2c]">{item.category}</p>
                <h2 className="serif mt-2 text-2xl leading-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#687079]">{item.summary}</p>
                <dl className="mt-5 grid gap-3 border-t border-[#e7e1d9] pt-4 text-xs leading-5">
                  <div><dt className="font-extrabold text-[#293440]">Challenge</dt><dd className="mt-1 text-[#687079]">{item.challenge}</dd></div>
                  <div><dt className="font-extrabold text-[#293440]">Solution</dt><dd className="mt-1 text-[#687079]">{item.solution}</dd></div>
                </dl>
                {item.published ? <Link href={`/portfolio/${item.slug}`} className="text-link mt-5">View case study <ArrowRight className="size-4" aria-hidden="true" /></Link> : <p className="mt-5 text-xs font-bold text-[#8a9096]">Detailed case study available after client approval.</p>}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="surface-card mt-7 p-8 text-center text-sm text-[#687079]">No published work is available in this category yet.</div>
      )}
    </div>
  );
}
