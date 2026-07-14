import type { NavItem } from "@/types/common";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  Company: navigation.filter(({ label }) =>
    ["About", "Team", "Careers", "Contact"].includes(label),
  ),
  Products: [
    { label: "Samira Collection", href: "/products/samira-collection" },
    { label: "Upcoming Products", href: "/products#upcoming" },
  ],
  Resources: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms" },
  ],
} satisfies Record<string, NavItem[]>;
