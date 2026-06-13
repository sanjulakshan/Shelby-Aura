import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import Newsletter from '../components/sections/Newsletter';
import { MEDIA } from '../config/media';

const timeline = [
  { year: '2018', title: 'A Vision is Born', body: 'Founded in Dubai with a single mission: to honour the art of Arabian perfumery for the modern age.' },
  { year: '2019', title: 'The First Collection', body: 'Royal Oud — our founding fragrance — launches to critical acclaim at the Dubai International Fragrance Show.' },
  { year: '2021', title: 'The Atelier Opens', body: 'Our private blending atelier opens in Dubai\'s design district, welcoming VIP clients and bespoke consultations.' },
  { year: '2023', title: 'Beauty Expansion', body: 'The Signature Beauty Collection launches, extending our philosophy of luxury into skincare and body rituals.' },
  { year: '2025', title: 'Global Reach', body: 'Shelby Aura ships to over 40 countries, with flagship boutiques planned across the Gulf, Europe and Asia.' },
];

const values = [
  { t: 'Authenticity', d: 'Every note, every ingredient, every detail is chosen for meaning — never for convention.' },
  { t: 'Excellence', d: 'We hold our compositions to the highest standard of niche perfumery worldwide.' },
  { t: 'Legacy', d: 'We create fragrances that outlast the moment and become part of your story.' },
  { t: 'Community', d: 'Shelby Aura gives 2% of every sale to artisan perfumers in the Arabian Gulf.' },
];

export default function BrandStory() {
  return (
    <PageTransition>
      <SEO
        title="Brand Story"
        description="The story of Shelby Aura — a luxury fragrance house born in Dubai, where Arabian heritage and modern luxury become one."
        path="/brand-story"
        image={MEDIA.atelier}
      />

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={MEDIA.atelier} alt="The Shelby Aura atelier" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        </div>
        <div className="container-luxe relative z-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="eyebrow">Our Story</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory max-w-3xl">
              A house built on{' '}
              <span className="italic text-champagne">passion & patience.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="eyebrow">The Beginning</span>
            <h2 className="display mt-5 text-4xl md:text-5xl text-ivory">
              Born from a love of <span className="italic text-champagne">memory.</span>
            </h2>
            <div className="mt-8 space-y-5 text-ivory/65 leading-relaxed">
              <p>
                Shelby Aura was founded on a simple belief: that fragrance is the most powerful
                form of memory. Long before the first bottle was created, our founder spent years
                immersed in the souks of Oman, the rose fields of Taif and the oud markets of
                Cambodia — learning, absorbing, understanding.
              </p>
              <p>
                The result is a house that refuses to compromise. We source only the finest raw
                materials, work exclusively with master perfumers who share our obsession with
                quality, and take the time — sometimes years — to perfect each composition before
                it reaches your hands.
              </p>
              <p>
                Shelby Aura is not fast fashion for fragrance. We are a house that believes the
                extraordinary is always worth waiting for.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={MEDIA.oud} alt="Rare oud ingredients" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-charcoal py-24">
        <div className="container-luxe">
          <SectionWrapper>
            <Reveal>
              <span className="eyebrow">Our Journey</span>
              <h2 className="display mt-5 text-4xl md:text-5xl text-ivory">Chapter by chapter.</h2>
            </Reveal>
          </SectionWrapper>
          <div className="mt-16 space-y-0">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.07}>
                <div className="grid grid-cols-[80px_1fr] gap-8 border-b border-white/10 py-10">
                  <span className="font-serif text-3xl text-gold">{t.year}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ivory">{t.title}</h3>
                    <p className="mt-2 text-sm text-ivory/60 leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-24">
        <div className="container-luxe">
          <Reveal>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="display mt-5 text-4xl md:text-5xl text-ivory max-w-xl">
              The pillars of <span className="italic text-champagne">the house.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="border-t border-gold/30 pt-8">
                  <h3 className="font-serif text-2xl text-champagne">{v.t}</h3>
                  <p className="mt-4 text-sm text-ivory/60 leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={MEDIA.atelier} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="container-luxe relative z-10 max-w-2xl">
          <Reveal>
            <span className="eyebrow">Visit the Atelier</span>
            <h2 className="display mt-5 text-4xl md:text-6xl text-ivory">
              Experience Shelby Aura <span className="italic text-champagne">in person.</span>
            </h2>
            <p className="mt-6 text-ivory/65 leading-relaxed">
              Our private atelier in Dubai's design district is open for VIP consultations,
              bespoke fragrance creation and curated brand experiences.
            </p>
            <div className="mt-10">
              <Button to="/contact">Book an Appointment</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
