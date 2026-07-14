import type { Metadata } from "next";

import { AboutPreview } from "@/components/home/AboutPreview";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TeamPreview } from "@/components/home/TeamPreview";
import { TechnologySection } from "@/components/home/TechnologySection";
import { VisionSection } from "@/components/home/VisionSection";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { SITE_URL } from "@/lib/constants";

const title = "Qorvexa Innovations | Building Products That Solve Real Problems";
const description =
  "Qorvexa Innovations is a product-driven technology company building practical, scalable, and user-friendly digital solutions.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/images/company/nexora-og.svg",
        width: 1200,
        height: 630,
        alt: "Qorvexa Innovations product company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/company/nexora-og.svg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProduct />
      <WhatWeBuild />
      <ProcessSection />
      <TechnologySection />
      <TeamPreview />
      <VisionSection />
      <CTASection />
    </>
  );
}
