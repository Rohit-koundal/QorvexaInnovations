import { Heart, PackageCheck, Search, ShoppingBag, SlidersHorizontal } from "lucide-react";

const previewProducts = [
  { name: "Everyday Edit", tone: "from-rose-100 via-orange-50 to-amber-100" },
  { name: "Modern Form", tone: "from-indigo-100 via-slate-50 to-cyan-100" },
  { name: "New Season", tone: "from-emerald-100 via-teal-50 to-sky-100" },
];

export function ProductShowcaseVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[620px] pb-14 sm:pb-20 lg:ml-auto"
      role="img"
      aria-label="Illustrative desktop and mobile storefront preview for Samira Collection"
    >
      <div
        className="absolute -inset-6 rounded-full bg-indigo-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[1.55rem] border border-white/15 bg-white p-2 shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:rounded-[1.85rem] sm:p-3">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2.5 sm:px-4">
          <span className="size-2 rounded-full bg-rose-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
          <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-md bg-slate-100 text-[0.5rem] font-bold text-slate-400 sm:text-[0.6rem]">
            samira.collection
          </div>
        </div>

        <div className="bg-[#fbfbfc] p-3 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-slate-950 text-[0.6rem] font-black text-white sm:size-8">
                S
              </span>
              <div>
                <p className="text-[0.65rem] font-black tracking-[-0.02em] text-slate-900 sm:text-xs">SAMIRA</p>
                <p className="text-[0.45rem] uppercase tracking-[0.16em] text-slate-400 sm:text-[0.5rem]">Collection</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Search className="size-3.5 sm:size-4" aria-hidden="true" />
              <Heart className="size-3.5 sm:size-4" aria-hidden="true" />
              <ShoppingBag className="size-3.5 sm:size-4" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl bg-[linear-gradient(115deg,#111827,#312e81_60%,#0891b2)] px-4 py-5 text-white sm:mt-5 sm:rounded-2xl sm:px-6 sm:py-7">
            <p className="text-[0.48rem] font-bold uppercase tracking-[0.18em] text-cyan-200 sm:text-[0.6rem]">New collection</p>
            <p className="mt-1.5 max-w-[12rem] text-lg font-black leading-tight tracking-[-0.04em] sm:text-2xl">
              Designed for the modern wardrobe.
            </p>
            <span className="mt-3 inline-flex rounded-md bg-white px-2.5 py-1.5 text-[0.5rem] font-black text-slate-950 sm:text-[0.6rem]">
              Explore styles
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-[0.65rem] font-black text-slate-900 sm:text-xs">Curated for you</p>
            <SlidersHorizontal className="size-3.5 text-slate-400" aria-hidden="true" />
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-2 sm:gap-3">
            {previewProducts.map((product) => (
              <div key={product.name}>
                <div className={`aspect-[4/5] rounded-lg bg-gradient-to-br ${product.tone} sm:rounded-xl`}>
                  <div className="flex h-full items-end justify-end p-1.5">
                    <span className="grid size-5 place-items-center rounded-full bg-white/90 text-slate-600 shadow-sm sm:size-6">
                      <Heart className="size-2.5 sm:size-3" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <p className="mt-1.5 truncate text-[0.52rem] font-extrabold text-slate-700 sm:text-[0.65rem]">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-1 w-[31%] min-w-[100px] max-w-[160px] rounded-[1.5rem] border-[5px] border-slate-900 bg-white p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:right-4 sm:border-[7px] sm:p-2">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-slate-200" />
        <div className="rounded-lg bg-[linear-gradient(145deg,#312e81,#4f46e5_55%,#06b6d4)] p-2.5 text-white sm:p-3">
          <p className="text-[0.42rem] font-bold uppercase tracking-[0.14em] text-cyan-100 sm:text-[0.5rem]">Mobile first</p>
          <p className="mt-1 text-[0.65rem] font-black leading-tight sm:text-xs">Shop from anywhere.</p>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="aspect-[4/5] rounded-md bg-rose-100" />
          <div className="aspect-[4/5] rounded-md bg-indigo-100" />
        </div>
      </div>

      <div className="absolute bottom-3 left-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2.5 text-white shadow-xl backdrop-blur sm:left-4 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
        <span className="grid size-8 place-items-center rounded-lg bg-emerald-400/15 text-emerald-300 sm:size-9">
          <PackageCheck className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[0.5rem] font-bold text-slate-400 sm:text-[0.58rem]">Operations</p>
          <p className="text-[0.62rem] font-extrabold sm:text-xs">Storefront + admin</p>
        </div>
      </div>
    </div>
  );
}
