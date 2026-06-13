import { useReducedMotion } from 'framer-motion';

export const useReveal = () => {
  const reduce = useReducedMotion();
  return {
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, margin: '-80px' },
    style: reduce ? { opacity: 1 } : undefined,
  };
};
