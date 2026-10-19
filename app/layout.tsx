import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import './globals.css';
import '@fontsource-variable/manrope';

export const metadata: Metadata = {
 title: { default: 'Sathwik — Systems & side projects', template: '%s · Sathwik' },
 description: 'Sathwik Chiluveru. Financial technology by profession. Building things out of curiosity. A personal lab, professional journey, and notes along the way.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteNav/><main id="main">{children}</main><footer className="site-footer"><Link href="/" className="wordmark">sathwik<span>.</span></Link><p>Technical by profession. Builder by curiosity.</p><span>© {new Date().getFullYear()} Sathwik Chiluveru</span></footer></body></html>;
}
