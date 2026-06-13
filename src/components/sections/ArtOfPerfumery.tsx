import { motion } from 'framer-motion';
import { scaleIn } from '../../lib/motion';
import Reveal from '../ui/Reveal';
import { MEDIA } from '../../config/media';

const facts = [
  { n: '40+', l: 'Rare raw materials' },
  { n: '12yr', l: 'Maximum oud ageing' },
  { n: '100%', l: 'Hand-blended' },
];

export default function ArtOfPerfumery() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <img
          src={MEDIA.atelier}
          alt="The art of perfumery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </motion.div>
      <div className="container-luxe relative z-10 max-w-2xl">
        <Reveal>
          <span className="eyebrow">The Art of Perfumery</span>
          <h2 className="display mt-5 text-4xl md:text-6xl text-ivory text-balance">
            Where rare materials become{' '}
            <span className="italic text-champagne">poetry.</span>
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed">
            From the steam-distilled extraction of Taif rose to the slow maceration of aged oud,
            every Shelby Aura composition is born of patience. Our master perfumers blend by hand
            in small batches, honouring techniques passed through generations.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-12">
          {facts.map((f, i) => (
            <Reveal key={f.l} delay={i * 0.1}>
              <div>
                <div className="font-serif text-4xl text-gold">{f.n}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.15em] text-ivory/55">{f.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
