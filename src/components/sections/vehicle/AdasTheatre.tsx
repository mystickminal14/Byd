import { useEffect, useRef, useState } from 'react';
import type { AdasClip } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';

/**
 * ADAS theatre: the official BYD 3D safety animations as a tabbed video stage.
 * Clips are muted, loop, and lazy-play only while the section is on screen.
 */
export default function AdasTheatre({ clips }: { clips: AdasClip[] }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (visible) v.play().catch(() => undefined);
    else v.pause();
  }, [visible, active]);

  const clip = clips[active];

  return (
    <section ref={sectionRef} className="aurora relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Intelligent Safety</p>
        <AnimatedHeading text="A Co-Pilot That Never Blinks" className="heading-md max-w-3xl text-foam" />

        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-3">
            {clips.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={cn(
                  'rounded-full px-6 py-3 font-numeric text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300',
                  i === active
                    ? 'bg-aqua text-abyss shadow-glow'
                    : 'glass text-mist hover:text-foam',
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl shadow-float ring-aqua">
            <video
              ref={videoRef}
              key={clip.id}
              src={clip.video}
              poster={clip.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
            />
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-mist">{clip.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
