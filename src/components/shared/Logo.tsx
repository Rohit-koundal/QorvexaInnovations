import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  inverse?: boolean;
  className?: string;
};

export function Logo({ inverse = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-h-11 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
        className,
      )}
      aria-label="Qorvexa Innovations home"
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-[0_8px_24px_rgba(79,70,229,0.28)]">
        <span className="absolute -right-2 -top-2 size-6 rounded-full border border-white/30" />
        <span className="relative text-lg font-extrabold tracking-[-0.08em]">Q</span>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[1.05rem] font-extrabold tracking-[-0.035em]",
            inverse ? "text-white" : "text-slate-950",
          )}
        >
          Qorvexa
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.22em]",
            inverse ? "text-slate-400" : "text-slate-500",
          )}
        >
          Innovations
        </span>
      </span>
    </Link>
  );
}
