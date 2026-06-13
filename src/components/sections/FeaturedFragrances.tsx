import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FRAGRANCES } from '../../data/content';

export default function FeaturedFragrances() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured Fragrances" title="The icons of the house" />
          <Button to="/fragrances" variant="ghost">
            View All Fragrances →
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FRAGRANCES.slice(0, 4).map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
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
                <p className="mt-1 text-xs text-ivory/50">
                  {f.top} · {f.heart} · {f.base}
                </p>
                <p className="mt-3 text-sm text-champagne">{f.price}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
