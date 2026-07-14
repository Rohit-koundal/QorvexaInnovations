import { Check, Settings2, ShoppingBag } from "lucide-react";

import { Card } from "@/components/shared/Card";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const featureGroups = [
  {
    title: "Customer Storefront",
    description:
      "A clear, responsive buying journey that helps customers move from discovery to post-purchase support.",
    icon: ShoppingBag,
    features: [
      "Product browsing",
      "Category navigation",
      "Search and filters",
      "Product details",
      "Wishlist",
      "Cart",
      "Address management",
      "Checkout",
      "Payments",
      "Orders",
      "Returns and refunds",
    ],
  },
  {
    title: "Admin Platform",
    description:
      "One operational workspace for managing the catalogue, customers, commerce activity, and store content.",
    icon: Settings2,
    features: [
      "Product management",
      "Category management",
      "Inventory and variants",
      "Order management",
      "Customer management",
      "Coupon management",
      "Banner management",
      "Settings",
      "Analytics",
    ],
  },
];

export function ProductFeatures() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Platform Capabilities"
          title="One product, two connected experiences"
          description="Samira Collection brings customer-facing commerce and everyday business operations into a coherent platform."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featureGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.08}>
                <Card className="h-full p-6 sm:p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.035em] text-slate-950">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{group.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2" aria-label={`${group.title} features`}>
                    {group.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                          <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
