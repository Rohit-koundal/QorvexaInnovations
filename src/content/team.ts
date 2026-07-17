import { teamPlaceholderAsset } from "./assets";
import type { TeamDiscipline, TeamMember } from "./types";

export const teamPage = {
  eyebrow: "Our Team",
  heading: "Designers, Engineers, and Builders Behind Qorvexa.",
  description:
    "This page is prepared to present verified team information when the company approves names, roles, biographies, and portraits.",
  verification: "unverified",
  source: "project-brief",
  published: true,
} as const;

export const teamMembers: readonly TeamMember[] = [];

export const leadershipTeam: readonly TeamMember[] = [];

const disciplineMeta = {
  verification: "unverified",
  source: "project-brief",
  published: false,
  note: "The redesign brief requests this discipline, but current team structure and member count are not verified.",
} as const;

export const teamDisciplines = [
  {
    slug: "design",
    name: "Design",
    description: "Product strategy, user experience, interface design, and design systems.",
    icon: "palette",
    memberCount: null,
    ...disciplineMeta,
  },
  {
    slug: "frontend",
    name: "Frontend",
    description: "Responsive interfaces and browser-based product experiences.",
    icon: "code",
    memberCount: null,
    ...disciplineMeta,
  },
  {
    slug: "backend",
    name: "Backend",
    description: "Application services, data workflows, APIs, and system architecture.",
    icon: "server",
    memberCount: null,
    ...disciplineMeta,
  },
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    description: "Functional, compatibility, usability, and release validation.",
    icon: "test-tube",
    memberCount: null,
    ...disciplineMeta,
  },
  {
    slug: "devops",
    name: "DevOps",
    description: "Environment, deployment, automation, and operational reliability workflows.",
    icon: "cloud",
    memberCount: null,
    ...disciplineMeta,
  },
  {
    slug: "project-management",
    name: "Project Management",
    description: "Planning, coordination, communication, and delivery oversight.",
    icon: "briefcase",
    memberCount: null,
    ...disciplineMeta,
  },
] as const satisfies readonly TeamDiscipline[];

export const teamPlaceholder = {
  image: teamPlaceholderAsset,
  note: "Do not generate or assign names, job titles, portraits, social profiles, or biographies without approved team data.",
} as const;
