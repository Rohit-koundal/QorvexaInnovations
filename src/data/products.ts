import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "samira-collection",
    name: "Samira Collection",
    category: "Fashion E-commerce",
    status: "Flagship Product",
    description:
      "A modern fashion commerce platform for customers and business owners.",
    longDescription:
      "A modern fashion e-commerce platform built to simplify online selling, product management, customer shopping, inventory, and order operations.",
    features: [
      "Fashion product catalogue",
      "Search and advanced filters",
      "Wishlist and cart",
      "Address and checkout",
      "COD and online payment support",
      "Customer account and orders",
      "Product and inventory management",
      "Admin dashboard",
      "Coupons, banners, and settings",
      "Responsive mobile and desktop experience",
    ],
    href: "/products/samira-collection",
  },
];

export const flagshipProduct = products[0];
