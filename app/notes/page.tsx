import Link from "next/link";
export const metadata = { title: "Notes | Sathwik", description: "A place for things learned along the way." };
export default function NotesPage() {
  return <div className="page-shell"><header className="page-intro"><p className="eyebrow">03 / THINKING OUT LOUD</p><h1>Learning, in public.<br /><span className="muted">Eventually.</span></h1><p>A future home for technical explainers, things I’ve figured out, and questions I’m still working through.</p></header><section className="empty-state"><span className="eyebrow">NO NOTES PUBLISHED YET</span><h2>Still connecting the dots.</h2><p className="muted">Topics on my mind: FIX concepts, order lifecycles, system architecture, and the small lessons that come from building things.</p><p className="muted">When there’s something worth sharing, it will appear here.</p><Link href="/lab" className="button secondary">Explore the Lab instead ↗</Link></section></div>;
}
