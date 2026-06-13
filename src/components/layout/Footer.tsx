import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { NAV, BRAND } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-20 pb-8">
      <div className="container-luxe grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-ivory">
            SHELBY <span className="text-gold">AURA</span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-ivory/55">
            A luxury fragrance &amp; beauty house where Arabian heritage meets modern elegance.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Explore</h4>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="lux-link text-sm text-ivory/65 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-ivory/65">
            <li className="flex gap-3">
              <Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-gold">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-gold break-all">
                {BRAND.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              {BRAND.location}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">The Inner Circle</h4>
          <p className="text-sm text-ivory/55 mb-4">Exclusive launches &amp; VIP access.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border-b border-white/15 focus-within:border-gold transition"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="w-full bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-luxe text-gold hover:text-champagne transition"
            >
              Join
            </button>
          </form>
          <div className="mt-6 flex gap-4 flex-wrap">
            {BRAND.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.15em] text-ivory/55 hover:text-gold transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-luxe mt-16 flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p className="text-gold/80">{BRAND.credit}</p>
      </div>
    </footer>
  );
}
