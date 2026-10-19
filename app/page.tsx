import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowUpRight, AudioLines, CirclePlay, Code2, Compass } from "lucide-react";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="hello-note"><span className="status-dot" /> Hey, glad you’re here.</div>
          <h1 className="hero-title">I’m Sathwik<span className="accent">.</span><br /><span>A few builds.</span><br />A lot of curiosity.</h1>
          <p className="hero-description">This is my little corner of the internet. A place to share the things I’m making.</p>
          <div className="hero-actions"><Link className="button primary" href="/lab">See what I’m making <ArrowUpRight size={17} /></Link><Link className="button secondary" href="/about">A bit about me <ArrowUpRight size={16} /></Link></div>
          <div className="hero-footnote"><span>SINGAPORE</span><span className="tiny-divider" /><span>FIGURING THINGS OUT AS I GO</span></div>
        </div>
        <div className="hero-visual" aria-label="A personal sketch of open tabs, side projects, and things to try">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <span className="visual-coordinate coordinate-top">a peek inside my head</span>
          <div className="visual-spark spark-one">+</div><div className="visual-spark spark-two">+</div>
          <div className="system-panel personal-tabs">
            <div className="tabs-window-bar"><span /><span /><span /><span className="tabs-window-title">way too many tabs</span></div>
            <div className="system-panel-title">Things to make.<br /><span>Things to try.</span></div>
            <div className="curiosity-list"><div><Code2 size={17}/><span>Build something for fun</span><span className="scribble-check">in progress</span></div><div><CirclePlay size={17}/><span>Find a film for tonight</span></div><div><Compass size={17}/><span>Go somewhere new</span></div></div>
          </div>
          <div className="floating-token code-token"><Code2 size={24} /><span>just one more build</span></div>
          <div className="floating-token curiosity-token"><AudioLines size={23} /><span>probably another side quest</span></div>
        </div>
      </section>

      <section className="current-strip" aria-label="Current role"><div className="current-label"><span className="status-dot" /> DURING THE DAY</div><div><strong>I work in fintech at Broadridge.</strong><span>Associate Technical Account Manager <span className="inline-dot">·</span> Singapore</span></div><Link href="/work" className="text-link">The work side of things <ArrowUpRight size={16} /></Link></section>

      <section className="featured-section">
        <div className="section-heading"><div><h2>A few things from my GitHub<span className="accent">.</span></h2></div><Link href="/lab" className="text-link">Everything in the lab <ArrowUpRight size={17} /></Link></div>
        <div className="project-grid">{projects.filter(project => project.featured).map(project => <ProjectCard key={project.slug} project={project}/>)}</div>
      </section>

      <section className="beyond"><div className="beyond-icon"><Compass size={29} strokeWidth={1.3} /></div><div><h2>Occasionally, I go outside.</h2><p>New places and a little time underwater. There’s a world beyond the next browser tab.</p></div><Link href="/about" className="button secondary">A little more about me <ArrowUpRight size={16} /></Link></section>
    </div>
  );
}

