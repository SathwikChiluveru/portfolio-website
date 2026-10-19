import Link from "next/link";
export const metadata = { title: "About | Sathwik", description: "A little about me, my work, and my projects." };
export default function AboutPage() {
  return <div className="page-shell simple-page about-page">
    <header className="page-intro"><h1>Hey, I’m Sathwik.</h1></header>
    <div className="prose about-copy">
      <p>I’m based in Singapore and work as an Associate Technical Account Manager at Broadridge. My background is in software engineering, and I now work with financial systems, trading workflows, and integrations.</p>
      <p>I still like building things outside work. This site is somewhere to keep those projects, including the ones that are still a work in progress.</p>
      <p>Away from work, I’m into travel, running, and diving.</p>
      <div className="about-links"><Link href="/lab" className="text-link">My projects ↗</Link><Link href="/work" className="text-link">Work experience ↗</Link></div>
    </div>
  </div>;
}
