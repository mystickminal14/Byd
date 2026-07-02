import type { Spec } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import ImageReveal from '@/components/animations/ImageReveal';

/**
 * Full technical sheet beside the interior shot — a scannable two-column
 * ledger with hairline rules.
 */
export default function VehicleSpecs({
  specs,
  interiorImage,
}: {
  specs: Spec[];
  interiorImage: string;
}) {
  return (
    <section className="aurora relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Technical Data</p>
        <AnimatedHeading text="Engineered in Detail" className="heading-md text-foam" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal stagger={0.04} className="self-start">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-baseline justify-between gap-6 border-b border-abyss-line py-4"
              >
                <span className="text-sm tracking-wide text-mist">{s.label}</span>
                <span className="numeric text-right text-base font-semibold text-foam">
                  {s.value}
                  {s.unit && <span className="ml-1 text-xs font-normal text-aqua">{s.unit}</span>}
                </span>
              </div>
            ))}
          </Reveal>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ImageReveal
              src={interiorImage}
              alt="Interior"
              direction="right"
              className="rounded-3xl shadow-float"
              imgClassName="aspect-[4/3]"
              parallax
            />
          </div>
        </div>
      </div>
    </section>
  );
}
