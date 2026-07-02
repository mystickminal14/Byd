import useSeo from '@/hooks/useSeo';
import Link from '@/components/ui/Link';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';
import { VEHICLES } from '@/data/vehicles';
import { formatNpr } from '@/lib/utils';

export default function Pricing() {
  useSeo({
    title: 'Price List — BYD Nepal',
    description:
      'The complete BYD Nepal price list: every model and variant with ex-showroom NPR prices, from the ATTO 1 to the SEALION 7.',
  });

  return (
    <div className="bg-abyss pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Price List</p>
        <AnimatedHeading text="Every Model, Every Variant" className="heading-lg text-foam" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
          Ex-showroom prices published for Nepal. Government EV duty structures change — treat this
          as the map, and confirm the day's number with the showroom.
        </p>

        <div className="mt-14 space-y-10">
          {VEHICLES.map((v) => (
            <Reveal key={v.slug} className="card-dark overflow-hidden rounded-3xl">
              <div className="grid md:grid-cols-[280px_1fr]">
                <Link href={`/models/${v.slug}`} className="group relative block overflow-hidden">
                  <img
                    src={v.cardImage}
                    alt={v.name}
                    loading="lazy"
                    className="h-full min-h-[180px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 to-transparent" />
                  <p className="absolute bottom-4 left-5 font-display text-xl font-semibold text-foam">
                    {v.name.replace('BYD ', '')}
                  </p>
                </Link>
                <div className="p-6 md:p-8">
                  {v.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="flex flex-wrap items-baseline justify-between gap-2 border-b border-abyss-line py-3 last:border-0"
                    >
                      <span className="text-sm text-mist">{variant.name}</span>
                      <span className="numeric text-lg font-semibold text-aqua">{formatNpr(variant.price)}</span>
                    </div>
                  ))}
                  <div className="mt-5 flex flex-wrap gap-4">
                    <Link
                      href={`/models/${v.slug}`}
                      className="kicker inline-flex items-center gap-2 text-aqua transition-colors hover:text-seafoam"
                    >
                      Explore {v.name.replace('BYD ', '')}
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    {v.brochures[0] && (
                      <a
                        href={v.brochures[0].file}
                        download
                        className="kicker inline-flex items-center gap-2 text-mist-dim transition-colors hover:text-foam"
                      >
                        Brochure
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <MagneticButton href="/test-drive">Book a Test Drive</MagneticButton>
        </Reveal>
      </div>
    </div>
  );
}
