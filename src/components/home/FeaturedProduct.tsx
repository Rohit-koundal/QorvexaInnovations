import { Check } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { flagshipProduct } from "@/data/products";
import { ProductShowcaseVisual } from "@/components/home/ProductShowcaseVisual";

const productCapabilities = [
  "Fashion product catalogue",
  "Search and advanced filters",
  "Wishlist and cart",
  "Address and checkout",
  "COD and online payment support",
  "Customer account and orders",
  "Product and inventory management",
  "Admin dashboard",
  "Coupons, banners, and settings",
  "Responsive mobile and desktop experience",
];

export function FeaturedProduct() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(79,70,229,0.22),transparent_28%),radial-gradient(circle_at_86%_70%,rgba(6,182,212,0.16),transparent_27%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent_82%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(500px,1.1fr)] lg:gap-12 xl:gap-20">
          <Reveal>
            <Badge className="border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              {flagshipProduct.status}
            </Badge>
            <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              {flagshipProduct.name}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              {flagshipProduct.longDescription}
            </p>

            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {productCapabilities.map((feature) => (
                <li className="flex items-start gap-2.5 text-sm leading-6 text-slate-300" key={feature}>
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-cyan-300">
                    <Check className="size-2.5" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={flagshipProduct.href} variant="light" showArrow className="w-full sm:w-auto">
                View Product Details
              </Button>
              <Button
                href={`${flagshipProduct.href}#product-gallery`}
                className="w-full border border-white/20 bg-white/5 text-white shadow-none hover:bg-white/10 sm:w-auto"
              >
                View Interface Preview
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ProductShowcaseVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
