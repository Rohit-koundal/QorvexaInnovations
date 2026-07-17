import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Reveal, TiltStage } from "@/components/motion/Motion";

type HeroAction = {
  label: string;
  href: string;
};

export type EditorialHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
  trailing?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  visual?: ReactNode;
  primary?: HeroAction;
  secondary?: HeroAction;
  labels?: string[];
  priority?: boolean;
  compact?: boolean;
};

export function EditorialHero({
  eyebrow,
  title,
  accent,
  trailing,
  description,
  image,
  imageAlt = "Qorvexa digital product visual",
  visual,
  primary = { label: "Start Your Project", href: "/contact" },
  secondary = { label: "View Our Work", href: "/portfolio" },
  labels = [],
  priority = false,
  compact = false,
}: EditorialHeroProps) {
  return (
    <section className="warm-grid relative isolate overflow-hidden border-b border-[#e7e1d9]">
      <div className="hero-ribbon" />
      <span className="orb ambient-drift absolute left-[43%] top-[34%] hidden lg:block" aria-hidden="true" />
      <div
        className={`site-shell relative grid items-center gap-12 py-12 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-16 ${
          compact ? "lg:min-h-[580px]" : "lg:min-h-[660px]"
        }`}
      >
        <Reveal className="relative z-10 py-3 lg:py-8">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-5">
            {title} <span className="gold-text">{accent}</span>{trailing ? ` ${trailing}` : ""}
          </h1>
          <p className="body-lead mt-6">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="gold-button" href={primary.href}>
              {primary.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className="secondary-button" href={secondary.href}>
              {secondary.label}
              <span className="grid size-6 place-items-center rounded-full border border-[#d8b473] text-[#8f5d1c]">
                <Play className="size-3 fill-current" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative z-10 min-w-0 pb-10 lg:pb-0">
          <TiltStage className="relative mx-auto w-full max-w-[760px]">
            {visual ?? (image ? (
              <div className="ambient-float relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-[0_34px_90px_rgba(7,21,34,.17)] [transform:translateZ(0)]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,.16),transparent_34%,transparent_75%,rgba(255,255,255,.15))]" />
              </div>
            ) : null)}

            {labels.slice(0, 4).map((label, index) => (
              <div
                key={label}
                className={`surface-card ambient-float-reverse absolute hidden min-w-40 items-center gap-3 px-4 py-3 text-xs font-extrabold text-[#293440] shadow-[0_18px_44px_rgba(7,21,34,.11)] sm:flex [transform:translateZ(65px)] ${
                  index === 0
                    ? "-right-3 top-7"
                    : index === 1
                      ? "-left-4 bottom-16"
                      : index === 2
                        ? "right-8 bottom-3"
                        : "left-8 top-4"
                }`}
                style={{ animationDelay: `${index * -1.3}s` }}
              >
                <span className="grid size-8 place-items-center rounded-full bg-[#fbf3e7] text-[#b77b2c]">✦</span>
                {label}
              </div>
            ))}
          </TiltStage>
        </Reveal>
      </div>
    </section>
  );
}
