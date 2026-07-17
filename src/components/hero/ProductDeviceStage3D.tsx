"use client";

import { memo } from "react";
import {
  BarChart3,
  Boxes,
  Building2,
  CalendarCheck,
  Code2,
  Compass,
  Headphones,
  Palette,
  Settings2,
  ShoppingBag,
  Store,
  Workflow,
} from "lucide-react";
import { FloatingServiceCard } from "@/components/hero/FloatingServiceCard";
import { GlowOrb } from "@/components/hero/GlowOrb";
import { Laptop3D } from "@/components/hero/Laptop3D";
import { Phone3D } from "@/components/hero/Phone3D";
import { SoftBackgroundCurves } from "@/components/hero/SoftBackgroundCurves";

type ProductDeviceMode = "platform" | "services" | "solutions" | "products";

const cardSets = {
  platform: [
    { label: "Web Development", icon: Code2 },
    { label: "Hotel Management", icon: Building2 },
    { label: "E-Commerce", icon: ShoppingBag },
    { label: "Custom Software", icon: Boxes },
  ],
  services: [
    { label: "Strategy", icon: Compass },
    { label: "Design", icon: Palette },
    { label: "Development", icon: Code2 },
    { label: "Support", icon: Headphones },
  ],
  solutions: [
    { label: "Retail", icon: Store },
    { label: "Hospitality", icon: Building2 },
    { label: "Booking", icon: CalendarCheck },
    { label: "Internal Tools", icon: Workflow },
  ],
  products: [
    { label: "Commerce", icon: ShoppingBag },
    { label: "Bookings", icon: CalendarCheck },
    { label: "Operations", icon: Settings2 },
    { label: "Analytics", icon: BarChart3 },
  ],
};

const cardPositions = [
  "bottom-[12%] left-0 origin-left scale-[.72] sm:bottom-auto sm:left-auto sm:right-[-1%] sm:top-[8%] sm:origin-right sm:scale-100",
  "bottom-[12%] right-0 origin-right scale-[.72] sm:bottom-auto sm:right-[-2%] sm:top-[34%] sm:scale-100",
  "bottom-0 left-0 origin-left scale-[.72] sm:bottom-[18%] sm:left-auto sm:right-[1%] sm:origin-right sm:scale-100",
  "bottom-0 right-0 origin-right scale-[.72] sm:bottom-[2%] sm:right-auto sm:left-[35%] sm:origin-bottom sm:scale-100",
];

export const ProductDeviceStage3D = memo(function ProductDeviceStage3D({ mode = "platform", cinematic = false }: { mode?: ProductDeviceMode; cinematic?: boolean }) {
  return (
    <div
      data-cinematic-scene={cinematic || undefined}
      className="relative mx-auto aspect-[1/1.22] w-full max-w-[780px] sm:aspect-[16/10]"
      role="img"
      aria-label="Qorvexa laptop and phone product interfaces with service cards"
    >
      <div data-hero-background className="absolute inset-0">
        <SoftBackgroundCurves />
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),rgba(239,224,198,.28)_42%,transparent_70%)]" aria-hidden="true" />
        <GlowOrb className="left-[4%] top-[28%] size-[4.6%]" />
        <GlowOrb className="right-[13%] top-[4%] size-[2.9%]" />
      </div>

      <div data-hero-background className="absolute inset-x-[7%] bottom-[28%] h-[17%] rounded-[50%] border border-white bg-[linear-gradient(180deg,#ffffff_0%,#f0e8dc_52%,#cdbb9f_100%)] shadow-[inset_0_3px_8px_rgba(255,255,255,.96),inset_0_-7px_12px_rgba(143,93,28,.13),0_24px_44px_rgba(7,21,34,.2)] sm:bottom-[5%]" aria-hidden="true">
        <div className="absolute inset-x-[3%] bottom-[7%] h-[17%] rounded-full bg-[linear-gradient(90deg,transparent,#c69244_30%,#f1d08f_52%,#b77b2c_72%,transparent)] shadow-[0_0_10px_rgba(216,180,115,.42)]" />
      </div>

      <div
        data-hero-laptop
        className="absolute right-0 top-[7%] z-10 w-[91%] sm:right-[3%] sm:top-[8%] sm:w-[78%]"
      >
        <Laptop3D mode={mode} />
      </div>

      <div
        data-hero-phone
        className="absolute bottom-[35%] left-[2%] z-20 w-[27%] sm:bottom-[10%] sm:left-[4%] sm:w-[27%]"
      >
        <div data-hero-phone-shadow className="absolute inset-x-[8%] -bottom-[8%] h-[10%] rounded-[50%] bg-[#071522]/30 blur-md" aria-hidden="true" />
        <Phone3D />
      </div>

      <div className="absolute inset-0 z-30">
        {cardSets[mode].map(({ label, icon }, index) => (
          <FloatingServiceCard key={label} label={label} icon={icon} className={cardPositions[index]} />
        ))}
      </div>
    </div>
  );
});
