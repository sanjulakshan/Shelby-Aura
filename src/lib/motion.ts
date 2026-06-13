import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};
