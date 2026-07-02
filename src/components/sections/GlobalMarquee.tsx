import Counter from '@/components/animations/Counter';
import Reveal from '@/components/animations/Reveal';

const STATS = [
  { value: '30', suffix: '+', label: 'Years of battery R&D' },
  { value: '110', suffix: '+', label: 'Countries & regions' },
  { value: '10', suffix: 'M+', label: 'NEVs produced' },
  { value: '1', suffix: 'st', label: 'NEV sales worldwide' },
];

const TICKER = [
  'Blade Battery', 'e-Platform 3.0', 'CTB Technology', 'Ocean Aesthetics',
  'V2L Power', 'DiLink Cockpit', 'Zero Emissions', 'Build Your Dreams',
];

/** Global-scale proof band with an infinite technology ticker. */
export default function GlobalMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-abyss-line bg-abyss-soft py-16 md:py-20">
      <Reveal stagger={0.1} className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="numeric text-4xl font-semibold text-foam md:text-6xl">
              <Counter value={s.value} />
              <span className="text-aurora">{s.suffix}</span>
            </p>
            <p className="mt-2 text-xs tracking-[0.08em] text-mist-dim uppercase">{s.label}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-14 flex overflow-hidden border-t border-abyss-line pt-8 select-none" aria-hidden="true">
        <div className="flex shrink-0 animate-[drift_28s_linear_infinite] gap-12 pr-12">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-display text-xl font-medium text-foam/35">{t}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-aqua/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
