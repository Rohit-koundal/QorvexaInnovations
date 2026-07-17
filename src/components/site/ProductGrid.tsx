import Link from "next/link";
import { ArrowRight, BarChart3, CalendarCheck, LayoutDashboard, PawPrint, ShoppingBag } from "lucide-react";

type ProductItem = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  modules: readonly string[];
  cta: { href: string };
};

const productIcons = [ShoppingBag, LayoutDashboard, PawPrint, CalendarCheck, BarChart3];

export function ProductGrid({ items, dark = false }: { items: readonly ProductItem[]; dark?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {items.map((product, index) => {
        const Icon = productIcons[index % productIcons.length];
        return (
          <article key={product.slug} className={`interactive-card flex h-full flex-col overflow-hidden rounded-2xl border ${dark ? "border-white/15 bg-white/[.055] text-white" : "border-[#e7e1d9] bg-white text-[#071522]"}`}>
            <div className={`relative aspect-[16/9] overflow-hidden ${dark ? "bg-[#0c2a3c]" : "bg-[#f6efe5]"}`} role="img" aria-label={`Illustrative ${product.name} interface placeholder`}>
              <div className={`absolute inset-[8%] overflow-hidden rounded-lg border shadow-xl ${dark ? "border-white/15 bg-[#082235]" : "border-[#dfd6ca] bg-white"}`}>
                <div className={`flex h-[18%] items-center justify-between border-b px-[5%] ${dark ? "border-white/10" : "border-[#e7e1d9]"}`}><span className="size-2 rounded-full bg-[#d8b473]" /><span className={`h-1.5 w-1/3 rounded ${dark ? "bg-white/20" : "bg-[#e7e1d9]"}`} /></div>
                <div className="grid h-[82%] grid-cols-[24%_1fr]">
                  <div className={`border-r p-[12%] ${dark ? "border-white/10 bg-[#061b2a]" : "border-[#e7e1d9] bg-[#fffdfa]"}`}><Icon className="size-[55%] text-[#d8b473]" aria-hidden="true" /><div className="mt-[25%] grid gap-[12%]">{[1,2,3].map(item => <span key={item} className={`h-1.5 rounded ${dark ? "bg-white/12" : "bg-[#e7e1d9]"}`} />)}</div></div>
                  <div className="p-[7%]"><div className="grid grid-cols-3 gap-[5%]">{[1,2,3].map(item => <span key={item} className={`aspect-[1.5/1] rounded ${dark ? "bg-white/[.08]" : "bg-[#f7f2eb]"}`} />)}</div><div className={`mt-[7%] h-[47%] rounded p-[5%] ${dark ? "bg-white/[.06]" : "bg-[#faf7f2]"}`}><div className="flex h-full items-end gap-[5%]">{[42,72,55,88,67].map(height => <span key={height} className="flex-1 rounded-t-sm bg-[#d8b473]" style={{ height: `${height}%` }} />)}</div></div></div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-[.64rem] font-extrabold uppercase tracking-[.12em] text-[#d0a35e]">{product.category}</p>
              <h3 className="serif mt-2 text-2xl leading-tight">{product.name}</h3>
              <p className={`mt-2 text-xs leading-5 ${dark ? "text-white/62" : "text-[#687079]"}`}>{product.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{product.modules.slice(0, 3).map(module => <span key={module} className={`rounded-full px-2 py-1 text-[.58rem] font-bold ${dark ? "bg-white/10 text-white/70" : "bg-[#f8f2e9] text-[#7b603a]"}`}>{module}</span>)}</div>
              <Link href={product.cta.href} className="text-link mt-auto pt-5">Explore Product <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
