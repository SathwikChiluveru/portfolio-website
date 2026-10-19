"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";

const filters = ["All", "Web", "Fintech", "Experiments", "On ice"];
export default function LabPage() {
  const [filter, setFilter] = useState("All");
  const router = useRouter();
  const visible = projects.filter(project => filter === "All" || project.category === filter);
  function surprise() { router.push(`/lab/${projects[Math.floor(Math.random() * projects.length)].slug}`); }
  return <div className="page-shell"><header className="page-intro"><p className="eyebrow">02 / NO PARTICULAR BRIEF</p><h1>Welcome to<br /><span className="accent">the Lab.</span></h1><p>Things I’m building, things I’ve tried, and things that probably didn’t need an app. Curiosity gets its own corner of the internet.</p><button type="button" className="button secondary" onClick={surprise}>↝ Surprise me</button></header><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} className={`filter ${filter === item ? "active" : ""}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All" ? ` (${projects.length})` : ""}</button>)}</div><div className="project-grid" aria-live="polite">{visible.map(project => <Link href={`/lab/${project.slug}`} key={project.slug} className="project-card"><div className={`project-art ${project.art}`} aria-hidden="true"><span className="art-label">{project.art === "stream" ? "PLAY SOMETHING GOOD." : project.art === "flow" ? "NEW → ACK → FILL" : project.art === "bot" ? "IF CURIOSITY: EXECUTE" : "WHAT IF...?"}</span><span className="project-number">{project.number}</span></div><div className="project-card-body"><div className="project-meta"><span className="tag">{project.status}</span><span className="muted">{project.category}</span></div><h2>{project.title} <span aria-hidden="true">↗</span></h2><p className="muted">{project.description}</p></div></Link>)}</div>{!visible.length && <section className="empty-state"><p className="eyebrow">THE IDEA GRAVEYARD</p><h2>Nothing on ice. Yet.</h2><p className="muted">When an experiment takes an extended nap, it will live here. For now, the workbench is open.</p><button type="button" className="button secondary" onClick={() => setFilter("All")}>Back to all experiments</button></section>}<p className="muted lab-footnote">Concepts and ideas are labelled as such. Some things are here because I want to build them.</p></div>;
}
