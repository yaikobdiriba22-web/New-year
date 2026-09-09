import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Share2, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { Language, ThemeMode } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TricolorRibbon } from './EthiopianPatterns';

interface NavbarProps {
  lang: Language;
  onLangChange: (l: Language) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  onOpenShare: () => void;
  onCelebrateTrigger: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLangChange,
  theme,
  onThemeToggle,
  onOpenShare,
  onCelebrateTrigger,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.countdown, href: '#countdown' },
    { label: t.calendar, href: '#calendar' },
    { label: t.story, href: '#story' },
    { label: t.flowers, href: '#flowers' },
    { label: t.culture, href: '#culture' },
    { label: t.oromoCulture, href: '#oromo-culture' },
    { label: t.landscapes, href: '#landscapes' },
    { label: t.gallery, href: '#gallery' },
    { label: t.oromiaGallery, href: '#oromia-gallery' },
    { label: t.music, href: '#music' },
    { label: t.greetings, href: '#greetings' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#07130D]/90 backdrop-blur-md border-b border-emerald-900/40 shadow-lg shadow-black/20'
            : 'bg-[#FAF8F2]/90 backdrop-blur-md border-b border-amber-900/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <TricolorRibbon />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="Enkutatash 2019 E.C. Home"
          >
            <div className="relative">
              <AdeyAbebaIcon size={32} className="transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-serif font-black tracking-wider text-base sm:text-lg leading-tight text-amber-500 dark:text-amber-400">
                <span>🌼</span>
                <span>ENKUTATASH</span>
                <span className="text-xs bg-amber-500/10 dark:bg-amber-400/20 text-amber-600 dark:text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                  2019
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-emerald-700 dark:text-emerald-400/80">
                Meskerem 1 • E.C.
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 text-neutral-700 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-amber-500/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: Audio, Language, Theme, Share, Celebrate */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={onToggleAudio}
              id="navbar-audio-btn"
              title={isAudioPlaying ? 'Mute Celebration Sound' : 'Play Ethiopian Krar Melody'}
              aria-label={isAudioPlaying ? 'Mute audio' : 'Play audio'}
              className="relative p-2 rounded-full border transition-all duration-200 border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 size={17} className="animate-pulse" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </>
              ) : (
                <VolumeX size={17} />
              )}
            </button>

            {/* Language Switcher Dropdown / Pills */}
            <div className="flex items-center rounded-full p-0.5 border border-neutral-300 dark:border-emerald-900/60 bg-neutral-200/60 dark:bg-emerald-950/50">
              <button
                onClick={() => onLangChange('en')}
                id="lang-btn-en"
                className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-amber-500 text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLangChange('am')}
                id="lang-btn-am"
                className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all font-serif ${
                  lang === 'am'
                    ? 'bg-amber-500 text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-500'
                }`}
              >
                አማ
              </button>
              <button
                onClick={() => onLangChange('om')}
                id="lang-btn-om"
                className={`px-2 py-1 text-[11px] font-bold rounded-full transition-all ${
                  lang === 'om'
                    ? 'bg-amber-500 text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-amber-500'
                }`}
              >
                OM
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              id="theme-toggle-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border border-neutral-300 dark:border-emerald-800/40 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-emerald-900/40 transition-colors"
            >
              {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-neutral-700" />}
            </button>

            {/* Share Button */}
            <button
              onClick={onOpenShare}
              id="navbar-share-btn"
              aria-label="Share this celebration website"
              className="p-2 rounded-full border border-neutral-300 dark:border-emerald-800/40 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-emerald-900/40 transition-colors"
            >
              <Share2 size={17} />
            </button>

            {/* Celebrate Quick Action */}
            <button
              onClick={onCelebrateTrigger}
              id="navbar-celebrate-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles size={14} />
              <span>{t.celebrateBtn}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-emerald-900/50"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden px-4 pt-2 pb-6 space-y-1 bg-[#FAF8F2] dark:bg-[#07130D] border-b border-amber-900/20 dark:border-emerald-900/50 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-200 dark:border-emerald-900/50 flex flex-col gap-2">
            <button
              onClick={() => {
                onCelebrateTrigger();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-neutral-950 flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles size={15} />
              <span>{t.celebrateBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
