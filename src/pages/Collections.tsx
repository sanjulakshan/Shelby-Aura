import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import Newsletter from '../components/sections/Newsletter';
import { COLLECTIONS } from '../data/content';

export default function Collections() {
  return (
    <PageTransition>
      <SEO
        title="Collections"
        description="Explore the signature Shelby Aura fragrance collections — Royal Oud, Desert Rose, Midnight Gold, Arabian Velvet and Signature Beauty."
        path="/collections"
      />

      {/* Page hero */}
      <section className="relative pt-36 pb-20 bg-charcoal overflow-hidden">
        <div className="container-luxe relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <span className="eyebrow">Our Collections</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory">
              Five worlds of <span className="italic text-champagne">scent.</span>
            </h1>
            <p className="mt-6 text-ivory/60 max-w-lg leading-relaxed">
              Each Shelby Aura collection is a self-contained universe — a mood, a memory, a
              destination rendered in fragrance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections grid */}
      <section className="bg-ink py-24">
        <div className="container-luxe space-y-32">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.id} delay={0.05}>
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                </div>
                <div>
                  <span className="eyebrow">{c.tagline}</span>
                  <h2 className="display mt-4 text-4xl md:text-5xl text-ivory">{c.name}</h2>
                  <p className="mt-6 text-ivory/65 leading-relaxed">{c.story}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {c.notes.map((n) => (
                      <span
                        key={n}
                        className="border border-gold/30 px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-gold"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Button to="/fragrances">Shop this Collection</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}
