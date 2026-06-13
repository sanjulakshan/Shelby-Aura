import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import Newsletter from '../components/sections/Newsletter';
import { BEAUTY } from '../data/content';

export default function Beauty() {
  return (
    <PageTransition>
      <SEO
        title="Beauty"
        description="Shelby Aura luxury skincare and body care — Gold Silk serums, Rose renewal creams and Oud hammam rituals. Radiance as a ceremony."
        path="/beauty"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-ivory">
        <div className="container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="text-xs uppercase tracking-luxe text-bronze">Luxury Beauty</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ink">
              Radiance, as a <span className="italic text-bronze">ceremony.</span>
            </h1>
            <p className="mt-6 text-ink/60 max-w-lg leading-relaxed">
              Skincare and body rituals infused with our signature fragrance accords. Luxury
              you can see, feel and wear — morning and night.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-20">
        <div className="container-luxe grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BEAUTY.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <article className="group bg-ivory">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                  />
                  <button
                    aria-label={`Add ${b.name} to cart`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-bronze text-ivory opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold hover:text-ink"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div className="p-5">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-bronze">
                    {b.category}
                  </span>
                  <h3 className="font-serif text-lg text-ink mt-1">{b.name}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{b.desc}</p>
                  <p className="mt-4 text-sm text-bronze font-medium">{b.price}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Beauty ritual CTA */}
      <section className="bg-charcoal py-20">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <span className="eyebrow">The Ritual</span>
          <h2 className="display mt-5 text-4xl md:text-5xl text-ivory">
            Build your <span className="italic text-champagne">ritual.</span>
          </h2>
          <p className="mt-6 text-ivory/60 leading-relaxed">
            Our beauty advisors craft personalised regimens — cleansing, treatment and body care
            — that work in harmony with your chosen Shelby Aura fragrance.
          </p>
          <a
            href="https://wa.me/971506982268"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-luxe text-ink hover:bg-champagne transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}
