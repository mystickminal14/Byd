import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { setLenis } from '@/lib/lenis';

/**
 * Premium momentum scrolling via Lenis, driven by the GSAP ticker so that
 * Lenis and ScrollTrigger share ONE clock. This is the key to smooth, jitter-
 * free scrolling: we never run two independent RAF loops fighting each other.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false, // we drive raf from the gsap ticker below
    });
    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
}
