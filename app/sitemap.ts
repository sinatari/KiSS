import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const pages = ['', '/about', '/services', '/portfolio', '/venues', '/journal', '/contact', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://kiss-weddings.se';
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${base}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.7
      });
    }
  }

  return entries;
}
