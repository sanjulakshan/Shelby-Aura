import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
};

const base =
  'group inline-flex items-center justify-center gap-3 px-9 py-4 text-xs uppercase tracking-luxe font-medium transition-all duration-500 ease-lux';
const styles = {
  solid: 'bg-gold text-ink hover:bg-champagne',
  outline: 'border border-gold/60 text-ivory hover:bg-gold hover:text-ink',
  ghost: 'text-gold hover:text-champagne',
};

export default function Button({ to, href, children, variant = 'solid', onClick, className = '' }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <motion.span whileHover={{ x: 2 }} className="flex items-center gap-3">
      {children}
    </motion.span>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer">{inner}</a>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
}
