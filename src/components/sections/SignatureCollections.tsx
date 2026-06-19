import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { COLLECTIONS } from '../../data/content';

export default function SignatureCollections() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          center
          eyebrow="Signature Collections"
          title="Worlds of scent, told in chapters"
          subtitle="Five distinct universes — each a story of place, memory and emotion."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className={`group relative overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <Link to="/collections" className="block">
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="eyebrow">{c.tagline}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mt-2 flex items-center gap-2">
                    {c.name}
                    <ArrowUpRight
                      size={20}
                      className="text-gold transition-all sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0"
                    />
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-ivory/65 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100">
                    {c.story}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
