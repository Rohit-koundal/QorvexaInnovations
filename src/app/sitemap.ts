import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/products",
  "/products/samira-collection",
  "/how-we-work",
  "/team",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-07-14"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/products/samira-collection" ? 0.9 : 0.7,
  }));
}
