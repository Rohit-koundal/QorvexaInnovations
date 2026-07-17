import Link from "next/link";
import { ArrowRight, Home, Mail } from "lucide-react";

import { BrandMark } from "@/components/shared/Logo";

export default function NotFoundPage() {
  return (
    <section className="warm-grid relative isolate min-h-[72vh] overflow-hidden py-20">
      <div className="hero-ribbon" />
      <span className="orb ambient-drift absolute left-[18%] top-[24%] hidden sm:block" />
      <div className="site-shell relative flex min-h-[58vh] flex-col items-center justify-center text-center">
        <div className="relative">
          <span className="serif block text-[clamp(7rem,22vw,15rem)] leading-none text-[#efe0c6]">404</span>
          <BrandMark className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 bg-white/60 backdrop-blur" />
        </div>
        <p className="eyebrow mt-3">Page Not Found</p>
        <h1 className="section-title mx-auto mt-4">This path does not lead to a published Qorvexa page.</h1>
        <p className="body-lead mx-auto mt-5">The page may have moved, the link may be incomplete, or the content may not be available yet.</p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="/" className="primary-button"><Home className="size-4" aria-hidden="true" />Return Home <ArrowRight className="size-4" aria-hidden="true" /></Link>
          <Link href="/contact" className="secondary-button"><Mail className="size-4" aria-hidden="true" />Contact Qorvexa</Link>
        </div>
      </div>
    </section>
  );
}
