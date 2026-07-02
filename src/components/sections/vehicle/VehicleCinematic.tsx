import Parallax from '@/components/animations/Parallax';
import AnimatedHeading from '@/components/animations/AnimatedHeading';

/**
 * Full-bleed cinematic band: tagline over a parallaxing key image, used as a
 * breather between data-dense sections.
 */
export default function VehicleCinematic({
  image,
  tagline,
  name,
}: {
  image: string;
  tagline: string;
  name: string;
}) {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden md:min-h-[85svh]">
      <div className="absolute inset-0">
        <Parallax speed={0.3} className="h-[120%] w-full">
          <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/10 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
        <p className="kicker mb-4 text-aqua">{name.replace('BYD ', 'BYD ')}</p>
        <AnimatedHeading text={tagline} className="heading-lg max-w-4xl text-foam" />
      </div>
    </section>
  );
}
