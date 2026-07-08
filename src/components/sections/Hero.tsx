import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { useAppReady } from '@/layout/RootLayout';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import MagneticButton from '@/components/animations/MagneticButton';
import Parallax from '@/components/animations/Parallax';

/**
 * Cinematic home hero: the SEALION 7 mirror-lake key visual under an aurora
 * wash, staged headline, and a scroll cue. The image parallaxes away as the
 * page begins to scroll.
 */
export default function Hero() {
  const ready = useAppReady();
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el || !ready) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-img]',
        { scale: 1.18, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 2.2, ease: 'power3.out' },
      );
      gsap.fromTo(
        '[data-hero-fade]',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.14, delay: 0.9, ease: 'power4.out' },
      );
      // gradient line uses a mask reveal: background-clip text can't split per-char
      gsap.fromTo(
        '[data-hero-line2]',
        { yPercent: 112 },
        { yPercent: 0, duration: 1.2, delay: 0.5, ease: 'power4.out' },
      );
    }, el);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section ref={rootRef} className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-abyss">
      {/* backdrop */}
      <div className="absolute inset-0">
        <Parallax speed={0.25} className="h-[115%] w-full">
          <img
            data-hero-img
            src="/assets/home/sealion7.webp"
            alt="BYD SEALION 7 pair on a mirror lake at dusk"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-abyss/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/55 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 md:px-10 md:pb-20">
        <p data-hero-fade className="kicker mb-5 text-aqua opacity-0">
          BYD Nepal · Official Lineup
        </p>
        {ready && (
          <h1 className="heading-lg max-w-6xl text-foam">
            <AnimatedHeading as="span" text="The Ocean" play stagger={0.03} className="block" />
            <span className="block overflow-hidden pb-[0.1em]">
              <span data-hero-line2 className="text-aurora block will-change-transform">
                Runs Electric
              </span>
            </span>
          </h1>
        )}
        <div data-hero-fade className="mt-8 flex max-w-xl flex-col gap-8 opacity-0 md:mt-10">
          <p className="text-base leading-relaxed text-mist md:text-lg">
            Six electric vehicles. One ultra-safe Blade Battery. From the city-sized ATTO 1 to the
            230 kW SEALION 7 — this is Technology, Green, Future, delivered to Nepal by Cimex.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton href="/models">Explore the Range</MagneticButton>
            <MagneticButton href="/test-drive" variant="ghost">
              Book a Test Drive
            </MagneticButton>
          </div>
        </div>

        {/* stat strip */}
        <div data-hero-fade className="mt-14 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl opacity-0">
          {[
            { v: '6', l: 'Models in Nepal' },
            { v: '482 km', l: 'Max WLTP Range' },
            { v: '10 yr', l: 'Battery Warranty*' },
          ].map((s) => (
            <div key={s.l} className="glass px-3 py-3 md:px-5 md:py-4">
              <p className="numeric text-lg font-semibold text-foam sm:text-2xl md:text-3xl">{s.v}</p>
              <p className="mt-1 text-[11px] tracking-wide text-mist uppercase">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="h-12 w-7 rounded-full border border-foam/25 p-1.5">
          <div className="h-2.5 w-full animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full bg-aqua" />
        </div>
      </div>
    </section>
  );
}
