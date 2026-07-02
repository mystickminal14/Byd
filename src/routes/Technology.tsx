import useSeo from '@/hooks/useSeo';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import ImageReveal from '@/components/animations/ImageReveal';
import Counter from '@/components/animations/Counter';
import VideoExperience from '@/components/sections/VideoExperience';
import EnquiryCTA from '@/components/sections/EnquiryCTA';

const PILLARS = [
  {
    title: 'Blade Battery',
    image: '/assets/about/blade-battery-pc.jpg',
    body: 'Ultra-safe LFP cells shaped like blades and arrayed into the pack itself. It passes the nail-penetration test — the Everest of battery abuse tests — without fire or explosion.',
  },
  {
    title: 'e-Platform 3.0',
    image: '/assets/about/e-platform-pc.jpg',
    body: 'A dedicated EV skateboard with the 8-in-1 electric powertrain, 800V architecture and heat-pump thermal management. Intelligence, efficiency, safety, aesthetics.',
  },
  {
    title: 'CTB — Cell to Body',
    image: '/assets/about/ctb-pc.jpg',
    body: 'The battery pack becomes a structural sandwich with the floor: torsional rigidity jumps, the cabin gains space, and crash energy has fewer places to go.',
  },
  {
    title: 'DiLink Intelligent Cockpit',
    image: '/assets/about/dilink-pc.jpg',
    body: 'The rotating touchscreen, OTA updates and intelligent voice — an open cockpit platform that keeps getting smarter after you buy the car.',
  },
  {
    title: 'Intelligent Driving Assistance',
    image: '/assets/about/auto-pc.jpg',
    body: 'Radar and camera fusion delivers adaptive cruise, lane centring, AEB and cross-traffic protection across the Nepal lineup.',
  },
  {
    title: 'Safety, Certified',
    image: '/assets/about/safety-pc.jpg',
    body: 'BYD models carry 5-star ratings from Euro NCAP and ANCAP — the body structure is engineered around the battery, not despite it.',
  },
];

const NUMBERS = [
  { value: '3.0', label: 'e-Platform generation' },
  { value: '800', label: 'Volt high-efficiency architecture' },
  { value: '8', label: 'Systems in one powertrain module' },
  { value: '5', label: 'Star Euro NCAP heritage' },
];

export default function Technology() {
  useSeo({
    title: 'Technology — Blade Battery, e-Platform 3.0 & CTB',
    description:
      'The technology behind every BYD in Nepal: the ultra-safe Blade Battery, e-Platform 3.0, Cell-to-Body construction and the DiLink intelligent cockpit.',
  });

  return (
    <>
      <section className="aurora relative overflow-hidden bg-abyss pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <p className="kicker mb-4 text-aqua">Engineering</p>
          <AnimatedHeading text="Born Electric," className="heading-lg text-foam" />
          <Reveal from="up" distance={60}>
            <p className="heading-lg text-aurora pb-1">Not Converted</p>
          </Reveal>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            BYD began as a battery company in 1995. Thirty years later that DNA shows: every car in
            the lineup is designed around its own cells, not around a hole where an engine used to be.
          </p>

          <Reveal stagger={0.08} className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
            {NUMBERS.map((n) => (
              <div key={n.label} className="card-dark px-6 py-6">
                <p className="numeric text-4xl font-semibold text-aurora md:text-5xl">
                  <Counter value={n.value} />
                </p>
                <p className="mt-2 text-xs tracking-wide text-mist-dim uppercase">{n.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-pearl py-24 text-ink md:py-32">
        <div className="mx-auto max-w-[1400px] space-y-20 px-6 md:space-y-28 md:px-10">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <ImageReveal
                src={p.image}
                alt={p.title}
                direction={i % 2 ? 'right' : 'left'}
                className="rounded-3xl shadow-pearl"
                imgClassName="aspect-[16/10]"
                parallax
              />
              <div>
                <p className="numeric mb-4 text-sm font-semibold text-electric">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <AnimatedHeading text={p.title} className="heading-md" />
                <Reveal delay={0.12}>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">{p.body}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VideoExperience
        youtubeId="DYLkYRoYAaQ"
        kicker="Deep Dive"
        title="e-Platform 3.0, Explained"
        caption="BYD's own engineers walk through the architecture that underpins the entire lineup."
      />
      <EnquiryCTA />
    </>
  );
}
