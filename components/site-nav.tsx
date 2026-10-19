'use client';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Command, Search, X } from 'lucide-react';
const pages = [{name:'Home',href:'/'},{name:'Work',href:'/work'},{name:'Lab',href:'/lab'},{name:'About',href:'/about'}];
export function SiteNav(){
 const pathname=usePathname(); const [query,setQuery]=useState(''); const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const handle=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();dialog.current?.open?dialog.current.close():dialog.current?.showModal();}};window.addEventListener('keydown',handle);return()=>window.removeEventListener('keydown',handle)},[]);
 const results=[...pages,...projects.map(project=>({name:project.title,href:`/lab/${project.slug}`}))].filter(p=>p.name.toLowerCase().includes(query.toLowerCase()));
 return <><header className="site-header"><Link href="/" className="wordmark" aria-label="Sathwik home">sathwik<span>.</span></Link><nav aria-label="Main navigation">{pages.slice(1).map(p=><Link key={p.href} href={p.href} aria-current={pathname.startsWith(p.href)?'page':undefined}>{p.name}</Link>)}</nav><button className="command-trigger" onClick={()=>dialog.current?.showModal()} aria-label="Search pages and projects"><Command size={15}/><kbd>K</kbd></button></header><dialog aria-label="Search pages and projects" ref={dialog} className="command-dialog" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}}><div className="search-bar"><Search size={20}/><input aria-label="Search pages and projects" placeholder="Where shall we go?" value={query} onChange={e=>setQuery(e.target.value)}/><button aria-label="Close search" onClick={()=>dialog.current?.close()}><X size={19}/></button></div><div className="search-results">{results.length?results.map(p=><Link key={p.href} href={p.href} onClick={()=>{dialog.current?.close();setQuery('')}}>{p.name}<ArrowUpRight size={17}/></Link>):<p className="muted">No matches. Try “Lab” or “Work”.</p>}</div><p className="search-hint">A little shortcut to your next rabbit hole. <kbd>esc</kbd> to close</p></dialog></>;
}
