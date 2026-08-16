export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WeddingPlanner',
    name: 'KiSS',
    description: 'Boutique wedding and event planning studio in Stockholm, Sweden.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kiss-weddings.se',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Birger Jarlsgatan 12',
      addressLocality: 'Stockholm',
      postalCode: '114 34',
      addressCountry: 'SE'
    },
    telephone: '+46-8-123-456-78',
    priceRange: '$$$',
    sameAs: ['https://instagram.com/kiss.weddings']
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
