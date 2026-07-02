import { useEffect, useRef, useState } from 'react';
import useSeo from '@/hooks/useSeo';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import ImageReveal from '@/components/animations/ImageReveal';
import Counter from '@/components/animations/Counter';
import EnquiryCTA from '@/components/sections/EnquiryCTA';

const MILESTONES = [
  { year: '1995', text: 'BYD founded in Shenzhen as a rechargeable-battery maker with 20 people.' },
  { year: '2003', text: 'BYD Auto is born — the battery company starts building cars around its cells.' },
  { year: '2020', text: 'The Blade Battery debuts and passes the nail-penetration test on camera.' },
  { year: '2023', text: 'BYD becomes the world’s best-selling new-energy vehicle brand.' },
  { year: 'Today', text: 'Cimex Inc. brings the full Ocean & Dynasty lineup to Nepal, from ATTO 1 to SEALION 7.' },
];

const RATINGS = [
  { img: '/assets/about/euro-ncap-pc.jpg', label: 'Euro NCAP' },
  { img: '/assets/about/ancap-pc.jpg', label: 'ANCAP' },
  { img: '/assets/about/c-ncap-pc.jpg', label: 'C-NCAP' },
  { img: '/assets/about/green-ncap-pc.jpg', label: 'Green NCAP' },
];

export default function About() {
  useSeo({
    title: 'About BYD — Build Your Dreams',
    description:
      'From a 1995 battery startup to the world’s best-selling NEV brand: the BYD story, its safety credentials, and Cimex — the official distributor for Nepal.',
  });

  // autoplay brand film muted when scrolled into view
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-abyss">
        <video
          ref={videoRef}
          src="/assets/about/brand-film.mp4"
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-abyss/35" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-44 pb-16 md:px-10">
          <p className="kicker mb-4 text-aqua">About BYD</p>
          <AnimatedHeading text="Build Your Dreams" className="heading-xl text-foam" />
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setMuted((m) => !m)}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold tracking-[0.08em] text-foam uppercase"
            >
              {muted ? 'Sound On' : 'Mute'}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                {muted ? (
                  <path d="M11 5 6 9H3v6h3l5 4V5Zm5 3.5a5 5 0 0 1 0 7M19 6a9 9 0 0 1 0 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M11 5 6 9H3v6h3l5 4V5Zm7 2-6 10" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
            <p className="text-xs text-mist">Official BYD brand film</p>
          </div>
        </div>
      </section>

      <section className="border-y border-abyss-line bg-abyss-soft py-16">
        <Reveal stagger={0.1} className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
          {[
            { v: '30', s: '+', l: 'Years of R&D' },
            { v: '900', s: 'k+', l: 'Employees worldwide' },
            { v: '110', s: '+', l: 'Countries & regions' },
            { v: '1', s: 'st', l: 'In global NEV sales' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="numeric text-4xl font-semibold text-foam md:text-6xl">
                <Counter value={s.v} />
                <span className="text-aurora">{s.s}</span>
              </p>
              <p className="mt-2 text-xs tracking-[0.08em] text-mist-dim uppercase">{s.l}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-pearl py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="kicker mb-4 text-electric">The Story</p>
              <AnimatedHeading text="A Battery Company That Builds Cars" className="heading-md" />
              <div className="mt-10 space-y-0">
                {MILESTONES.map((m, i) => (
                  <Reveal key={m.year} delay={i * 0.05} className="flex gap-6 border-l-2 border-pearl-line pb-9 pl-7 last:pb-0">
                    <div>
                      <p className="numeric -mt-1 text-2xl font-bold text-electric">{m.year}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{m.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <ImageReveal
                src="/assets/about/about-byd-pc.jpg"
                alt="BYD global headquarters campus"
                className="rounded-3xl shadow-pearl"
                imgClassName="aspect-[16/10]"
              />
              <ImageReveal
                src="/assets/about/market-pc.jpg"
                alt="BYD lineup"
                direction="right"
                className="rounded-3xl shadow-pearl"
                imgClassName="aspect-[16/10]"
              />
            </div>
          </div>

          <div className="mt-24">
            <p className="kicker mb-4 text-electric">Independently Verified</p>
            <AnimatedHeading text="Safety Ratings that Travel" className="heading-md" />
            <Reveal stagger={0.08} className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {RATINGS.map((r) => (
                <div key={r.label} className="card-pearl flex flex-col items-center gap-3 rounded-3xl p-6">
                  <img src={r.img} alt={r.label} loading="lazy" className="h-14 w-auto object-contain" />
                  <p className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{r.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="mt-24 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="kicker mb-4 text-electric">In Nepal</p>
              <AnimatedHeading text="Delivered by Cimex" className="heading-md" />
              <Reveal delay={0.12}>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">
                  Cimex Inc. Pvt. Ltd. is the official distributor of BYD in Nepal, anchored by the
                  BYD Complex in Naxal, Kathmandu, with sales and service reaching across the
                  country. Hydropower in the grid, Blade Batteries on the road — few markets make
                  the electric case as cleanly as Nepal.
                </p>
              </Reveal>
            </div>
            <ImageReveal
              src="/assets/about/reduction-pc1.jpg"
              alt="Green forest canopy"
              direction="right"
              className="rounded-3xl shadow-pearl"
              imgClassName="aspect-[16/10]"
              parallax
            />
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}
