import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type Props = {
  children: ReactNode;
  className?: string;
  /** Direction the content travels in from. */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: number;
  duration?: number;
};

/**
 * Scroll-triggered reveal: power4.out, ~88% trigger, once.
 * Optionally staggers its direct children.
 */
export default function Reveal({
  children,
  className = '',
  from = 'up',
  delay = 0,
  distance = 48,
  stagger,
  duration = 1.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const offset: gsap.TweenVars = { opacity: 0 };
    if (from === 'up') offset.y = distance;
    if (from === 'down') offset.y = -distance;
    if (from === 'left') offset.x = distance;
    if (from === 'right') offset.x = -distance;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.set(targets, offset);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () =>
          gsap.to(targets, {
            x: 0,
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power4.out',
            stagger: stagger ?? 0,
          }),
      });
    }, el);

    return () => ctx.revert();
  }, [from, delay, distance, stagger, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
