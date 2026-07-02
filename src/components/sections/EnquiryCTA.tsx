import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';
import Parallax from '@/components/animations/Parallax';

/**
 * Closing call-to-action over the "Technology Green Future" earth banner.
 */
export default function EnquiryCTA({ vehicleName }: { vehicleName?: string }) {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0">
        <Parallax speed={0.3} className="h-[120%] w-full">
          <img
            src="/assets/home/bottom-bannerPC.jpg"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-abyss/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-10">
        <p className="kicker mb-5 text-aqua">Technology · Green · Future</p>
        <AnimatedHeading
          text={vehicleName ? `Drive the ${vehicleName.replace('BYD ', '')}` : 'Your Dreams, Built Electric'}
          className="heading-lg text-foam"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            Visit the BYD Complex in Naxal or book a test drive — the Cimex team will bring the
            future to your doorstep.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/test-drive">Book a Test Drive</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Talk to Us
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
