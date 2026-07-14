import { z } from "zod";

export const enquiryTypes = [
  "Product Enquiry",
  "Partnership",
  "Careers",
  "Investment",
  "General Enquiry",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  enquiryType: z.enum(enquiryTypes, {
    message: "Please select an enquiry type.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters so we can help."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
