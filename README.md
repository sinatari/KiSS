# KiSS — Kept in Stockholm Style

A fully custom-coded, trilingual marketing website for a boutique wedding and event planning
studio based in Stockholm, Sweden. Built with Next.js (App Router), TypeScript, and Tailwind CSS —
no WordPress, no page builders.

**Languages:** English (`en`), Farsi (`fa`, right-to-left), Swedish (`sv`, default)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS with a custom design system |
| i18n | next-intl (locale-prefixed routing, RTL support for Farsi) |
| Backend | Next.js API routes |
| Database | PostgreSQL via Prisma ORM |
| Email | Resend (transactional inquiry notifications) |
| Validation | Zod (client + server) |
| Hosting target | Vercel (frontend) + Railway/Render (Postgres) |

## Project Structure

```
kiss-website/
├── app/
│   ├── [locale]/            # All localized pages (en, fa, sv)
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── venues/
│   │   ├── journal/
│   │   ├── contact/
│   │   ├── privacy/
│   │   └── layout.tsx        # Locale layout: Navbar, Footer, Cookie banner, RTL handling
│   ├── api/inquiry/route.ts  # Contact form API (validates, stores in DB, sends email)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/                # Reusable Button, Card, Section, FormField, Modal, Navbar, Footer
├── lib/                        # content.ts (portfolio/venues/testimonials), validation.ts, prisma.ts
├── messages/                   # en.json, fa.json, sv.json — all UI copy
├── prisma/schema.prisma        # Inquiry, Testimonial, PortfolioEntry models
├── i18n.ts                     # next-intl locale config
├── middleware.ts               # Locale-prefixed routing middleware
└── public/images/              # Swappable placeholder imagery (see README in that folder)
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in `DATABASE_URL` (PostgreSQL), `RESEND_API_KEY`, and `NOTIFICATION_EMAIL`.
3. Generate the Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. Add real photography to `public/images/` (see that folder's README for the full file list).
5. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` — you'll be redirected to `/sv` (Swedish default). Switch
   languages with the toggle in the navbar (`EN` / `فا` / `SV`).

## Swapping Text & Images

- **Text:** every string in the UI lives in `messages/en.json`, `messages/fa.json`, and
  `messages/sv.json`. Edit the matching key in all three files to update copy across languages.
- **Images:** drop new files into `public/images/` using the same filenames referenced in
  `lib/content.ts` and the page components, or update the `image` paths in `lib/content.ts`.
- **Portfolio / Venues / Testimonials:** all sourced from `lib/content.ts` — add or edit array
  entries there; no code changes needed elsewhere.

## Deployment

- **Frontend:** deploy to [Vercel](https://vercel.com) — connect this repo, set the environment
  variables from `.env.example` in the Vercel dashboard, and deploy.
- **Database:** provision a PostgreSQL instance on [Railway](https://railway.app) or
  [Render](https://render.com), then set `DATABASE_URL` accordingly and run
  `npx prisma migrate deploy`.
- **Email:** create a [Resend](https://resend.com) account, verify your sending domain, and set
  `RESEND_API_KEY` + `NOTIFICATION_EMAIL`.

## Compliance & Performance Notes

- GDPR-compliant cookie consent banner (`components/CookieBanner.tsx`) and a dedicated
  `/privacy` page in all three languages.
- Farsi pages render with `dir="rtl"` automatically via the locale layout.
- `app/sitemap.ts` and `app/robots.ts` generate SEO fundamentals; add
  `components/StructuredData.tsx` to any page for LocalBusiness/WeddingPlanner JSON-LD.
- Target Lighthouse scores: 90+ on Performance, Accessibility, and SEO. Run
  `npx next build && npx next start` then audit with Lighthouse before launch.

## License

Private project — all rights reserved.
