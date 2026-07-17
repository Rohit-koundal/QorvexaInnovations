import { productAssets } from "./assets";
import type { Product } from "./types";

const productMeta = {
  verification: "unverified",
  source: "project-brief",
  published: true,
  note: "Product names and module plans come from the project brief; release status and implemented capability require confirmation.",
} as const;

export const products = [
  {
    slug: "samira-collection",
    aliases: [],
    name: "Samira Collection",
    category: "Fashion E-Commerce",
    summary: "A planned fashion commerce experience for customers and business operations.",
    description: "A fashion e-commerce platform structured around product discovery, purchasing, customer accounts, and store administration.",
    modules: [
      "Product catalogue",
      "Search and filtering",
      "Wishlist",
      "Cart",
      "Checkout",
      "Order management",
      "Admin dashboard",
      "Inventory",
      "Coupons",
      "Customer management",
    ],
    technologies: [],
    screenshots: productAssets.samiraCollection,
    statusLabel: null,
    cta: { label: "View Product", href: "/products/samira-collection", variant: "text" },
    ...productMeta,
  },
  {
    slug: "hotelio-suite",
    aliases: ["hotel-management"],
    name: "Hotelio Suite",
    category: "Hotel Management",
    summary: "A planned hotel management platform for guest and property operations.",
    description: "A modular hotel management platform structured around bookings, rooms, guests, billing, housekeeping, reporting, and staff workflows.",
    modules: ["Bookings", "Rooms", "Guests", "Billing", "Housekeeping", "Reports", "Staff management"],
    technologies: [],
    screenshots: productAssets.hotelioSuite,
    statusLabel: null,
    cta: { label: "View Product", href: "/products/hotelio-suite", variant: "text" },
    ...productMeta,
  },
  {
    slug: "petopia-commerce",
    aliases: ["pet-shop"],
    name: "Petopia Commerce",
    category: "Pet Commerce",
    summary: "A planned pet retail and service platform.",
    description: "A pet shop commerce experience structured around products, pet profiles, service bookings, subscriptions, and inventory.",
    modules: ["Product categories", "Pet profiles", "Appointment booking", "Grooming services", "Subscriptions", "Inventory"],
    technologies: [],
    screenshots: productAssets.petopiaCommerce,
    statusLabel: null,
    cta: { label: "View Product", href: "/products/petopia-commerce", variant: "text" },
    ...productMeta,
  },
  {
    slug: "bookmystay",
    aliases: ["booking-platform"],
    name: "BookMyStay",
    category: "Booking and Reservations",
    summary: "A planned booking and reservation platform.",
    description: "A reservation experience structured around availability, search, bookings, payments, cancellations, and administration.",
    modules: ["Availability", "Search", "Reservations", "Payments", "Cancellation", "Admin dashboard"],
    technologies: [],
    screenshots: productAssets.bookMyStay,
    statusLabel: null,
    cta: { label: "View Product", href: "/products/bookmystay", variant: "text" },
    ...productMeta,
  },
  {
    slug: "qorvexa-business-suite",
    aliases: ["custom-software"],
    name: "Qorvexa Business Suite",
    category: "Custom Business Software",
    summary: "A planned internal business operations platform.",
    description: "A business operations suite structured around teams, tasks, reports, permissions, dashboards, and workflow automation.",
    modules: ["Dashboard", "Teams", "Tasks", "Reports", "Role-based access", "Workflow automation"],
    technologies: [],
    screenshots: productAssets.qorvexaBusinessSuite,
    statusLabel: null,
    cta: { label: "View Product", href: "/products/qorvexa-business-suite", variant: "text" },
    ...productMeta,
  },
] as const satisfies readonly Product[];

export const productRouteSlugs = products.flatMap((product) => [
  product.slug,
  ...product.aliases,
]);

export const getProductBySlug = (slug: string) =>
  products.find(
    (product) => product.slug === slug || product.aliases.some((alias) => alias === slug),
  );

export const productContentNotes = {
  technologies: "Technology stacks intentionally remain empty until confirmed.",
  screenshots: "Only the Samira Collection local placeholder exists; all other product image slots await approved assets.",
  status: "No launch, availability, customer, adoption, or performance status is published.",
} as const;
