'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/Section';
import { portfolioItems } from '@/lib/content';
import clsx from 'clsx';

type FilterKey = 'all' | 'castle' | 'countryside' | 'waterfront' | 'city';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [filter, setFilter] = useState<FilterKey>('all');

  const filters: FilterKey[] = ['all', 'castle', 'countryside', 'waterfront', 'city'];
  const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter((p) => p.venueType === filter);

  return (
    <Section>
      <h1 className="heading-xl text-center mb-3">{t('title')}</h1>
      <p className="text-center text-charcoal/70 mb-10">{t('subtitle')}</p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              'px-4 py-2 text-sm rounded-sm border transition-colors',
              filter === f ? 'bg-navy text-ivory border-navy' : 'border-stone text-charcoal hover:bg-stone'
            )}
          >
            {t(`filters.${f}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.slug} className="group relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={item.image}
              alt={`${item.title} wedding at ${item.location}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-ivory">
              <p className="font-serif text-lg">{item.title}</p>
              <p className="text-xs text-ivory/80">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
