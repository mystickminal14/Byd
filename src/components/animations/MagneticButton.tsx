import { useRef, type ReactNode } from 'react';
import Link from '@/components/ui/Link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'aurora' | 'outline' | 'ghost' | 'pearl';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
};

/** Button that magnetically follows the cursor.
 *  aurora: solid aqua fill (dark pages)
 *  outline: foam border on dark · ghost: translucent over imagery
 *  pearl: dark ink fill for light sections. */
export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'aurora',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = cn(
    'group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-md px-9 py-4 font-numeric text-sm font-semibold tracking-[0.18em] uppercase transition-shadow duration-500',
    variant === 'aurora' && 'text-abyss shadow-glow',
    variant === 'outline' && 'text-foam',
    variant === 'ghost' && 'text-foam',
    variant === 'pearl' && 'text-pearl',
    className,
  );

  const layers = (
    <>
      {variant === 'aurora' && (
        <>
          <span className="absolute inset-0 bg-aqua transition-transform duration-500 ease-out group-hover:scale-105" />
          <span className="absolute inset-0 translate-y-full bg-foam transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </>
      )}
      {variant === 'outline' && (
        <>
          <span className="absolute inset-0 rounded-md border border-foam/25 transition-colors duration-500 group-hover:border-aqua" />
          <span className="absolute inset-0 translate-y-full bg-aqua transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </>
      )}
      {variant === 'ghost' && (
        <>
          <span className="absolute inset-0 rounded-md border border-foam/30 bg-foam/5 backdrop-blur-sm transition-colors duration-500" />
          <span className="absolute inset-0 translate-y-full bg-foam transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </>
      )}
      {variant === 'pearl' && (
        <>
          <span className="absolute inset-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-105" />
          <span className="absolute inset-0 translate-y-full bg-electric transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
        </>
      )}
    </>
  );

  const hoverText =
    variant === 'aurora'
      ? 'group-hover:text-abyss'
      : variant === 'outline'
        ? 'group-hover:text-abyss'
        : variant === 'ghost'
          ? 'group-hover:text-abyss'
          : '';

  const inner = (
    <>
      {layers}
      <span className={cn('relative z-10 transition-colors duration-500', hoverText)}>
        {children}
      </span>
      <svg
        className={cn(
          'relative z-10 h-4 w-4 transition-all duration-500 group-hover:translate-x-1',
          hoverText,
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  const motionProps = {
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    whileTap: { scale: 0.96 },
    className: base,
  } as const;

  if (href) {
    if (href.startsWith('/') && !href.includes('#')) {
      return (
        <motion.span {...motionProps} ref={ref as React.Ref<HTMLSpanElement>}>
          <Link href={href} className="contents" onClick={onClick}>
            {inner}
          </Link>
        </motion.span>
      );
    }
    return (
      <motion.a {...motionProps} ref={ref as React.Ref<HTMLAnchorElement>} href={href} onClick={onClick}>
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick}>
      {inner}
    </motion.button>
  );
}
