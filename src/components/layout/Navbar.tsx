"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { headerCta, mainNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string, exact?: boolean) {
  return exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 border-b transition duration-300", scrolled ? "border-[#e7e1d9] bg-[#fdfbf8]/95 shadow-[0_12px_36px_rgba(7,21,34,.06)] backdrop-blur-xl" : "border-transparent bg-[#fdfbf8]/90 backdrop-blur-md")}>
      <div className="site-shell flex h-[76px] items-center justify-between gap-5">
        <Logo className="shrink-0" />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {mainNavigation.map((item) => {
            const active = isActive(pathname, item.href, "exact" in item ? item.exact : false);
            const hasChildren = "children" in item && item.children;
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn("relative flex min-h-11 items-center gap-1.5 px-3 text-[.78rem] font-extrabold text-[#293440] transition hover:text-[#9a641e]", active && "text-[#9a641e]")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {hasChildren ? <ChevronDown className="size-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" /> : null}
                  <span className={cn("absolute inset-x-3 bottom-0 h-px origin-left bg-[#b77b2c] transition-transform", active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100")} />
                </Link>
                {hasChildren ? (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-xl border border-[#e7e1d9] bg-white p-2 shadow-[0_24px_60px_rgba(7,21,34,.13)]">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="flex min-h-10 items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-[#4d5861] transition hover:bg-[#fbf3e7] hover:text-[#8f5d1c]">
                          {child.label}<ArrowRight className="size-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={headerCta.href} aria-label={headerCta.ariaLabel} className="primary-button hidden lg:inline-flex">
            {headerCta.label}<ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-[#e7e1d9] bg-white text-[#071522] xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-[76px] overflow-y-auto border-t border-[#e7e1d9] bg-[#fdfbf8] xl:hidden">
          <nav className="site-shell py-6" aria-label="Mobile navigation">
            <div className="grid gap-2">
              {mainNavigation.map((item) => {
                const hasChildren = "children" in item && item.children;
                const active = isActive(pathname, item.href, "exact" in item ? item.exact : false);
                return hasChildren ? (
                  <details key={item.label} className="group rounded-xl border border-[#e7e1d9] bg-white" open={active}>
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-sm font-extrabold marker:hidden">
                      {item.label}<ChevronDown className="size-4 text-[#b77b2c] transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="grid border-t border-[#e7e1d9] p-2">
                      <Link href={item.href} onClick={() => setOpen(false)} className="min-h-11 rounded-lg px-3 py-3 text-sm font-bold text-[#8f5d1c]">Overview</Link>
                      {item.children.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="min-h-11 rounded-lg px-3 py-3 text-sm font-semibold text-[#59636c] hover:bg-[#fbf3e7]">{child.label}</Link>)}
                    </div>
                  </details>
                ) : (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={cn("flex min-h-12 items-center rounded-xl border border-[#e7e1d9] bg-white px-4 text-sm font-extrabold", active && "border-[#d8b473] bg-[#fbf3e7] text-[#8f5d1c]")} aria-current={active ? "page" : undefined}>{item.label}</Link>
                );
              })}
            </div>
            <Link href={headerCta.href} onClick={() => setOpen(false)} className="primary-button mt-5 w-full">{headerCta.label}<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
