import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Lab', template: '%s · Sathwik' },
  description: 'Projects by Sathwik Chiluveru: Sunshine Trace, TripBuddy, and FlyMePlease. Explore the builds, source code, and available demos.',
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
