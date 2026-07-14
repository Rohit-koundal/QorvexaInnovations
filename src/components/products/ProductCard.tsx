import Image from "next/image";
import { CheckCircle2, Layers3 } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Card } from "@/components/shared/Card";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const headingId = `product-${product.slug}`;

  return (
    <Card className="grid overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className="relative min-h-64 overflow-hidden bg-[linear-gradient(145deg,#0f172a_0%,#1e1b4b_55%,#155e75_120%)] sm:min-h-80 lg:min-h-full">
        <Image
          src="/images/products/samira-look.svg"
          alt="Illustrated preview of the Samira Collection fashion storefront"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 43vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/5" />
        <div className="absolute left-5 top-5">
          <Badge className="border-white/20 bg-slate-950/70 text-white backdrop-blur-sm">
            {product.status}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
          <Layers3 className="size-4" aria-hidden="true" />
          {product.category}
        </div>
        <h2
          id={headingId}
          className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl"
        >
          {product.name}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
          {product.description}
        </p>

        <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2" aria-label="Product capabilities">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-indigo-600"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href={product.href} showArrow aria-label={`View ${product.name}`}>
            View Product
          </Button>
        </div>
      </div>
    </Card>
  );
}
