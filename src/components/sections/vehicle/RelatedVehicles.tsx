import type { Vehicle } from '@/types';
import Reveal from '@/components/animations/Reveal';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import VehicleCard from '@/components/ui/VehicleCard';

/** "Continue exploring" rail of sibling models, on the shared VehicleCard. */
export default function RelatedVehicles({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="border-t border-abyss-line bg-abyss py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Keep Exploring</p>
        <AnimatedHeading text="More from the Fleet" className="heading-md text-foam" />

        <Reveal stagger={0.1} className="mt-12 grid gap-7 md:grid-cols-3">
          {vehicles.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
