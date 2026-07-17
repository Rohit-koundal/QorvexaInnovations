import { memo } from "react";
import { Heart, Search, ShoppingBag } from "lucide-react";

const productTones = ["from-[#e4d2bb] to-[#f8efe4]", "from-[#c1a88b] to-[#eee3d6]"];

export const Phone3D = memo(function Phone3D() {
  return (
    <div className="relative aspect-[9/19] w-full">
      <div className="absolute -left-[2px] top-[21%] h-[14%] w-[3px] rounded-l bg-[#6d7579] shadow-[0_14px_0_#6d7579]" />
      <div className="relative h-full overflow-hidden rounded-[1.85rem] border border-[#4e5960] bg-[linear-gradient(145deg,#4c565d,#090e12_45%,#000)] p-[4.2%] shadow-[inset_0_1px_1px_rgba(255,255,255,.5),inset_-6px_-8px_12px_rgba(0,0,0,.5),0_24px_42px_rgba(7,21,34,.34)]">
        <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-black bg-[#fbf8f3] shadow-[inset_0_0_14px_rgba(7,21,34,.12)]">
          <div className="absolute left-1/2 top-[1.6%] z-20 h-[3.2%] w-[34%] -translate-x-1/2 rounded-full bg-[#020405] shadow-[0_1px_2px_rgba(255,255,255,.18)]" />
          <div className="px-[8%] pb-[5%] pt-[13%]">
            <div className="flex items-center justify-between text-[clamp(.34rem,.58vw,.54rem)] font-extrabold"><span>QORVEXA</span><div className="flex gap-2"><Search className="size-[.65rem]" aria-hidden="true" /><ShoppingBag className="size-[.65rem]" aria-hidden="true" /></div></div>
            <div className="relative mt-[8%] overflow-hidden rounded-xl border border-white bg-[linear-gradient(135deg,#ead7b9,#fffaf3)] p-[8%] shadow-[0_8px_14px_rgba(143,93,28,.12)]">
              <div className="absolute -right-[12%] -top-[25%] size-[60%] rounded-full bg-white/55 blur-md" />
              <p className="relative text-[.34rem] font-bold uppercase tracking-wider text-[#9a641e]">New collection</p>
              <p className="serif relative mt-[5%] text-[clamp(.58rem,1vw,.92rem)] leading-[1.05]">Timeless design.<br />Modern experience.</p>
              <span className="relative mt-[9%] inline-block rounded-md bg-[linear-gradient(145deg,#173448,#031b2d)] px-2 py-1 text-[.31rem] font-bold text-white shadow-md">Shop now</span>
            </div>
            <div className="mt-[8%] flex items-center justify-between"><p className="text-[.43rem] font-extrabold">New arrivals</p><span className="text-[.3rem] font-bold text-[#9a641e]">View all</span></div>
            <div className="mt-[4%] grid grid-cols-2 gap-[6%]">
              {productTones.map((tone, index) => (
                <div key={tone} className="rounded-lg border border-[#e7e1d9] bg-white p-[7%] shadow-[0_6px_12px_rgba(7,21,34,.06)]">
                  <div className={`relative aspect-[4/5] rounded-md bg-gradient-to-br ${tone}`}><Heart className="absolute right-[8%] top-[8%] size-[.5rem] text-white drop-shadow" aria-hidden="true" /><span className="absolute bottom-[8%] left-[24%] h-[50%] w-[50%] rounded-t-full bg-[#6e5945]/35" /></div>
                  <div className="mt-[9%] h-1 w-4/5 rounded bg-[#d8d2ca]" /><div className="mt-[6%] h-1 w-1/2 rounded bg-[#eee9e2]" />
                  <p className="mt-[8%] text-[.3rem] font-extrabold text-[#8f5d1c]">{index === 0 ? "Signature" : "Essential"}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,.38)_0%,transparent_26%,transparent_68%,rgba(255,255,255,.16)_100%)]" />
        </div>
      </div>
    </div>
  );
});
