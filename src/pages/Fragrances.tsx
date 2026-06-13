import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import FragranceFinder from '../components/sections/FragranceFinder';
import Newsletter from '../components/sections/Newsletter';
import { FRAGRANCES } from '../data/content';

const families = ['All', 'Woody Oriental', 'Floral', 'Amber Oriental', 'Woody Floral', 'Leather Woody', 'Floral Oriental'];

export default function Fragrances() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? FRAGRANCES : FRAGRANCES.filter((f) => f.family === filter);

  return (
    <PageTransition>
      <SEO
        title="Fragrances"
        description="Shop the complete Shelby Aura fragrance range — oud, rose, amber and more in Extrait de Parfum, Eau de Parfum and Parfum concentrations."
        path="/fragrances"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-charcoal">
        <div className="container-luxe">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="eyebrow">All Fragrances</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory">
              The complete <span className="italic text-champagne">library.</span>
            </h1>
          </motion.div>

          {/* Filter */}
          <div className="mt-10 flex flex-wrap gap-3">
            {families.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] transition border ${
                  filter === f
                    ? 'border-gold bg-gold text-ink'
                    : 'border-white/20 text-ivory/70 hover:border-gold hover:text-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-luxe">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((f, i) => (
              <Reveal key={f.id} delay={i * 0.06}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                    />
                    <button
                      aria-label={`Add ${f.name} to cart`}
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-gold text-ink opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-champagne"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="mt-5">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-gold">
                      {f.collection} · {f.concentration}
                    </span>
                    <h3 className="font-serif text-xl text-ivory mt-1">{f.name}</h3>
                    <div className="mt-3 space-y-1 text-xs text-ivory/50">
                      <p>Top: {f.top}</p>
                      <p>Heart: {f.heart}</p>
                      <p>Base: {f.base}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-champagne">{f.price}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-ivory/40">
                        {f.family}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      <FragranceFinder />
      <Newsletter />
    </PageTransition>
  );
}
