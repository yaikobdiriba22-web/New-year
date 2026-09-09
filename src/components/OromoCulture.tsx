import React, { useState } from 'react';
import { 
  Sparkles, 
  Shield, 
  Music, 
  UtensilsCrossed, 
  Crown, 
  Landmark, 
  X, 
  CheckCircle2, 
  Quote, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { OROMO_CULTURE_PILLARS, OromoPillar } from '../lib/oromoData';
import { OdaaTreeIcon, AdeyAbebaIcon, CelebrationRibbon } from './EthiopianPatterns';

interface OromoCultureProps {
  lang: Language;
}

export const OromoCulture: React.FC<OromoCultureProps> = ({ lang }) => {
  const t = translations[lang].oromoCulture;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPillar, setSelectedPillar] = useState<OromoPillar | null>(null);

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'governance', label: t.filterGovernance },
    { id: 'celebration', label: t.filterCelebration },
    { id: 'music', label: t.filterMusic },
    { id: 'cuisine', label: t.filterCuisine },
    { id: 'attire', label: t.filterAttire },
    { id: 'philosophy', label: t.filterPhilosophy },
  ];

  const filteredPillars = activeCategory === 'all'
    ? OROMO_CULTURE_PILLARS
    : OROMO_CULTURE_PILLARS.filter(p => p.category === activeCategory);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark size={20} className="text-amber-500 dark:text-amber-400" />;
      case 'Sparkles':
        return <Sparkles size={20} className="text-amber-500 dark:text-amber-400" />;
      case 'Shield':
        return <Shield size={20} className="text-amber-500 dark:text-amber-400" />;
      case 'Music':
        return <Music size={20} className="text-amber-500 dark:text-amber-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={20} className="text-amber-500 dark:text-amber-400" />;
      case 'Crown':
        return <Crown size={20} className="text-amber-500 dark:text-amber-400" />;
      default:
        return <Sparkles size={20} className="text-amber-500 dark:text-amber-400" />;
    }
  };

  return (
    <section id="oromo-culture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <OdaaTreeIcon size={16} className="text-amber-600 dark:text-amber-400" />
          <span>{t.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
          {t.title}
        </h2>
        
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          {t.subtitle}
        </p>

        {/* Decorative Odaa / Gadaa Ribbon Accent */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-12 h-[2px] bg-neutral-900 dark:bg-white/40" />
          <span className="w-12 h-[2px] bg-red-600" />
          <span className="w-12 h-[2px] bg-amber-400" />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
              activeCategory === cat.id
                ? 'bg-amber-500 border-amber-500 text-neutral-950 shadow-md scale-105'
                : 'bg-neutral-100 dark:bg-emerald-950/40 border-neutral-200 dark:border-emerald-900/50 text-neutral-700 dark:text-neutral-300 hover:border-amber-400/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPillars.map((pillar) => {
          const title = lang === 'am' ? pillar.titleAm : lang === 'om' ? pillar.titleOm : pillar.titleEn;
          const subtitle = lang === 'am' ? pillar.subtitleAm : lang === 'om' ? pillar.subtitleOm : pillar.subtitleEn;
          const desc = lang === 'am' ? pillar.descAm : lang === 'om' ? pillar.descOm : pillar.descEn;
          const tag = lang === 'am' ? pillar.tagAm : lang === 'om' ? pillar.tagOm : pillar.tagEn;
          const highlights = lang === 'am' ? pillar.highlightsAm : lang === 'om' ? pillar.highlightsOm : pillar.highlightsEn;
          const quote = lang === 'am' ? pillar.quoteAm : lang === 'om' ? pillar.quoteOm : pillar.quoteEn;

          return (
            <div
              key={pillar.id}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-emerald-950/30 border border-neutral-200 dark:border-emerald-900/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Pillar Image with Badge Overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <img
                  src={pillar.image}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700/50 text-[11px] font-bold text-amber-300">
                  {getPillarIcon(pillar.iconName)}
                  <span>{tag}</span>
                </div>

                {/* UNESCO Badge for Gadaa */}
                {pillar.id === 'gadaa' && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-black tracking-wider uppercase shadow-md">
                    {t.gadaaBadge}
                  </div>
                )}

                {/* Bottom Image Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">
                    {subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-5 line-clamp-3">
                    {desc}
                  </p>

                  {/* Highlights Bullet Previews */}
                  <div className="space-y-2 mb-5">
                    {highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 size={14} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Proverb / Quote snippet */}
                  {quote && (
                    <div className="p-3 rounded-2xl bg-amber-500/5 dark:bg-emerald-900/20 border border-amber-500/20 mb-5 flex items-start gap-2">
                      <Quote size={14} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 rotate-180" />
                      <p className="text-xs italic text-neutral-700 dark:text-amber-100/90 font-serif line-clamp-2">
                        {quote}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPillar(pillar)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl border border-amber-500/30 dark:border-emerald-800/60 bg-amber-500/10 hover:bg-amber-500 hover:text-neutral-950 text-amber-700 dark:text-amber-300 dark:hover:text-neutral-950 font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <BookOpen size={14} />
                  <span>{t.viewDetails}</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cultural Detail Modal */}
      {selectedPillar && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPillar(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-white dark:bg-[#081710] text-neutral-900 dark:text-amber-50 shadow-2xl border border-neutral-200 dark:border-emerald-900/60 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="relative h-64 w-full bg-neutral-900 shrink-0">
              <img
                src={selectedPillar.image}
                alt={selectedPillar.titleEn}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                aria-label={t.closeModal}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-neutral-950 font-mono text-[10px] font-black uppercase">
                    {lang === 'am' ? selectedPillar.tagAm : lang === 'om' ? selectedPillar.tagOm : selectedPillar.tagEn}
                  </span>
                  {selectedPillar.id === 'gadaa' && (
                    <span className="text-xs font-mono text-amber-300">UNESCO HERITAGE</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  {lang === 'am' ? selectedPillar.titleAm : lang === 'om' ? selectedPillar.titleOm : selectedPillar.titleEn}
                </h3>
                <p className="text-xs text-amber-200/80 font-mono mt-0.5">
                  {lang === 'am' ? selectedPillar.subtitleAm : lang === 'om' ? selectedPillar.subtitleOm : selectedPillar.subtitleEn}
                </p>
              </div>
            </div>

            <CelebrationRibbon />

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
                  Cultural Significance
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 font-light leading-relaxed">
                  {lang === 'am' ? selectedPillar.descAm : lang === 'om' ? selectedPillar.descOm : selectedPillar.descEn}
                </p>
              </div>

              {/* Highlights List */}
              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-emerald-950/30 border border-neutral-200 dark:border-emerald-900/40">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-amber-300 mb-3 flex items-center gap-2">
                  <AdeyAbebaIcon size={16} />
                  <span>Key Traditions & Wisdom</span>
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'am'
                    ? selectedPillar.highlightsAm
                    : lang === 'om'
                    ? selectedPillar.highlightsOm
                    : selectedPillar.highlightsEn
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sacred Proverb / Quote */}
              {(selectedPillar.quoteEn || selectedPillar.quoteAm || selectedPillar.quoteOm) && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <Quote size={18} className="text-amber-600 dark:text-amber-400 shrink-0 rotate-180 mt-1" />
                  <div>
                    <p className="text-xs sm:text-sm italic font-serif text-neutral-900 dark:text-amber-100">
                      {lang === 'am'
                        ? selectedPillar.quoteAm
                        : lang === 'om'
                        ? selectedPillar.quoteOm
                        : selectedPillar.quoteEn}
                    </p>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-amber-700 dark:text-amber-300 mt-1 block">
                      Traditional Benediction & Philosophy
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Footer Close Action */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedPillar(null)}
                  className="px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-neutral-950 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {t.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
