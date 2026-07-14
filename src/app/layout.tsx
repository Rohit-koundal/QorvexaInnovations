import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { company } from "@/data/company";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qorvexa Innovations | Building Products That Solve Real Problems",
    template: "%s | Qorvexa Innovations",
  },
  description:
    "Qorvexa Innovations is a product-driven technology company building practical, scalable, and user-friendly digital solutions.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Qorvexa Innovations | Building Products That Solve Real Problems",
    description:
      "A product-driven technology company building practical, scalable, and user-friendly digital solutions.",
    url: SITE_URL,
    images: [
      {
        url: "/images/company/nexora-og.svg",
        width: 1200,
        height: 630,
        alt: "Qorvexa Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qorvexa Innovations",
    description: company.tagline,
    images: ["/images/company/nexora-og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: "hello@qorvexainnovations.com",
  description: company.mission,
  founder: {
    "@type": "Person",
    name: "Rohit Shekhawat",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white transition focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
