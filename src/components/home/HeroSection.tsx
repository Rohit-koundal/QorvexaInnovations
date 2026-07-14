import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { HeroProductEcosystem } from "@/components/home/HeroProductEcosystem";

const trustPoints = ["Practical Solutions", "Scalable Architecture", "User-First Design"];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)] pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_16%_12%,rgba(79,70,229,0.13),transparent_33%),radial-gradient(circle_at_88%_18%,rgba(6,182,212,0.12),transparent_30%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[30rem] opacity-[0.26] [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(500px,1.08fr)] lg:gap-10 xl:gap-16">
          <Reveal className="max-w-2xl">
            <Badge>Product-Driven Technology Company</Badge>
            <h1 className="mt-7 text-balance text-[2.45rem] font-extrabold leading-[1.07] tracking-[-0.055em] text-slate-950 sm:text-5xl sm:leading-[1.05] lg:text-[3.7rem] xl:text-[4.15rem]">
              We Build Digital Products That Solve Real-World Problems.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Qorvexa
Innovations is a product-driven technology company creating practical,
              scalable, and user-friendly digital solutions for people and businesses.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" showArrow className="w-full sm:w-auto">
                Explore Our Products
              </Button>
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>

            <ul className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-5">
              {trustPoints.map((point) => (
                <li className="flex items-center gap-2 text-sm font-bold text-slate-700" key={point}>
                  <CheckCircle2 className="size-4 shrink-0 text-cyan-600" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <HeroProductEcosystem />
        </div>
      </Container>
    </section>
  );
}
