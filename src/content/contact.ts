import type { ContentMeta, SelectOption, SourcedValue } from "./types";

export const contactDetails = {
  email: {
    value: "hello@qorvexainnovations.com",
    verification: "verified",
    source: "existing-data",
  } satisfies SourcedValue<string>,
  country: {
    value: "India",
    verification: "verified",
    source: "existing-data",
  } satisfies SourcedValue<string>,
  phone: {
    value: null,
    verification: "placeholder",
    source: "awaiting-client",
    note: "No phone number has been verified.",
  } satisfies SourcedValue<string | null>,
  officeAddress: {
    value: null,
    verification: "placeholder",
    source: "awaiting-client",
    note: "No public office address has been verified.",
  } satisfies SourcedValue<string | null>,
  officeHours: {
    value: null,
    verification: "placeholder",
    source: "awaiting-client",
    note: "No office hours have been verified.",
  } satisfies SourcedValue<string | null>,
  mapUrl: {
    value: null,
    verification: "placeholder",
    source: "awaiting-client",
    note: "Use a neutral map placeholder until a public address is approved.",
  } satisfies SourcedValue<string | null>,
  responseTime: {
    value: null,
    verification: "placeholder",
    source: "awaiting-client",
    note: "Do not promise a response time until the business confirms it.",
  } satisfies SourcedValue<string | null>,
} as const;

export const contactPage = {
  eyebrow: "Contact Us",
  heading: "Let’s Build Something Meaningful Together.",
  description:
    "Share the product, platform, or business challenge you would like to discuss with Qorvexa Innovations.",
  formHeading: "Send Us a Message",
  submitLabel: "Send Inquiry",
  submittingLabel: "Sending Inquiry…",
  successHeading: "Your inquiry has been received.",
  successMessage:
    "Thank you for contacting Qorvexa Innovations. The team will review the information you provided.",
  errorMessage:
    "The inquiry could not be submitted. Please try again or email hello@qorvexainnovations.com.",
  consentLabel:
    "I agree that the information I provide may be used to respond to this inquiry, as described in the Privacy Policy.",
  spamProtectionNote:
    "Spam protection is an integration placeholder and must be configured before production submissions are enabled.",
  verification: "unverified",
  source: "project-brief",
  published: true,
} as const;

export const contactFormFields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
  { name: "company", label: "Company Name", type: "text", required: false },
  { name: "projectType", label: "Project Type", type: "select", required: true },
  { name: "budgetRange", label: "Budget Range", type: "select", required: false },
  { name: "timeline", label: "Timeline", type: "select", required: false },
  { name: "message", label: "Message", type: "textarea", required: true },
  { name: "consent", label: "Consent", type: "checkbox", required: true },
] as const;

export const contactProjectTypes = [
  "Custom Software",
  "Web Application",
  "E-Commerce",
  "Hotel Management",
  "Mobile Application",
  "Booking Platform",
  "UI/UX Design",
  "Other",
] as const;

export const contactBudgetRanges = [
  "Not decided yet",
  "Under ₹1 lakh",
  "₹1–5 lakh",
  "₹5–15 lakh",
  "₹15 lakh+",
] as const;

export const contactTimelines = [
  "Exploring options",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
] as const;

export const projectTypeOptions = contactProjectTypes.map(
  (label) =>
    ({
      label,
      value: label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      verification: "unverified",
      source: "project-brief",
      published: true,
    }) satisfies SelectOption,
);

export const budgetRangeOptions: readonly SelectOption[] = contactBudgetRanges.map((label) => ({
  label,
  value: label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  verification: "unverified",
  source: "project-brief",
  published: true,
}));

export const timelineOptions: readonly SelectOption[] = contactTimelines.map((label) => ({
  label,
  value: label.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  verification: "unverified",
  source: "project-brief",
  published: true,
}));

export const contactIntegration = {
  recipientEnvironmentVariable: "CONTACT_EMAIL_TO",
  providerEnvironmentVariables: ["RESEND_API_KEY", "CONTACT_EMAIL_FROM"],
  configured: false,
  note: "Environment variable names are implementation placeholders; no secret values belong in content or client code.",
} as const;

export const contactPlaceholderMeta: ContentMeta = {
  verification: "placeholder",
  source: "awaiting-client",
  published: false,
  note: "Budget ranges, timeline options, phone, address, office hours, map, and response-time claims await confirmation.",
};
