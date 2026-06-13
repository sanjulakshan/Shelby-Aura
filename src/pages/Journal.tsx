import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import Newsletter from '../components/sections/Newsletter';
import { ARTICLES } from '../data/content';

const categories = ['All', 'Heritage', 'Guide', 'Beauty', 'Craft', 'Culture'];

export default function Journal() {
  const [cat, setCat] = useState('All');
  const shown = cat === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === cat);

  return (
    <PageTransition>
      <SEO
        title="Journal"
        description="The Shelby Aura Journal — stories of Arabian heritage, fragrance craft, luxury beauty rituals and the culture of scent."
        path="/journal"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-charcoal">
        <div className="container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">The Journal</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory">
              Stories from <span className="italic text-champagne">the house.</span>
            </h1>
          </motion.div>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.15em] transition border ${
                  cat === c
                    ? 'border-gold bg-gold text-ink'
                    : 'border-white/20 text-ivory/70 hover:border-gold hover:text-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-ink py-16 md:py-24">
        <div className="container-luxe">
          <motion.div
            key={cat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.06}>
                <article className="group">
                  <Link to="/journal">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-gold px-3 py-1 text-[10px] uppercase tracking-luxe text-ink">
                        {a.category}
                      </span>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center gap-3 text-xs text-ivory/50">
                        <span>{a.date}</span>
                        <span>·</span>
                        <span>{a.readTime} read</span>
                      </div>
                      <h2 className="font-serif text-2xl text-ivory mt-3 group-hover:text-champagne transition-colors leading-tight">
                        {a.title}
                      </h2>
                      <p className="mt-3 text-sm text-ivory/60 leading-relaxed">{a.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-gold group-hover:gap-3 transition-all">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </PageTransition>
  );
}
