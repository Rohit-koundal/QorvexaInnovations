import { portfolioAssets } from "./assets";
import type { PortfolioCategory, PortfolioProject } from "./types";

const placeholderMeta = {
  verification: "placeholder",
  source: "reference-only",
  published: false,
  note: "Route scaffold based on the reference layout; publish only after real project details and permission are supplied.",
} as const;

export const portfolioProjects = [
  {
    slug: "fashion-ecommerce-platform",
    title: "Fashion E-Commerce Platform",
    category: "e-commerce",
    industry: "Fashion Retail",
    clientName: null,
    summary: "Case-study placeholder for an approved fashion commerce project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.fashionEcommerce,
    cta: { label: "View Case Study", href: "/portfolio/fashion-ecommerce-platform", variant: "text" },
    ...placeholderMeta,
  },
  {
    slug: "hotel-management-platform",
    title: "Hotel Management Platform",
    category: "hospitality",
    industry: "Hospitality",
    clientName: null,
    summary: "Case-study placeholder for an approved hotel management project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.hotelManagement,
    cta: { label: "View Case Study", href: "/portfolio/hotel-management-platform", variant: "text" },
    ...placeholderMeta,
  },
  {
    slug: "pet-commerce-platform",
    title: "Pet Commerce Platform",
    category: "web",
    industry: "Pet Care and Retail",
    clientName: null,
    summary: "Case-study placeholder for an approved pet commerce project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.petCommerce,
    cta: { label: "View Case Study", href: "/portfolio/pet-commerce-platform", variant: "text" },
    ...placeholderMeta,
  },
  {
    slug: "corporate-business-website",
    title: "Corporate Business Website",
    category: "web",
    industry: "Professional Services",
    clientName: null,
    summary: "Case-study placeholder for an approved corporate website project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.corporateWebsite,
    cta: { label: "View Case Study", href: "/portfolio/corporate-business-website", variant: "text" },
    ...placeholderMeta,
  },
  {
    slug: "service-booking-platform",
    title: "Service Booking Platform",
    category: "booking",
    industry: "Service Business",
    clientName: null,
    summary: "Case-study placeholder for an approved service booking project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.bookingPlatform,
    cta: { label: "View Case Study", href: "/portfolio/service-booking-platform", variant: "text" },
    ...placeholderMeta,
  },
  {
    slug: "custom-software-dashboard",
    title: "Custom Software Dashboard",
    category: "custom-software",
    industry: "Business Operations",
    clientName: null,
    summary: "Case-study placeholder for an approved custom software project.",
    challenge: null,
    solution: null,
    features: [],
    technologyStack: [],
    outcomes: [],
    screenshots: portfolioAssets.customSoftware,
    cta: { label: "View Case Study", href: "/portfolio/custom-software-dashboard", variant: "text" },
    ...placeholderMeta,
  },
] as const satisfies readonly PortfolioProject[];

export const portfolioFilters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "E-Commerce", value: "e-commerce" },
  { label: "Hospitality", value: "hospitality" },
  { label: "Booking", value: "booking" },
  { label: "Custom Software", value: "custom-software" },
  { label: "Mobile Apps", value: "mobile-app" },
] as const satisfies readonly { label: string; value: "all" | PortfolioCategory }[];

export const portfolioRouteSlugs = portfolioProjects.map((project) => project.slug);

export const publishedPortfolioProjects = portfolioProjects.filter(
  (project) => project.published,
);

export const getPortfolioProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);

export const portfolioContentNote =
  "There are no verified case studies, customers, technology stacks, screenshots, or outcomes to publish yet.";
