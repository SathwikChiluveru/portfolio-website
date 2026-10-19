import Link from 'next/link';
import { ArrowUpRight, Code2, Compass, Activity, Sprout, Plane, ChartNoAxesCombined } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectArtwork({ project, detail = false }: { project: Project; detail?: boolean }) {
 const Icon = project.art === 'trace' ? Activity : project.art === 'advisor' ? ChartNoAxesCombined : project.art === 'atlas' ? Compass : project.art === 'sprout' ? Sprout : project.art === 'flight' ? Plane : Code2;
 return <div className={`project-art repo-art ${project.art}${detail ? ' detail-art' : ''}`} aria-hidden="true"><div className="art-topline"><span>{project.category.toUpperCase()}</span><ArrowUpRight size={18}/></div><div className="repo-art-center"><Icon size={42} strokeWidth={1.2}/><span>{project.artLabel}</span></div><span className="art-caption">PROJECT ILLUSTRATION · SOURCE ON GITHUB</span></div>;
}
export function ProjectCard({ project }: { project: Project }) {
 return <Link href={`/lab/${project.slug}`} className="project-card"><ProjectArtwork project={project}/><div className="project-info"><div><span className="project-index">{project.stack.slice(0,3).join(' / ')}</span><h3>{project.title}<ArrowUpRight size={18}/></h3><p>{project.description}</p></div><span className="tag">{project.status}</span></div></Link>;
}
