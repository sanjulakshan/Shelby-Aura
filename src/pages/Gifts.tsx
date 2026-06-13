import { motion } from 'framer-motion';
import { Gift, Lock } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Newsletter from '../components/sections/Newsletter';
import { GIFT_SETS, LIMITED } from '../data/content';

export default function Gifts() {
  return (
    <PageTransition>
      <SEO
        title="Gifts"
        description="Shelby Aura luxury gift sets — curated fragrance and beauty coffrets, limited editions and bespoke gifting for the extraordinary."
        path="/gifts"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-charcoal">
        <div className="container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">The Gift of Shelby Aura</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory">
              Give something <span className="italic text-champagne">unforgettable.</span>
            </h1>
            <p className="mt-6 text-ivory/60 max-w-lg leading-relaxed">
              Curated coffrets, hand-wrapped in our signature packaging — a gift that speaks
              before it is even opened.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift sets */}
      <section className="bg-ink py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="Gift Sets" title="Curated for every occasion" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {GIFT_SETS.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.08}>
                <article className="group">
                  <div className="relative aspect-square overflow-hidden bg-charcoal">
                    <img
                      src={g.image}
                      alt={g.name}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-gold/90 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-ink">
                      <Gift size={11} /> Gift Set
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-serif text-xl text-ivory">{g.name}</h3>
                    <ul className="mt-3 space-y-1">
                      {g.contents.map((c) => (
                        <li key={c} className="text-xs text-ivory/50">
                          · {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-champagne">{g.price}</span>
                      <Button to="/contact" variant="ghost" className="!px-0 !py-0 text-[11px]">
                        Order →
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Limited editions */}
      <section className="bg-charcoal py-24">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Limited Editions"
            title="Rare by design, fleeting by nature"
            subtitle="Hand-numbered creations released in the smallest quantities."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {LIMITED.map((l, i) => (
              <Reveal key={l.id} delay={i * 0.1}>
                <div className="group relative overflow-hidden">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute top-5 left-5 flex items-center gap-2 bg-ink/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-gold">
                      <Lock size={12} /> {l.edition}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="font-serif text-2xl md:text-3xl text-ivory">{l.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-ivory/65">{l.desc}</p>
                    <div className="mt-4 flex items-center gap-5">
                      <span className="text-champagne">{l.price}</span>
                      <Button to="/contact" variant="ghost" className="!px-0">
                        Reserve →
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke gifting CTA */}
      <section className="bg-ink py-20">
        <div className="container-luxe max-w-2xl mx-auto text-center">
          <span className="eyebrow">Bespoke Gifting</span>
          <h2 className="display mt-5 text-4xl text-ivory">
            Need something truly <span className="italic text-champagne">one-of-a-kind?</span>
          </h2>
          <p className="mt-6 text-ivory/60 leading-relaxed">
            Our gifting concierge crafts personalised fragrance experiences for corporate
            clients, weddings and private celebrations.
          </p>
          <div className="mt-10">
            <Button href={`mailto:shelbydevelopmentsae@gmail.com`}>Contact Our Concierge</Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}
