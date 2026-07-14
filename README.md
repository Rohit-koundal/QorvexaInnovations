# Qorvexa Innovations Website

A production-ready, responsive company website for Qorvexa Innovations, a product-based technology company building practical digital products. The site introduces the company, explains its product process, presents the leadership team, and showcases Samira Collection as its first flagship product.

## Technology stack

- Next.js with the App Router and static export
- TypeScript in strict mode
- Tailwind CSS
- Framer Motion for restrained, reduced-motion-aware interactions
- Lucide React icons
- React Hook Form and Zod for contact form validation
- Locally bundled Manrope variable font

## Getting started

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality and production commands

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run build` generates a static production site in `out/`. `npm run start` serves that exported directory locally.

## Routes

- `/` — company overview and flagship product
- `/about` — company purpose, values, mission, vision, and journey
- `/products` — current and upcoming product portfolio
- `/products/samira-collection` — Samira Collection product detail
- `/how-we-work` — product development process
- `/team` — leadership and future team direction
- `/careers` — areas of opportunity and contribution
- `/contact` — contact information and validated demo form
- `/privacy-policy` — privacy policy starter content
- `/terms` — terms and conditions

The project also exports `/sitemap.xml`, `/robots.txt`, a custom 404 page, Open Graph metadata, and structured data.

## Folder structure

```text
public/
  images/
    company/             Social preview artwork
    products/            Local product placeholder artwork
  favicon.svg
src/
  app/                   App Router pages, metadata, sitemap, and robots
  components/
    forms/               Contact form
    home/                Homepage sections
    layout/              Navbar, mobile menu, and footer
    products/            Product cards and product visuals
    shared/              Reusable design-system components
  data/                  Company, navigation, product, team, and technology data
  lib/                   Constants, helpers, and validation
  types/                 Shared TypeScript models
```

## Updating site content

Company details, social destinations, values, and journey content are in `src/data/company.ts`. Navigation and footer links are in `src/data/navigation.ts`. Site URL and contact defaults are centralized in `src/lib/constants.ts` and can be overridden with environment variables.

### Add a product

1. Add a typed product record to `src/data/products.ts`.
2. Add a route under `src/app/products/[product-slug]/page.tsx` (or introduce a generated dynamic route when the catalogue grows).
3. Add local product artwork to `public/images/products/`.
4. Add the route to `src/app/sitemap.ts`.
5. Include appropriate page metadata and Product structured data.

### Update the team

Edit the typed records in `src/data/team.ts`. The shared team card reads from this source, so the home and team pages stay consistent. Use real, approved team imagery only; the current build intentionally uses initials-based avatars.

### Replace placeholder artwork

Replace the files in `public/images/products/` with approved product screenshots or artwork and update the corresponding `src` values in components. Preserve explicit dimensions and descriptive alternative text. The current product image is custom local placeholder artwork and does not depend on a remote URL.

## Contact form configuration

The current contact form is a clearly labelled demonstration: it validates input and simulates a successful request but does **not** send, persist, or email form data.

To connect a real service:

1. Set `NEXT_PUBLIC_CONTACT_API_URL` in the deployment environment.
2. Replace the isolated simulated submit block in `src/components/forms/ContactForm.tsx` with an authenticated request to that endpoint.
3. Add server-side validation, rate limiting, spam protection, logging, and an appropriate retention policy.
4. Update the privacy policy before collecting personal information.

Copy `.env.example` to `.env.local` for local overrides:

```env
NEXT_PUBLIC_SITE_URL=https://www.qorvexainnovations.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@qorvexainnovations.com
NEXT_PUBLIC_CONTACT_API_URL=
```

- `NEXT_PUBLIC_SITE_URL` controls canonical, sitemap, and metadata URLs.
- `NEXT_PUBLIC_CONTACT_EMAIL` controls the public contact address where referenced.
- `NEXT_PUBLIC_CONTACT_API_URL` is reserved for a future contact service.

Because these variables are public and embedded at build time, never put secrets in them.

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository into Vercel.
3. Keep the detected framework as Next.js.
4. Add the public environment variables if they differ from the defaults.
5. Deploy. Vercel will run `npm run build` and serve the static export.

For a standard Vercel-managed Next.js deployment instead of a static export, remove `output: "export"` and `images.unoptimized` from `next.config.ts`, then change the `start` script back to `next start`.

## Deploy to Azure Static Web Apps

1. Create an Azure Static Web App connected to the repository.
2. Use `/` as the app location.
3. Use `out` as the output location.
4. Configure the workflow to run `npm ci` followed by `npm run build`.
5. Add the public environment variables in the Azure Static Web Apps configuration.
6. Point the custom domain to Azure and update `NEXT_PUBLIC_SITE_URL` before rebuilding.

The site has no required API location in its current demo-only form.

## Production checklist

Before publishing under the real company domain:

- Replace placeholder product artwork with approved screenshots.
- Add real, approved Samira Collection and social profile URLs.
- Connect the contact form to a secured backend or form service.
- Review the privacy policy and terms with qualified legal counsel.
- Confirm the public email address and company details.
- Rebuild after setting the final site URL.
