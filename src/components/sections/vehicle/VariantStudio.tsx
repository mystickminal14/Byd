import { useMemo, useState } from 'react';
import type { Vehicle } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';
import { calcEmi, formatNpr, cn } from '@/lib/utils';

const TENURES = [24, 36, 48, 60, 72, 84];

/**
 * Variant picker + live EMI studio. Choose a variant, adjust down-payment and
 * tenure, and watch the estimated monthly payment update in real time — the
 * question every showroom visitor actually asks.
 */
export default function VariantStudio({ vehicle }: { vehicle: Vehicle }) {
  const [variantIdx, setVariantIdx] = useState(0);
  const [downPct, setDownPct] = useState(20);
  const [months, setMonths] = useState(60);
  const [colorIdx, setColorIdx] = useState(0);
  const rate = 11; // indicative auto-loan rate, % p.a.

  const price = vehicle.variants[variantIdx]?.price ?? vehicle.startingPrice;
  const emi = useMemo(
    () => calcEmi(price * (1 - downPct / 100), rate, months),
    [price, downPct, months],
  );

  return (
    <section className="border-t border-pearl-line bg-pearl py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="kicker mb-4 text-electric">Variants & Ownership</p>
        <AnimatedHeading text="Make It Yours" className="heading-md" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* variant + colours */}
          <Reveal className="space-y-8">
            <div className="space-y-4">
              {vehicle.variants.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setVariantIdx(i)}
                  className={cn(
                    'flex w-full items-center justify-between gap-4 rounded-2xl border-2 p-6 text-left transition-all duration-300',
                    i === variantIdx
                      ? 'border-electric bg-white shadow-pearl'
                      : 'border-pearl-line bg-white/60 hover:border-electric/40',
                  )}
                >
                  <div>
                    <p className="font-display text-lg font-semibold">{v.name}</p>
                    <p className="mt-1 text-xs tracking-wide text-ink-soft uppercase">
                      {vehicle.name.replace('BYD ', '')} · Ex-showroom
                    </p>
                  </div>
                  <p className="numeric shrink-0 text-lg font-semibold text-electric">{formatNpr(v.price)}</p>
                </button>
              ))}
            </div>

            {vehicle.colors && (
              <div>
                <p className="kicker mb-4 text-ink-soft">Colours</p>
                <div className="flex flex-wrap items-center gap-4">
                  {vehicle.colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setColorIdx(i)}
                      aria-label={c.name}
                      className={cn(
                        'h-11 w-11 rounded-full border-4 transition-transform',
                        i === colorIdx ? 'scale-110 border-electric' : 'border-white shadow-pearl hover:scale-105',
                      )}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                  <span className="numeric ml-1 text-sm text-ink-soft">{vehicle.colors[colorIdx].name}</span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticButton href="/test-drive" variant="pearl">
                Book This Car
              </MagneticButton>
              {vehicle.brochures[0] && (
                <a
                  href={vehicle.brochures[0].file}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 font-numeric text-sm font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:border-electric hover:text-electric"
                >
                  Download Brochure
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </Reveal>

          {/* EMI studio */}
          <Reveal delay={0.15} from="left">
            <div className="card-pearl rounded-3xl p-8">
              <p className="kicker text-electric">EMI Studio</p>
              <p className="numeric mt-6 text-5xl font-bold tracking-tight">
                {formatNpr(Math.round(emi))}
                <span className="ml-2 text-base font-medium text-ink-soft">/ month</span>
              </p>
              <p className="mt-2 text-xs text-ink-soft">
                {downPct}% down · {months / 12} years · {rate}% p.a. indicative
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-medium tracking-wide text-ink-soft uppercase">
                    <span>Down payment</span>
                    <span className="numeric">{downPct}% · {formatNpr(Math.round(price * (downPct / 100)))}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={70}
                    step={5}
                    value={downPct}
                    onChange={(e) => setDownPct(Number(e.target.value))}
                    className="w-full accent-electric"
                  />
                </div>
                <div>
                  <p className="mb-3 text-xs font-medium tracking-wide text-ink-soft uppercase">Tenure</p>
                  <div className="flex flex-wrap gap-2">
                    {TENURES.map((m) => (
                      <button
                        key={m}
                        onClick={() => setMonths(m)}
                        className={cn(
                          'rounded-full px-4 py-2 font-numeric text-xs font-semibold transition-colors',
                          m === months ? 'bg-electric text-white' : 'bg-pearl-soft text-ink-soft hover:bg-pearl-line',
                        )}
                      >
                        {m / 12} yr
                      </button>
                    ))}
                  </div>
                </div>
                <div className="border-t border-pearl-line pt-5 text-sm text-ink-soft">
                  <div className="flex justify-between py-1">
                    <span>Vehicle price</span>
                    <span className="numeric font-semibold text-ink">{formatNpr(price)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Loan amount</span>
                    <span className="numeric font-semibold text-ink">
                      {formatNpr(Math.round(price * (1 - downPct / 100)))}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-ink-soft/70">
                Indicative estimate only — final rates and terms are set by your bank. EV auto loans
                in Nepal may qualify for preferential financing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
