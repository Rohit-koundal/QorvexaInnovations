import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { company, socialLinks } from "@/data/company";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo inverse />
            <p className="mt-6 text-lg font-bold leading-7 text-white">
              {company.tagline}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Practical, scalable digital products for people and businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {Object.entries(footerNavigation).map(([section, links]) => (
              <div key={section}>
                <h2 className="text-sm font-extrabold text-white">{section}</h2>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="inline-flex min-h-11 items-center py-2 text-sm text-slate-400 transition hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-extrabold text-white">Connect</h2>
              <ul className="mt-5 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        className="inline-flex min-h-11 items-center gap-1 py-2 text-sm text-slate-400 transition hover:text-white focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                        {link.href.startsWith("http") ? (
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        ) : null}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center py-2 text-sm text-slate-400">
                        {link.label} <span className="ml-1 text-xs text-slate-500">(coming soon)</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Qorvexa
Innovations. All rights reserved.</p>
          <p>Designed and built with purpose in India.</p>
        </div>
      </Container>
    </footer>
  );
}
