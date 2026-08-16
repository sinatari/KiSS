'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'sv';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('kiss-cookie-consent')) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('kiss-cookie-consent', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-navy text-ivory px-6 py-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-ivory/90 max-w-2xl">
        {t('message')}{' '}
        <Link href={`/${locale}/privacy`} className="underline text-gold">
          {t('learnMore')}
        </Link>
      </p>
      <div className="flex gap-3">
        <button onClick={() => handleChoice('declined')} className="px-4 py-2 text-sm border border-ivory/40 rounded-sm">
          {t('decline')}
        </button>
        <button onClick={() => handleChoice('accepted')} className="px-4 py-2 text-sm bg-gold rounded-sm">
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
