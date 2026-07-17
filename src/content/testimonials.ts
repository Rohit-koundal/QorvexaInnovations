import type { Testimonial } from "./types";

export const testimonials: readonly Testimonial[] = [];

export const testimonialContentNote =
  "No customer quote, person, role, organization, portrait, or rating has been verified for publication.";

export const publishedTestimonials = testimonials.filter(
  (testimonial) => testimonial.published,
);
