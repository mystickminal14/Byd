import type { Feature } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import Icon from '@/components/ui/Icon';

/** Six-up feature grid with category icons on glass cards. */
export default function VehicleFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="border-t border-abyss-line bg-abyss-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Highlights</p>
        <AnimatedHeading text="Everything You Feel First" className="heading-md max-w-3xl text-foam" />

        <Reveal stagger={0.08} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group card-dark rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua/10 text-aqua transition-colors group-hover:bg-aqua/20">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foam">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
