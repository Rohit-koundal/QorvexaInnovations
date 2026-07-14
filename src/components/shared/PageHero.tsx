import type { ReactNode } from "react";

import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_55%,#ecfeff_100%)] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="absolute left-[-8rem] top-[-10rem] size-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] size-80 rounded-full bg-cyan-200/40 blur-3xl" />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
