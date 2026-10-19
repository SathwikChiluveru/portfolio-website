export type Project = {
  slug: string;
  title: string;
  category: "Web" | "Fintech" | "Experiments";
  status: "Cooking" | "Concept" | "Past work" | "Idea";
  description: string;
  art: "stream" | "flow" | "bot" | "random";
  number: string;
  stack: string[];
  story: string;
  next: string;
};

export const projects: Project[] = [
  { slug: "streaming-app", title: "Streaming App", category: "Web", status: "Cooking", description: "A cinematic home for discovering what to watch next. The watchlist keeps growing.", art: "stream", number: "01", stack: ["Web application", "Content discovery", "Interface exploration"], story: "A side project exploring the experience of browsing movies and series: finding something interesting, getting a feel for it, and saving it for later. An excuse to spend a little too much time on the interface.", next: "Still taking shape. A public demo and source link will live here when they are ready to share." },
  { slug: "fix-flow-explorer", title: "FIX Flow Explorer", category: "Fintech", status: "Concept", description: "Making order lifecycles a little less mysterious. Synthetic messages, real curiosity.", art: "flow", number: "02", stack: ["Proposed experiment", "FIX concepts", "Interactive diagrams"], story: "An idea for an interactive explanation of how orders move through financial systems. Follow a synthetic order from submission through acknowledgement, execution, or cancellation, with the messages alongside it.", next: "This is a proposed build. The first step is a small, clearly labelled synthetic order lifecycle; no employer systems, client information, or production messages." },
  { slug: "trading-bot", title: "Trading Bot", category: "Fintech", status: "Past work", description: "An earlier exploration of algorithmic trading. Where code meets market behaviour.", art: "bot", number: "03", stack: ["Algorithmic trading", "Earlier internship project"], story: "An algorithmic trading project developed during an earlier internship. Part of the path that connected a software engineering background with an interest in financial technology.", next: "An archived chapter. A public technical write-up can be added when there is material suitable for sharing." },
  { slug: "weekend-experiments", title: "Weekend Experiments", category: "Experiments", status: "Idea", description: "Small tools, strange ideas, and things that probably did not need an app.", art: "random", number: "04", stack: ["Whatever fits", "Curiosity first"], story: "A future home for the small stuff: one-day builds, useful little utilities, and ideas that are worth trying even if they never become a product.", next: "An empty workbench for now. The first experiment gets a spot here when it exists." },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
