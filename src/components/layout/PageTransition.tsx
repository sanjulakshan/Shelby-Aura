import { motion } from 'framer-motion';
import { pageTransition } from '../../lib/motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  );
}
