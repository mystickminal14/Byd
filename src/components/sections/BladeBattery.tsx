import Reveal from '@/components/animations/Reveal';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import ImageReveal from '@/components/animations/ImageReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import Counter from '@/components/animations/Counter';

const PROOFS = [
  { value: '30', unit: '–60 °C', label: 'Peak temp in nail-penetration test' },
  { value: '50', unit: '%', label: 'Crushed — no fire, no explosion' },
  { value: '300', unit: '°C', label: 'Furnace-tested heat endurance' },
  { value: '260', unit: '%', label: 'Overcharged beyond rated capacity' },
];

/**
 * The signature BYD technology story: Blade Battery + e-Platform 3.0, told
 * with the official test imagery and animated proof-points.
 */
export default function BladeBattery() {
  return (
    <section className="relative overflow-hidden bg-pearl py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="kicker mb-4 text-electric">Core Technology</p>
            <AnimatedHeading text="The Blade Battery" className="heading-lg" />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                Every BYD in Nepal is built around the same patented LFP Blade Battery — the pack
                that survives the nail-penetration test other chemistries fail. Thinner, stronger,
                and integrated into the body itself.
              </p>
            </Reveal>
          </div>
          <Reveal from="left" className="hidden md:block">
            <MagneticButton href="/technology" variant="pearl">
              Explore the Tech
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <ImageReveal
            src="/assets/atto3/7.jpg"
            alt="Blade Battery on the official BYD test rig"
            className="rounded-3xl shadow-pearl"
            imgClassName="aspect-[16/9] lg:aspect-auto lg:h-full"
            parallax
          />
          <div className="grid grid-cols-2 gap-6">
            {PROOFS.map((p) => (
              <Reveal key={p.label} className="card-pearl flex flex-col justify-between rounded-3xl p-6">
                <p className="numeric text-4xl font-semibold text-electric md:text-5xl">
                  <Counter value={p.value} />
                  <span className="text-xl">{p.unit}</span>
                </p>
                <p className="mt-4 text-sm leading-snug text-ink-soft">{p.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="card-pearl overflow-hidden rounded-3xl">
            <img src="/assets/atto3/6.jpg" alt="e-Platform 3.0 rolling chassis" loading="lazy" className="aspect-[16/8] w-full object-cover" />
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold">e-Platform 3.0</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A dedicated EV architecture with an 8-in-1 powertrain — intelligence, efficiency,
                safety and aesthetics engineered from a blank sheet, not adapted from petrol.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="card-pearl overflow-hidden rounded-3xl">
            <img src="/assets/about/ctb-pc.jpg" alt="CTB cell-to-body construction layers" loading="lazy" className="aspect-[16/8] w-full object-cover" />
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold">CTB — Cell to Body</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The battery's upper cover and the body floor become one sandwich structure, freeing
                cabin space and multiplying torsional rigidity.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 text-center md:hidden">
          <MagneticButton href="/technology" variant="pearl">
            Explore the Tech
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
