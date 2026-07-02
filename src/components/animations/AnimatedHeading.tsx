import { createElement, useLayoutEffect, useRef, type ElementType } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

type Props = {
  as?: ElementType;
  text: string;
  className?: string;
  /** undefined = trigger on scroll; true = play now; false = stay hidden */
  play?: boolean;
  delay?: number;
  stagger?: number;
};

/**
 * Character-by-character heading reveal. Splits text into word/char spans
 * and animates them with a ScrollTrigger (or immediately when `play` is set).
 */
export default function AnimatedHeading({
  as = 'h2',
  text,
  className = '',
  play,
  delay = 0,
  stagger = 0.022,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll<HTMLElement>('.split-char');
      gsap.set(chars, { yPercent: 110, rotate: 4, opacity: 0 });

      const vars: gsap.TweenVars = {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.1,
        delay,
        stagger,
        ease: 'power4.out',
      };

      if (play === undefined) {
        // Create the tween at fire time: a pre-bound tween can be left in a
        // mixed state when the user blasts past the trigger mid-animation.
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () => gsap.to(chars, vars),
        });
      } else if (play) {
        gsap.to(chars, vars);
      }
    }, el);

    return () => ctx.revert();
  }, [play, delay, stagger]);

  const words = text.split(' ');
  const Tag = as as ElementType;

  // The space between words must live OUTSIDE the overflow-hidden word span,
  // otherwise it gets clipped and words collide.
  const children = words.flatMap((word, wi) => {
    const span = (
      <span key={`w${wi}`} className="split-word" aria-hidden="true">
        {word.split('').map((char, ci) => (
          <span key={ci} className="split-char">
            {char}
          </span>
        ))}
      </span>
    );
    return wi < words.length - 1 ? [span, <span key={`s${wi}`} className="inline-block w-[0.28em]" />] : [span];
  });

  return createElement(Tag, { ref, 'aria-label': text, className }, children);
}
