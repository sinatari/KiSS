import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { venues } from '@/lib/content';

export default function VenuesPage() {
  const t = useTranslations('venues');

  return (
    <Section>
      <h1 className="heading-xl text-center mb-3">{t('title')}</h1>
      <p className="text-center text-charcoal/70 mb-12">{t('subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <Card key={venue.name} className="p-0 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={venue.image} alt={venue.name} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="heading-md mb-1">{venue.name}</h3>
              <p className="text-sm text-gold uppercase tracking-wide mb-1">{venue.type}</p>
              <p className="text-sm text-charcoal/70">{venue.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
