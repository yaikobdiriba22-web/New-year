import React from 'react';
import { Heart, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder, TricolorRibbon } from './EthiopianPatterns';

interface FooterProps {
  lang: Language;
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenShare }) => {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05110A] text-white pt-16 pb-12 overflow-hidden border-t border-emerald-900/60">
      {/* Top Tibeb Border Accent */}
      <div className="absolute top-0 left-0 w-full">
        <TibebBorder colorVariant="gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Tri-Lingual Greeting Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <AdeyAbebaIcon size={48} className="animate-spin-slow" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-serif text-amber-400 mb-2">
            {t.heading1}
          </h2>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
            {t.heading2}
          </h3>
          <h4 className="text-lg sm:text-2xl font-bold text-emerald-300 font-serif mb-6">
            {t.heading3}
          </h4>

          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            {t.dedication}
          </p>
        </div>

        {/* Navigation & Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-300 mb-10">
          <a href="#hero" className="hover:text-amber-400 transition-colors">
            Home
          </a>
          <span>•</span>
          <a href="#countdown" className="hover:text-amber-400 transition-colors">
            Countdown
          </a>
          <span>•</span>
          <a href="#calendar" className="hover:text-amber-400 transition-colors">
            Calendar
          </a>
          <span>•</span>
          <a href="#story" className="hover:text-amber-400 transition-colors">
            Tradition
          </a>
          <span>•</span>
          <a href="#flowers" className="hover:text-amber-400 transition-colors">
            Adey Abeba
          </a>
          <span>•</span>
          <a href="#culture" className="hover:text-amber-400 transition-colors">
            Culture
          </a>
          <span>•</span>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">
            Gallery
          </a>
          <span>•</span>
          <a href="#greetings" className="hover:text-amber-400 transition-colors">
            Wishes
          </a>
          <span>•</span>
          <button onClick={onOpenShare} className="hover:text-amber-400 transition-colors uppercase font-bold text-amber-300">
            Share Celebration
          </button>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-800 bg-emerald-950/60 hover:bg-emerald-900 text-xs font-bold uppercase tracking-wider text-amber-300 transition-colors"
          >
            <ArrowUp size={15} />
            <span>{t.backToTop}</span>
          </button>
        </div>

        {/* Bottom Copyright and Tricolor accent */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Made with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500" />
            <span>for Ethiopia &amp; Global Friends 🌼💛</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
