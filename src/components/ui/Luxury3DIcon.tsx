import { memo } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Luxury3DIconProps = {
  icon: LucideIcon;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "navy" | "ivory";
  glow?: boolean;
  floating?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "size-10 rounded-[.72rem] [&_svg]:size-[1.05rem]",
  md: "size-12 rounded-[.88rem] [&_svg]:size-5",
  lg: "size-16 rounded-[1.05rem] [&_svg]:size-7",
};

const variantClasses = {
  gold: "border-[#e0bd7d] bg-[linear-gradient(145deg,#fffaf0_0%,#e8c98f_52%,#b77b2c_100%)] text-[#6f430f]",
  navy: "border-[#425568] bg-[linear-gradient(145deg,#264052_0%,#0a2233_48%,#020f18_100%)] text-[#f1cf8e]",
  ivory: "border-[#ead9bd] bg-[linear-gradient(145deg,#ffffff_0%,#fbf3e7_56%,#ead5b4_100%)] text-[#9b651f]",
};

export const Luxury3DIcon = memo(function Luxury3DIcon({
  icon: Icon,
  label,
  size = "md",
  variant = "ivory",
  glow = false,
  floating = false,
  className,
}: Luxury3DIconProps) {
  return (
    <span
      className={cn(
        "group/luxury-icon relative inline-grid shrink-0 place-items-center [perspective:360px]",
        floating && "ambient-float",
        className,
      )}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
    >
      <span
        className={cn(
          "absolute inset-x-[7%] top-[12%] h-full translate-y-[5px] rounded-[inherit] bg-[#8a5a1d]/35 blur-[1px] transition-transform duration-300 group-hover/luxury-icon:translate-y-[7px]",
          glow && "shadow-[0_8px_24px_rgba(216,180,115,.48)]",
        )}
      />
      <span
        className={cn(
          "relative grid place-items-center overflow-hidden border shadow-[inset_0_1px_1px_rgba(255,255,255,.95),inset_0_-7px_12px_rgba(98,60,18,.13),0_8px_14px_rgba(7,21,34,.15)] transition-transform duration-300 [transform:rotateX(4deg)_translateZ(8px)] group-hover/luxury-icon:[transform:rotateX(-7deg)_rotateY(7deg)_translate3d(0,-3px,18px)]",
          sizeClasses[size],
          variantClasses[variant],
        )}
      >
        <span className="absolute inset-x-[12%] top-[7%] h-[28%] rounded-full bg-white/55 blur-[4px]" />
        <span className="absolute inset-[8%] rounded-[inherit] border border-white/55" />
        <Icon className="relative z-10 drop-shadow-[0_2px_1px_rgba(255,255,255,.7)]" strokeWidth={1.8} aria-hidden="true" />
      </span>
    </span>
  );
});
