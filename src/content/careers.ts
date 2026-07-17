import type { JobOpening, SourcedValue } from "./types";

export const careersPage = {
  eyebrow: "Careers",
  heading: "Build Digital Products With a Team That Cares About Craft.",
  description:
    "Career information will be published here when Qorvexa Innovations approves an active opportunity.",
  workModel: {
    value: "Remote and Hybrid Collaboration",
    verification: "verified",
    source: "existing-data",
  } satisfies SourcedValue<string>,
  emptyStateTitle: "No published openings right now",
  emptyStateDescription:
    "There are currently no verified job openings available on this website.",
  verification: "unverified",
  source: "project-brief",
  published: true,
} as const;

export const careerBenefits = [
  {
    slug: "growth-opportunities",
    title: "Growth Opportunities",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "analytics",
  },
  {
    slug: "learning-culture",
    title: "Learning Culture",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "book-open",
  },
  {
    slug: "flexible-collaboration",
    title: "Flexible Collaboration",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "users",
  },
  {
    slug: "meaningful-projects",
    title: "Meaningful Projects",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "target",
  },
  {
    slug: "modern-tools",
    title: "Modern Tools",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "code",
  },
  {
    slug: "supportive-team",
    title: "Supportive Team",
    description: "A requested benefit theme awaiting confirmation.",
    icon: "heart-handshake",
  },
].map((benefit) => ({
  ...benefit,
  verification: "unverified" as const,
  source: "project-brief" as const,
  published: false,
  note: "Do not present this as an employee benefit until confirmed.",
}));

export const jobs: readonly JobOpening[] = [];

export const publishedJobs = jobs.filter((job) => job.published);

export const generalApplication = {
  enabled: false,
  recipient: "hello@qorvexainnovations.com",
  verification: "placeholder",
  source: "awaiting-client",
  published: false,
  note: "The email is verified, but permission to accept resumes or retain applicant data has not been confirmed.",
} as const;

export const getJobBySlug = (slug: string) => jobs.find((job) => job.slug === slug);
