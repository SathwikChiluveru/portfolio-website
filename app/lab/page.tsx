'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';
const filters = ['All', 'Web', 'Fintech', 'Mobile', 'Tools'];
export default function LabPage() {
 const [filter,setFilter]=useState('All'); const router=useRouter();
 const visible=projects.filter(project=>filter==='All' || project.category===filter);
 return <div className="page-shell"><header className="page-intro"><h1>Welcome to<br/><span className="accent">the Lab.</span></h1><p>Actual builds, useful little tools, and rabbit holes I followed far enough to put on GitHub.</p><button className="button secondary" onClick={()=>router.push(`/lab/${projects[Math.floor(Math.random()*projects.length)].slug}`)}>Surprise me ↗</button></header><div className="filters" role="group" aria-label="Filter projects">{filters.map(item=><button key={item} className={`filter ${filter===item?'active':''}`} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}{item==='All'?` (${projects.length})`:''}</button>)}</div><div className="project-grid" aria-live="polite">{visible.map(project=><ProjectCard project={project} key={project.slug}/>)}</div>{!visible.length&&<section className="empty-state"><h2>No projects here yet.</h2><button className="button secondary" onClick={()=>setFilter('All')}>See all projects</button></section>}<p className="muted lab-footnote">These projects have public source code. Illustrations are visual summaries, not application screenshots.</p></div>;
}
