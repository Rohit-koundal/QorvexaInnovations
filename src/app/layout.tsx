import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Software Engineering & Digital Products`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Qorvexa Innovations designs and engineers custom software, web applications, commerce platforms, booking systems, and scalable digital products.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Software Engineering & Digital Products`,
    description: "Premium software engineering, digital product design, and dependable delivery.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Software Engineering & Digital Products`,
    description: "Premium software engineering, digital product design, and dependable delivery.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: "hello@qorvexainnovations.com",
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  description: "Software engineering and digital product company based in India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
