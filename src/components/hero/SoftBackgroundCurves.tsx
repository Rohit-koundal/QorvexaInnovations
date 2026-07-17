import { memo } from "react";

export const SoftBackgroundCurves = memo(function SoftBackgroundCurves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-[12%] top-[3%] h-[78%] w-[104%] rotate-[-10deg] rounded-[50%] border border-[#d8b473]/30 shadow-[0_0_24px_rgba(216,180,115,.12)]" />
      <div className="absolute -right-[2%] top-[13%] h-[58%] w-[86%] rotate-[-7deg] rounded-[50%] border border-[#e7c98f]/35" />
      <div className="absolute right-[9%] top-[23%] h-[38%] w-[68%] rotate-[-4deg] rounded-[50%] border border-white bg-white/5 shadow-[0_0_32px_rgba(216,180,115,.13)]" />
      <div className="absolute right-[16%] top-[8%] size-[34%] rounded-full bg-[radial-gradient(circle,rgba(240,215,167,.38),rgba(240,215,167,.08)_48%,transparent_72%)]" />
    </div>
  );
});
