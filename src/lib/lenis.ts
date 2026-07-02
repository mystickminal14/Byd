import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

/** Smoothly scroll to a section (string selector | element | number offset). */
export function scrollToSection(target: string | HTMLElement | number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: 0, duration: 1.4 });
  } else if (typeof target === 'string') {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}
