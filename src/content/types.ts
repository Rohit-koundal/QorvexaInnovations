export type VerificationStatus = "verified" | "unverified" | "placeholder";

export type ContentSource =
  | "existing-data"
  | "project-brief"
  | "reference-only"
  | "awaiting-client";

export interface ContentMeta {
  verification: VerificationStatus;
  source: ContentSource;
  published: boolean;
  note?: string;
}

export interface SourcedValue<T> {
  value: T;
  verification: VerificationStatus;
  source: ContentSource;
  note?: string;
}

export type IconName =
  | "activity"
  | "analytics"
  | "api"
  | "arrow-right"
  | "badge-check"
  | "book-open"
  | "briefcase"
  | "building"
  | "calendar"
  | "check-circle"
  | "cloud"
  | "code"
  | "database"
  | "device-mobile"
  | "globe"
  | "graduation-cap"
  | "headphones"
  | "heart-handshake"
  | "hotel"
  | "layers"
  | "lightbulb"
  | "mail"
  | "map-pin"
  | "palette"
  | "paw-print"
  | "phone"
  | "rocket"
  | "search"
  | "server"
  | "settings"
  | "shield-check"
  | "shopping-bag"
  | "shopping-cart"
  | "sparkles"
  | "target"
  | "test-tube"
  | "users"
  | "workflow";

export interface ContentLink {
  label: string;
  href: string;
  ariaLabel?: string;
  external?: boolean;
}

export interface NavigationItem extends ContentLink {
  exact?: boolean;
  description?: string;
  children?: readonly NavigationItem[];
}

export interface CallToAction extends ContentLink {
  variant?: "primary" | "secondary" | "text";
  icon?: IconName;
}

export interface AssetReference extends ContentMeta {
  id: string;
  src: string | null;
  alt: string;
  kind:
    | "brand"
    | "hero"
    | "product"
    | "portfolio"
    | "team"
    | "office"
    | "texture"
    | "reference";
  width?: number;
  height?: number;
  replacementRequired?: boolean;
}

export interface Metric extends ContentMeta {
  id: string;
  label: string;
  value: string | null;
  detail?: string;
  icon?: IconName;
}

export interface Service extends ContentMeta {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  icon: IconName;
  keyCapabilities: readonly string[];
  technologies: readonly string[];
  relatedPortfolioSlugs: readonly string[];
  cta: CallToAction;
}

export interface Solution extends ContentMeta {
  slug: string;
  title: string;
  description: string;
  challenge: string;
  proposedSolution: string;
  features: readonly string[];
  icon: IconName;
  image: AssetReference;
  cta: CallToAction;
}

export interface Product extends ContentMeta {
  slug: string;
  aliases: readonly string[];
  name: string;
  category: string;
  summary: string;
  description: string;
  modules: readonly string[];
  technologies: readonly string[];
  screenshots: readonly AssetReference[];
  statusLabel: string | null;
  cta: CallToAction;
}

export type PortfolioCategory =
  | "web"
  | "e-commerce"
  | "hospitality"
  | "booking"
  | "custom-software"
  | "mobile-app";

export interface PortfolioOutcome {
  label: string;
  value: string | null;
  verified: boolean;
}

export interface PortfolioProject extends ContentMeta {
  slug: string;
  title: string;
  category: PortfolioCategory;
  industry: string;
  clientName: string | null;
  summary: string;
  challenge: string | null;
  solution: string | null;
  features: readonly string[];
  technologyStack: readonly string[];
  outcomes: readonly PortfolioOutcome[];
  screenshots: readonly AssetReference[];
  cta: CallToAction;
}

export interface TeamMember extends ContentMeta {
  id: string;
  name: string | null;
  role: string | null;
  discipline: string | null;
  bio: string | null;
  image: AssetReference;
  socialLinks: readonly ContentLink[];
}

export interface TeamDiscipline extends ContentMeta {
  slug: string;
  name: string;
  description: string;
  icon: IconName;
  memberCount: number | null;
}

export interface JobOpening extends ContentMeta {
  slug: string;
  title: string;
  location: string | null;
  workMode: string | null;
  experience: string | null;
  employmentType: string | null;
  summary: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  applicationHref: string | null;
}

export interface Testimonial extends ContentMeta {
  id: string;
  quote: string | null;
  personName: string | null;
  personRole: string | null;
  organization: string | null;
  portrait: AssetReference;
  rating: number | null;
}

export type FaqCategory =
  | "general"
  | "services"
  | "products"
  | "process"
  | "careers"
  | "contact";

export interface FaqItem extends ContentMeta {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string | null;
}

export interface SelectOption extends ContentMeta {
  label: string;
  value: string;
}

export interface SocialLink extends ContentMeta {
  platform: "email" | "linkedin" | "instagram" | "github" | "x" | "facebook";
  label: string;
  href: string | null;
  icon: IconName;
}
