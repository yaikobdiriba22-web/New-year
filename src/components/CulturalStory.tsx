import React from 'react';
import { Sparkles, Crown, Sun, Music, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder, GeezCrossEmblem } from './EthiopianPatterns';

interface CulturalStoryProps {
  lang: Language;
}

export const CulturalStory: React.FC<CulturalStoryProps> = ({ lang }) => {
  const t = translations[lang].story;

  const storyChapters = [
    {
      icon: Crown,
      badge: 'ROYAL HERITAGE',
      title: t.card1Title,
      description: t.card1Desc,
      color: 'from-amber-500/20 to-yellow-500/10',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-500',
    },
    {
      icon: Sun,
      badge: 'SEASONAL RENEWAL',
      title: t.card2Title,
      description: t.card2Desc,
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-500',
    },
    {
      icon: Music,
      badge: 'COMMUNAL SONGS',
      title: t.card3Title,
      description: t.card3Desc,
      color: 'from-rose-500/20 to-orange-500/10',
      border: 'border-rose-500/30',
      iconColor: 'text-rose-500',
    },
    {
      icon: Heart,
      badge: 'SACRED BOND',
      title: t.card4Title,
      description: t.card4Desc,
      color: 'from-amber-500/20 to-emerald-500/10',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-[#06140D] transition-colors relative overflow-hidden">
      {/* Background Ge'ez watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none text-[300px] font-serif font-black leading-none text-amber-500">
        ፳፻፲፱
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
            <GeezCrossEmblem size={14} />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Story Chapters Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {storyChapters.map((chapter, idx) => {
            const Icon = chapter.icon;
            return (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border ${chapter.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${chapter.color} ${chapter.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                    Chapter 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-serif mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {chapter.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                  {chapter.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cultural Proverb / Quote Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0A2619] to-emerald-950 border border-amber-500/30 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <AdeyAbebaIcon size={44} className="mx-auto mb-4 drop-shadow-md" />
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-amber-200 leading-relaxed mb-3">
              &quot;እንቁጣጣሽ ሎሚ እምቧይ አበባ፤ አዲሱ ዓመት ሰላም ፍቅር ይዞልን ይግባ!&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-emerald-300/90 tracking-widest uppercase font-mono">
              Ancient Ethiopian New Year Anthem • Abebayehosh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
