import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { MEDIA } from '../../config/media';
import { BRAND } from '../../data/content';

const gallery = [
  MEDIA.hero,
  MEDIA.oud,
  MEDIA.rose,
  MEDIA.beauty,
  MEDIA.gift,
  MEDIA.atelier,
];

export default function InstagramShowcase() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="container-luxe">
        <div className="mb-10 text-center">
          <span className="eyebrow">Follow the House</span>
          <h2 className="display mt-4 text-3xl md:text-5xl text-ivory">@shelbyaura</h2>
        </div>
        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
          {gallery.map((src, i) => (
            <motion.a
              key={i}
              href={BRAND.socials[0].href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden block"
            >
              <img
                src={src}
                alt={`Shelby Aura Instagram ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 flex items-center justify-center transition-colors group-hover:bg-ink/50">
                <ExternalLink
                  size={22}
                  className="text-ivory opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={BRAND.socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-xs uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold transition"
          >
            <ExternalLink size={16} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
