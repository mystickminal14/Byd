import useSeo from '@/hooks/useSeo';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import MagneticButton from '@/components/animations/MagneticButton';
import { SITE } from '@/data/site';

const CHANNELS = [
  {
    title: 'Flagship Showroom',
    body: SITE.flagship,
    note: 'Sales · Service · Spares',
  },
  {
    title: 'Official Distributor',
    body: SITE.legalName,
    note: 'Authorized BYD partner for Nepal',
  },
  {
    title: 'Online',
    body: 'cimex.com.np',
    note: 'Price lists, offers & showroom locations',
    href: SITE.distributorUrl,
  },
];

export default function Contact() {
  useSeo({
    title: 'Contact — BYD Nepal',
    description: 'Reach BYD Nepal: the Cimex flagship showroom at BYD Complex, Naxal, Kathmandu, and the nationwide network.',
  });

  return (
    <div className="bg-abyss pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Say Hello</p>
        <AnimatedHeading text="Talk to BYD Nepal" className="heading-lg text-foam" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
          Walk into the BYD Complex in Naxal, or start online — the Cimex team handles everything
          from first questions to fleet orders.
        </p>

        <Reveal stagger={0.1} className="mt-14 grid gap-6 md:grid-cols-3">
          {CHANNELS.map((c) => (
            <div key={c.title} className="card-dark rounded-3xl p-8">
              <p className="kicker text-aqua">{c.title}</p>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block font-display text-xl font-semibold text-foam hover:text-aqua"
                >
                  {c.body}
                </a>
              ) : (
                <p className="mt-4 font-display text-xl font-semibold text-foam">{c.body}</p>
              )}
              <p className="mt-2 text-sm text-mist">{c.note}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 overflow-hidden rounded-3xl shadow-float">
          <iframe
            title="BYD Complex, Naxal, Kathmandu"
            src="https://www.google.com/maps?q=BYD%20Complex%2C%20Naxal%2C%20Kathmandu&output=embed"
            className="h-[420px] w-full border-0 grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <div className="mt-14 text-center">
          <MagneticButton href="/test-drive">Book a Test Drive Instead</MagneticButton>
        </div>
      </div>
    </div>
  );
}
