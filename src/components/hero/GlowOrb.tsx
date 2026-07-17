import { memo } from "react";

import { cn } from "@/lib/utils";

export const GlowOrb = memo(function GlowOrb({ className }: { className?: string }) {
  return (
    <span
      data-hero-orb
      className={cn(
        "pointer-events-none absolute rounded-full border border-[#f0d49d] bg-[radial-gradient(circle_at_28%_22%,#fff_0_7%,#fff2c8_8%,transparent_21%),conic-gradient(from_30deg,#70420e,#e2b866,#8d5918,#ffe8a6,#70420e)] shadow-[inset_-7px_-9px_13px_rgba(90,51,8,.26),inset_6px_6px_10px_rgba(255,255,255,.68),0_12px_28px_rgba(143,93,28,.24)]",
        className,
      )}
      aria-hidden="true"
    />
  );
});
