import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Landmark,
  Sparkles,
  Music,
  UtensilsCrossed,
  Coffee,
  Flower2,
  HeartHandshake,
  Users,
  ChevronRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { Language, CultureItem } from '../types';
import { translations } from '../lib/translations';
import { CULTURE_ITEMS } from '../lib/cultureData';

interface CultureBentoProps {
  lang: Language;
}

export const CultureBento: React.FC<CultureBentoProps> = ({ lang }) => {
  const t = translations[lang].culture;
  const [activeItem, setActiveItem] = useState<CultureItem | null>(null);

  const getCardIcon = (id: string, iconName: string) => {
    switch (id) {
      case 'heritage':
        return { Lucide: Landmark, emoji: '🇪🇹' };
      case 'flowers':
        return { Lucide: Flower2, emoji: '🌼' };
      case 'music':
        return { Lucide: Music, emoji: '🎵' };
      case 'clothing':
        return { Lucide: Sparkles, emoji: '👗' };
      case 'coffee':
        return { Lucide: Coffee, emoji: '☕' };
      case 'food':
        return { Lucide: UtensilsCrossed, emoji: '🍽️' };
      case 'family':
        return { Lucide: Users, emoji: '👨‍👩‍👧‍👦' };
      case 'tradition':
      default:
        return { Lucide: HeartHandshake, emoji: '🤝' };
    }
  };

  return (
    <section id="culture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
          <Sparkles size={14} />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Modern Bento Grid Layout featuring 8 Cultural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CULTURE_ITEMS.map((item, idx) => {
          const { Lucide, emoji } = getCardIcon(item.id, item.iconName);
          const isFeatured = idx === 0 || idx === 4; // Bento highlight spans

          const title = lang === 'am' ? item.titleAm : lang === 'om' ? item.titleOm : item.titleEn;
          const desc = lang === 'am' ? item.descAm : lang === 'om' ? item.descOm : item.descEn;
          const tag = lang === 'am' ? item.tagAm : lang === 'om' ? item.tagOm : item.tagEn;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-emerald-900/40 bg-white dark:bg-[#0A1A12] shadow-md hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isFeatured ? 'md:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Image Container with smooth zoom on hover */}
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent" />

                {/* Cultural Pillar Badge with Emoji + Icon */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wider uppercase shadow-md">
                  <span className="text-sm">{emoji}</span>
                  <Lucide size={13} className="text-amber-400" />
                  <span>{tag}</span>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-neutral-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light line-clamp-3">
                    {desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-emerald-900/40 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span>{t.exploreMore}</span>
                  <ChevronRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cultural Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#FAF8F2] dark:bg-[#071911] border-2 border-amber-500/50 shadow-2xl overflow-hidden text-neutral-900 dark:text-white max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-transparent" />

                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close dialog"
                  className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors shadow-md"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {lang === 'am' ? activeItem.tagAm : lang === 'om' ? activeItem.tagOm : activeItem.tagEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-1">
                    {lang === 'am' ? activeItem.titleAm : lang === 'om' ? activeItem.titleOm : activeItem.titleEn}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed font-light">
                  {lang === 'am' ? activeItem.descAm : lang === 'om' ? activeItem.descOm : activeItem.descEn}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3 font-mono">
                    Cultural Highlights & Significance
                  </h4>
                  <ul className="space-y-2.5">
                    {(lang === 'am' ? activeItem.detailsAm : lang === 'om' ? activeItem.detailsOm : activeItem.detailsEn).map(
                      (detail, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-emerald-900/40 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-colors"
                  >
                    {t.closeModal}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
