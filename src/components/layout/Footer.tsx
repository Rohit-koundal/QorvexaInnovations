import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { company } from "@/content/company";
import { contactDetails } from "@/content/contact";
import { footerNavigation, legalNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[#e7e1d9] bg-white">
      <div className="site-shell grid gap-10 py-14 lg:grid-cols-[1.25fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#687079]">{company.type.value} focused on clear product experiences and dependable engineering.</p>
          <div className="mt-5 grid gap-2 text-sm font-semibold text-[#4d5861]">
            <a href={`mailto:${contactDetails.email.value}`} className="flex items-center gap-2 hover:text-[#8f5d1c]"><Mail className="size-4 text-[#b77b2c]" aria-hidden="true" />{contactDetails.email.value}</a>
            <p className="flex items-center gap-2"><MapPin className="size-4 text-[#b77b2c]" aria-hidden="true" />{contactDetails.country.value} · Remote & hybrid collaboration</p>
          </div>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <h2 className="text-[.68rem] font-extrabold uppercase tracking-[.14em] text-[#9a641e]">{group.title}</h2>
            <ul className="mt-4 grid gap-2.5">
              {group.links.map((link) => <li key={link.href}><Link className="text-xs font-semibold text-[#59636c] transition hover:text-[#8f5d1c]" href={link.href}>{link.label}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#e7e1d9] bg-[#fdfbf8]">
        <div className="site-shell flex flex-col gap-4 py-5 text-[.68rem] font-semibold text-[#737b82] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qorvexa Innovations. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNavigation.map((link) => <Link key={link.href} href={link.href} className="hover:text-[#8f5d1c]">{link.label}</Link>)}
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#8f5d1c]">Start a conversation <ArrowRight className="size-3" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
