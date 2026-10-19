import Link from "next/link";

export const metadata = { title: "Work | Sathwik", description: "A journey through software engineering and financial technology." };

const experience = [
  { date: "SEP 2026 — PRESENT", company: "Broadridge", role: "Associate Technical Account Manager", description: "Working at the intersection of financial technology, client-facing technical operations, and complex systems. My focus includes FIX workflows, order routing, system configurations, integrations, and troubleshooting.", tags: ["Financial technology", "FIX workflows", "Technical operations"] },
  { date: "MAY 2025 — MAY 2026", company: "NCS", role: "Software Engineer Intern", description: "Enterprise software engineering and Angular application development. Building a foundation in how applications are put together, maintained, and used.", tags: ["Software engineering", "Angular"] },
  { date: "AUG — DEC 2024", company: "Hummingbird Bioscience", role: "Full-stack Developer Intern", description: "Full-stack development experience, connecting the parts people interact with to the systems behind them.", tags: ["Full-stack development"] },
  { date: "2024", company: "Craftwills / Trinax", role: "Earlier experience", description: "Early experience across software engineering and project management, developing a broader perspective on building and delivering technology.", tags: ["Engineering", "Project management"] },
];

export default function WorkPage() {
  return <div className="page-shell"><header className="page-intro"><p className="eyebrow">01 / THE PROFESSIONAL SIDE</p><h1>Understanding systems.<br /><span className="muted">Connecting the dots.</span></h1><p>From writing software to working with the systems behind financial markets. A career built around technology, people, and figuring things out.</p></header><section className="timeline" aria-label="Career timeline">{experience.map((job) => <article className="timeline-item" key={job.company}><p className="eyebrow">{job.date}</p><div><h2>{job.company}</h2><h3>{job.role}</h3><p className="muted">{job.description}</p><div className="tags">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</section><section className="section-heading"><div><p className="eyebrow">THE THREAD THROUGH IT ALL</p><h2>Technical by profession.<br />Curious by default.</h2><p className="muted">A software engineering background helps me understand how systems are built. Technical account management adds the context of how they operate, connect, and serve people.</p></div><Link className="button secondary" href="/lab">See the other side ↗</Link></section></div>;
}
