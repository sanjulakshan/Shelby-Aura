import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { NAV, BRAND } from '../../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = pathname === '/';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-ink/90 backdrop-blur-md py-3 sm:py-4 border-b border-white/5'
            : 'py-4 sm:py-6'
        }`}
      >
        <nav className="container-luxe flex items-center justify-between" aria-label="Primary">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif text-base sm:text-xl md:text-2xl tracking-[0.18em] sm:tracking-[0.25em] text-ivory"
          >
            SHELBY <span className="text-gold">AURA</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className={`lux-link text-xs uppercase tracking-[0.18em] transition-colors ${
                    pathname === n.to ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-3">
            <button aria-label="Search" className="hidden md:flex items-center justify-center w-11 h-11 text-ivory/80 hover:text-gold transition">
              <Search size={18} />
            </button>
            <button aria-label="Cart" className="flex items-center justify-center w-11 h-11 text-ivory/80 hover:text-gold transition">
              <ShoppingBag size={18} />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden flex items-center justify-center w-11 h-11 text-ivory"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu rendered outside header to avoid stacking context issues */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-charcoal flex flex-col lg:hidden"
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            <div className="flex justify-between items-center px-5 sm:px-6 py-4 sm:py-6">
              <span className="font-serif text-base sm:text-lg tracking-[0.25em] text-ivory">
                SHELBY <span className="text-gold">AURA</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-11 h-11 text-ivory"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="mt-4 flex flex-col gap-1 px-5 sm:px-8 overflow-y-auto">
              {NAV.map((n, i) => (
                <motion.li
                  key={n.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={`block py-4 font-serif text-2xl sm:text-3xl border-b border-white/5 transition-colors ${
                      pathname === n.to ? 'text-gold' : 'text-ivory active:text-gold'
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto px-5 sm:px-8 pb-8 text-xs text-ivory/50">
              {BRAND.phone}
              <br />
              {BRAND.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
