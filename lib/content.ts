export type ServiceTierKey = 'full' | 'partial' | 'dayOf' | 'destination' | 'elopement' | 'corporate';

export const serviceTierKeys: ServiceTierKey[] = ['full', 'partial', 'dayOf', 'destination', 'elopement', 'corporate'];

export type PortfolioItem = {
  slug: string;
  venueType: 'castle' | 'countryside' | 'waterfront' | 'city';
  title: string;
  location: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  { slug: 'sofia-and-daniel', venueType: 'castle', title: 'Sofia & Daniel', location: 'Skokloster Castle', image: '/images/wedding-castle-01.jpg' },
  { slug: 'elin-and-marcus', venueType: 'countryside', title: 'Elin & Marcus', location: 'Sörmland Countryside', image: '/images/wedding-countryside-01.jpg' },
  { slug: 'noor-and-erik', venueType: 'waterfront', title: 'Noor & Erik', location: 'Djurgården Waterfront', image: '/images/wedding-waterfront-01.jpg' },
  { slug: 'lina-and-oscar', venueType: 'city', title: 'Lina & Oscar', location: 'Gamla Stan, Stockholm', image: '/images/wedding-city-01.jpg' },
  { slug: 'anna-and-johan', venueType: 'castle', title: 'Anna & Johan', location: 'Tullgarn Palace', image: '/images/wedding-castle-02.jpg' },
  { slug: 'sara-and-viktor', venueType: 'waterfront', title: 'Sara & Viktor', location: 'Lake Mälaren', image: '/images/wedding-waterfront-02.jpg' }
];

export type Venue = {
  name: string;
  type: string;
  location: string;
  image: string;
};

export const venues: Venue[] = [
  { name: 'Skokloster Castle', type: 'Castle', location: 'Uppland', image: '/images/venue-skokloster.jpg' },
  { name: 'Tullgarn Palace', type: 'Castle', location: 'Södermanland', image: '/images/venue-tullgarn.jpg' },
  { name: 'Djurgården Waterfront Manor', type: 'Waterfront', location: 'Stockholm', image: '/images/venue-djurgarden.jpg' },
  { name: 'Sörmland Countryside Barn', type: 'Countryside', location: 'Sörmland', image: '/images/venue-sormland.jpg' },
  { name: 'Gamla Stan Rooftop', type: 'City', location: 'Stockholm', image: '/images/venue-gamlastan.jpg' },
  { name: 'Lake Mälaren Pavilion', type: 'Waterfront', location: 'Mälaren', image: '/images/venue-malaren.jpg' }
];

export type Testimonial = {
  name: string;
  quote: { en: string; fa: string; sv: string };
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sofia & Daniel',
    quote: {
      en: 'KiSS gave us the wedding of our dreams without a single moment of stress. Every detail felt personal.',
      fa: 'کیس عروسی رویایی ما را بدون کوچک‌ترین لحظه استرس برایمان رقم زد. هر جزئیات شخصی و خاص بود.',
      sv: 'KiSS gav oss vårt drömbröllop utan en enda stressig stund. Varje detalj kändes personlig.'
    }
  },
  {
    name: 'Noor & Erik',
    quote: {
      en: 'As a destination couple, we worried about planning from abroad. KiSS made it effortless and beautiful.',
      fa: 'به‌عنوان زوجی که از خارج برنامه‌ریزی می‌کردیم نگران بودیم، اما کیس همه چیز را ساده و زیبا کرد.',
      sv: 'Som destinationspar oroade vi oss för planering på distans. KiSS gjorde det enkelt och vackert.'
    }
  }
];
