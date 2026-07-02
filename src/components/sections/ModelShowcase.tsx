import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from '@/components/ui/Link';
import Reveal from '@/components/animations/Reveal';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Counter from '@/components/animations/Counter';
import { VEHICLES } from '@/data/vehicles';
import { formatLakh, cn } from '@/lib/utils';

/**
 * Interactive lineup explorer: a vertical model list drives a large stage
 * image with animated key stats — a faster, more tactile way to browse six
 * cars than a card grid.
 */
export default function ModelShowcase() {
  const [active, setActive] = useState(0);
  const vehicle = VEHICLES[active];

  return (
    <section className="aurora relative overflow-hidden bg-abyss py-24 md:py-36">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">The Lineup</p>
        <AnimatedHeading text="Choose Your Current" className="heading-lg max-w-4xl text-foam" />

        <div className="mt-14 grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* model list */}
          <Reveal stagger={0.07} className="flex flex-col">
            {VEHICLES.map((v, i) => (
              <button
                key={v.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  'group flex items-baseline justify-between gap-4 border-b py-5 text-left transition-colors duration-300',
                  i === active ? 'border-aqua/50' : 'border-abyss-line hover:border-aqua/30',
                )}
              >
                <span
                  className={cn(
                    'display-name text-2xl transition-colors duration-300 md:text-3xl',
                    i === active ? 'text-aurora' : 'text-foam/45 group-hover:text-foam/80',
                  )}
                >
                  {v.name.replace('BYD ', '')}
                </span>
                <span className={cn('numeric shrink-0 text-xs transition-colors', i === active ? 'text-mist' : 'text-mist-dim')}>
                  {v.badge}
                </span>
              </button>
            ))}
            <Link
              href="/models"
              className="kicker mt-8 inline-flex items-center gap-2 text-aqua transition-colors hover:text-seafoam"
            >
              Compare All Models
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>

          {/* stage */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={vehicle.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <Link href={`/models/${vehicle.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-3xl shadow-float">
                    <img
                      src={vehicle.cardImage}
                      alt={vehicle.name}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 md:p-8">
                      <div>
                        <p className="kicker text-aqua">{vehicle.tagline}</p>
                        <p className="display-name mt-2 text-3xl text-foam md:text-4xl">
                          {vehicle.name.replace('BYD ', '')}
                        </p>
                      </div>
                      <span className="glass hidden items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold tracking-[0.14em] text-foam uppercase transition-colors group-hover:text-aqua md:inline-flex">
                        Discover
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4">
                  {vehicle.highlightStats.map((s) => (
                    <div key={s.label} className="card-dark px-5 py-4">
                      <p className="numeric text-2xl font-semibold text-foam">
                        <Counter value={s.value} />
                        {s.unit && <span className="ml-1 text-sm text-aqua">{s.unit}</span>}
                      </p>
                      <p className="mt-1 text-[11px] tracking-wide text-mist-dim uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 numeric text-sm text-mist">
                  From <span className="text-lg font-semibold text-foam">Rs. {formatLakh(vehicle.startingPrice)}</span>
                  <span className="ml-2 text-mist-dim">· {vehicle.variants.length > 1 ? `${vehicle.variants.length} variants` : 'single variant'}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
