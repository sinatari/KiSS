import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/Section';
import Card from '@/components/Card';

export default function AboutPage() {
  const t = useTranslations('about');
  const values = ['care', 'honesty', 'craft', 'culture'] as const;

  return (
    <>
      <Section>
        <h1 className="heading-xl text-center mb-12">{t('title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image src="/images/founder-portrait.jpg" alt="KiSS founder portrait" fill className="object-cover" />
          </div>
          <div>
            <h2 className="heading-lg mb-4">{t('storyTitle')}</h2>
            <p className="text-charcoal/80 leading-relaxed">{t('storyBody')}</p>
          </div>
        </div>
      </Section>

      <Section bg="stone">
        <h2 className="heading-lg text-center mb-10">{t('philosophyTitle')}</h2>
        <h3 className="heading-md text-center mb-8 text-charcoal/70">{t('valuesTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v} className="text-center">
              <p className="text-charcoal/80">{t(`values.${v}`)}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
