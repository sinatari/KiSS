import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/Button';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { serviceTierKeys, portfolioItems, testimonials } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = useTranslations('home');
  const ts = useTranslations('services');
  const tp = useTranslations('portfolio');

  return (
    <>
      <section className="relative h-[85vh] min-h-[560px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hero-wedding.jpg"
          alt="Elegant Stockholm wedding celebration"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/45" />
        <div className="relative z-10 max-w-3xl px-6 text-ivory">
          <h1 className="font-serif text-4xl md:text-h1 mb-5">{t('heroTitle')}</h1>
          <p className="text-lg md:text-xl mb-8 text-ivory/90">{t('heroSubtitle')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={`/${locale}/contact`}>{t('ctaPrimary')}</Button>
            <Button href={`/${locale}/portfolio`} variant="secondary" className="!text-ivory !border-ivory hover:!bg-ivory hover:!text-navy">
              {t('ctaSecondary')}
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg mb-4">{t('introTitle')}</h2>
          <p className="text-charcoal/80 leading-relaxed">{t('introBody')}</p>
        </div>
      </Section>

      <Section bg="stone">
        <h2 className="heading-lg text-center mb-10">{t('servicesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTierKeys.slice(0, 3).map((key) => (
            <Card key={key}>
              <h3 className="heading-md mb-2">{ts(`tiers.${key}.name`)}</h3>
              <p className="text-sm text-charcoal/75">{ts(`tiers.${key}.desc`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="heading-lg text-center mb-10">{t('featuredTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.slice(0, 3).map((item) => (
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
        <div className="text-center mt-10">
          <Button href={`/${locale}/portfolio`} variant="secondary">{tp('title')}</Button>
        </div>
      </Section>

      <Section bg="stone">
        <h2 className="heading-lg text-center mb-10">{t('testimonialsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="italic text-charcoal/80 mb-3">&ldquo;{item.quote[locale]}&rdquo;</p>
              <p className="text-sm font-semibold text-navy">{item.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="navy" className="text-center">
        <h2 className="font-serif text-3xl md:text-h2 mb-4">{t('finalCtaTitle')}</h2>
        <p className="text-ivory/85 mb-8 max-w-xl mx-auto">{t('finalCtaBody')}</p>
        <Button href={`/${locale}/contact`}>{t('ctaPrimary')}</Button>
      </Section>
    </>
  );
}
