import type { Vehicle } from '@/types';
import Link from '@/components/ui/Link';
import { formatLakh, cn } from '@/lib/utils';

/**
 * The one vehicle card used everywhere (Models grid, related rail, menus).
 * Image stage on top, then name → tagline → a three-stat ledger → price row.
 * `layout="wide"` turns it into a horizontal feature card for hero slots.
 */
export default function VehicleCard({
  vehicle,
  layout = 'standard',
  priority = false,
  className = '',
}: {
  vehicle: Vehicle;
  layout?: 'standard' | 'wide';
  priority?: boolean;
  className?: string;
}) {
  const wide = layout === 'wide';
  const stats = vehicle.highlightStats.slice(0, 3);

  return (
    <Link
      href={`/models/${vehicle.slug}`}
      className={cn(
        'group card-dark relative block overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1',
        wide && 'md:grid md:grid-cols-[1.35fr_1fr]',
        className,
      )}
    >
      {/* image stage */}
      <div className="relative overflow-hidden">
        <img
          src={wide ? vehicle.heroImage : vehicle.cardImage}
          alt={vehicle.name}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]',
            wide ? 'aspect-[16/9] md:h-full md:min-h-[360px] md:aspect-auto' : 'aspect-[16/10]',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/55 via-transparent to-transparent" />
        <span className="glass absolute top-4 left-4 rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-foam uppercase">
          {vehicle.badge}
        </span>
        <span className="glass absolute top-4 right-4 rounded-full px-4 py-1.5 font-numeric text-[10px] font-semibold tracking-[0.08em] text-aqua uppercase">
          {vehicle.series} Series
        </span>
      </div>

      {/* content */}
      <div className={cn('flex flex-col p-6 md:p-7', wide && 'md:justify-center md:p-10')}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={cn('display-name text-foam transition-colors group-hover:text-aqua', wide ? 'text-3xl md:text-4xl' : 'text-2xl')}>
              {vehicle.name.replace('BYD ', '')}
            </h3>
            <p className="mt-1.5 text-sm text-mist">{vehicle.tagline}</p>
          </div>
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-abyss-line text-mist transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-aqua group-hover:text-aqua">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* stat ledger */}
        <div className="mt-6 grid grid-cols-3 divide-x divide-abyss-line border-y border-abyss-line">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-4 first:pl-0 last:pr-0">
              <p className="numeric text-lg font-semibold text-foam">
                {s.value}
                {s.unit && <span className="ml-0.5 text-[11px] font-medium text-aqua">{s.unit}</span>}
              </p>
              <p className="mt-0.5 text-[10px] tracking-[0.12em] text-mist-dim uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <p className="numeric text-sm text-mist-dim">
            From <span className="text-lg font-semibold text-aqua">Rs. {formatLakh(vehicle.startingPrice)}</span>
          </p>
          <span className="kicker text-[10px] text-mist-dim transition-colors group-hover:text-foam">
            {vehicle.variants.length > 1 ? `${vehicle.variants.length} Variants` : 'Explore'}
          </span>
        </div>
      </div>

      {/* hover ring */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-aqua/0 transition-all duration-500 group-hover:ring-aqua/40"
      />
    </Link>
  );
}
