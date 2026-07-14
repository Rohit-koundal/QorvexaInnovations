"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  CheckCircle2,
  LayoutDashboard,
  PackageCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const workspaceItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Products", icon: ShoppingBag, active: false },
  { label: "Systems", icon: Boxes, active: false },
];

const productCards = [
  { label: "Catalogue", tone: "from-indigo-500 to-violet-400" },
  { label: "Orders", tone: "from-cyan-500 to-sky-400" },
  { label: "Experience", tone: "from-slate-700 to-slate-500" },
];

export function HeroProductEcosystem() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
      role="img"
      aria-label="Illustration of Nexora's connected product workspace with catalogue, orders, and customer experience systems"
    >
      <div
        className="absolute -left-8 top-10 size-36 rounded-full bg-indigo-400/20 blur-3xl sm:size-52"
        aria-hidden="true"
      />
      <div
        className="absolute -right-4 bottom-0 size-40 rounded-full bg-cyan-400/20 blur-3xl sm:size-56"
        aria-hidden="true"
      />

      <motion.div
        className="relative overflow-hidden rounded-[1.65rem] border border-white/80 bg-white/90 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur sm:rounded-[2rem] sm:p-5"
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-3 flex items-center justify-between px-1 sm:mb-5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-2 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-slate-500 sm:text-xs">
            <Sparkles className="size-3.5 text-indigo-500" aria-hidden="true" />
            Product workspace
          </div>
        </div>

        <div className="grid min-h-[290px] grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:min-h-[350px] sm:grid-cols-[124px_minmax(0,1fr)]">
          <aside className="hidden border-r border-slate-800 bg-slate-950 p-3 sm:block">
            <div className="mb-7 flex items-center gap-2 px-1.5 pt-1 text-white">
              <span className="grid size-7 place-items-center rounded-lg bg-indigo-500 text-[0.65rem] font-black">
                N
              </span>
              <span className="text-xs font-extrabold">Nexora</span>
            </div>
            <nav aria-label="Product workspace preview" className="space-y-1.5">
              {workspaceItems.map(({ label, icon: Icon, active }) => (
                <div
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.68rem] font-bold ${
                    active ? "bg-white/10 text-white" : "text-slate-500"
                  }`}
                  key={label}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 p-3.5 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.15em] text-indigo-600 sm:text-xs">
                  Product ecosystem
                </p>
                <h2 className="mt-1 text-base font-extrabold tracking-[-0.04em] text-slate-950 sm:text-xl">
                  Build, connect, improve.
                </h2>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[0.58rem] font-extrabold text-emerald-700 sm:text-[0.65rem]">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
              {[
                ["Flagship", "First product"],
                ["Focused", "Product areas"],
                ["Scale-ready", "Architecture"],
              ].map(([value, label]) => (
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3" key={label}>
                  <p className="truncate text-[0.68rem] font-black tracking-[-0.02em] text-slate-950 sm:text-xs">{value}</p>
                  <p className="mt-0.5 text-[0.56rem] font-bold leading-tight text-slate-500 sm:text-[0.68rem]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 sm:mt-4 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-indigo-50 text-indigo-600 sm:size-10">
                    <ShoppingBag className="size-4 sm:size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-extrabold text-slate-900 sm:text-sm">Samira Collection</p>
                    <p className="truncate text-[0.58rem] text-slate-500 sm:text-[0.68rem]">Connected commerce platform</p>
                  </div>
                </div>
                <CheckCircle2 className="size-4 shrink-0 text-emerald-500" aria-label="Ready" />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4">
                {productCards.map((card) => (
                  <div className="min-w-0" key={card.label}>
                    <div className={`h-10 rounded-lg bg-gradient-to-br ${card.tone} sm:h-14`} />
                    <p className="mt-1.5 truncate text-[0.55rem] font-bold text-slate-500 sm:text-[0.65rem]">
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-2 bottom-10 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.14)] sm:flex lg:-left-8"
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="grid size-9 place-items-center rounded-xl bg-cyan-50 text-cyan-700">
          <PackageCheck className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[0.62rem] font-bold text-slate-400">Architecture</p>
          <p className="text-xs font-extrabold text-slate-900">Ready for growth</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-20 hidden rounded-2xl border border-white/80 bg-slate-950 px-4 py-3 text-white shadow-[0_18px_50px_rgba(15,23,42,0.24)] sm:block lg:-right-5"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-cyan-300">Our approach</p>
        <p className="mt-1 text-xs font-extrabold">Problem → Product</p>
      </motion.div>
    </div>
  );
}
