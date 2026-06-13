import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import SEO from '../components/ui/SEO';
import Reveal from '../components/ui/Reveal';
import { BRAND } from '../data/content';

const faqs = [
  { q: 'Do you ship internationally?', a: 'Yes — we ship to over 40 countries. Delivery times vary by region; most orders arrive within 5–10 business days. Free shipping on all orders over AED 500.' },
  { q: 'Can I visit your atelier in Dubai?', a: 'Yes. Our private atelier is open by appointment only. Please contact us via phone or email to arrange your visit.' },
  { q: 'Do you offer bespoke or personalised fragrances?', a: 'Absolutely. We offer bespoke blending sessions at our atelier where you work one-on-one with our master perfumer to create a signature scent unique to you.' },
  { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery on sealed, unused products. Opened products are eligible for exchange. Please contact us to arrange.' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Contact Shelby Aura — Dubai luxury fragrance house. Phone, email, WhatsApp and atelier visit enquiries."
        path="/contact"
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-charcoal">
        <div className="container-luxe">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow">Get in Touch</span>
            <h1 className="display mt-5 text-5xl md:text-7xl text-ivory">
              We&apos;d love to <span className="italic text-champagne">hear from you.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-ink py-24">
        <div className="container-luxe grid gap-16 lg:grid-cols-2">
          {/* Left: info */}
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-3xl text-ivory">Reach us directly</h2>
                <p className="mt-3 text-ivory/60 leading-relaxed">
                  Our team is available Saturday through Thursday, 9am–7pm GST. We aim to respond
                  to all enquiries within 24 hours.
                </p>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-gold mb-1">Phone</p>
                    <a href={`tel:${BRAND.phoneRaw}`} className="text-ivory hover:text-champagne transition">
                      {BRAND.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30">
                    <MessageCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-gold mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${BRAND.phoneRaw}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ivory hover:text-champagne transition"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-gold mb-1">Email</p>
                    <a href={`mailto:${BRAND.email}`} className="text-ivory hover:text-champagne transition break-all">
                      {BRAND.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-gold mb-1">Location</p>
                    <p className="text-ivory">{BRAND.location}</p>
                    <p className="mt-1 text-xs text-ivory/50">Atelier visits by appointment</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-luxe text-gold mb-1">Hours</p>
                    <p className="text-ivory">Sat–Thu, 9:00 am – 7:00 pm GST</p>
                  </div>
                </li>
              </ul>

              <div className="flex gap-4 flex-wrap">
                {BRAND.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-luxe text-ivory/55 hover:text-gold transition"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15}>
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-3xl text-ivory">Send us a message</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-luxe text-gold mb-2">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-luxe text-gold mb-2">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-luxe text-gold mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-luxe text-gold mb-2">Subject</label>
                  <select className="w-full border-b border-white/20 bg-ink py-3 text-sm text-ivory/80 focus:border-gold focus:outline-none transition">
                    <option>General Enquiry</option>
                    <option>Order Support</option>
                    <option>Bespoke Fragrance</option>
                    <option>Atelier Visit</option>
                    <option>Corporate Gifting</option>
                    <option>Press &amp; Media</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-luxe text-gold mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-gold px-10 py-4 text-xs uppercase tracking-luxe text-ink hover:bg-champagne transition"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full items-center"
              >
                <div>
                  <div className="font-serif text-4xl text-gold">Thank you.</div>
                  <p className="mt-4 text-ivory/70 leading-relaxed">
                    Your message has been received. A member of the Shelby Aura team will be in
                    touch within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-charcoal py-24">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <span className="eyebrow">Frequently Asked</span>
            <h2 className="display mt-5 text-4xl text-ivory">Questions & answers.</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-white/10">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer items-center justify-between font-serif text-xl text-ivory list-none">
                    {faq.q}
                    <span className="ml-4 text-gold text-2xl group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-ivory/60 leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
