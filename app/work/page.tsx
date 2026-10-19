import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Work | Sathwik", description: "My work experience in software engineering and fintech." };

const experience = [
  { date: "SEP 2026 — PRESENT", company: "Broadridge", logos: [{ name: "Broadridge", src: "/logos/broadridge.svg" }], role: "Associate Technical Account Manager", description: "I work on FIX workflows, order routing, system configurations, and integrations, helping troubleshoot technical issues.", tags: ["Financial technology", "FIX workflows", "Technical operations"] },
  { date: "MAY 2025 — MAY 2026", company: "NCS", logos: [{ name: "NCS", src: "/logos/ncs.png" }], role: "Software Engineer Intern", description: "I worked on enterprise applications using Angular.", tags: ["Software engineering", "Angular"] },
  { date: "AUG — DEC 2024", company: "Hummingbird Bioscience", logos: [{ name: "Hummingbird Bioscience", src: "/logos/hummingbird.png" }], role: "Full-stack Developer Intern", description: "I worked on full-stack development during my internship.", tags: ["Full-stack development"] },
  { date: "2024", company: "Craftwills / Trinax", logos: [{ name: "Craftwills", src: "/logos/craftwills.png" }, { name: "Trinax", src: "/logos/trinax.png" }], role: "Earlier experience", description: "Earlier roles in software engineering and project management.", tags: ["Engineering", "Project management"] },
];

export default function WorkPage() {
  return <div className="page-shell simple-page work-page">
    <header className="page-intro"><h1>Experience so far.</h1><p>Where I’ve worked, and what I worked on.</p></header>
    <section className="timeline" aria-label="Work experience">
      {experience.map(job => <article className="timeline-item" key={job.company}>
        <p className="eyebrow">{job.date}</p>
        <div><div className="company-heading"><div className="company-logos">{job.logos.map(logo => <span className="company-logo" key={logo.name}><Image src={logo.src} alt={logo.name + " logo"} width={120} height={44} unoptimized /></span>)}</div><h2>{job.company}</h2></div>
        <h3>{job.role}</h3><p className="muted">{job.description}</p>
        <div className="tags">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
      </article>)}
    </section>
    <div className="simple-page-link"><Link href="/lab" className="text-link">My projects ↗</Link></div>
  </div>;
}