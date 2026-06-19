import { MEDIA } from '../config/media';

export const BRAND = {
  name: 'Shelby Aura',
  tagline: 'Where Arabian Heritage Meets Modern Luxury',
  phone: '+971 50 698 2268',
  phoneRaw: '971506982268',
  email: 'shelbydevelopmentsae@gmail.com',
  location: 'Dubai, United Arab Emirates',
  credit: 'Designed & Developed by Shelby Developments',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
  ],
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Fragrances', to: '/fragrances' },
  { label: 'Beauty', to: '/beauty' },
  { label: 'Gifts', to: '/gifts' },
  { label: 'Brand Story', to: '/brand-story' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
];

export const COLLECTIONS = [
  {
    id: 'royal-oud',
    name: 'Royal Oud Collection',
    tagline: 'The throne of fragrance',
    story:
      'Aged Cambodian oud entwined with saffron and royal amber — a regal signature distilled from centuries of Arabian perfumery.',
    image: MEDIA.oud,
    notes: ['Aged Oud', 'Saffron', 'Royal Amber', 'Sandalwood'],
  },
  {
    id: 'desert-rose',
    name: 'Desert Rose Collection',
    tagline: 'Bloom of the dunes',
    story:
      'Taif rose petals harvested at dawn, layered over warm musk and pink pepper — a romance written across golden sands.',
    image: MEDIA.rose,
    notes: ['Taif Rose', 'Pink Pepper', 'White Musk', 'Peony'],
  },
  {
    id: 'midnight-gold',
    name: 'Midnight Gold Collection',
    tagline: 'Light woven into darkness',
    story:
      'Liquid amber, vanilla orchid and smoked incense — an opulent nocturne for the extraordinary.',
    image: MEDIA.hero,
    notes: ['Amber', 'Vanilla Orchid', 'Incense', 'Tonka'],
  },
  {
    id: 'arabian-velvet',
    name: 'Arabian Velvet Collection',
    tagline: 'The softness of power',
    story:
      'Velvet suede, black orchid and creamy tonka create an intimate, sensual veil that lingers like memory.',
    image: MEDIA.velvet,
    notes: ['Suede', 'Black Orchid', 'Tonka', 'Cashmere Wood'],
  },
  {
    id: 'signature-beauty',
    name: 'Signature Beauty Collection',
    tagline: 'Radiance, refined',
    story:
      'Skincare and body rituals infused with our signature accords — luxury you can wear and feel.',
    image: MEDIA.beauty,
    notes: ['Rose Water', 'Argan', 'Gold Silk', '24h Hydration'],
  },
];

export const FRAGRANCES = [
  { id: 'f1', name: 'Royal Oud Intense', collection: 'Royal Oud', concentration: 'Extrait de Parfum', price: 'AED 1,250', image: MEDIA.oud, top: 'Saffron, Bergamot', heart: 'Aged Oud, Rose', base: 'Amber, Sandalwood', family: 'Woody Oriental' },
  { id: 'f2', name: 'Desert Rose Eau', collection: 'Desert Rose', concentration: 'Eau de Parfum', price: 'AED 890', image: MEDIA.roseProduct, top: 'Pink Pepper, Litchi', heart: 'Taif Rose, Peony', base: 'White Musk, Cedar', family: 'Floral' },
  { id: 'f3', name: 'Midnight Gold', collection: 'Midnight Gold', concentration: 'Extrait de Parfum', price: 'AED 1,490', image: MEDIA.midnight, top: 'Bergamot, Cardamom', heart: 'Amber, Orchid', base: 'Incense, Tonka', family: 'Amber Oriental' },
  { id: 'f4', name: 'Arabian Velvet', collection: 'Arabian Velvet', concentration: 'Eau de Parfum', price: 'AED 950', image: MEDIA.velvet, top: 'Black Plum', heart: 'Black Orchid, Suede', base: 'Tonka, Cashmere Wood', family: 'Woody Floral' },
  { id: 'f5', name: 'Oud Royale Noir', collection: 'Royal Oud', concentration: 'Parfum', price: 'AED 1,680', image: MEDIA.oudAlt, top: 'Saffron', heart: 'Smoked Oud, Leather', base: 'Patchouli, Vetiver', family: 'Leather Woody' },
  { id: 'f6', name: 'Rose Dune Elixir', collection: 'Desert Rose', concentration: 'Extrait de Parfum', price: 'AED 1,120', image: MEDIA.rose, top: 'Saffron, Raspberry', heart: 'Damask Rose', base: 'Oud, Musk', family: 'Floral Oriental' },
];

