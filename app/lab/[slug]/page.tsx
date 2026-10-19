import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const project = getProject((await params).slug); return { title: `${project?.title ?? "Project not found"} | Sathwik’s Lab`, description: project?.description }; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <div className="page-shell"><Link href="/lab" className="back-link">← Back to the Lab</Link><header className="page-intro"><div className="tags"><span className="tag">{project.status}</span><span className="tag">{project.category}</span></div><h1>{project.title}<span className="accent">.</span></h1><p>{project.description}</p></header><div className={`project-art detail-art ${project.art}`} aria-hidden="true"><span className="art-label">{project.art === "stream" ? "ONE MORE EPISODE." : project.art === "flow" ? "ORDER → MESSAGE → MARKET" : project.art === "bot" ? "IDEAS MEET MARKETS." : "SMALL IDEAS. OPEN POSSIBILITIES."}</span><span className="project-number">{project.number}</span></div><div className="prose"><section><p className="eyebrow">THE IDEA</p><h2>What’s this about?</h2><p>{project.story}</p></section><section><p className="eyebrow">ON THE WORKBENCH</p><div className="tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div></section><section><h2>Where it stands</h2><p>{project.next}</p></section><Link href="/lab" className="button secondary">More experiments ↗</Link></div></div>;
}
