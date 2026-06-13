import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import SignatureCollections from '../components/sections/SignatureCollections';
import FeaturedFragrances from '../components/sections/FeaturedFragrances';
import ArtOfPerfumery from '../components/sections/ArtOfPerfumery';
import BeautyCollection from '../components/sections/BeautyCollection';
import FragranceFinder from '../components/sections/FragranceFinder';
import LimitedEditions from '../components/sections/LimitedEditions';
import Testimonials from '../components/sections/Testimonials';
import JournalPreview from '../components/sections/JournalPreview';
import InstagramShowcase from '../components/sections/InstagramShowcase';
import Newsletter from '../components/sections/Newsletter';
import { MEDIA } from '../config/media';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Luxury Perfume & Beauty House"
        description="Shelby Aura — a luxury fragrance and beauty house where Arabian heritage meets modern luxury. Discover exclusive oud collections, fine perfumes & beauty in Dubai."
        path="/"
        image={MEDIA.hero}
      />
      <Hero />
      <Philosophy />
      <SignatureCollections />
      <FeaturedFragrances />
      <ArtOfPerfumery />
      <BeautyCollection />
      <FragranceFinder />
      <LimitedEditions />
      <Testimonials />
      <JournalPreview />
      <InstagramShowcase />
      <Newsletter />
    </PageTransition>
  );
}
