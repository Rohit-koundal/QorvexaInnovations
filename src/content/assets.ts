import type { AssetReference } from "./types";

const awaitingAsset = (
  id: string,
  alt: string,
  kind: AssetReference["kind"],
): AssetReference => ({
  id,
  src: null,
  alt,
  kind,
  verification: "placeholder",
  source: "awaiting-client",
  published: false,
  replacementRequired: true,
  note: "No approved production asset has been supplied for this slot.",
});

export const brandAssets = {
  horizontalLogo: awaitingAsset(
    "brand-horizontal-logo",
    "Qorvexa Innovations",
    "brand",
  ),
  iconLogo: awaitingAsset("brand-icon-logo", "Qorvexa Innovations mark", "brand"),
  lightLogo: awaitingAsset(
    "brand-light-logo",
    "Qorvexa Innovations in light lettering",
    "brand",
  ),
  favicon: awaitingAsset("brand-favicon", "Qorvexa Innovations icon", "brand"),
  appIcon: awaitingAsset("brand-app-icon", "Qorvexa Innovations app icon", "brand"),
  openGraph: awaitingAsset(
    "brand-open-graph",
    "Qorvexa Innovations website preview",
    "brand",
  ),
} as const;

export const heroAssets = {
  home: awaitingAsset(
    "hero-home-devices",
    "Laptop and phone presenting Qorvexa digital product interfaces",
    "hero",
  ),
  about: awaitingAsset(
    "hero-about-office",
    "A professional software product workspace",
    "office",
  ),
  services: awaitingAsset(
    "hero-services-devices",
    "Responsive service interfaces shown on a laptop and phone",
    "hero",
  ),
  solutions: awaitingAsset(
    "hero-solutions-dashboard",
    "Business dashboard surrounded by industry solution labels",
    "hero",
  ),
  products: awaitingAsset(
    "hero-products-devices",
    "Qorvexa product interfaces displayed across devices",
    "hero",
  ),
  process: awaitingAsset(
    "hero-process-layers",
    "Layered illustration of the Qorvexa product delivery process",
    "hero",
  ),
  portfolio: awaitingAsset(
    "hero-portfolio-featured-work",
    "Featured digital product case study",
    "hero",
  ),
  team: awaitingAsset(
    "hero-team-collaboration",
    "Qorvexa team collaborating on a digital product",
    "team",
  ),
  careers: awaitingAsset(
    "hero-careers-workspace",
    "A collaborative software engineering workspace",
    "office",
  ),
  contact: awaitingAsset(
    "hero-contact-reception",
    "Qorvexa Innovations reception area",
    "office",
  ),
} as const;

export const productAssets = {
  samiraCollection: [
    {
      id: "product-samira-placeholder",
      src: "/images/products/samira-look.svg",
      alt: "Illustrative placeholder for the Samira Collection fashion platform",
      kind: "product",
      verification: "placeholder",
      source: "existing-data",
      published: true,
      replacementRequired: true,
      width: 800,
      height: 1000,
      note: "Local generated illustration; replace with an approved product screenshot when available.",
    },
  ],
  hotelioSuite: [
    awaitingAsset(
      "product-hotelio-primary",
      "Hotelio Suite hotel management interface",
      "product",
    ),
  ],
  petopiaCommerce: [
    awaitingAsset(
      "product-petopia-primary",
      "Petopia Commerce pet retail and services interface",
      "product",
    ),
  ],
  bookMyStay: [
    awaitingAsset(
      "product-bookmystay-primary",
      "BookMyStay booking and reservation interface",
      "product",
    ),
  ],
  qorvexaBusinessSuite: [
    awaitingAsset(
      "product-business-suite-primary",
      "Qorvexa Business Suite operations dashboard",
      "product",
    ),
  ],
} as const satisfies Record<string, readonly AssetReference[]>;

export const solutionAssets = {
  ecommerceRetail: awaitingAsset(
    "solution-ecommerce-retail",
    "E-commerce and retail operations",
    "portfolio",
  ),
  hotelHospitality: awaitingAsset(
    "solution-hotel-hospitality",
    "Hotel and hospitality operations",
    "portfolio",
  ),
  petCareStores: awaitingAsset(
    "solution-pet-care-stores",
    "Pet care and store experience",
    "portfolio",
  ),
  corporateWebsites: awaitingAsset(
    "solution-corporate-websites",
    "Corporate website planning session",
    "portfolio",
  ),
  serviceBooking: awaitingAsset(
    "solution-service-booking",
    "Service booking and scheduling interface",
    "portfolio",
  ),
  internalSoftware: awaitingAsset(
    "solution-internal-software",
    "Internal business software dashboard",
    "portfolio",
  ),
  healthcare: awaitingAsset(
    "solution-healthcare",
    "Healthcare digital workflow",
    "portfolio",
  ),
  education: awaitingAsset(
    "solution-education",
    "Education digital workflow",
    "portfolio",
  ),
  realEstate: awaitingAsset(
    "solution-real-estate",
    "Real-estate digital experience",
    "portfolio",
  ),
  professionalServices: awaitingAsset(
    "solution-professional-services",
    "Professional services digital workflow",
    "portfolio",
  ),
} as const;

export const portfolioAssets = {
  fashionEcommerce: [
    awaitingAsset(
      "portfolio-fashion-ecommerce",
      "Fashion e-commerce platform case study placeholder",
      "portfolio",
    ),
  ],
  hotelManagement: [
    awaitingAsset(
      "portfolio-hotel-management",
      "Hotel management platform case study placeholder",
      "portfolio",
    ),
  ],
  petCommerce: [
    awaitingAsset(
      "portfolio-pet-commerce",
      "Pet commerce platform case study placeholder",
      "portfolio",
    ),
  ],
  corporateWebsite: [
    awaitingAsset(
      "portfolio-corporate-website",
      "Corporate website case study placeholder",
      "portfolio",
    ),
  ],
  bookingPlatform: [
    awaitingAsset(
      "portfolio-booking-platform",
      "Booking platform case study placeholder",
      "portfolio",
    ),
  ],
  customSoftware: [
    awaitingAsset(
      "portfolio-custom-software",
      "Custom software dashboard case study placeholder",
      "portfolio",
    ),
  ],
} as const satisfies Record<string, readonly AssetReference[]>;

export const teamPlaceholderAsset = awaitingAsset(
  "team-member-placeholder",
  "Team member portrait placeholder",
  "team",
);

export const referenceOnlyAssets = [
  {
    id: "legacy-favicon",
    src: "/favicon.svg",
    alt: "Legacy unrelated favicon",
    kind: "reference",
    verification: "placeholder",
    source: "existing-data",
    published: false,
    replacementRequired: true,
    note: "This asset uses the previous unrelated visual identity and must not be presented as the Qorvexa logo.",
  },
  {
    id: "legacy-open-graph",
    src: "/images/company/nexora-og.svg",
    alt: "Legacy website preview",
    kind: "reference",
    verification: "placeholder",
    source: "existing-data",
    published: false,
    replacementRequired: true,
    note: "Reference-only legacy artwork; not an approved Qorvexa brand asset.",
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    id: `visual-reference-${index + 1}`,
    src: `/images/showcase/visual-${index + 1}.jpg`,
    alt: `Visual direction reference ${index + 1}`,
    kind: "reference" as const,
    verification: "placeholder" as const,
    source: "reference-only" as const,
    published: false,
    replacementRequired: true,
    note: "Cropped reference artwork may contain fictional names, people, metrics, or interfaces and must not be used as factual content.",
  })),
] as const satisfies readonly AssetReference[];
