import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { gsap } from '@/lib/gsap';

/**
 * Scroll-linked parallax. Moves its content vertically as the nearest
 * positioned ancestor passes through the viewport. Give the inner content
 * extra height (e.g. h-[120%] -top-[10%]) so the movement never reveals edges.
 */
export default function Parallax({
  children,
  speed = 0.2,
  className = '',
}: {
  children: ReactNode;
  /** 0 = static, positive = drifts down (background feel), try 0.1–0.3 */
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const trigger = el?.parentElement ?? el;
    if (!el || !trigger) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed * 50 },
        {
          yPercent: speed * 50,
          ease: 'none',
          scrollTrigger: {
            trigger,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
