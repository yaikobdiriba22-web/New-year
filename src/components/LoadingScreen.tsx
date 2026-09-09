import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant fast loading timer (1.4 seconds total)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07130D] text-amber-50 px-4 select-none"
        >
          {/* Subtle glowing radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#06110B]/80 to-[#030906] pointer-events-none" />

          {/* Top tibeb border */}
          <div className="absolute top-0 left-0 w-full">
            <TibebBorder colorVariant="gold" />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Spinning blooming Adey Abeba icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="mb-4"
            >
              <AdeyAbebaIcon size={68} className="drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.35em] text-amber-400 font-semibold mb-2"
            >
              Meskerem 1 • 2019 E.C.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-widest text-amber-100 font-serif mb-2"
            >
              ENKUTATASH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-lg sm:text-xl font-medium text-emerald-300/90 font-serif tracking-wide"
            >
              መልካም አዲስ ዓመት • Baga Bara Haaraa Geessan
            </motion.div>

            {/* Subtle Progress pulse line */}
            <div className="w-36 h-[2px] bg-emerald-950 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-amber-500 to-yellow-300"
              />
            </div>
          </motion.div>

          {/* Bottom tibeb border */}
          <div className="absolute bottom-0 left-0 w-full">
            <TibebBorder colorVariant="gold" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
