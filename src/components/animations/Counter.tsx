import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Animated numeric counter: counts from 0 to `value` when scrolled into view.
 * Handles decimal values ("6.7") by preserving the decimal places of the input.
 */
export default function Counter({
  value,
  className = '',
  duration = 1.8,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const target = parseFloat(value.replace(/,/g, ''));
    if (Number.isNaN(target)) {
      el.textContent = value;
      return undefined;
    }
    const decimals = value.includes('.') ? value.split('.')[1].length : 0;

    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      el.textContent = (0).toFixed(decimals);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            n: target,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = obj.n.toFixed(decimals);
            },
          }),
      });
    }, el);

    return () => ctx.revert();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
