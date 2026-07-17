import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative grid size-11 shrink-0 place-items-center", className)} aria-hidden="true">
      <span className="absolute size-8 rotate-30 border-[3px] border-[#b77b2c] [clip-path:polygon(25%_0,75%_0,100%_25%,100%_75%,75%_100%,25%_100%,0_75%,0_25%)]" />
      <span className="absolute size-[1.15rem] rotate-30 border-2 border-[#b77b2c] [clip-path:polygon(25%_0,75%_0,100%_25%,100%_75%,75%_100%,25%_100%,0_75%,0_25%)]" />
      <span className="absolute bottom-[6px] right-[4px] h-[3px] w-[15px] rotate-45 rounded-full bg-[#b77b2c]" />
    </span>
  );
}

export function Logo({ inverse = false, compact = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex min-h-11 items-center gap-2.5 rounded-lg", className)}
      aria-label="Qorvexa Innovations home"
    >
      <BrandMark />
      {!compact ? (
        <span className="leading-none">
          <span
            className={cn(
              "block text-[1.08rem] font-extrabold tracking-[0.13em]",
              inverse ? "text-white" : "text-[#071522]",
            )}
          >
            QORVEXA
          </span>
          <span
            className={cn(
              "mt-1.5 block text-[0.56rem] font-bold uppercase tracking-[0.39em]",
              inverse ? "text-white/60" : "text-[#293440]",
            )}
          >
            Innovations
          </span>
        </span>
      ) : null}
    </Link>
  );
}
