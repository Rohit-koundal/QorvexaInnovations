import type { MetadataRoute } from "next";

import { products } from "@/content/products";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const coreRoutes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/products",
  "/process",
  "/portfolio",
  "/team",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = products.map((product) => `/products/${product.slug}`);
  return [...coreRoutes, ...productRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-07-17"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products/") ? 0.8 : 0.7,
  }));
}
