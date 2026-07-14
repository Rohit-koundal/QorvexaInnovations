import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-indigo-700",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
      {children}
    </span>
  );
}
