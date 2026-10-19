# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix of people exploring Sathwik's builds and professional contacts learning about his experience. Neither audience should make the site feel like a job application or a corporate profile.

## Product Purpose

A personal home on the internet for Sathwik Chiluveru: real projects, career information, and a little personality. It should feel like him, remain useful as his career changes, and make it easy to explore what he has built.

## Positioning

Sathwik works in fintech as an Associate Technical Account Manager at Broadridge in Singapore and has a software engineering background. Independent builds are a creative outlet, not a claim that his current role is primarily software development. Let the actual work and projects communicate that combination without packaging it as a slogan.

## Operating Context

Visitors browse Home, Work, Lab, and About. They can follow project source links, open available demos, filter the Lab, choose a random project, or use the command palette. The site is hosted on Vercel at https://sathwikchiluveru.vercel.app and deploys from the GitHub repository SathwikChiluveru/portfolio-website.

## Capabilities and Constraints

- Existing Next.js App Router application with TypeScript, Tailwind CSS, local typed project content, and Lucide icons.
- Current public project selection: Sunshine Trace, TripBuddy, and FlyMePlease. Sunshine Trace and TripBuddy are featured on the homepage.
- RoboAdvisor and SavvySprout were explicitly removed. Do not reintroduce them without a request.
- Display actual builds backed by repository evidence, with accurate prototype/past-work labels. Do not fill the Lab with proposed projects or invented demos.
- Notes was removed and should not return unless requested.
- Career timeline includes Broadridge, NCS, Hummingbird Bioscience, and the existing Craftwills / Trinax entry. Do not invent dates, achievements, metrics, clients, or specific contributions.
- Keep project content local and easy to update. No database, authentication, or admin dashboard is required.
- Hosting and the chosen Vercel subdomain must remain free; no paid domain purchase is authorized.

## Brand Commitments

The user likes the current design, landing page, navbar, footer, icons, and colors. Preserve that established identity during copy changes.

The homepage should feel chill and personal, with professional information as context. Work and About should describe experience and interests in straightforward, relaxed language. The user explicitly rejected headings such as "Understanding systems. Connecting the dots." and "The thread through it all" as trying too hard. Use simple headings and compact spacing; do not ask for a personal story when the request is to simplify the existing content.

Use plain, specific, natural language. Do not substitute forced slang for authenticity. Avoid numbered section labels, the phrase "Beyond the Screen", and slogans such as "Two sides. Same curiosity." Company logos should retain their original artwork and colors.

## Evidence on Hand

- `lib/projects.ts`: current project selection, repository URLs, demos, stacks, and implementation descriptions.
- `docs/project-sources.md`: source-file evidence and verification limits. This historical record also covers two projects no longer displayed.
- `app/work/page.tsx`: supplied career details and timeline.
- `public/logos/` and `docs/company-logo-sources.md`: sourced company branding.
- `app/page.tsx`, `app/about/page.tsx`, and conversation feedback: established structure and approved preferences. Existing prose is not evidence of personal motivations or feelings.
- Project illustrations are not screenshots. Available demo URLs were checked for HTTP availability, not full end-to-end functionality.
- No personal anecdotes, detailed account of daily work, or first-person career story have yet been supplied. Obtain these rather than inventing a narrative.

## Product Principles

1. Sound like Sathwik, using his own perspective and concrete details.
2. Lead with the person and actual builds; let career details support the picture.
3. Prefer accurate, modest descriptions over inflated claims or polished slogans.
4. Preserve the design the user likes while changing only the requested content or behavior.
5. Keep the site easy to maintain and explore, including on phones and with a keyboard.

## Open Decisions

- No additional personal narrative is needed for the current Work and About copy; preserve the existing facts and keep the wording simple.
- No default between image-mockup-first and direct-code workflows was chosen. Do not record either as a standing preference.
