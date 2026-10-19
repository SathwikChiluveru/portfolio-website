import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata = { title: "Work | Sathwik", description: "My work experience in software engineering and fintech." };

const experience = [
  { date: "SEP 2026 — PRESENT", company: "Broadridge", logos: [{ name: "Broadridge", src: "/logos/broadridge.svg" }], role: "Associate Technical Account Manager", description: "I work on FIX workflows, order routing, system configurations, and integrations, helping troubleshoot technical issues.", tags: ["Financial technology", "FIX workflows", "Technical operations"] },
  { date: "MAY 2025 — MAY 2026", company: "NCS", logos: [{ name: "NCS", src: "/logos/ncs.png" }], role: "Software Engineer Intern", description: "I worked on enterprise applications using Angular.", tags: ["Software engineering", "Angular"] },
  { date: "AUG — DEC 2024", company: "Hummingbird Bioscience", logos: [{ name: "Hummingbird Bioscience", src: "/logos/hummingbird.png" }], role: "Full-stack Developer Intern", description: "I worked on full-stack development during my internship.", tags: ["Full-stack development"] },
  { date: "2024", company: "Craftwills / Trinax", logos: [{ name: "Craftwills", src: "/logos/craftwills.png" }, { name: "Trinax", src: "/logos/trinax.png" }], role: "Earlier experience", description: "Earlier roles in software engineering and project management.", tags: ["Engineering", "Project management"] },
];

export default function WorkPage() {
  return <div className="page-shell work-page">
    <header className="page-intro"><h1>Experience<br/><span className="accent">so far.</span></h1><p>Where I’ve worked, and what I worked on.</p></header>
    <ol className="career-ladder" aria-label="Work experience, most recent first">
      {experience.map((job,index) => <li className={`career-step${index===0?' is-current':''}`} key={job.company}>
        <div className="career-date"><span>{job.date}</span>{index===0&&<span className="career-current"><span className="status-dot"/> Current role</span>}</div>
        <span className="career-node" aria-hidden="true"/>
        <article className="career-entry"><div className="career-entry-top"><div className="company-logos">{job.logos.map(logo => <span className="company-logo" key={logo.name}><Image src={logo.src} alt="" width={120} height={44} unoptimized /></span>)}</div></div>
          <h2>{job.company}</h2><h3>{job.role}</h3><p>{job.description}</p>
        </article>
      </li>)}
    </ol>
    <div className="work-next"><p>The things I build outside work live in the Lab.</p><Link href="/lab" className="button secondary">Explore the Lab <ArrowUpRight size={16}/></Link></div>
  </div>;
}
