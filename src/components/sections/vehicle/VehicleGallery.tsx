import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryImage } from '@/types';
import AnimatedHeading from '@/components/animations/AnimatedHeading';
import Reveal from '@/components/animations/Reveal';

/**
 * Masonry-ish gallery with a full-screen lightbox. Every third image spans two
 * columns to keep the rhythm editorial rather than grid-flat.
 */
export default function VehicleGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-abyss-line bg-abyss-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
        <p className="kicker mb-4 text-aqua">Gallery</p>
        <AnimatedHeading text="Study the Details" className="heading-md text-foam" />

        <Reveal stagger={0.06} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setOpen(i)}
              className={`group overflow-hidden rounded-2xl ${i % 5 === 0 ? 'col-span-2' : ''}`}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i % 5 === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
                }`}
              />
            </button>
          ))}
        </Reveal>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-abyss/95 p-4 backdrop-blur-lg md:p-10"
            onClick={() => setOpen(null)}
          >
            <motion.img
              key={open}
              src={images[open].src}
              alt={images[open].alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-float"
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-mist">{images[open].alt}</p>
            <button
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full glass text-foam"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
            {/* prev / next */}
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((cur) => (cur === null ? null : (cur + dir + images.length) % images.length));
                }}
                className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full glass text-foam md:flex ${
                  dir < 0 ? 'left-6' : 'right-6'
                }`}
                aria-label={dir < 0 ? 'Previous image' : 'Next image'}
              >
                <svg viewBox="0 0 24 24" className={`h-5 w-5 ${dir < 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
