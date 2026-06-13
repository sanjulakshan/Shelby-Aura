import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-ink py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[20vw] text-ivory whitespace-nowrap">SHELBY AURA</span>
      </div>
      <div className="container-luxe relative z-10 text-center">
        <Reveal>
          <span className="eyebrow">The Inner Circle</span>
          <h2 className="display mt-5 text-4xl md:text-6xl text-ivory">
            Be the first to know
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-ivory/60 leading-relaxed">
            New launches, exclusive access, VIP invitations and the stories behind each
            creation — delivered only to those who matter most.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="flex-1 border-b border-white/20 bg-transparent py-4 px-1 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-luxe text-ink transition hover:bg-champagne"
              >
                <Send size={14} /> Subscribe
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 text-center"
            >
              <p className="font-serif text-2xl text-champagne italic">Welcome to the Inner Circle.</p>
              <p className="mt-2 text-sm text-ivory/60">
                Expect the extraordinary — exclusively in your inbox.
              </p>
            </motion.div>
          )}
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-xs text-ivory/35">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
