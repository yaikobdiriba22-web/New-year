import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { LANDSCAPES } from '../lib/cultureData';
import { TibebBorder } from './EthiopianPatterns';

interface LandscapeSectionProps {
  lang: Language;
}

export const LandscapeSection: React.FC<LandscapeSectionProps> = ({ lang }) => {
  const t = translations[lang].landscapes;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeLand = LANDSCAPES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? LANDSCAPES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === LANDSCAPES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="landscapes" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100/60 dark:bg-[#06120B] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Compass size={14} />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light mt-2 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous landscape"
              className="p-3 rounded-full border border-neutral-300 dark:border-emerald-900/60 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-amber-500 hover:text-neutral-950 transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next landscape"
              className="p-3 rounded-full border border-neutral-300 dark:border-emerald-900/60 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-amber-500 hover:text-neutral-950 transition-colors shadow-sm cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Hero Landscape Spotlight View with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[520px] shadow-2xl border border-neutral-200 dark:border-emerald-900/40 flex flex-col justify-end p-6 sm:p-10 mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeLand.id}
              src={activeLand.image}
              alt={activeLand.nameEn}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.8] contrast-105"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 max-w-2xl text-white"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold mb-3">
                <MapPin size={13} className="text-rose-400" />
                <span>{lang === 'am' ? activeLand.regionAm : lang === 'om' ? activeLand.regionOm : activeLand.regionEn}</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black font-serif text-white mb-3">
                {lang === 'am' ? activeLand.nameAm : lang === 'om' ? activeLand.nameOm : activeLand.nameEn}
              </h3>

              <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed mb-4">
                {lang === 'am' ? activeLand.descriptionAm : lang === 'om' ? activeLand.descriptionOm : activeLand.descriptionEn}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30">
                <span>{t.viewHighlight}:</span>
                <span className="text-white">
                  {lang === 'am' ? activeLand.highlightAm : lang === 'om' ? activeLand.highlightOm : activeLand.highlightEn}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Thumbnail Selector Strip with scroll reveal and hover motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-3"
        >
          {LANDSCAPES.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 + idx * 0.06, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden h-20 sm:h-24 border-2 transition-all duration-300 text-left group cursor-pointer ${
                idx === activeIndex
                  ? 'border-amber-500 shadow-md scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.image} alt={item.nameEn} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1.5 left-2 right-2 text-[11px] font-bold text-white truncate font-serif drop-shadow-md">
                {lang === 'am' ? item.nameAm : lang === 'om' ? item.nameOm : item.nameEn}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
