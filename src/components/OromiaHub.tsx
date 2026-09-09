import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { OdaaTreeIcon } from './EthiopianPatterns';
import { OromoCulture } from './OromoCulture';
import { OromiaGallery } from './OromiaGallery';

interface OromiaHubProps {
  lang: Language;
}

export const OromiaHub: React.FC<OromiaHubProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'heritage' | 'pictures'>('heritage');
  const t = translations[lang].oromoSection;

  // Listen to hash changes so deep links like #oromo-culture or #oromia-gallery activate the right tab
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#oromia-gallery' || hash === '#oromia-pictures' || hash === '#oromia-photos') {
        setActiveTab('pictures');
      } else if (hash === '#oromo-culture' || hash === '#oromo-heritage') {
        setActiveTab('heritage');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="oromia" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Anchor targets so legacy or direct links still scroll here smoothly */}
      <div id="oromo-culture" className="absolute -top-24 pointer-events-none" />
      <div id="oromia-gallery" className="absolute -top-24 pointer-events-none" />

      {/* Unified Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
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

        {/* Decorative Gadaa Tricolor Accent */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="w-12 h-[2px] bg-neutral-900 dark:bg-white/40" />
          <span className="w-12 h-[2px] bg-red-600" />
          <span className="w-12 h-[2px] bg-amber-400" />
        </div>

        {/* The Unified Button Section Switcher */}
        <div className="mt-10 inline-flex p-1.5 rounded-full bg-neutral-200/90 dark:bg-emerald-950/90 border border-neutral-300/80 dark:border-emerald-800/80 shadow-md">
          <button
            type="button"
            id="tab-btn-oromo-heritage"
            onClick={() => setActiveTab('heritage')}
            className={`min-h-[44px] px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 flex items-center gap-2.5 ${
              activeTab === 'heritage'
                ? 'bg-amber-500 text-neutral-950 shadow-md scale-102 font-extrabold'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <OdaaTreeIcon size={17} className={activeTab === 'heritage' ? 'text-neutral-950' : 'text-amber-500'} />
            <span>{t.tabHeritage}</span>
          </button>

          <button
            type="button"
            id="tab-btn-oromia-pictures"
            onClick={() => setActiveTab('pictures')}
            className={`min-h-[44px] px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 flex items-center gap-2.5 ${
              activeTab === 'pictures'
                ? 'bg-amber-500 text-neutral-950 shadow-md scale-102 font-extrabold'
                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <Camera size={17} className={activeTab === 'pictures' ? 'text-neutral-950' : 'text-amber-500'} />
            <span>{t.tabPictures}</span>
          </button>
        </div>
      </div>

      {/* Active Tab View */}
      <div className="mt-4 transition-opacity duration-300">
        {activeTab === 'heritage' ? (
          <OromoCulture lang={lang} hideHeader={true} />
        ) : (
          <OromiaGallery lang={lang} hideHeader={true} />
        )}
      </div>
    </section>
  );
};
