import type { ContentMeta, Metric, SourcedValue } from "./types";

const verified = <T>(value: T, note?: string): SourcedValue<T> => ({
  value,
  verification: "verified",
  source: "existing-data",
  ...(note ? { note } : {}),
});

const briefProvided = <T>(value: T, note?: string): SourcedValue<T> => ({
  value,
  verification: "unverified",
  source: "project-brief",
  ...(note ? { note } : {}),
});

export const company = {
  name: verified("Qorvexa Innovations"),
  country: verified("India"),
  workingModel: verified("Remote and Hybrid Collaboration"),
  email: verified("hello@qorvexainnovations.com"),
  type: briefProvided(
    "Software engineering and digital product company",
    "Positioning supplied in the redesign brief; confirm before treating it as a legal company classification.",
  ),
  tagline: briefProvided("Building digital products around real business needs."),
  heroHeading: briefProvided("We Build Digital Solutions That Elevate Businesses."),
  heroDescription: briefProvided(
    "Qorvexa Innovations designs digital products and software experiences for businesses with different operational and customer needs.",
  ),
  mission: briefProvided(
    "Combine technology, design, and practical thinking to create useful, accessible, reliable, and scalable digital products.",
  ),
  vision: briefProvided(
    "Build digital products that simplify real-world challenges and create long-term value for people and businesses.",
  ),
} as const;

export const companyFacts = {
  legalName: null,
  registrationNumber: null,
  foundedYear: null,
  streetAddress: null,
  city: null,
  postalCode: null,
  phone: null,
  officeHours: null,
} as const;

export const companyFactsMeta: ContentMeta = {
  verification: "placeholder",
  source: "awaiting-client",
  published: false,
  note: "No legal name, founding date, phone number, office address, or office hours have been verified.",
};

export const companyMetrics: readonly Metric[] = [];

export const trustedOrganizations: readonly never[] = [];

export const companyValues = [
  {
    title: "Engineering Discipline",
    description: "Build with clear architecture, maintainable code, and deliberate technical choices.",
    icon: "code",
    verification: "unverified",
    source: "project-brief",
    published: true,
  },
  {
    title: "Product Thinking",
    description: "Start with the problem, the user, and the outcome before choosing a solution.",
    icon: "lightbulb",
    verification: "unverified",
    source: "project-brief",
    published: true,
  },
  {
    title: "Clear Communication",
    description: "Keep decisions, trade-offs, and next steps understandable throughout the work.",
    icon: "users",
    verification: "unverified",
    source: "project-brief",
    published: true,
  },
  {
    title: "Quality Delivery",
    description: "Design and test for reliability, accessibility, performance, and long-term use.",
    icon: "badge-check",
    verification: "unverified",
    source: "project-brief",
    published: true,
  },
] as const;

export const companyJourney: readonly never[] = [];

export const companyContentNotes = {
  metrics:
    "Do not render project counts, satisfaction rates, countries served, team size, or growth percentages until verified values are supplied.",
  customers:
    "Do not render the organization names or logos visible in the visual references as customers.",
  journey:
    "The existing repository contains dates and milestones, but they have not been approved as verified facts for this redesign.",
} as const;
