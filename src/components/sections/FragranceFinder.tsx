import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FINDER, FRAGRANCES } from '../../data/content';

const steps = Object.keys(FINDER) as (keyof typeof FINDER)[];

export default function FragranceFinder() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const done = step >= steps.length;

  const pick = (key: string, value: string) => {
    setChoices((c) => ({ ...c, [key]: value }));
    setStep((s) => s + 1);
  };
  const reset = () => {
    setChoices({});
    setStep(0);
  };
  const recommended = FRAGRANCES[Object.keys(choices).length % FRAGRANCES.length];

  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="container-luxe">
        <SectionHeading
          center
          eyebrow="Fragrance Finder"
          title="Discover your signature"
          subtitle="Answer four questions and let us reveal the scent written for you."
        />
        <div className="mx-auto mt-14 max-w-2xl glass rounded-sm p-8 md:p-12">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 flex items-center justify-center gap-2">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 w-10 transition-colors ${
                        i <= step ? 'bg-gold' : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-center font-serif text-2xl md:text-3xl text-ivory">
                  Choose your {steps[step].toLowerCase()}
                </h3>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {FINDER[steps[step]].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => pick(steps[step], opt)}
                      className="border border-white/15 py-5 text-sm uppercase tracking-[0.15em] text-ivory/80 transition hover:border-gold hover:text-gold"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <Sparkles className="mx-auto text-gold" size={32} />
                <p className="eyebrow mt-4">Your Match</p>
                <h3 className="font-serif text-3xl text-ivory mt-2">{recommended.name}</h3>
                <p className="mt-2 text-sm text-ivory/60">
                  {recommended.collection} · {recommended.concentration}
                </p>
                <img
                  src={recommended.image}
                  alt={recommended.name}
                  className="mx-auto mt-6 h-48 w-40 object-cover"
                />
                <p className="mt-4 text-champagne">{recommended.price}</p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button to="/fragrances">Shop Now</Button>
                  <Button onClick={reset} variant="outline">
                    Try Again
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
