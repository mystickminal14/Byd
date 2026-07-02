import { useState } from 'react';
import useSeo from '@/hooks/useSeo';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';
import ImageReveal from '@/components/animations/ImageReveal';
import { VEHICLES } from '@/data/vehicles';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';

/**
 * Test-drive request form (front-end demo: validates and confirms locally,
 * ready to be wired to a backend or mail service).
 */
export default function TestDrive() {
  useSeo({
    title: 'Book a Test Drive',
    description: 'Book a BYD test drive in Nepal — pick your model, date and showroom, and the Cimex team will confirm.',
  });

  const [model, setModel] = useState(VEHICLES[0].slug);
  const [submitted, setSubmitted] = useState(false);
  const selected = VEHICLES.find((v) => v.slug === model)!;

  return (
    <div className="bg-abyss pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Feel It First</p>
        <AnimatedHeading text="Book a Test Drive" className="heading-lg text-foam" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ImageReveal
              key={selected.slug}
              src={selected.cardImage}
              alt={selected.name}
              className="rounded-3xl shadow-float"
              imgClassName="aspect-[16/10]"
            />
            <div className="card-dark mt-6 rounded-2xl p-6">
              <p className="font-display text-xl font-semibold text-foam">{selected.name}</p>
              <p className="mt-1 text-sm text-mist">{selected.tagline}</p>
              <p className="mt-4 text-xs leading-relaxed text-mist-dim">
                Drives depart from {SITE.flagship}. The team can also arrange home test drives in
                the Kathmandu valley.
              </p>
            </div>
          </div>

          <Reveal>
            {submitted ? (
              <div className="card-dark rounded-3xl p-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aqua">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#04121c" strokeWidth="2.5">
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-foam">Request received</h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  The Cimex team will call to confirm your {selected.name.replace('BYD ', '')} test
                  drive. See you behind the wheel.
                </p>
              </div>
            ) : (
              <form
                className="card-dark space-y-6 rounded-3xl p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="kicker mb-3 block text-mist-dim">Model</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {VEHICLES.map((v) => (
                      <button
                        type="button"
                        key={v.slug}
                        onClick={() => setModel(v.slug)}
                        className={cn(
                          'rounded-xl px-3 py-3 text-sm font-medium transition-all',
                          model === v.slug
                            ? 'bg-aqua text-abyss'
                            : 'bg-abyss-soft text-mist hover:text-foam',
                        )}
                      >
                        {v.name.replace('BYD ', '')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" type="text" placeholder="Your name" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="98XXXXXXXX" required />
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                  <Field label="Preferred date" name="date" type="date" required />
                </div>

                <div>
                  <label className="kicker mb-3 block text-mist-dim" htmlFor="td-message">
                    Anything else?
                  </label>
                  <textarea
                    id="td-message"
                    name="message"
                    rows={3}
                    placeholder="Trade-in, financing, home test drive…"
                    className="w-full rounded-xl border border-abyss-line bg-abyss-soft px-4 py-3 text-sm text-foam placeholder:text-mist-dim focus:border-aqua focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-aqua py-4 font-numeric text-sm font-bold tracking-[0.2em] text-abyss uppercase transition-transform hover:scale-[1.01]"
                >
                  Request Test Drive
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="kicker mb-3 block text-mist-dim" htmlFor={`td-${name}`}>
        {label}
      </label>
      <input
        id={`td-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-abyss-line bg-abyss-soft px-4 py-3 text-sm text-foam placeholder:text-mist-dim focus:border-aqua focus:outline-none [color-scheme:dark]"
      />
    </div>
  );
}
