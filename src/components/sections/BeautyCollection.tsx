import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { BEAUTY } from '../../data/content';

export default function BeautyCollection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            light
            eyebrow="Luxury Beauty"
            title="Radiance, as a ritual"
            subtitle="Skincare and body care infused with our signature accords — luxury you can feel."
          />
          <Button to="/beauty" variant="ghost" className="!text-bronze hover:!text-gold">
            Explore Beauty →
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BEAUTY.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={b.image}
                  alt={b.name}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                />
              </div>
              <span className="mt-4 block text-[11px] uppercase tracking-[0.15em] text-bronze">
                {b.category}
              </span>
              <h3 className="font-serif text-lg text-ink mt-1">{b.name}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{b.desc}</p>
              <p className="mt-3 text-sm text-bronze">{b.price}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
