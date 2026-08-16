import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/Section';
import Card from '@/components/Card';

export default function JournalPage() {
  const t = useTranslations('journal');

  const posts = [
    { title: 'Five Tips for a Stress-Free Castle Wedding', date: 'June 2026', image: '/images/journal-01.jpg' },
    { title: 'Real Wedding: Sofia & Daniel at Skokloster', date: 'May 2026', image: '/images/journal-02.jpg' },
    { title: 'Vendor Spotlight: Stockholm Florists We Love', date: 'April 2026', image: '/images/journal-03.jpg' }
  ];

  return (
    <Section>
      <h1 className="heading-xl text-center mb-3">{t('title')}</h1>
      <p className="text-center text-charcoal/70 mb-12">{t('subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.title} className="p-0 overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs text-gold uppercase tracking-wide mb-2">{post.date}</p>
              <h3 className="heading-md">{post.title}</h3>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
