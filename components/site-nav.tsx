'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { name: 'Work', href: '/work' },
  { name: 'Lab', href: '/lab' },
  { name: 'About', href: '/about' },
];

export function SiteNav() {
  const pathname = usePathname();
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Sathwik home">sathwik<span>.</span></Link>
    <nav aria-label="Main navigation">
      {pages.map(page => <Link key={page.href} href={page.href} aria-current={pathname.startsWith(page.href) ? 'page' : undefined}>{page.name}</Link>)}
    </nav>
  </header>;
}
