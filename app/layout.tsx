import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KiSS — Kept in Stockholm Style',
  description: 'Boutique wedding and event planning in Stockholm, Sweden.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
