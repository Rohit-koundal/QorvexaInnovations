import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Have a Problem Worth Solving?",
  description =
    "Whether you have a product idea, business challenge, partnership opportunity, or collaboration proposal, we would love to hear from you.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Products",
  secondaryHref = "/products",
}: CTASectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 size-64 rounded-full border border-white/10 bg-indigo-500/20 blur-2xl" />
            <div className="absolute -bottom-20 left-1/3 size-56 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300">
                  <ArrowUpRight className="size-6" aria-hidden="true" />
                </div>
                <h2 className="text-balance text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                  {description}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href={primaryHref} variant="light" showArrow>
                  {primaryLabel}
                </Button>
                <Button
                  href={secondaryHref}
                  className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
