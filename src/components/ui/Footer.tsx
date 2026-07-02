import Link from '@/components/ui/Link';
import BydLogo from '@/components/ui/BydLogo';
import { SITE, NAV_LINKS } from '@/data/site';
import { VEHICLES } from '@/data/vehicles';

export default function Footer() {
  return (
    <footer className="aurora relative overflow-hidden border-t border-abyss-line bg-abyss">
      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BydLogo className="h-7" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              {SITE.tagline} — BYD electric vehicles in Nepal, officially distributed by{' '}
              {SITE.legalName}. Powered by the ultra-safe Blade Battery.
            </p>
            <a
              href={SITE.distributorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-aqua hover:text-seafoam"
            >
              cimex.com.np
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <p className="kicker mb-5 text-mist-dim">Models</p>
            <ul className="space-y-3">
              {VEHICLES.map((v) => (
                <li key={v.slug}>
                  <Link href={`/models/${v.slug}`} className="text-sm text-foam/80 transition-colors hover:text-aqua">
                    {v.name.replace('BYD ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-5 text-mist-dim">Explore</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-foam/80 transition-colors hover:text-aqua">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/test-drive" className="text-sm text-foam/80 transition-colors hover:text-aqua">
                  Test Drive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="kicker mb-5 text-mist-dim">Visit</p>
            <p className="text-sm leading-relaxed text-foam/80">{SITE.flagship}</p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Sales · Service · Spares
              <br />
              Nationwide dealer network
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-abyss-line pt-8 md:flex-row">
          <p className="text-xs text-mist-dim">
            © {new Date().getFullYear()} {SITE.legalName} — Authorized distributor of BYD Auto in Nepal.
          </p>
          <p className="kicker text-[10px] text-mist-dim">Build Your Dreams</p>
        </div>
      </div>

      {/* oversized watermark */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <p className="heading-xl -mb-[0.23em] text-center text-foam/[0.04]">BUILD YOUR DREAMS</p>
      </div>
    </footer>
  );
}
