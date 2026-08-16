import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');
  const tb = useTranslations('brand');
  const tn = useTranslations('nav');
  const tc = useTranslations('contact');

  return (
    <footer className="bg-navy text-ivory mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-2xl mb-2">{tb('name')}</p>
          <p className="text-sm text-ivory/70">{tb('tagline')}</p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-gold">{t('quickLinks')}</p>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li><Link href={`/${locale}`}>{tn('home')}</Link></li>
            <li><Link href={`/${locale}/about`}>{tn('about')}</Link></li>
            <li><Link href={`/${locale}/services`}>{tn('services')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{tn('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-gold">{tc('details.addressTitle')}</p>
          <p className="text-sm text-ivory/80">Birger Jarlsgatan 12<br />114 34 Stockholm, Sweden</p>
          <p className="text-sm text-ivory/80 mt-2">+46 8 123 456 78</p>
          <p className="text-sm text-ivory/80">hello@kiss-weddings.se</p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3 text-gold">{t('followUs')}</p>
          <a href="https://instagram.com" className="text-sm text-ivory/80 hover:text-gold">Instagram</a>
          <p className="mt-4">
            <Link href={`/${locale}/privacy`} className="text-sm text-ivory/60 underline">{t('privacy')}</Link>
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {tb('name')}. {t('rights')}
      </div>
    </footer>
  );
}
