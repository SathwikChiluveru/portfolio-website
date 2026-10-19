import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/lib/projects';
import { ProjectArtwork } from '@/components/project-card';
export function generateStaticParams(){return projects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const project=getProject((await params).slug);return{title:project?.title??'Project not found',description:project?.description};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const project=getProject((await params).slug); if(!project)notFound();
 return <div className="page-shell"><Link className="back-link" href="/lab">← Back to the Lab</Link><header className="page-intro"><div className="tags"><span className="tag">{project.status}</span><span className="tag">{project.category}</span></div><h1>{project.title}<span className="accent">.</span></h1><p>{project.description}</p><div className="project-actions"><a className="button primary" href={project.github} target="_blank" rel="noopener noreferrer">Source on GitHub ↗</a>{project.demo&&<a className="button secondary" href={project.demo} target="_blank" rel="noopener noreferrer">Open frontend demo ↗</a>}</div>{project.demoNote && <p className="demo-note">{project.demoNote}</p>}</header><ProjectArtwork project={project} detail/><div className="prose"><h2>About the project</h2><p>{project.story}</p><h2>Inside the build</h2><ul>{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul><h2>Built with</h2><div className="tags">{project.stack.map(item=><span className="tag" key={item}>{item}</span>)}</div><h2>Where it stands</h2><p>{project.next}</p><Link className="button secondary" href="/lab">More experiments ↗</Link></div></div>;
}
