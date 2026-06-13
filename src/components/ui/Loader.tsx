import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <div className="font-serif text-3xl tracking-[0.3em] text-gold">SHELBY AURA</div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2 }}
              className="mx-auto mt-4 h-px bg-gold/60"
              style={{ maxWidth: 180 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
