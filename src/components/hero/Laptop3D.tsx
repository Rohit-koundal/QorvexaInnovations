import { memo } from "react";
import { BarChart3, Boxes, CalendarCheck, LayoutDashboard, SlidersHorizontal } from "lucide-react";

const chartBars = [34, 51, 42, 68, 57, 77, 64, 86, 74, 93];

const modeCopy = {
  platform: { title: "Business overview", eyebrow: "Connected product operations" },
  services: { title: "Delivery workspace", eyebrow: "Strategy through support" },
  solutions: { title: "Solution dashboard", eyebrow: "Industry-ready workflows" },
  products: { title: "Product command center", eyebrow: "One connected ecosystem" },
};

export const Laptop3D = memo(function Laptop3D({ mode = "platform" }: { mode?: keyof typeof modeCopy }) {
  const copy = modeCopy[mode];

  return (
    <div className="relative aspect-[1.48/1] w-full">
      <div className="absolute inset-x-[11%] bottom-[4%] h-[13%] rounded-[50%] bg-[#071522]/25 blur-lg" />

      <div className="absolute inset-x-[6%] top-0 h-[74%] rounded-[1.1rem] border border-[#46515a] bg-[linear-gradient(145deg,#43505a_0%,#111b23_38%,#02070b_100%)] p-[1.25%] shadow-[inset_0_1px_1px_rgba(255,255,255,.5),inset_0_-6px_12px_rgba(0,0,0,.55),0_26px_48px_rgba(7,21,34,.3)]">
        <span className="absolute left-1/2 top-[.48rem] z-20 size-1.5 -translate-x-1/2 rounded-full bg-[#101820] shadow-[inset_0_0_0_1px_#52616c]" />
        <div className="relative h-full overflow-hidden rounded-[.72rem] border border-black/60 bg-[#f8f6f2] shadow-[inset_0_0_16px_rgba(7,21,34,.15)]">
          <div className="flex h-[11%] items-center justify-between border-b border-[#e7e1d9] bg-white px-[3%]">
            <div className="flex items-center gap-2 text-[clamp(.38rem,.65vw,.62rem)] font-extrabold tracking-[.1em] text-[#071522]">
              <span className="grid aspect-square w-5 place-items-center rounded-md bg-[linear-gradient(145deg,#d7aa60,#8d5918)] text-[.48rem] text-white shadow-[0_3px_6px_rgba(143,93,28,.3)]">Q</span>
              QORVEXA
            </div>
            <div className="flex gap-1.5"><span className="size-1.5 rounded-full bg-[#e7e1d9]" /><span className="size-1.5 rounded-full bg-[#d8b473]" /></div>
          </div>

          <div className="grid h-[89%] grid-cols-[19%_1fr]">
            <div className="border-r border-[#e7e1d9] bg-[#fffdfa] p-[10%]">
              <p className="mb-[16%] hidden text-[.43rem] font-extrabold uppercase tracking-wider text-[#a3a7aa] sm:block">Workspace</p>
              {[LayoutDashboard, CalendarCheck, Boxes, BarChart3, SlidersHorizontal].map((Icon, index) => (
                <div key={index} className={`mb-[9%] flex aspect-[3.6/1] items-center gap-2 rounded-md px-[10%] ${index === 0 ? "bg-[#f5ead8] text-[#9a641e] shadow-[inset_0_1px_0_white]" : "text-[#92989d]"}`}>
                  <Icon className="w-[16%]" aria-hidden="true" />
                  <span className="hidden text-[.42rem] font-bold sm:block">{["Overview", "Schedule", "Products", "Reports", "Settings"][index]}</span>
                </div>
              ))}
            </div>

            <div className="min-w-0 p-[4%]">
              <div className="flex items-end justify-between gap-2">
                <div><p className="text-[clamp(.46rem,.8vw,.76rem)] font-extrabold">{copy.title}</p><p className="mt-1 text-[.4rem] text-[#91979c]">{copy.eyebrow}</p></div>
                <span className="rounded-md bg-[linear-gradient(145deg,#173448,#031b2d)] px-2 py-1 text-[.36rem] font-bold text-white shadow-md sm:px-3 sm:py-1.5">Open workspace</span>
              </div>
              <div className="mt-[4%] grid grid-cols-3 gap-[3%]">
                {["Active modules", "Open workflows", "Service health"].map((label, index) => (
                  <div key={label} className="rounded-lg border border-[#e7e1d9] bg-[linear-gradient(145deg,#fff,#fcfaf7)] p-[9%] shadow-[0_4px_10px_rgba(7,21,34,.04)]">
                    <p className="truncate text-[.36rem] font-semibold text-[#93999e]">{label}</p>
                    <div className={`mt-[11%] h-[.4rem] rounded-full ${index === 1 ? "w-3/4" : "w-1/2"} bg-[linear-gradient(90deg,#d8b473,#b77b2c)] shadow-[0_2px_4px_rgba(183,123,44,.2)]`} />
                    <p className="mt-[9%] text-[.36rem] font-bold text-[#4d5861]">Ready</p>
                  </div>
                ))}
              </div>
              <div className="mt-[4%] rounded-lg border border-[#e7e1d9] bg-white p-[4%] shadow-[0_6px_16px_rgba(7,21,34,.045)]">
                <div className="flex items-center justify-between"><span className="text-[.43rem] font-extrabold">Activity overview</span><span className="text-[.36rem] text-[#9aa0a4]">Live workspace</span></div>
                <div className="mt-[6%] flex h-[3.7rem] items-end gap-[3%] border-b border-[#eee8df] px-[2%] sm:h-[6.2rem]">
                  {chartBars.map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-[linear-gradient(#e2c083,#a56b21)] shadow-[0_0_4px_rgba(183,123,44,.12)]" style={{ height: `${height}%` }} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,.3)_0%,transparent_28%,transparent_70%,rgba(255,255,255,.13)_100%)]" />
        </div>
      </div>

      <div className="absolute left-[15%] right-[15%] top-[72.5%] z-20 h-[4.5%] rounded-b-md bg-[linear-gradient(180deg,#18242d,#69747b_48%,#131c23)] shadow-[0_5px_8px_rgba(7,21,34,.25)]" />
      <div className="absolute inset-x-[1%] top-[74%] h-[12%] origin-top [clip-path:polygon(7%_0,93%_0,100%_66%,94%_100%,6%_100%,0_66%)] bg-[linear-gradient(180deg,#f4f1eb_0%,#aab0b1_42%,#687176_76%,#d7d9d7_100%)] shadow-[inset_0_1px_0_white,0_12px_22px_rgba(7,21,34,.22)]">
        <div className="absolute left-[18%] right-[18%] top-[13%] grid h-[36%] grid-cols-8 gap-[2%] opacity-45">
          {Array.from({ length: 24 }).map((_, index) => <span key={index} className="rounded-[1px] bg-[#26323b] shadow-[inset_0_1px_0_rgba(255,255,255,.25)]" />)}
        </div>
        <div className="absolute bottom-[10%] left-[39%] h-[28%] w-[22%] rounded-sm border border-[#788186] bg-[#bfc4c4]/60 shadow-[inset_0_2px_4px_rgba(255,255,255,.5)]" />
      </div>
      <div className="absolute inset-x-[8%] bottom-[12%] h-[2.5%] rounded-b-[50%] bg-[linear-gradient(90deg,#6a7377,#e3e3df_45%,#737c7f)] shadow-[0_6px_9px_rgba(7,21,34,.18)]" />
    </div>
  );
});
