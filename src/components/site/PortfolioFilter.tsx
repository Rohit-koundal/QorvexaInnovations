"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
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
              <div className="relative aspect-[16/9] overflow-hidden bg-[#f8f2e9]">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
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
