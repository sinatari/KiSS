'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { locales, type Locale } from '@/i18n';
import clsx from 'clsx';

const languageLabels: Record<Locale, string> = { en: 'EN', fa: 'فا', sv: 'SV' };

export default function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const tb = useTranslations('brand');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/portfolio`, label: t('portfolio') },
    { href: `/${locale}/venues`, label: t('venues') },
    { href: `/${locale}/journal`, label: t('journal') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  const basePath = pathname?.replace(/^\/(en|fa|sv)/, '') || '';

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-stone">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-serif text-2xl text-navy tracking-wide">
          {tb('name')}
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-charcoal hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex gap-1 border border-stone rounded-sm overflow-hidden">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${basePath}`}
                className={clsx(
                  'px-2 py-1 text-xs font-sans',
                  l === locale ? 'bg-navy text-white' : 'text-charcoal hover:bg-stone'
                )}
              >
                {languageLabels[l]}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {t('cta')}
          </Link>
        </div>

        <button
          className="lg:hidden text-navy"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-stone px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-charcoal">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${basePath}`}
                className={clsx(
                  'px-3 py-1 text-xs border border-stone rounded-sm',
                  l === locale ? 'bg-navy text-white' : 'text-charcoal'
                )}
              >
                {languageLabels[l]}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/contact`} className="btn-primary text-center mt-2">
            {t('cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
