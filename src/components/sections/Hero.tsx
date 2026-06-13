import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { MEDIA } from '../../config/media';

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={MEDIA.hero}
          alt="Shelby Aura signature fragrance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </motion.div>

      <div className="container-luxe relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="eyebrow"
        >
          The House of Shelby Aura · Dubai
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="display mt-6 max-w-3xl text-5xl text-ivory md:text-8xl text-balance"
        >
          Crafted For The{' '}
          <span className="italic text-champagne">Extraordinary.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-7 max-w-md text-lg text-ivory/70"
        >
          Where Arabian heritage meets modern luxury — fragrances composed for those who live
          unforgettably.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button to="/collections">Shop Collection</Button>
          <Button to="/brand-story" variant="outline">
            Discover Our Story
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
