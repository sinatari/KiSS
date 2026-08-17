export type ServiceTierKey = 'weddings' | 'corporate' | 'studentFests' | 'ceremonies' | 'birthdays' | 'custom';

export const serviceTierKeys: ServiceTierKey[] = ['weddings', 'corporate', 'studentFests', 'ceremonies', 'birthdays', 'custom'];

export type PortfolioItem = {
  slug: string;
  eventType: 'weddings' | 'corporate' | 'studentFests' | 'ceremonies' | 'birthdays';
  title: string;
  location: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  { slug: 'sofia-and-daniel', eventType: 'weddings', title: 'Sofia & Daniel', location: 'Skokloster Castle', image: '/images/wedding-castle-01.jpg' },
  { slug: 'nordic-tech-summit', eventType: 'corporate', title: 'Nordic Tech Summit', location: 'Stockholm Waterfront Congress Centre', image: '/images/corporate-conference-01.jpg' },
  { slug: 'kth-graduation-ball', eventType: 'studentFests', title: 'KTH Graduation Ball', location: 'Nalen, Stockholm', image: '/images/student-fest-01.jpg' },
  { slug: 'elin-and-marcus', eventType: 'weddings', title: 'Elin & Marcus', location: 'Sörmland Countryside', image: '/images/wedding-countryside-01.jpg' },
  { slug: 'linnea-confirmation', eventType: 'ceremonies', title: "Linnéa's Confirmation", location: 'Storkyrkan, Stockholm', image: '/images/ceremony-01.jpg' },
  { slug: 'erik-60th', eventType: 'birthdays', title: "Erik's 60th Birthday", location: 'Djurgården Waterfront', image: '/images/birthday-01.jpg' },
  { slug: 'noor-and-erik', eventType: 'weddings', title: 'Noor & Erik', location: 'Djurgården Waterfront', image: '/images/wedding-waterfront-01.jpg' },
  { slug: 'annual-partner-gala', eventType: 'corporate', title: 'Annual Partner Gala', location: 'Grand Hôtel, Stockholm', image: '/images/corporate-gala-01.jpg' },
  { slug: 'lina-and-oscar', eventType: 'weddings', title: 'Lina & Oscar', location: 'Gamla Stan, Stockholm', image: '/images/wedding-city-01.jpg' }
];

export type Venue = {
  name: string;
  type: string;
  location: string;
  image: string;
};

export const venues: Venue[] = [
  { name: 'Skokloster Castle', type: 'Weddings & Ceremonies', location: 'Uppland', image: '/images/venue-skokloster.jpg' },
  { name: 'Tullgarn Palace', type: 'Weddings & Private Events', location: 'Södermanland', image: '/images/venue-tullgarn.jpg' },
  { name: 'Stockholm Waterfront Congress Centre', type: 'Corporate & Conferences', location: 'Stockholm', image: '/images/venue-waterfront-congress.jpg' },
  { name: 'Nalen', type: 'Student Fests & Balls', location: 'Stockholm', image: '/images/venue-nalen.jpg' },
  { name: 'Djurgården Waterfront Manor', type: 'Weddings & Birthdays', location: 'Stockholm', image: '/images/venue-djurgarden.jpg' },
  { name: 'Grand Hôtel Stockholm', type: 'Corporate Galas', location: 'Stockholm', image: '/images/venue-grandhotel.jpg' }
];

export type Testimonial = {
  name: string;
  quote: { en: string; fa: string; sv: string };
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sofia & Daniel — Wedding',
    quote: {
      en: 'KiSS gave us the wedding of our dreams without a single moment of stress. Every detail felt personal.',
      fa: 'کیس عروسی رویایی ما را بدون کوچک‌ترین لحظه استرس برایمان رقم زد. هر جزئیات شخصی و خاص بود.',
      sv: 'KiSS gav oss vårt drömbröllop utan en enda stressig stund. Varje detalj kändes personlig.'
    }
  },
  {
    name: 'Nordic Tech Summit — Corporate Conference',
    quote: {
      en: 'KiSS ran our 400-person summit flawlessly, from registration to the closing keynote. Nothing but professionalism.',
      fa: 'کیس اجلاس ۴۰۰ نفره ما را بی‌نقص برگزار کرد، از ثبت‌نام تا سخنرانی پایانی. کاملاً حرفه‌ای.',
      sv: 'KiSS genomförde vår 400-personers summit felfritt, från registrering till avslutande keynote. Enbart professionalism.'
    }
  },
  {
    name: 'KTH Student Union — Graduation Ball',
    quote: {
      en: 'They understood exactly the energy we wanted for our graduation ball and delivered a night none of us will forget.',
      fa: 'آن‌ها دقیقاً انرژی‌ای که برای بال فراقت‌مان می‌خواستیم را درک کردند و شبی فراموش‌نشدنی ساختند.',
      sv: 'De förstod exakt den energi vi ville ha för vår examensbal och levererade en kväll ingen av oss glömmer.'
    }
  }
];
