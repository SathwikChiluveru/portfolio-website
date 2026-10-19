import Link from "next/link";
import { ArrowUpRight, Compass, MapPin, Waves } from "lucide-react";

export const metadata = { title: "About | Sathwik", description: "A little about me, my work, and my projects." };

export default function AboutPage() {
  return <div className="page-shell about-page">
    <header className="page-intro"><h1>Hey, I’m Sathwik<span className="accent">.</span></h1></header>
    <div className="about-layout">
      <div className="about-story">
        <p>I work as an Associate Technical Account Manager at Broadridge. My background is in software engineering, and I now work with financial systems, trading workflows, and integrations.</p>
        <p>I still like building things outside work. This site is somewhere to keep those projects, including the ones that are still a work in progress.</p>
        <div className="about-links">
          <Link href="/lab" className="button primary">My projects <ArrowUpRight size={16} /></Link>
          <Link href="/work" className="button secondary">Work experience <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <aside className="about-aside" aria-label="Location and interests">
        <div className="about-location"><MapPin size={20} aria-hidden="true" /><span>Based in Singapore</span></div>
        <h2>Outside work</h2>
        <ul className="interest-list">
          <li className="interest-item"><Compass size={21} aria-hidden="true" /><span>Traveling</span></li>
          <li className="interest-item"><Waves size={21} aria-hidden="true" /><span>Diving</span></li>
        </ul>
      </aside>
    </div>
  </div>;
}
