import type { Vehicle, Spec } from '@/types';
import Link from '@/components/ui/Link';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import { formatLakh } from '@/lib/utils';

function spec(v: Vehicle, ...prefixes: string[]): string {
  for (const p of prefixes) {
    const s: Spec | undefined = v.specs.find((x) => x.label.toLowerCase().startsWith(p.toLowerCase()));
    if (s) return s.unit ? `${s.value} ${s.unit}` : s.value;
  }
  return '—';
}

const ROWS: { label: string; value: (v: Vehicle) => string }[] = [
  { label: 'Starting price', value: (v) => `Rs. ${formatLakh(v.startingPrice)}` },
  { label: 'Blade Battery', value: (v) => spec(v, 'Battery') },
  { label: 'Range', value: (v) => spec(v, 'Range') },
  { label: 'Max power', value: (v) => spec(v, 'Max Power') },
  { label: 'Max torque', value: (v) => spec(v, 'Max Torque') },
  { label: 'DC fast charge', value: (v) => spec(v, 'DC Fast') },
  { label: 'Seats', value: (v) => (spec(v, 'Seating') !== '—' ? spec(v, 'Seating') : '5') },
  { label: 'Variants', value: (v) => String(v.variants.length) },
];

/**
 * Whole-range comparison: one horizontally-scrollable ledger with a sticky
 * spec column, so all six cars can be read side by side.
 */
export default function CompareTable({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="mt-24">
      <p className="kicker mb-4 text-aqua">Side by Side</p>
      <AnimatedHeading text="Compare the Range" className="heading-md text-foam" />

      <Reveal className="mt-10">
        <div className="card-dark overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="border-b border-abyss-line">
                <th className="sticky left-0 z-10 bg-abyss-raised p-5 align-bottom">
                  <span className="kicker text-[9px] text-mist-dim">Specification</span>
                </th>
                {vehicles.map((v) => (
                  <th key={v.slug} className="p-5 pb-4">
                    <Link href={`/models/${v.slug}`} className="group block">
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={v.cardImage}
                          alt={v.name}
                          loading="lazy"
                          className="aspect-[16/10] w-36 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-3 font-display text-sm font-semibold whitespace-nowrap text-foam group-hover:text-aqua">
                        {v.name.replace('BYD ', '')}
                      </p>
                      <p className="text-[10px] tracking-[0.14em] text-mist-dim uppercase">{v.category}</p>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr key={row.label} className={ri % 2 ? '' : 'bg-abyss-soft/40'}>
                  <td className="sticky left-0 z-10 bg-abyss-raised p-5 text-xs font-medium tracking-[0.1em] whitespace-nowrap text-mist uppercase">
                    {row.label}
                  </td>
                  {vehicles.map((v) => (
                    <td key={v.slug} className="numeric p-5 text-sm whitespace-nowrap text-foam">
                      {row.value(v)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="sticky left-0 z-10 bg-abyss-raised p-5" />
                {vehicles.map((v) => (
                  <td key={v.slug} className="p-5">
                    <Link
                      href={`/models/${v.slug}`}
                      className="inline-block rounded-full border border-abyss-line px-4 py-2 text-[10px] font-semibold tracking-[0.14em] text-mist uppercase transition-colors hover:border-aqua hover:text-aqua"
                    >
                      Explore
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
