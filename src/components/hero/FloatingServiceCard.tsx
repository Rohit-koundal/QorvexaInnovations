"use client";

import { memo } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export const FloatingServiceCard = memo(function FloatingServiceCard({
  icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  const Icon = icon;

  return (
    <div className={cn("absolute z-30", className)}>
      <div
        data-hero-service-card
        className="flex min-w-[8.4rem] items-center gap-2.5 rounded-xl border border-[#e6dccd] bg-[#fffdfa] px-2.5 py-2 shadow-[0_8px_20px_rgba(7,21,34,.09)] sm:min-w-[10rem] sm:gap-3 sm:px-3 sm:py-2.5"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#ead8b8] bg-[#fff8ed] text-[#a56b21] sm:size-10" aria-hidden="true">
          <Icon className="size-[1.05rem] sm:size-[1.15rem]" strokeWidth={1.8} />
        </span>
        <span className="max-w-[6rem] text-[.58rem] font-extrabold leading-tight text-[#152532] sm:max-w-[7rem] sm:text-[.68rem]">{label}</span>
      </div>
    </div>
  );
});
