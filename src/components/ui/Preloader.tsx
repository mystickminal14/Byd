import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BydLogo from '@/components/ui/BydLogo';

/**
 * Boot preloader: a brief aurora sweep under the BYD wordmark while fonts and
 * the hero image warm up, then a clean upward exit.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-abyss"
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
          >
            <BydLogo className="h-8" />
          </motion.div>
          <div className="mt-8 h-px w-44 overflow-hidden rounded-full bg-abyss-line">
            <motion.div
              className="h-full w-1/2 bg-aqua"
              initial={{ x: '-100%' }}
              animate={{ x: '200%', transition: { duration: 1.1, ease: 'easeInOut', repeat: Infinity } }}
            />
          </div>
          <motion.p
            className="kicker mt-6 text-mist-dim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4 } }}
          >
            Technology · Green · Future
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