export const BEAUTY = [
  { id: 'b1', name: 'Gold Silk Radiance Serum', category: 'Skincare', price: 'AED 620', image: MEDIA.serum, desc: 'A weightless elixir with 24K gold particles and rose stem cells for luminous, firm skin.' },
  { id: 'b2', name: 'Amber Body Veil', category: 'Body Care', price: 'AED 380', image: MEDIA.bodyOil, desc: 'A silken body oil scented with our signature amber accord, leaving skin satin-soft.' },
  { id: 'b3', name: 'Rose Renewal Cream', category: 'Skincare', price: 'AED 540', image: MEDIA.nightCream, desc: 'A rich night cream of Taif rose and hyaluronic complex for deep overnight repair.' },
  { id: 'b4', name: 'Oud Hammam Ritual Set', category: 'Wellness', price: 'AED 760', image: MEDIA.hammam, desc: 'A complete bathing ritual — scrub, soap and oil infused with rare oud.' },
];

export const LIMITED = [
  { id: 'l1', name: 'The Sovereign — N°01', edition: 'Limited to 100 pieces', price: 'AED 4,800', image: MEDIA.sovereign, desc: 'A hand-numbered crystal flacon of our rarest Cambodian oud, capped in 18K gold.' },
  { id: 'l2', name: 'Golden Hour Coffret', edition: 'Seasonal · 250 pieces', price: 'AED 2,200', image: MEDIA.gift, desc: 'A curated trio celebrating the desert sunset, presented in a lacquered chest.' },
];

export const GIFT_SETS = [
  { id: 'g1', name: 'The Royal Experience', contents: ['Royal Oud Intense 100ml', 'Oud Hammam Ritual Set', 'Gold Silk Serum'], price: 'AED 2,400', image: MEDIA.gift },
  { id: 'g2', name: 'Desert Bloom Set', contents: ['Desert Rose Eau 100ml', 'Rose Renewal Cream', 'Amber Body Veil'], price: 'AED 1,650', image: MEDIA.rose },
  { id: 'g3', name: 'Midnight Luxury Duo', contents: ['Midnight Gold 100ml', 'Arabian Velvet 100ml'], price: 'AED 2,100', image: MEDIA.midnight },
  { id: 'g4', name: 'Bespoke Discovery Set', contents: ['6 × 10ml Discovery Vials', 'Scent Journal', 'Silk Pouch'], price: 'AED 490', image: MEDIA.beauty },
];

export const TESTIMONIALS = [
  { name: 'Layla A.', location: 'Dubai, UAE', rating: 5, quote: 'Royal Oud Intense lasts from morning to midnight. The sillage is unmatched — strangers stop me everywhere. This is true luxury.' },
  { name: 'James W.', location: 'London, UK', rating: 5, quote: 'The packaging alone feels like receiving a treasure. Midnight Gold has become my signature. Worth every dirham.' },
  { name: 'Fatima H.', location: 'Riyadh, KSA', rating: 5, quote: 'Desert Rose is the most elegant rose I have ever worn — refined, never sweet. The craftsmanship is exceptional.' },
  { name: 'Sophia R.', location: 'Paris, FR', rating: 5, quote: 'I collect niche fragrances and Shelby Aura sits beside my Amouage and MFK. Quality, longevity and soul.' },
];

export const ARTICLES = [
  { id: 'a1', slug: 'history-of-arabian-oud', category: 'Heritage', title: 'The History of Arabian Oud', excerpt: 'From the rainforests of Cambodia to the majlis of the Gulf — tracing the journey of liquid gold.', readTime: '6 min', date: 'Mar 2025', cover: MEDIA.atelier },
  { id: 'a2', slug: 'choosing-your-signature-fragrance', category: 'Guide', title: 'Choosing Your Signature Fragrance', excerpt: 'A perfumer\'s guide to discovering the scent that becomes unmistakably, eternally you.', readTime: '5 min', date: 'Mar 2025', cover: MEDIA.rose },
  { id: 'a3', slug: 'luxury-beauty-rituals', category: 'Beauty', title: 'Luxury Beauty Rituals', excerpt: 'Slow beauty as ceremony — building a daily ritual worthy of your skin.', readTime: '4 min', date: 'Feb 2025', cover: MEDIA.beauty },
  { id: 'a4', slug: 'fragrance-layering-techniques', category: 'Craft', title: 'Fragrance Layering Techniques', excerpt: 'How to build a bespoke scent profile by layering oud, florals and amber.', readTime: '7 min', date: 'Feb 2025', cover: MEDIA.hammam },
  { id: 'a5', slug: 'modern-perfume-trends', category: 'Culture', title: 'Modern Perfume Trends', excerpt: 'The new wave of gender-fluid orientals redefining contemporary luxury.', readTime: '5 min', date: 'Jan 2025', cover: MEDIA.velvet },
];

export const FINDER = {
  Mood: ['Confident', 'Romantic', 'Mysterious', 'Serene'],
  Personality: ['Bold', 'Elegant', 'Sensual', 'Refined'],
  Occasion: ['Evening', 'Daytime', 'Special', 'Everyday'],
  Season: ['Summer', 'Winter', 'Spring', 'Autumn'],
};
