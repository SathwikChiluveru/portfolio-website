# Sathwik — systems & side quests

A personal portfolio balancing a professional fintech identity with a creative lab. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Lucide icons. Content lives locally; no database or account setup is required.

## Run locally

Use Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

`build` creates the production application; `start` serves that build.

## Pages

- `/`: introduction, professional focus, selected experiments, and a little life beyond the screen.
- `/work`: career journey and professional capabilities.
- `/lab`: filterable experiments, with project detail pages at `/lab/[slug]`.
- `/notes`: a place for public learning and future writing.
- `/about`: background and interests.

## Make it yours

The project uses editable local TypeScript content rather than a CMS. Update projects in `lib/projects.ts`, career history in `app/work/page.tsx`, and profile copy in `app/about/page.tsx`. The homepage featured previews live in `app/page.tsx`. Add original assets under `public/` and reference them from project entries. Keep statuses accurate: a concept is an idea, not a shipped product.

Before publishing, confirm career dates, replace illustrative project information with real details, and add your own public contact/profile URLs. Leave unavailable demos and source links absent. The proposed domain is a brand direction, not a claim of domain ownership.

## Deployment

Import this repository into Vercel as a Next.js project, or use any host supporting Next.js 15. No environment variables are needed for the initial local-content version.

## Design

See [PRODUCT.md](PRODUCT.md) for intent and scope and [DESIGN.md](DESIGN.md) for the visual direction. The design takes inspiration from the [Apple Design System reference](https://github.com/tekgnosis-net/apple-design-marketplace), adapted to Sathwik's midnight-and-blue identity.
