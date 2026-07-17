# Qorvexa Innovations — Design Implementation Plan

## Objective

Rebuild the existing Next.js website as a cohesive premium software-engineering and digital-product site, using the supplied Qorvexa references as the visual source of truth while keeping claims, contact details, team information, jobs, and results factual and editable.

## Repository audit

- Next.js App Router, React, strict TypeScript, Tailwind CSS, Framer Motion, Lucide, React Hook Form, and Zod are already installed.
- Static export is enabled and must remain compatible with the current hosting approach.
- Existing routes cover the core marketing pages, but most are thin placeholders.
- Existing local imagery includes reference-derived visual crops and product-interface samples. These will be used selectively as contained supporting imagery, never as full-page screenshot backgrounds.
- Existing contact validation is reusable but needs the requested fields and the Qorvexa gold/ivory design system.
- Unverified metrics, client logos, office details, team names, and open roles must not be shown as company facts.

## Visual system

- Warm ivory and white surfaces, deep navy/graphite type, restrained champagne-gold details.
- Editorial serif headings paired with Manrope UI/body typography.
- 1360px content shell, generous desktop whitespace, compact responsive bands, 12–18px radii, subtle warm borders and shadows.
- Shared sticky navigation, dropdowns, active states, accessible mobile drawer, CTA band, footer, cards, icon tiles, process steps, FAQ, form controls, and detail-page templates.

## Motion system

- Framer Motion reveals and staggered entrances.
- CSS/device-stage depth, slow floating layers, pointer tilt on precise-pointer devices, subtle hover lift, image scale, arrow movement, and light sheen.
- Mobile layouts use simplified static depth and stacked content.
- All motion respects `prefers-reduced-motion`; no scroll hijacking or mandatory WebGL.

## Content and route architecture

- Central content modules live in `src/content/` for company, navigation, services, solutions, products, portfolio, team, careers, FAQs, contact, social links, testimonials, and assets.
- Reusable page templates cover product details, case studies, jobs, legal pages, and calls to action.
- Required routes include Home, About, Services, Solutions, Products and product details, Process, Portfolio and case studies, Team, Careers and job details, Contact, Privacy, Terms, and 404.

## Delivery sequence

1. Establish the shared design tokens, motion primitives, logo treatment, header, footer, and metadata.
2. Build the Home page and reusable marketing-page primitives.
3. Build the nine supplied reference-route compositions.
4. Add product, case-study, and job detail templates from centralized content.
5. Integrate the validated contact form and environment-based delivery endpoint.
6. Complete legal, SEO, sitemap, robots, structured data, 404, and error handling.
7. Verify responsive layouts and accessibility behavior.
8. Run and fix lint, TypeScript, and production build until all pass.

## Content safeguards

- No invented employees, client names, office addresses, phone numbers, testimonials, metrics, or performance results.
- Placeholder and unpublished records are explicitly marked and conditionally hidden.
- Published jobs and case studies are driven by editable content flags.
