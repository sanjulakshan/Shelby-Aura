import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { LIMITED } from '../../data/content';

export default function LimitedEditions() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Limited Editions"
          title="Rare by design, fleeting by nature"
          subtitle="Hand-numbered creations released in the smallest of quantities. Once they are gone, they are gone."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LIMITED.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden"
            >
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
                  <Button to="/collections" variant="ghost" className="!px-0">
                    Reserve →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
