import { Fragment } from 'react';
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

const GROUPS: { group: string; rows: { label: string; value: (v: Vehicle) => string }[] }[] = [
  {
    group: 'Ownership',
    rows: [
      { label: 'Starting price', value: (v) => `Rs. ${formatLakh(v.startingPrice)}` },
      { label: 'Variants', value: (v) => String(v.variants.length) },
      { label: 'Body type', value: (v) => v.category },
      { label: 'Seats', value: (v) => (spec(v, 'Seating') !== '—' ? spec(v, 'Seating') : '5') },
    ],
  },
  {
    group: 'Battery & Range',
    rows: [
      { label: 'Blade Battery', value: (v) => spec(v, 'Battery') },
      { label: 'Range', value: (v) => spec(v, 'Range') },
      { label: 'DC fast charge', value: (v) => spec(v, 'DC Fast') },
      { label: 'V2L output', value: (v) => spec(v, 'V2L') },
    ],
  },
  {
    group: 'Performance',
    rows: [
      { label: 'Max power', value: (v) => spec(v, 'Max Power') },
      { label: 'Max torque', value: (v) => spec(v, 'Max Torque') },
      { label: '0–100 km/h', value: (v) => spec(v, '0–100') },
      { label: 'Drivetrain', value: (v) => spec(v, 'Drivetrain') },
    ],
  },
];

/**
 * Whole-range comparison. On desktop all six cars fit the viewport — no
 * scrollbar — with grouped spec bands; below xl it degrades to a swipeable
 * ledger with a sticky spec column.
 */
export default function CompareTable({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="mt-20 md:mt-24">
      <p className="kicker mb-4 text-aqua">Side by Side</p>
      <AnimatedHeading text="Compare the Range" className="heading-md text-foam" />

      <Reveal className="mt-10">
        <div className="card-dark overflow-x-auto rounded-2xl xl:overflow-visible">
          <table className="w-full min-w-[840px] border-collapse text-left xl:min-w-0">
            <thead>
              <tr className="border-b border-abyss-line">
                <th className="sticky left-0 z-10 w-[120px] bg-abyss-raised p-3 align-bottom md:p-4 xl:static">
                  <span className="kicker text-[9px] text-mist-dim">Spec</span>
                </th>
                {vehicles.map((v) => (
                  <th key={v.slug} className="p-3 pb-3 md:p-4">
                    <Link href={`/models/${v.slug}`} className="group block">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={v.cardImage}
                          alt={v.name}
                          loading="lazy"
                          className="aspect-[16/10] w-full min-w-[104px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="display-name mt-2.5 text-[13px] whitespace-nowrap text-foam group-hover:text-aqua">
                        {v.name.replace('BYD ', '')}
                      </p>
                      <p className="text-[9px] tracking-[0.1em] text-mist-dim uppercase">{v.badge}</p>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((g) => (
                <Fragment key={g.group}>
                  <tr>
                    <td
                      colSpan={vehicles.length + 1}
                      className="border-b border-abyss-line bg-abyss-soft/60 px-3 pt-4 pb-2 md:px-4"
                    >
                      <span className="kicker text-[9px] text-aqua">{g.group}</span>
                    </td>
                  </tr>
                  {g.rows.map((row, ri) => (
                    <tr key={row.label} className={ri % 2 ? 'bg-abyss-soft/30' : ''}>
                      <td className="sticky left-0 z-10 bg-abyss-raised p-3 text-[10px] font-medium tracking-[0.06em] whitespace-nowrap text-mist uppercase md:p-4 md:text-[11px] xl:static">
                        {row.label}
                      </td>
                      {vehicles.map((v) => {
                        const val = row.value(v);
                        return (
                          <td
                            key={v.slug}
                            className={`numeric p-3 text-xs md:p-4 md:text-[13px] ${val === '—' ? 'text-mist-dim' : 'text-foam'}`}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr className="border-t border-abyss-line">
                <td className="sticky left-0 z-10 bg-abyss-raised p-3 md:p-4 xl:static" />
                {vehicles.map((v) => (
                  <td key={v.slug} className="p-3 md:p-4">
                    <Link
                      href={`/models/${v.slug}`}
                      className="inline-block rounded-md border border-abyss-line px-3.5 py-2 text-[9px] font-semibold tracking-[0.08em] text-mist uppercase transition-colors hover:border-aqua hover:text-aqua"
                    >
                      Explore
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] text-mist-dim xl:hidden">Swipe sideways to see the full range →</p>
      </Reveal>
    </section>
  );
}
