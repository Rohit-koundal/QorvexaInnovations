import { CheckCircle2, LayoutDashboard, PackageCheck, ShoppingBag } from "lucide-react";

import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import type { Product } from "@/types/product";

export function ProductHero({ product }: { product: Product }) {
  const liveHref = product.liveUrl ?? "#product-gallery";

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute left-[-10rem] top-[-12rem] size-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-10rem] size-96 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <Reveal>
            <Badge className="border-indigo-400/30 bg-indigo-400/10 text-indigo-200">
              {product.status}
            </Badge>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-300">
              {product.name}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.5rem]">
              A Complete Digital Commerce Platform for Modern Fashion Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Samira Collection combines a customer-friendly fashion storefront with powerful
              tools for product, inventory, order, offer, and customer management.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={liveHref}
                variant="light"
                showArrow
                className="w-full sm:w-auto"
                target={product.liveUrl ? "_blank" : undefined}
                rel={product.liveUrl ? "noreferrer" : undefined}
              >
                {product.liveUrl ? "View Live Product" : "View Interface Preview"}
              </Button>
              <Button
                href="/contact"
                className="w-full border border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                Contact for Business
              </Button>
            </div>
            {!product.liveUrl ? (
              <p className="mt-3 text-xs font-medium leading-5 text-slate-400">
                A public product URL has not been configured yet; this link opens the interface
                preview below.
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-300">
              {["Responsive commerce", "Centralized operations", "Built to scale"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-cyan-300" aria-hidden="true" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.38)] backdrop-blur sm:p-5"
              role="img"
              aria-label="Commerce dashboard and mobile storefront interface mockup"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50">
                <div className="flex h-10 items-center justify-between border-b border-slate-200 bg-white px-3 sm:px-4">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2 rounded-full bg-rose-400" />
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-md bg-slate-100 px-3 py-1 text-[8px] font-bold text-slate-500 sm:text-[10px]">
                    commerce.samira
                  </span>
                  <span className="size-5 rounded-md bg-indigo-100" aria-hidden="true" />
                </div>

                <div className="grid min-h-64 grid-cols-[2.75rem_minmax(0,1fr)] sm:min-h-[22rem] sm:grid-cols-[7rem_minmax(0,1fr)]">
                  <div className="border-r border-slate-200 bg-slate-950 p-2 sm:p-3">
                    <div className="flex items-center gap-2 text-white">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500">
                        <ShoppingBag className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="hidden text-[10px] font-extrabold sm:block">SAMIRA</span>
                    </div>
                    <div className="mt-6 space-y-2.5">
                      {[true, false, false, false, false].map((active, index) => (
                        <div
                          key={index}
                          className={`h-7 rounded-md ${active ? "bg-indigo-500" : "bg-white/5"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 p-3 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                          Operations
                        </p>
                        <p className="mt-1 text-xs font-extrabold text-slate-900 sm:text-base">
                          Store overview
                        </p>
                      </div>
                      <div className="rounded-lg bg-indigo-600 px-2 py-1.5 text-[8px] font-bold text-white sm:px-3 sm:text-[10px]">
                        Add product
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { label: "Catalogue", value: "Organized", icon: LayoutDashboard },
                        { label: "Inventory", value: "Synced", icon: PackageCheck },
                        { label: "Orders", value: "Tracked", icon: ShoppingBag },
                      ].map(({ label, value, icon: Icon }) => (
                        <div key={label} className="min-w-0 rounded-xl border border-slate-200 bg-white p-2 sm:p-3">
                          <Icon className="size-3.5 text-indigo-600 sm:size-4" aria-hidden="true" />
                          <p className="mt-2 truncate text-[7px] font-bold text-slate-400 sm:text-[9px]">
                            {label}
                          </p>
                          <p className="mt-0.5 truncate text-[8px] font-extrabold text-slate-900 sm:text-xs">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 rounded-xl border border-slate-200 bg-white p-2.5 sm:mt-4 sm:p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[8px] font-extrabold text-slate-900 sm:text-[10px]">Order workflow</p>
                        <span className="text-[7px] font-bold text-indigo-600 sm:text-[9px]">Overview</span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {["Order received", "Payment checked", "Ready to ship"].map((step) => (
                          <div key={step} className="grid grid-cols-[1fr_0.7fr_0.55fr] items-center gap-2 border-t border-slate-100 pt-2 text-[7px] sm:text-[9px]">
                            <span className="font-extrabold text-slate-700">{step}</span>
                            <span className="truncate text-slate-400">Workflow</span>
                            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-center font-bold text-emerald-700">
                              Ready
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1 right-2 w-[31%] min-w-[5.8rem] max-w-36 rounded-[1.35rem] border-[4px] border-slate-900 bg-white p-1 shadow-2xl sm:-bottom-4 sm:right-0 sm:border-[6px]">
                <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-slate-900" />
                <div className="overflow-hidden rounded-[0.9rem] bg-slate-50">
                  <div className="bg-indigo-600 px-2 py-2 text-[6px] font-extrabold text-white sm:text-[8px]">
                    SAMIRA COLLECTION
                  </div>
                  <div className="p-1.5 sm:p-2">
                    <div className="h-12 rounded-lg bg-[linear-gradient(135deg,#fce7f3,#ddd6fe)] sm:h-20" />
                    <p className="mt-1.5 text-[6px] font-extrabold text-slate-800 sm:text-[8px]">New season edit</p>
                    <div className="mt-1.5 grid grid-cols-2 gap-1">
                      <div className="h-8 rounded-md bg-amber-100 sm:h-12" />
                      <div className="h-8 rounded-md bg-cyan-100 sm:h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
