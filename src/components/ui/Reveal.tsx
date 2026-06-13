import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
