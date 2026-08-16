import { useTranslations } from 'next-intl';
import Section from '@/components/Section';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <Section>
      <h1 className="heading-xl mb-8">{t('title')}</h1>
      <div className="max-w-3xl text-charcoal/80 leading-relaxed space-y-4">
        <p>{t('body')}</p>
        <h2 className="heading-md pt-4">Data We Collect</h2>
        <p>Name, email, phone, wedding date, guest count, venue, budget range, and your message — submitted voluntarily via our contact form.</p>
        <h2 className="heading-md pt-4">How We Use Your Data</h2>
        <p>To respond to your inquiry and, if you become a client, to plan and coordinate your event. We do not sell or share your data with third parties for marketing purposes.</p>
        <h2 className="heading-md pt-4">Your Rights (GDPR)</h2>
        <p>You have the right to access, correct, or request deletion of your personal data at any time by contacting hello@kiss-weddings.se.</p>
      </div>
    </Section>
  );
}
