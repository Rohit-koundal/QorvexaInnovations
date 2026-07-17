import type { ReactNode } from "react";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

function GalleryCard({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
        <h3 className="font-extrabold text-slate-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
      <div className="bg-slate-100 p-3 sm:p-5">{children}</div>
    </Card>
  );
}

function StorefrontPreview() {
  const products = [
    ["bg-gradient-to-br from-rose-100 to-pink-200", "Draped co-ord"],
    ["bg-gradient-to-br from-amber-100 to-orange-200", "Everyday kurta"],
    ["bg-gradient-to-br from-cyan-100 to-sky-200", "Weekend set"],
  ];

  return (
    <div
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
      role="img"
      aria-label="Illustrative Samira Collection desktop storefront"
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 px-3">
        <span className="size-2 rounded-full bg-rose-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="mx-auto h-4 w-2/5 rounded bg-slate-100" />
      </div>
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 sm:px-5 sm:py-3">
        <span className="text-[8px] font-black tracking-[0.16em] text-slate-950 sm:text-[10px]">SAMIRA</span>
        <div className="flex items-center gap-2 text-slate-500">
          <Search className="size-3" aria-hidden="true" />
          <Heart className="size-3" aria-hidden="true" />
          <ShoppingBag className="size-3" aria-hidden="true" />
        </div>
      </div>
      <div className="grid grid-cols-[1.1fr_0.9fr] bg-[linear-gradient(135deg,#fdf2f8,#eef2ff)]">
        <div className="p-4 sm:p-7">
          <p className="text-[7px] font-black uppercase tracking-widest text-indigo-600 sm:text-[9px]">The new edit</p>
          <p className="mt-2 max-w-44 text-sm font-black leading-tight text-slate-950 sm:text-2xl">Style made effortless.</p>
          <div className="mt-3 h-5 w-20 rounded bg-slate-950 sm:mt-5 sm:h-7 sm:w-28" />
        </div>
        <div className="relative min-h-28 overflow-hidden sm:min-h-44">
          <div className="absolute -bottom-10 right-4 size-36 rotate-12 rounded-[3rem] bg-gradient-to-br from-indigo-200 to-pink-300 sm:size-56" />
          <div className="absolute bottom-3 right-8 h-24 w-14 -rotate-6 rounded-t-full bg-indigo-600/80 sm:h-36 sm:w-20" />
        </div>
      </div>
      <div className="p-3 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black text-slate-900 sm:text-xs">Trending now</p>
          <p className="text-[7px] font-bold text-indigo-600 sm:text-[9px]">View collection</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
          {products.map(([color, label]) => (
            <div key={label}>
              <div className={cn("aspect-[4/5] rounded-lg", color)} />
              <p className="mt-1.5 truncate text-[7px] font-extrabold text-slate-700 sm:text-[9px]">{label}</p>
              <div className="mt-1 h-1.5 w-1/2 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div
      className="mx-auto max-w-[15rem] rounded-[2.1rem] border-[7px] border-slate-950 bg-white p-1 shadow-2xl shadow-slate-900/20"
      role="img"
      aria-label="Illustrative Samira Collection mobile storefront"
    >
      <div className="mx-auto mb-1 h-1.5 w-16 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[1.45rem] bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-3">
          <Menu className="size-3.5 text-slate-700" aria-hidden="true" />
          <span className="text-[8px] font-black tracking-[0.14em]">SAMIRA</span>
          <ShoppingBag className="size-3.5 text-slate-700" aria-hidden="true" />
        </div>
        <div className="p-2.5">
          <div className="flex h-8 items-center gap-2 rounded-lg bg-slate-100 px-2 text-[7px] font-semibold text-slate-400">
            <Search className="size-3" aria-hidden="true" />
            Search styles
          </div>
          <div className="mt-2.5 aspect-[5/3] rounded-xl bg-[linear-gradient(135deg,#ede9fe,#fce7f3)] p-3">
            <p className="text-[6px] font-black uppercase tracking-widest text-indigo-600">Just arrived</p>
            <p className="mt-1 w-24 text-xs font-black leading-tight text-slate-950">A fresh wardrobe story</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              "from-amber-100 to-orange-200",
              "from-cyan-100 to-indigo-200",
              "from-pink-100 to-rose-200",
              "from-emerald-100 to-teal-200",
            ].map((color) => (
              <div key={color}>
                <div className={`aspect-[4/5] rounded-lg bg-gradient-to-br ${color}`} />
                <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-slate-200" />
                <div className="mt-1 h-1.5 w-2/5 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminPreview() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
      role="img"
      aria-label="Illustrative Samira Collection administration workspace"
    >
      <div className="flex h-9 items-center border-b border-slate-200 px-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-rose-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="grid min-h-52 grid-cols-[3rem_minmax(0,1fr)] sm:min-h-72 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
        <div className="bg-slate-950 p-2 sm:p-4">
          <div className="size-7 rounded-lg bg-indigo-500 sm:w-full" />
          <div className="mt-5 space-y-2">
            {[true, false, false, false, false, false].map((active, index) => (
              <div key={index} className={cn("h-7 rounded-md", active ? "bg-white/15" : "bg-white/[0.04]")} />
            ))}
          </div>
        </div>
        <div className="min-w-0 bg-slate-50 p-3 sm:p-5">
          <div className="flex justify-between gap-3">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">Catalogue</p>
              <p className="mt-1 text-xs font-black text-slate-950 sm:text-lg">Product management</p>
            </div>
            <div className="h-7 w-20 rounded-lg bg-indigo-600 sm:w-28" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ["Catalogue", "Managed"],
              ["Inventory", "Visible"],
              ["Categories", "Organized"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3">
                <p className="truncate text-[6px] font-bold text-slate-400 sm:text-[9px]">{label}</p>
                <p className="mt-1 truncate text-[7px] font-black text-slate-900 sm:text-xs">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white sm:mt-4">
            <div className="grid grid-cols-[1.2fr_0.7fr_0.7fr] bg-slate-100 px-2 py-2 text-[6px] font-black uppercase text-slate-400 sm:px-3 sm:text-[8px]">
              <span>Product</span><span>Stock</span><span>Status</span>
            </div>
            {["Classic co-ord", "Everyday kurta", "Weekend set"].map((name) => (
              <div key={name} className="grid grid-cols-[1.2fr_0.7fr_0.7fr] items-center border-t border-slate-100 px-2 py-2 text-[6px] sm:px-3 sm:text-[8px]">
                <span className="truncate font-extrabold text-slate-700">{name}</span>
                <span className="text-slate-500">Synced</span>
                <span className="w-fit rounded-full bg-emerald-50 px-1.5 py-0.5 font-bold text-emerald-700">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductGallery() {
  return (
    <section id="product-gallery" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Interface Preview"
          title="Designed for every side of the business"
          description="Representative interface mockups show how Samira can keep shopping focused for customers and operations clear for teams."
        />
        <p className="mt-4 text-sm font-medium text-slate-500">
          These are illustrative product previews created for the Qorvexa website.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <GalleryCard
              title="Responsive storefront"
              description="A focused fashion discovery and shopping experience."
              className="h-full"
            >
              <StorefrontPreview />
            </GalleryCard>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.08}>
            <GalleryCard
              title="Mobile commerce"
              description="Touch-friendly browsing wherever customers shop."
              className="h-full"
            >
              <MobilePreview />
            </GalleryCard>
          </Reveal>
          <Reveal className="lg:col-span-12">
            <GalleryCard
              title="Admin workspace"
              description="Catalogue, inventory, orders, offers, customers, and content in one place."
            >
              <AdminPreview />
            </GalleryCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
