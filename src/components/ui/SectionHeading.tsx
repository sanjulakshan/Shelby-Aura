import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/motion';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, light, center }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`display mt-5 text-4xl md:text-6xl text-balance ${light ? 'text-ink' : 'text-ivory'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-ink/70' : 'text-ivory/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
