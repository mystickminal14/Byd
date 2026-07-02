import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import AnimatedHeading from '@/components/animations/AnimatedHeading';

/**
 * Fullscreen cinematic film. The frame scales up from a card to full-bleed via
 * a GPU transform, playback follows visibility, and it starts muted with a
 * premium "Sound On" control — the video is playing the moment it enters view.
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
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const embed = `https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=${youtubeId}&modestbranding=1`;

  const command = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*',
    );
  };

  // play-on-view / pause-out-of-view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.45) {
          command('playVideo');
          setPlaying(true);
        } else {
          command('pauseVideo');
          setPlaying(false);
        }
      },
      { threshold: [0, 0.45] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // keynote scale-in (transform only — cheap)
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { scale: 0.84, borderRadius: 24 },
        {
          scale: 1,
          borderRadius: 0,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', end: 'top 5%', scrub: 0.6 },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    command(muted ? 'unMute' : 'mute');
    if (muted) command('playVideo');
    setMuted(!muted);
  };

  return (
    <section ref={sectionRef} className="relative bg-abyss">
      <div ref={frameRef} className="relative h-svh w-full overflow-hidden bg-abyss will-change-transform">
        {/* poster so the frame is never blank before the video paints */}
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 aspect-video h-[56.25vw] min-h-full w-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2">
          <iframe
            ref={iframeRef}
            src={embed}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* cinematic overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-abyss/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_55%,rgba(3,10,18,0.7)_100%)]" />

        <div className="absolute bottom-0 left-0 z-10 w-full p-5 md:p-14">
          <p className="kicker text-aqua">{kicker}</p>
          <AnimatedHeading text={title} className="heading-lg mt-3 text-foam" />
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {caption && <p className="max-w-md text-sm leading-relaxed text-foam/70">{caption}</p>}

            <motion.button
              onClick={toggleSound}
              whileTap={{ scale: 0.92 }}
              className="glass group flex w-fit items-center gap-4 rounded-full py-3 pr-7 pl-4"
              aria-label={muted ? 'Turn sound on' : 'Mute film'}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua transition-transform duration-300 group-hover:scale-110">
                {muted ? (
                  <svg className="h-4 w-4 text-abyss" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.6 3 3.2-3.2-1.4-1.4-3.2 3.2-3.2-3.2-1.4 1.4L13.8 12l-3.2 3.2 1.4 1.4 3.2-3.2 3.2 3.2 1.4-1.4-3.2-3.2z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4 text-abyss" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" />
                  </svg>
                )}
              </span>
              <span className="flex items-end gap-[3px]" aria-hidden="true">
                {[10, 16, 8, 14, 6].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] rounded-full bg-aqua"
                    animate={playing && !muted ? { height: [h, h * 1.6, h * 0.6, h] } : { height: 4 }}
                    transition={{ repeat: Infinity, duration: 0.9 + i * 0.12, ease: 'easeInOut' }}
                  />
                ))}
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-foam uppercase">
                {muted ? 'Sound On' : 'Sound Off'}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
