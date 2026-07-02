import { useState } from 'react';
import useSeo from '@/hooks/useSeo';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import VehicleCard from '@/components/ui/VehicleCard';
import CompareTable from '@/components/sections/CompareTable';
import EnquiryCTA from '@/components/sections/EnquiryCTA';
import { VEHICLES } from '@/data/vehicles';
import { formatLakh, cn } from '@/lib/utils';

const FILTERS = ['All', 'SUV', 'Hatchback', 'MPV'] as const;

/**
 * The showroom: filterable lineup built from the shared VehicleCard (the
 * flagship takes a wide hero slot), followed by a full side-by-side
 * comparison ledger of the entire range.
 */
export default function Models() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  useSeo({
    title: 'Models — The Full Electric Lineup',
    description:
      'Every BYD sold in Nepal: ATTO 1, ATTO 2, ATTO 3, DOLPHIN, SEALION 7 and M6 — prices, range, specifications and a full comparison.',
  });

  const list = VEHICLES.filter((v) => filter === 'All' || v.category === filter);
  const priceFloor = Math.min(...VEHICLES.map((v) => v.startingPrice));

  return (
    <>
      <div className="aurora relative bg-abyss pt-36 pb-24 md:pt-44">
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          {/* header */}
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="kicker mb-4 text-aqua">The Showroom</p>
              <AnimatedHeading text="Six Ways to Go Electric" className="heading-lg max-w-4xl text-foam" />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
                Every model shares the ultra-safe Blade Battery and e-Platform 3.0. The only
                question is how much car your life needs — starting at Rs. {formatLakh(priceFloor)}.
              </p>
            </div>
            <Reveal from="left" className="hidden gap-10 border-l border-abyss-line pl-10 lg:flex">
              {[
                { v: String(VEHICLES.length), l: 'Models' },
                { v: String(VEHICLES.reduce((n, v) => n + v.variants.length, 0)), l: 'Variants' },
                { v: '482 km', l: 'Max range' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="numeric text-3xl font-semibold text-foam">{s.v}</p>
                  <p className="mt-1 text-[10px] tracking-[0.16em] text-mist-dim uppercase">{s.l}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* filters */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {FILTERS.map((f) => {
              const count = f === 'All' ? VEHICLES.length : VEHICLES.filter((v) => v.category === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'group flex items-center gap-2 rounded-full px-6 py-2.5 font-numeric text-xs font-semibold tracking-[0.16em] uppercase transition-all',
                    filter === f ? 'bg-aqua text-abyss' : 'glass text-mist hover:text-foam',
                  )}
                >
                  {f}
                  <span
                    className={cn(
                      'rounded-full px-1.5 py-0.5 text-[9px]',
                      filter === f ? 'bg-abyss/15 text-abyss' : 'bg-abyss-raised text-mist-dim',
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* the grid: flagship wide, rest two-up */}
          <div key={filter} className="mt-10 grid gap-7 md:grid-cols-2">
            {list.map((v, i) => (
              <Reveal key={v.slug} delay={Math.min(i * 0.07, 0.3)} className={cn(i === 0 && 'md:col-span-2')}>
                <VehicleCard vehicle={v} layout={i === 0 ? 'wide' : 'standard'} priority={i < 2} />
              </Reveal>
            ))}
          </div>

          <CompareTable vehicles={VEHICLES} />
        </div>
      </div>
      <EnquiryCTA />
    </>
  );
}
