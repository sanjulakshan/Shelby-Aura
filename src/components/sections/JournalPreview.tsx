import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ARTICLES } from '../../data/content';

export default function JournalPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Shelby Aura Journal"
            title="Stories from the house"
            subtitle="Heritage, craft and the culture of luxury — told through our lens."
          />
          <Button to="/journal" variant="ghost">
            All Articles →
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <Link to="/journal">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.cover}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-gold px-3 py-1 text-[10px] uppercase tracking-luxe text-ink">
                    {a.category}
                  </span>
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs text-ivory/50">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime} read</span>
                  </div>
                  <h3 className="font-serif text-xl text-ivory mt-2 group-hover:text-champagne transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm text-ivory/60 leading-relaxed">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-gold group-hover:gap-3 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
