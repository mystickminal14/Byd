import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import type { Vehicle } from '@/types';
import { useAppReady } from '@/layout/RootLayout';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import MagneticButton from '@/components/animations/MagneticButton';
import Counter from '@/components/animations/Counter';
import Parallax from '@/components/animations/Parallax';
import { formatLakh } from '@/lib/utils';

/**
 * Model hero: full-bleed key visual, staged name reveal, live stat counters
 * and quick actions. The oversized ghosted model name drifts behind the car.
 */
export default function VehicleHero({ vehicle }: { vehicle: Vehicle }) {
  const ready = useAppReady();
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el || !ready) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-vh-img]', { scale: 1.15, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' });
      gsap.fromTo('[data-vh-fade]', { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, delay: 0.7, ease: 'power4.out' });
    }, el);
    return () => ctx.revert();
  }, [ready]);

  const shortName = vehicle.name.replace('BYD ', '');

  return (
    <section ref={rootRef} className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-abyss">
      <div className="absolute inset-0">
        <Parallax speed={0.22} className="h-[115%] w-full">
          <img
            data-vh-img
            src={vehicle.heroImage}
            alt={vehicle.name}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/15 to-abyss/40" />
      </div>

      {/* ghosted name */}
      <div className="pointer-events-none absolute top-28 left-0 w-full overflow-hidden select-none md:top-24" aria-hidden="true">
        <p className="heading-xl text-center whitespace-nowrap text-foam/[0.06]">{shortName}</p>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 md:px-10 md:pb-16">
        <p data-vh-fade className="kicker mb-4 text-aqua opacity-0">
          {vehicle.badge} · {vehicle.series} Series
        </p>
        {ready && (
          <AnimatedHeading as="h1" text={shortName} play stagger={0.045} className="heading-xl text-foam uppercase" />
        )}
        <div data-vh-fade className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-0">
          <p className="font-display text-xl text-mist md:text-2xl">{vehicle.tagline}</p>
          <p className="numeric text-sm text-mist-dim">
            From <span className="text-xl font-semibold text-aqua">Rs. {formatLakh(vehicle.startingPrice)}</span>
          </p>
        </div>

        <div data-vh-fade className="mt-8 flex flex-wrap gap-4 opacity-0">
          <MagneticButton href="/test-drive">Test Drive</MagneticButton>
          {vehicle.brochures[0] && (
            <MagneticButton href={vehicle.brochures[0].file} variant="ghost">
              Brochure
            </MagneticButton>
          )}
        </div>

        <div data-vh-fade className="mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl opacity-0 md:grid-cols-4">
          {vehicle.highlightStats.map((s) => (
            <div key={s.label} className="glass px-5 py-4">
              <p className="numeric text-2xl font-semibold text-foam md:text-3xl">
                <Counter value={s.value} />
                {s.unit && <span className="ml-1 text-sm text-aqua">{s.unit}</span>}
              </p>
              <p className="mt-1 text-[11px] tracking-wide text-mist uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
