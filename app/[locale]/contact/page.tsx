'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Section from '@/components/Section';
import FormField from '@/components/FormField';
import Button from '@/components/Button';

export default function ContactPage() {
  const t = useTranslations('contact');
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'sv';

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.locale = locale;

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  const budgetOptions = [
    { value: '', label: '—' },
    { value: 'under-100k', label: 'Under 100,000 SEK' },
    { value: '100k-250k', label: '100,000–250,000 SEK' },
    { value: '250k-500k', label: '250,000–500,000 SEK' },
    { value: '500k-plus', label: '500,000+ SEK' }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="heading-xl mb-3">{t('title')}</h1>
          <p className="text-charcoal/70 mb-8">{t('subtitle')}</p>

          <div className="space-y-3 text-sm text-charcoal/80">
            <p><strong className="text-navy">{t('details.addressTitle')}:</strong> Birger Jarlsgatan 12, 114 34 Stockholm</p>
            <p><strong className="text-navy">{t('details.phoneTitle')}:</strong> +46 8 123 456 78</p>
            <p><strong className="text-navy">{t('details.emailTitle')}:</strong> hello@kiss-weddings.se</p>
            <p><strong className="text-navy">{t('details.instagramTitle')}:</strong> @kiss.weddings</p>
          </div>

          <div className="mt-8 aspect-video rounded-sm overflow-hidden border border-stone">
            <iframe
              title="KiSS studio location map"
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Stockholm,Sweden&output=embed"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <FormField label={t('form.name')} name="name" required />
          <FormField label={t('form.email')} name="email" type="email" required />
          <FormField label={t('form.phone')} name="phone" type="tel" />
          <div className="grid grid-cols-2 gap-4">
            <FormField label={t('form.weddingDate')} name="weddingDate" type="date" />
            <FormField label={t('form.guestCount')} name="guestCount" type="number" />
          </div>
          <FormField label={t('form.venue')} name="venue" />
          <FormField label={t('form.budget')} name="budget" as="select" options={budgetOptions} />
          <FormField label={t('form.message')} name="message" as="textarea" required />

          <Button type="submit" disabled={status === 'submitting'}>
            {t('form.submit')}
          </Button>

          {status === 'success' && <p className="text-sage text-sm">{t('form.success')}</p>}
          {status === 'error' && <p className="text-red-500 text-sm">{t('form.error')}</p>}
        </form>
      </div>
    </Section>
  );
}
