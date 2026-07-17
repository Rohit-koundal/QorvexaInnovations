import type { SocialLink } from "./types";

export const socialLinks = [
  {
    platform: "email",
    label: "Email Qorvexa Innovations",
    href: "mailto:hello@qorvexainnovations.com",
    icon: "mail",
    verification: "verified",
    source: "existing-data",
    published: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: null,
    icon: "users",
    verification: "placeholder",
    source: "awaiting-client",
    published: false,
    note: "Add the verified company LinkedIn URL before publishing.",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: null,
    icon: "activity",
    verification: "placeholder",
    source: "awaiting-client",
    published: false,
    note: "Add the verified company Instagram URL before publishing.",
  },
  {
    platform: "github",
    label: "GitHub",
    href: null,
    icon: "code",
    verification: "placeholder",
    source: "awaiting-client",
    published: false,
    note: "Add the verified company GitHub URL before publishing.",
  },
] as const satisfies readonly SocialLink[];
