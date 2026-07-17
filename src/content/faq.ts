import type { FaqItem } from "./types";

const placeholderFaqMeta = {
  verification: "placeholder",
  source: "awaiting-client",
  published: false,
  note: "The question is part of the requested information architecture; an approved answer is still required.",
} as const;

export const faqItems = [
  {
    id: "contact-start-timing",
    category: "contact",
    question: "How soon can a project start?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "contact-information-needed",
    category: "contact",
    question: "What information is helpful for an initial project discussion?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "contact-location-coverage",
    category: "contact",
    question: "Can Qorvexa collaborate with teams outside India?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "contact-confidentiality",
    category: "contact",
    question: "How are security and confidentiality handled?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "services-engagement-model",
    category: "services",
    question: "Which engagement models are available?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "services-support",
    category: "services",
    question: "Is post-launch maintenance available?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "products-availability",
    category: "products",
    question: "Which products are currently available?",
    answer: null,
    ...placeholderFaqMeta,
  },
  {
    id: "careers-openings",
    category: "careers",
    question: "How are open positions published?",
    answer: null,
    ...placeholderFaqMeta,
  },
] as const satisfies readonly FaqItem[];

export const publishedFaqItems = faqItems.filter((item) => item.published);

export const getFaqItemsByCategory = (category: FaqItem["category"]) =>
  faqItems.filter((item) => item.category === category && item.published);
