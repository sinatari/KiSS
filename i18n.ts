import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fa', 'sv'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sv';
export const rtlLocales: Locale[] = ['fa'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
