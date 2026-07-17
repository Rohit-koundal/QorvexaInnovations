import Image from "next/image";
import {
  BarChart3,
  Boxes,
  CalendarCheck,
  CheckCircle2,
  Code2,
  Compass,
  Layers3,
  LayoutDashboard,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import { BrandMark } from "@/components/shared/Logo";

const chartBars = [34, 51, 42, 68, 57, 77, 64, 86, 74, 93];

export function ProductDeviceStage({
  mode = "platform",
}: {
  mode?: "platform" | "services" | "solutions" | "products";
}) {
  const labels = {
    platform: ["Web Development", "Hotel Management", "E-Commerce", "Custom Software"],
    services: ["Strategy", "Design", "Development", "Support"],
    solutions: ["Retail", "Hospitality", "Booking", "Internal Tools"],
    products: ["Commerce", "Bookings", "Operations", "Analytics"],
  }[mode];

  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[760px]" role="img" aria-label="Layered laptop and phone showing Qorvexa product interfaces">
      <div className="absolute inset-x-[9%] bottom-[1%] h-[16%] rounded-[50%] bg-[radial-gradient(ellipse,#d6aa63_0,#efe2cc_18%,#fff_58%)] shadow-[0_18px_45px_rgba(7,21,34,.13)]" />
      <div className="absolute bottom-[11%] right-[3%] top-[2%] w-[76%] rounded-[1.2rem] border-[7px] border-[#17212a] bg-[#17212a] shadow-[0_35px_75px_rgba(7,21,34,.22)]">
        <div className="h-full overflow-hidden rounded-[.72rem] bg-[#f8f6f2]">
          <div className="flex h-[11%] items-center justify-between border-b border-[#e7e1d9] bg-white px-[3%]">
            <div className="flex items-center gap-2 text-[clamp(.42rem,.7vw,.66rem)] font-extrabold tracking-[.1em] text-[#071522]">
              <span className="grid aspect-square w-5 place-items-center rounded-md bg-[#b77b2c] text-[.5rem] text-white">Q</span>
              QORVEXA
            </div>
            <div className="flex gap-2"><span className="size-2 rounded-full bg-[#e7e1d9]" /><span className="size-2 rounded-full bg-[#d8b473]" /></div>
          </div>
          <div className="grid h-[89%] grid-cols-[19%_1fr]">
            <div className="border-r border-[#e7e1d9] bg-[#fffdfa] p-[10%]">
              <p className="mb-[18%] hidden text-[.48rem] font-extrabold uppercase tracking-wider text-[#a3a7aa] sm:block">Workspace</p>
              {[LayoutDashboard, CalendarCheck, Boxes, BarChart3, SlidersHorizontal].map((Icon, index) => (
                <div key={index} className={`mb-[9%] flex aspect-[3.5/1] items-center gap-2 rounded-md px-[10%] ${index === 0 ? "bg-[#f5ead8] text-[#9a641e]" : "text-[#92989d]"}`}>
                  <Icon className="w-[15%]" aria-hidden="true" />
                  <span className="hidden text-[.47rem] font-bold sm:block">{["Overview", "Schedule", "Products", "Reports", "Settings"][index]}</span>
                </div>
              ))}
            </div>
            <div className="min-w-0 p-[4%]">
              <div className="flex items-end justify-between">
                <div><p className="text-[clamp(.5rem,.85vw,.8rem)] font-extrabold">Business overview</p><p className="mt-1 text-[.43rem] text-[#91979c]">Connected product operations</p></div>
                <span className="rounded-md bg-[#071522] px-3 py-1.5 text-[.42rem] font-bold text-white">Open workspace</span>
              </div>
              <div className="mt-[4%] grid grid-cols-3 gap-[3%]">
                {["Active modules", "Open workflows", "Service health"].map((label, index) => (
                  <div key={label} className="rounded-lg border border-[#e7e1d9] bg-white p-[9%]">
                    <p className="text-[.42rem] font-semibold text-[#93999e]">{label}</p>
                    <div className={`mt-[11%] h-[.45rem] rounded-full ${index === 1 ? "w-3/4" : "w-1/2"} bg-[#d8b473]`} />
                    <p className="mt-[9%] text-[.4rem] font-bold text-[#4d5861]">Ready</p>
                  </div>
                ))}
              </div>
              <div className="mt-[4%] rounded-lg border border-[#e7e1d9] bg-white p-[4%]">
                <div className="flex items-center justify-between"><span className="text-[.48rem] font-extrabold">Activity overview</span><span className="text-[.4rem] text-[#9aa0a4]">Live workspace</span></div>
                <div className="mt-[8%] flex h-[5.2rem] items-end gap-[3%] border-b border-[#eee8df] px-[2%] sm:h-[7.2rem]">
                  {chartBars.map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-[linear-gradient(#d8b473,#b77b2c)]" style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[9%] left-[5%] top-[17%] w-[29%] -rotate-[7deg] rounded-[1.75rem] border-[7px] border-[#141c23] bg-[#141c23] shadow-[0_28px_60px_rgba(7,21,34,.25)]">
        <div className="absolute left-1/2 top-[5px] z-10 h-[3%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full overflow-hidden rounded-[1.25rem] bg-[#fbf8f3]">
          <div className="px-[8%] pb-[5%] pt-[13%]">
            <div className="flex items-center justify-between text-[.42rem] font-extrabold"><span>QORVEXA</span><Search className="size-2.5" aria-hidden="true" /></div>
            <div className="mt-[8%] rounded-xl bg-[linear-gradient(135deg,#f0dfc5,#fff)] p-[8%]">
              <p className="text-[.4rem] font-bold uppercase tracking-wider text-[#9a641e]">Featured</p>
              <p className="serif mt-[4%] text-[clamp(.62rem,1.05vw,1rem)] leading-tight">Modern products, thoughtfully built.</p>
              <span className="mt-[8%] inline-block rounded-md bg-[#071522] px-2 py-1 text-[.38rem] font-bold text-white">Explore</span>
            </div>
            <p className="mt-[8%] text-[.48rem] font-extrabold">Product modules</p>
            <div className="mt-[4%] grid grid-cols-2 gap-[5%]">
              {[ShoppingBag, CalendarCheck, Boxes, Sparkles].map((Icon, index) => (
                <div key={index} className="aspect-square rounded-lg border border-[#e7e1d9] bg-white p-[12%]">
                  <Icon className="size-[35%] text-[#b77b2c]" aria-hidden="true" />
                  <div className="mt-[20%] h-1 w-3/4 rounded bg-[#e7e1d9]" />
                  <div className="mt-[8%] h-1 w-1/2 rounded bg-[#f1ede7]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {labels.map((label, index) => (
        <div
          key={label}
          className={`surface-card absolute hidden items-center gap-2.5 px-3.5 py-2.5 text-[.68rem] font-extrabold shadow-[0_16px_34px_rgba(7,21,34,.13)] sm:flex ${
            index === 0 ? "right-0 top-[12%]" : index === 1 ? "right-[2%] top-[35%]" : index === 2 ? "right-[1%] top-[58%]" : "right-[16%] bottom-[3%]"
          }`}
        >
          <span className="grid size-7 place-items-center rounded-full bg-[#fbf3e7] text-[#b77b2c]">{index === 0 ? "</>" : index === 1 ? "◇" : index === 2 ? "▣" : "✦"}</span>
          {label}
        </div>
      ))}
    </div>
  );
}

const processLayers = [
  { label: "Discover", icon: Compass, color: "from-white to-[#f8f2e9]" },
  { label: "Strategy", icon: LayoutDashboard, color: "from-white to-[#f7f5f1]" },
  { label: "Design", icon: Palette, color: "from-[#fffdfa] to-[#eee8df]" },
  { label: "Development", icon: Code2, color: "from-white to-[#e7e4df]" },
  { label: "Testing", icon: ShieldCheck, color: "from-white to-[#f6efe4]" },
  { label: "Launch", icon: Rocket, color: "from-[#d8b473] to-[#a76d21]" },
];

export function ProcessStackVisual() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[720px]" role="img" aria-label="Six layered delivery phases from discovery to launch">
      <div className="absolute inset-[8%] rounded-full bg-[#e9c98f]/25 blur-3xl" />
      <div className="absolute left-[23%] right-[9%] top-[4%] h-[90%] [perspective:900px]">
        {processLayers.map(({ label, icon: Icon, color }, index) => (
          <div
            key={label}
            className={`absolute left-0 right-0 flex h-[18%] items-center justify-center rounded-[1.3rem] border border-white bg-gradient-to-br ${color} shadow-[0_16px_28px_rgba(7,21,34,.14)]`}
            style={{ top: `${index * 14.3}%`, transform: `rotateX(57deg) translateZ(${(processLayers.length - index) * 9}px)`, zIndex: processLayers.length - index }}
          >
            <Icon className={`size-7 ${index === processLayers.length - 1 ? "text-white" : "text-[#b77b2c]"}`} aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[4%] left-0 top-[4%] flex w-[32%] flex-col justify-between">
        {processLayers.map(({ label }, index) => (
          <div key={label} className="flex items-center gap-2.5 text-xs font-extrabold text-[#293440]">
            <span className="grid size-6 place-items-center rounded-full border border-[#d8b473] bg-white text-[.6rem] text-[#8f5d1c]">{index + 1}</span>
            {label}
          </div>
        ))}
      </div>
      <span className="orb ambient-drift absolute right-[3%] top-[5%]" aria-hidden="true" />
    </div>
  );
}

export function PhotoScene({
  src,
  alt,
  position = "center",
}: {
  src: string;
  alt: string;
  position?: "center" | "right" | "left";
}) {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[760px] overflow-hidden rounded-[1.2rem] border border-white bg-white shadow-[0_34px_90px_rgba(7,21,34,.17)]">
      <Image src={src} alt={alt} fill sizes="(min-width:1024px) 52vw, 100vw" className="scale-[1.14] object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,.12),transparent_42%,rgba(7,21,34,.08))]" />
      <div className="surface-card absolute bottom-5 right-5 hidden items-center gap-3 px-4 py-3 sm:flex">
        <span className="icon-tile size-9"><CheckCircle2 className="size-4" aria-hidden="true" /></span>
        <div><p className="text-xs font-extrabold">Built around outcomes</p><p className="mt-0.5 text-[.65rem] text-[#687079]">Clear thinking, careful delivery</p></div>
      </div>
    </div>
  );
}

export function StudioScene({
  variant = "workspace",
}: {
  variant?: "workspace" | "team" | "careers" | "contact";
}) {
  const isReception = variant === "contact";
  const labels = variant === "team"
    ? ["Product Thinking", "Engineering", "Design", "Quality"]
    : variant === "careers"
      ? ["Learning", "Collaboration", "Meaningful Work", "Modern Tools"]
      : variant === "contact"
        ? ["Quick Response", "Clear Next Steps", "Secure Enquiry", "Flexible Discovery"]
        : ["Product Strategy", "Experience Design", "Engineering", "Delivery"];

  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[760px] overflow-hidden rounded-[1.2rem] border border-white bg-[#eee8df] shadow-[0_34px_90px_rgba(7,21,34,.17)]" role="img" aria-label={isReception ? "Architectural Qorvexa reception concept" : "Architectural Qorvexa product studio concept"}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f9f6f0_0%,#ece5db_67%,#d8cbbc_68%,#f6f0e7_100%)]" />
      <div className="absolute inset-x-[5%] top-[7%] h-[58%] overflow-hidden rounded-t-xl border border-[#d7cfc4] bg-[linear-gradient(135deg,#d8e0e1,#9ca9aa)]">
        <div className="absolute inset-0 grid grid-cols-5 divide-x divide-white/45">
          {Array.from({ length: 5 }).map((_, index) => <span key={index} className="relative"><span className="absolute inset-x-0 top-[58%] border-t border-white/35" /></span>)}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,.72),transparent_40%,rgba(7,21,34,.12))]" />
      </div>
      <div className="absolute left-[7%] top-[8%] h-[56%] w-[25%] bg-[linear-gradient(90deg,#5c4b39,#8a6d4e)] shadow-xl">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_9%,rgba(255,255,255,.18)_10%_11%)]" />
        <div className="absolute left-[14%] top-[15%] flex items-center gap-2 text-white">
          <BrandMark className="size-10 brightness-125" />
          <div><p className="text-[.62rem] font-extrabold tracking-[.12em]">QORVEXA</p><p className="mt-1 text-[.34rem] tracking-[.26em] text-white/70">INNOVATIONS</p></div>
        </div>
      </div>

      {isReception ? (
        <>
          <div className="absolute bottom-[15%] left-[24%] right-[10%] h-[24%] rounded-[55%_12%_18%_25%] border border-white bg-[linear-gradient(180deg,#f7f3ed,#cfc4b7)] shadow-[0_18px_28px_rgba(7,21,34,.2)]" />
          <div className="absolute bottom-[14.5%] left-[30%] right-[13%] h-[2.5%] rounded-full bg-[#d8b473] shadow-[0_0_12px_#d8b473]" />
          <div className="absolute bottom-[23%] left-[38%] h-[4%] w-[10%] rounded-t-md bg-[#071522]" />
          <div className="absolute bottom-[23%] right-[29%] h-[4%] w-[10%] rounded-t-md bg-[#071522]" />
          <div className="absolute bottom-[14%] left-[9%] h-[23%] w-[8%] rounded-[50%_50%_18%_18%] bg-[#3f4d38] shadow-[0_15px_20px_rgba(7,21,34,.14)]" />
          <div className="absolute bottom-[31%] left-[7%] size-[12%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#89966e,#30402a)]" />
        </>
      ) : (
        <>
          {[18, 43, 68].map((left) => (
            <div key={left} className="absolute bottom-[15%] h-[18%] w-[22%]" style={{ left: `${left}%` }}>
              <div className="absolute inset-x-0 top-[24%] h-[25%] rounded-sm bg-[#6b533d] shadow-md" />
              <div className="absolute left-[25%] top-0 h-[40%] w-[52%] rounded-md border-[3px] border-[#1e2932] bg-[linear-gradient(140deg,#142b36,#315566)] p-[4%]">
                <div className="grid h-full grid-cols-3 items-end gap-[8%]">{[45, 72, 58].map((height) => <span key={height} className="rounded-t-sm bg-[#d8b473]/80" style={{ height: `${height}%` }} />)}</div>
              </div>
              <div className="absolute bottom-0 left-[8%] h-[52%] w-[4%] bg-[#554433]" /><div className="absolute bottom-0 right-[8%] h-[52%] w-[4%] bg-[#554433]" />
            </div>
          ))}
          <div className="absolute bottom-[11%] left-[8%] h-[18%] w-[7%] rounded-b-xl bg-[#665846]" /><div className="absolute bottom-[25%] left-[5%] size-[10%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#8e9b76,#34442e)]" />
        </>
      )}

      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-2 gap-2 sm:left-auto sm:right-4 sm:top-[14%] sm:bottom-auto sm:w-[35%] sm:grid-cols-1">
        {labels.slice(0, 4).map((label, index) => (
          <div key={label} className="surface-card flex items-center gap-2 px-3 py-2 text-[.58rem] font-extrabold shadow-lg" style={{ transform: `translateX(${index % 2 ? 8 : 0}px)` }}>
            <span className="size-2 rounded-full bg-[#b77b2c]" />{label}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductArchitectureVisual() {
  return (
    <div className="surface-card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,180,115,.22),transparent_32%)]" />
      <div className="relative grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {[{ label: "Experience", icon: Palette, items: ["Responsive UI", "Accessible journeys", "Design system"] }, { label: "Platform", icon: Layers3, items: ["APIs", "Business rules", "Data layer"] }].map(({ label, icon: Icon, items }) => (
          <div key={label} className="rounded-xl border border-[#e7e1d9] bg-white p-5">
            <span className="icon-tile"><Icon className="size-5" aria-hidden="true" /></span>
            <h3 className="mt-4 font-extrabold">{label}</h3>
            <ul className="mt-3 grid gap-2">{items.map((item) => <li key={item} className="text-xs font-semibold text-[#687079]">• {item}</li>)}</ul>
          </div>
        )).flatMap((node, index) => index === 0 ? [node, <span key="connector" className="mx-auto grid size-10 place-items-center rounded-full bg-[#f5ead8] text-[#b77b2c]">↔</span>] : [node])}
      </div>
    </div>
  );
}
