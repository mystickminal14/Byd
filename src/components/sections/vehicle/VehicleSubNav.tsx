import { useEffect, useState } from 'react';
import type { Vehicle } from '@/types';
import { scrollToSection } from '@/lib/lenis';
import { formatLakh, cn } from '@/lib/utils';
import Link from '@/components/ui/Link';

const SECTIONS = [
  { id: 'story', label: 'Story' },
  { id: 'specs', label: 'Specs' },
  { id: 'features', label: 'Features' },
  { id: 'variants', label: 'Variants & EMI' },
  { id: 'gallery', label: 'Gallery' },
];

/**
 * Sticky quick-nav that takes over once the hero scrolls past: jump links to
 * every section, scrollspy-highlighted, plus a persistent price + Test Drive
 * CTA so a showroom visitor never has to scroll back to the top.
 */
export default function VehicleSubNav({ vehicle }: { vehicle: Vehicle }) {
  const [active, setActive] = useState('story');

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[68px] z-40 mx-3 md:top-[78px] md:mx-5">
      <div className="glass mx-auto flex max-w-[1440px] items-center gap-2 rounded-2xl px-3 py-2 shadow-card md:gap-4 md:px-5 md:py-2.5">
        <p className="display-name hidden shrink-0 text-base text-foam sm:block">
          {vehicle.name.replace('BYD ', '')}
        </p>

        <nav className="flex flex-1 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(`#${s.id}`)}
              className={cn(
                'relative shrink-0 rounded-full px-3 py-2 text-xs font-medium tracking-wide whitespace-nowrap transition-colors md:px-3.5',
                active === s.id ? 'text-aqua' : 'text-foam/70 hover:text-foam',
              )}
            >
              {active === s.id && (
                <span className="absolute inset-0 rounded-full bg-aqua/10 ring-1 ring-inset ring-aqua/25" />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 md:gap-4">
          <p className="numeric hidden text-xs text-mist-dim lg:block">
            From <span className="font-semibold text-aqua">Rs. {formatLakh(vehicle.startingPrice)}</span>
          </p>
          <Link
            href="/test-drive"
            className="shrink-0 rounded-md bg-aqua px-4 py-2 font-numeric text-[10px] font-semibold tracking-[0.08em] text-abyss uppercase transition-colors hover:bg-foam md:px-5 md:text-[11px]"
          >
            Test Drive
          </Link>
        </div>
      </div>
    </div>
  );
}
