import type { NavigationItem } from "./types";

export const mainNavigation = [
  { label: "Home", href: "/", exact: true },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Software", href: "/services#custom-software-development" },
      { label: "Web Development", href: "/services#web-development" },
      { label: "E-Commerce", href: "/services#e-commerce-development" },
      { label: "Mobile Apps", href: "/services#mobile-app-development" },
      { label: "View All Services", href: "/services" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "E-Commerce & Retail", href: "/solutions#e-commerce-retail" },
      { label: "Hotel & Hospitality", href: "/solutions#hotel-hospitality" },
      { label: "Pet Care & Stores", href: "/solutions#pet-care-stores" },
      { label: "Service Booking", href: "/solutions#service-booking" },
      { label: "View All Solutions", href: "/solutions" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Samira Collection", href: "/products/samira-collection" },
      { label: "Hotelio Suite", href: "/products/hotelio-suite" },
      { label: "Petopia Commerce", href: "/products/petopia-commerce" },
      { label: "BookMyStay", href: "/products/bookmystay" },
      { label: "Qorvexa Business Suite", href: "/products/qorvexa-business-suite" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Qorvexa", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const headerCta = {
  label: "Let’s Build Together",
  href: "/contact",
  ariaLabel: "Contact Qorvexa Innovations about a project",
} as const;

export const footerNavigation = [
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services#custom-software-development" },
      { label: "Web Development", href: "/services#web-development" },
      { label: "E-Commerce", href: "/services#e-commerce-development" },
      { label: "UI/UX Design", href: "/services#ui-ux-design" },
      { label: "Maintenance & Support", href: "/services#maintenance-support" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-Commerce & Retail", href: "/solutions#e-commerce-retail" },
      { label: "Hotel & Hospitality", href: "/solutions#hotel-hospitality" },
      { label: "Pet Care & Stores", href: "/solutions#pet-care-stores" },
      { label: "Professional Services", href: "/solutions#professional-services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Samira Collection", href: "/products/samira-collection" },
      { label: "Hotelio Suite", href: "/products/hotelio-suite" },
      { label: "Petopia Commerce", href: "/products/petopia-commerce" },
      { label: "BookMyStay", href: "/products/bookmystay" },
      { label: "Qorvexa Business Suite", href: "/products/qorvexa-business-suite" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
] as const satisfies readonly NavigationItem[];
