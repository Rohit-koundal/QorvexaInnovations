import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  showArrow?: boolean;
  target?: string;
  rel?: string;
} & Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "disabled" | "onClick" | "aria-label"
>;

const variants = {
  primary:
    "bg-indigo-600 text-white shadow-[0_10px_28px_rgba(79,70,229,0.25)] hover:bg-indigo-700 hover:shadow-[0_14px_34px_rgba(79,70,229,0.3)]",
  secondary:
    "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-slate-400 hover:bg-slate-50",
  light: "bg-white text-slate-950 shadow-xl shadow-slate-950/10 hover:bg-indigo-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  showArrow = false,
  target,
  rel,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="size-4" aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
