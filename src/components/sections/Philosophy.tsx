import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { MEDIA } from '../../config/media';

const pillars = [
  { t: 'Heritage', d: 'Rooted in centuries of Arabian perfumery and the art of the majlis.' },
  { t: 'Artistry', d: 'Each composition hand-blended by master perfumers in small batches.' },
  { t: 'Rare Ingredients', d: 'Aged oud, Taif rose and precious amber sourced ethically worldwide.' },
  { t: 'Sustainability', d: 'Responsible sourcing, refillable flacons and recyclable packaging.' },
];

export default function Philosophy() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Our Philosophy"
            title="A house built on craftsmanship & soul"
            subtitle="Shelby Aura is more than fragrance — it is a celebration of memory, identity and the timeless elegance of the East reimagined for the modern world."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="border-l border-gold/30 pl-5">
                  <h3 className="font-serif text-xl text-champagne">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/60">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={MEDIA.atelier}
              alt="The Shelby Aura atelier"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
