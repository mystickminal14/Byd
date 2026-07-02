import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouterState } from '@tanstack/react-router';
import Link from '@/components/ui/Link';
import BydLogo from '@/components/ui/BydLogo';
import { NAV_LINKS } from '@/data/site';
import { VEHICLES } from '@/data/vehicles';
import { formatLakh } from '@/lib/utils';
import { cn } from '@/lib/utils';

/**
 * Floating pill navbar: a detached glass capsule that condenses on scroll.
 * "Models" opens a showroom mega-panel — a model list on the left drives a
 * live preview stage on the right. Mobile gets a full-screen sheet.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/models' ? pathname.startsWith('/models') : pathname === href;

  const previewVehicle = VEHICLES[preview];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="relative mx-auto max-w-[1440px]" onMouseLeave={() => setMegaOpen(false)}>
        {/* the pill */}
        <div
          className={cn(
            'glass flex items-center justify-between rounded-2xl pr-3 pl-5 transition-all duration-500 md:pr-4 md:pl-7',
            scrolled || megaOpen || mobileOpen ? 'h-14 shadow-float' : 'h-16 shadow-card',
          )}
        >
          <Link href="/" aria-label="BYD home" className="flex items-center">
            <BydLogo className="h-5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.label === 'Models' ? (
                <button
                  key={link.href}
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen((v) => !v)}
                  className={cn(
                    'relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                    megaOpen || isActive('/models') ? 'text-aqua' : 'text-foam/80 hover:text-foam',
                  )}
                >
                  Models
                  <svg
                    viewBox="0 0 24 24"
                    className={cn('h-3.5 w-3.5 transition-transform duration-300', megaOpen && 'rotate-180')}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {isActive('/models') && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-aqua" />
                  )}
                </button>
              ) : (
                <span key={link.href} onMouseEnter={() => setMegaOpen(false)}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative block rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors',
                      isActive(link.href) ? 'text-aqua' : 'text-foam/80 hover:text-foam',
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-aqua" />
                    )}
                  </Link>
                </span>
              ),
            )}
            <span onMouseEnter={() => setMegaOpen(false)} className="ml-3">
              <Link
                href="/test-drive"
                className="block rounded-md bg-aqua px-6 py-2.5 font-numeric text-xs font-semibold tracking-[0.08em] text-abyss uppercase transition-colors hover:bg-foam"
              >
                Test Drive
              </Link>
            </span>
          </nav>

          {/* Mobile burger */}
          <button
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={cn('block h-0.5 w-6 bg-foam transition-transform', mobileOpen && 'translate-y-2 rotate-45')} />
              <span className={cn('block h-0.5 w-6 bg-foam transition-opacity', mobileOpen && 'opacity-0')} />
              <span className={cn('block h-0.5 w-6 bg-foam transition-transform', mobileOpen && '-translate-y-2 -rotate-45')} />
            </div>
          </button>
        </div>

        {/* Mega panel — showroom */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-x-0 top-full hidden pt-2.5 lg:block"
            >
              <div className="overflow-hidden rounded-2xl border border-aqua/10 bg-abyss/95 shadow-float backdrop-blur-2xl">
              <div className="grid grid-cols-[340px_1fr]">
                {/* model list */}
                <div className="border-r border-abyss-line/60 p-4">
                  <p className="kicker px-4 pt-3 pb-2 text-[9px] text-mist-dim">The Lineup</p>
                  {VEHICLES.map((v, i) => (
                    <Link
                      key={v.slug}
                      href={`/models/${v.slug}`}
                      onClick={() => setMegaOpen(false)}
                    >
                      <span
                        onMouseEnter={() => setPreview(i)}
                        className={cn(
                          'flex items-baseline justify-between gap-3 rounded-xl px-4 py-3 transition-colors duration-200',
                          i === preview ? 'bg-abyss-raised' : 'hover:bg-abyss-raised/50',
                        )}
                      >
                        <span
                          className={cn(
                            'display-name text-lg transition-colors',
                            i === preview ? 'text-aqua' : 'text-foam/80',
                          )}
                        >
                          {v.name.replace('BYD ', '')}
                        </span>
                        <span className="numeric shrink-0 text-xs text-mist-dim">
                          Rs. {formatLakh(v.startingPrice)}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/models"
                    onClick={() => setMegaOpen(false)}
                    className="kicker mt-2 flex items-center gap-2 px-4 py-3 text-[10px] text-aqua transition-colors hover:text-foam"
                  >
                    View &amp; Compare All
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {/* live preview stage */}
                <Link
                  href={`/models/${previewVehicle.slug}`}
                  onClick={() => setMegaOpen(false)}
                  className="group relative block min-h-[380px] overflow-hidden"
                >
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={previewVehicle.slug}
                      src={previewVehicle.cardImage}
                      alt={previewVehicle.name}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/10 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-6 p-7">
                    <div>
                      <p className="kicker text-[9px] text-aqua">{previewVehicle.badge}</p>
                      <p className="display-name mt-1 text-3xl text-foam">
                        {previewVehicle.name.replace('BYD ', '')}
                      </p>
                      <div className="mt-3 flex gap-5">
                        {previewVehicle.highlightStats.slice(0, 3).map((s) => (
                          <p key={s.label} className="numeric text-sm text-mist">
                            <span className="font-semibold text-foam">{s.value}</span>
                            {s.unit && <span className="text-aqua"> {s.unit}</span>}
                            <span className="ml-1 text-[10px] tracking-wide text-mist-dim uppercase">{s.label}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <span className="glass flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-semibold tracking-[0.08em] text-foam uppercase transition-colors group-hover:text-aqua">
                      Discover
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] z-40 overflow-y-auto bg-abyss/97 px-6 pb-16 backdrop-blur-xl lg:hidden"
          >
            <p className="kicker mt-8 mb-4 text-mist-dim">Models</p>
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
              {VEHICLES.map((v) => (
                <Link key={v.slug} href={`/models/${v.slug}`} className="card-dark overflow-hidden rounded-xl">
                  <img src={v.cardImage} alt={v.name} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-3">
                    <p className="font-display text-sm font-semibold">{v.name.replace('BYD ', '')}</p>
                    <p className="numeric text-xs text-mist-dim">Rs. {formatLakh(v.startingPrice)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="kicker mt-10 mb-4 text-mist-dim">Explore</p>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.filter((l) => l.label !== 'Models').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-abyss-line py-4 font-display text-2xl font-semibold text-foam"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/test-drive"
                className="mt-6 rounded-full bg-aqua px-8 py-4 text-center font-numeric text-sm font-semibold tracking-[0.08em] text-abyss uppercase"
              >
                Book a Test Drive
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
