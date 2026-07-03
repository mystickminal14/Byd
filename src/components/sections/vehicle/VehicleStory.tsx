import type { StoryBlock } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import ImageReveal from '@/components/animations/ImageReveal';
import Reveal from '@/components/animations/Reveal';

/**
 * Alternating editorial story: large clipped image reveals with numbered
 * chapters — the scroll narrative of the car.
 */
export default function VehicleStory({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <section id="story" className="scroll-mt-32 bg-pearl py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] space-y-24 px-6 md:space-y-36 md:px-10">
        {blocks.map((block, i) => (
          <div
            key={block.title}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            <ImageReveal
              src={block.image}
              alt={block.title}
              direction={i % 2 ? 'right' : 'left'}
              className="rounded-3xl shadow-pearl"
              imgClassName="aspect-[4/3]"
              parallax
            />
            <div>
              <p className="numeric mb-4 text-sm font-semibold text-electric">
                {String(i + 1).padStart(2, '0')} / {String(blocks.length).padStart(2, '0')}
              </p>
              <AnimatedHeading text={block.title} className="heading-md" />
              <Reveal delay={0.15}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">{block.body}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
