import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

/**
 * Editorial image unveil: a clip-path mask wipes the image into view while the
 * picture itself eases from a slight over-scale (a restrained ken-burns).
 */
export default function ImageReveal({
  src,
  alt,
  className = '',
  imgClassName = '',
  direction = 'up',
  parallax = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  /** subtle scroll drift on the inner image */
  parallax?: boolean;
  priority?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return undefined;

    const from: Record<string, string> = {
      up: 'inset(0 0 100% 0)',
      down: 'inset(100% 0 0 0)',
      left: 'inset(0 100% 0 0)',
      right: 'inset(0 0 0 100%)',
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    let io: IntersectionObserver | null = null;

    const ctx = gsap.context(() => {
      gsap.set(wrap, { clipPath: from[direction] });
      gsap.set(img, { scale: 1.35 });

      let played = false;
      const play = () => {
        if (played) return;
        played = true;
        gsap
          .timeline()
          .to(wrap, { clipPath: 'inset(0 0 0% 0)', duration: 1.3, ease: 'power4.out' })
          .to(img, { scale: 1, duration: 1.6, ease: 'power3.out' }, 0);
      };

      ScrollTrigger.create({ trigger: wrap, start: 'top 88%', once: true, onEnter: play });

      // Safety net: if the trigger never fires (e.g. mis-measured after a pinned
      // section), reveal anyway once the element is anywhere near the viewport.
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            play();
            io?.disconnect();
          }
        },
        { rootMargin: '0px 0px -5% 0px' },
      );
      io.observe(wrap);

      if (parallax) {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      }
    }, wrap);

    return () => {
      io?.disconnect();
      ctx.revert();
    };
  }, [direction, parallax]);

  return (
    <div ref={wrapRef} className={cn('reveal-clip overflow-hidden', className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className={cn('reveal-img h-full w-full object-cover', imgClassName)}
      />
    </div>
  );
}
