import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../data/content';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d: number) =>
    setI((p) => (p + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="container-luxe text-center">
        <SectionHeading center eyebrow="Voices of the House" title="Worn & adored worldwide" />
        <div className="mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-8 font-serif text-2xl md:text-3xl italic text-ivory leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block font-sans text-sm tracking-[0.15em] text-champagne">
                    {t.name}
                  </span>
                  <span className="block text-xs text-ivory/50 mt-1">{t.location}</span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-white/15 text-ivory hover:border-gold hover:text-gold transition"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs tracking-[0.15em] text-ivory/40">
              {i + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center border border-white/15 text-ivory hover:border-gold hover:text-gold transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
