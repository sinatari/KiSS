'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { serviceTierKeys } from '@/lib/content';
import { usePathname } from 'next/navigation';

export default function ServicesPage() {
  const t = useTranslations('services');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'sv';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'How far in advance should we book?', a: 'Most full-planning couples book 9-18 months ahead; destination weddings often earlier.' },
    { q: 'Do you work with couples outside Sweden?', a: 'Yes — a large part of our work is destination weddings for international couples.' },
    { q: 'Can we mix and match services?', a: 'Absolutely. Every package can be tailored to your specific needs and timeline.' }
  ];

  return (
    <>
      <Section>
        <h1 className="heading-xl text-center mb-3">{t('title')}</h1>
        <p className="text-center text-charcoal/70 mb-12">{t('subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTierKeys.map((key) => (
            <Card key={key} className="flex flex-col justify-between">
              <div>
                <h3 className="heading-md mb-2">{t(`tiers.${key}.name`)}</h3>
                <p className="text-sm text-charcoal/75">{t(`tiers.${key}.desc`)}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href={`/${locale}/contact`}>{t('quoteCta')}</Button>
        </div>
      </Section>

      <Section bg="stone">
        <h2 className="heading-lg text-center mb-8">{t('faqTitle')}</h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-stone rounded-sm">
              <button
                className="w-full text-left px-5 py-4 flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-medium text-navy">{faq.q}</span>
                <span className="text-gold text-xl">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="px-5 pb-4 text-sm text-charcoal/75">{faq.a}</p>}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
