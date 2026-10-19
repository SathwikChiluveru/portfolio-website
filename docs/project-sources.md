# Project content sources

Reviewed public repository files on 19 October 2026. These notes distinguish implemented code from deployment claims. The portfolio's project artwork is an original illustration of each project concept, not a captured screenshot of the original application. Repository code was inspected; applications were not installed or exercised end to end.

## Sunshine Trace

An observability assistant for turning uploaded logs and code into structured findings and optional AI analysis.

- [Project README](https://github.com/SathwikChiluveru/sunshine-trace/blob/main/README.md): ingestion workflow, Express API, report sections, and AI integration architecture.
- [Frontend parser](https://github.com/SathwikChiluveru/sunshine-trace/blob/main/frontend/lib/log-parser.ts): sensitive-data patterns, error analysis, and example/fallback report content.
- [Debug CLI](https://github.com/SathwikChiluveru/sunshine-trace/blob/main/ai-debug-reporter/packages/debug-report-cli/bin/debug-report.js): recurring error signatures, NRIC pattern detection, logging-quality heuristics, and JSON report output. Some error-flow strings are illustrative rather than inferred call chains.
- [Frontend dependencies](https://github.com/SathwikChiluveru/sunshine-trace/blob/main/frontend/package.json): Next.js 15, React 18, TypeScript, Tailwind, JSZip, Radix UI, and Recharts.

[Public frontend](https://sunshine-trace.vercel.app) returned HTTP 200 and the title “Sunshine Trace.” This verifies page availability only, not the hosted API, AI credentials, report accuracy, or full upload workflow. Present as an observability prototype, without production reliability or automatic root-cause diagnosis claims.

## TripBuddy

A group-travel application for creating trips, finding companions, and managing participation.

- [Trip controller](https://github.com/SathwikChiluveru/tripbuddy/blob/main/server/controllers/trip.controller.js): trip creation and editing, list/detail retrieval, capacity checks, joining/leaving, and associated chat-room records. Code includes AWS S3 integration; deployment was not exercised.
- [Frontend dependencies](https://github.com/SathwikChiluveru/tripbuddy/blob/main/client/package.json): React 18, Vite, Chakra UI, React Router, Socket.IO client, and map/UI dependencies.
- [Backend dependencies](https://github.com/SathwikChiluveru/tripbuddy/blob/main/server/package.json): Express, Mongoose/MongoDB, Socket.IO, JWT, Google authentication library, and AWS SDK.

Describe implemented travel and collaboration flows as project work. Do not imply active users, production hosting, or verified security. No demo was independently verified in this review.

## RoboAdvisor — dbea-project

A financial-technology prototype connecting a risk questionnaire to AI-generated allocation suggestions.

- [Risk quiz](https://github.com/SathwikChiluveru/dbea-project/blob/master/src/app/risk-quiz/page.js): six-step questionnaire, risk-profile calculation, foreign-market preference, recommendation request, and dashboard navigation; React and Chakra UI.
- [Recommendation route](https://github.com/SathwikChiluveru/dbea-project/blob/master/src/app/api/recommendation/route.js): Next.js server route calls OpenAI, parses JSON allocations across US, Singapore, and global markets, and applies normalization.

Position as an educational fintech experiment. The implementation demonstrates a workflow, not validated investment suitability or financial performance. Allocation normalization is present, but rounding and model output are not proof of mathematically exact or appropriate recommendations. The project demo, where linked, has only an HTTP availability check; no paid AI call or recommendation quality was tested.

## FlyMePlease

A Telegram flight-search and route-subscription experiment.

- [Search conversation](https://github.com/SathwikChiluveru/flymeplease/blob/main/bot/handlers/search.py): one-way/return selection, airport-code validation, route and budget input, currency conversion, date selection, and ETL invocation.
- [Subscription handler](https://github.com/SathwikChiluveru/flymeplease/blob/main/bot/handlers/subscribe.py): subscription parsing, duplicate checks, storage calls, immediate flight lookup, and formatted replies.
- [Dependencies](https://github.com/SathwikChiluveru/flymeplease/blob/main/requirements.txt): Python, python-telegram-bot, APScheduler, SQLAlchemy, requests, and HTTPX.

The source supports flight-search and subscription functionality as an experiment. No live bot handle, continuously running scheduler, current fare coverage, or delivered notifications were independently verified. Do not invent a public demo URL.

## SavvySprout

A mobile community/connection prototype with swipeable profiles and chat, communities, and user navigation.

- [Home screen](https://github.com/SathwikChiluveru/savvysproutapp/blob/main/savvysprout/screens/HomeScreen.js): animated profile cards using PanResponder, like/dislike gestures, local demo profiles, and bottom-tab navigation to Chat, Communities, and User screens.
- [Dependencies](https://github.com/SathwikChiluveru/savvysproutapp/blob/main/savvysprout/package.json): React Native 0.72, Expo 49, React 18, React Navigation, and Axios.

Describe as a React Native prototype. Navigation entries do not establish working real-time chat or a deployed matching service. No app-store listing or public web demo was verified.

## Publication boundaries

Use repository links as evidence and source destinations. Mark experiments and prototypes honestly; avoid invented completion dates, performance metrics, customers, awards, and usage numbers. Do not expose configuration secrets or private employer/client information. Replace illustrative artwork with actual screenshots only when those images have been captured and checked.
