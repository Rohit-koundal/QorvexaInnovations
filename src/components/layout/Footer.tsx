import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Cat,
  Globe2,
  GraduationCap,
  Handshake,
  Info,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  MapPin,
  PawPrint,
  PenTool,
  Settings2,
  ShoppingCart,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { company } from "@/content/company";
import { contactDetails } from "@/content/contact";
import { footerNavigation, legalNavigation } from "@/content/navigation";

const footerLinkIcons: Record<string, LucideIcon> = {
  "Custom Software": Settings2,
  "Web Development": Globe2,
  "E-Commerce": ShoppingCart,
  "UI/UX Design": PenTool,
  "Maintenance & Support": LifeBuoy,
  "E-Commerce & Retail": Truck,
  "Hotel & Hospitality": BedDouble,
  "Pet Care & Stores": PawPrint,
  "Professional Services": Handshake,
  "Samira Collection": BookOpen,
  "Hotelio Suite": Building2,
  "Petopia Commerce": Cat,
  BookMyStay: CalendarDays,
  "Qorvexa Business Suite": LayoutDashboard,
  About: Info,
  Process: Workflow,
  Portfolio: Briefcase,
  Team: Users,
  Careers: GraduationCap,
  Contact: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-[#e7e1d9] bg-white">
      {/* Desktop */}
      <div className="site-shell hidden gap-10 py-14 lg:grid lg:grid-cols-[1.25fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#687079]">
            {company.type.value} focused on clear product experiences and dependable engineering.
          </p>
          <div className="mt-5 grid gap-2 text-sm font-semibold text-[#4d5861]">
            <a
              href={`mailto:${contactDetails.email.value}`}
              className="flex items-center gap-2 hover:text-[#8f5d1c]"
            >
              <Mail className="size-4 text-[#b77b2c]" aria-hidden="true" />
              {contactDetails.email.value}
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-[#b77b2c]" aria-hidden="true" />
              {contactDetails.country.value} · Remote & hybrid collaboration
            </p>
          </div>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <h2 className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-[#9a641e]">
              {group.title}
            </h2>
            <ul className="mt-4 grid gap-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-xs font-semibold text-[#59636c] transition hover:text-[#8f5d1c]"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="site-shell py-12 lg:hidden">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-7 text-[#687079]">
            {company.type.value} focused on clear product experiences and dependable engineering.
          </p>
          <div className="mt-5 grid gap-2.5 text-sm font-semibold text-[#4d5861]">
            <a
              href={`mailto:${contactDetails.email.value}`}
              className="flex items-start gap-2 break-all hover:text-[#8f5d1c]"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-[#b77b2c]" aria-hidden="true" />
              {contactDetails.email.value}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#b77b2c]" aria-hidden="true" />
              <span>
                {contactDetails.country.value} · Remote & hybrid collaboration
              </span>
            </p>
          </div>
        </div>

        <nav className="mt-10 border-t border-[#ebe6df]" aria-label="Footer">
          {footerNavigation.map((group) => (
            <section key={group.title} className="border-b border-[#ebe6df] py-6">
              <h2 className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#9a641e]">
                {group.title}
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5">
                {group.links.map((link) => {
                  const Icon = footerLinkIcons[link.label] ?? LayoutDashboard;
                  return (
                    <li key={link.href} className="min-w-0">
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2.5 transition active:opacity-70"
                      >
                        <Icon
                          className="size-[1.15rem] shrink-0 text-[#b77b2c]"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                        <span className="text-[0.8125rem] font-semibold leading-snug text-[#152532] group-hover:text-[#8f5d1c]">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#e7e1d9] bg-[#fdfbf8]">
        <div className="site-shell flex flex-col gap-4 py-5 text-[.68rem] font-semibold text-[#737b82] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qorvexa Innovations. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNavigation.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#8f5d1c]">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#8f5d1c]">
              Start a conversation <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
