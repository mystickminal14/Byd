import { useState } from 'react';
import Reveal from '@/components/animations/Reveal';
import AnimatedHeading from '@/components/animations/AnimatedHeading';

/**
 * Cinematic YouTube embed: shows the thumbnail with a pulsing play control and
 * only loads the iframe on demand (lite-embed pattern keeps pages fast).
 */
export default function VideoExperience({
  youtubeId,
  kicker = 'In Motion',
  title,
  caption,
}: {
  youtubeId: string;
  kicker?: string;
  title: string;
  caption?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="aurora relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 md:mb-14">
          <p className="kicker mb-4 text-aqua">{kicker}</p>
          <AnimatedHeading text={title} className="heading-md max-w-3xl text-foam" />
          {caption && (
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">{caption}</p>
            </Reveal>
          )}
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-float ring-aqua">
            {playing ? (
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group relative block aspect-video w-full"
                aria-label={`Play: ${title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute inset-0 bg-abyss/30 transition-colors group-hover:bg-abyss/15" />
                <span className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-aqua shadow-glow transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
                  <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-abyss">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
