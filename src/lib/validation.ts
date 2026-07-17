import { z } from "zod";

export const projectTypes = [
  "Custom Software",
  "Web Application",
  "E-Commerce",
  "Hotel Management",
  "Mobile Application",
  "Booking Platform",
  "UI/UX Design",
  "Other",
] as const;

export const budgetRanges = [
  "Not decided yet",
  "Under ₹1 lakh",
  "₹1–5 lakh",
  "₹5–15 lakh",
  "₹15 lakh+",
] as const;

export const projectTimelines = [
  "Exploring options",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30, "Please use 30 characters or fewer.").optional(),
  company: z.string().trim().max(120, "Please use 120 characters or fewer.").optional(),
  projectType: z.enum(projectTypes, { message: "Please select a project type." }),
  budget: z.enum(budgetRanges, { message: "Please select a budget range." }),
  timeline: z.enum(projectTimelines, { message: "Please select a timeline." }),
  message: z.string().trim().min(20, "Please share at least 20 characters.").max(2000),
  consent: z.boolean().refine(Boolean, "Please confirm that we may respond to your enquiry."),
  website: z.string().max(0, "Automated submission rejected.").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
