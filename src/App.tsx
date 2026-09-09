import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Language, ThemeMode } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { DateCard } from './components/DateCard';
import { CulturalStory } from './components/CulturalStory';
import { FlowerSection } from './components/FlowerSection';
import { CultureBento } from './components/CultureBento';
import { LandscapeSection } from './components/LandscapeSection';
import { Gallery } from './components/Gallery';
import { OromiaHub } from './components/OromiaHub';
import { MusicPlayer } from './components/MusicPlayer';
import { GreetingGenerator } from './components/GreetingGenerator';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { soundSynthesizer } from './lib/soundSynthesizer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('enkutatash_lang') as Language;
      if (saved && (saved === 'en' || saved === 'am' || saved === 'om')) {
        return saved;
      }
    }
    return 'en';
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('enkutatash_theme') as ThemeMode;
      if (saved && (saved === 'dark' || saved === 'light')) {
        return saved;
      }
    }
    return 'dark'; // Luxury Ethiopian midnight emerald festival mood by default
  });

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [customShareMessage, setCustomShareMessage] = useState<string | undefined>();

  // Sync theme with DOM document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('enkutatash_theme', theme);
  }, [theme]);

  // Persist language
  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('enkutatash_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleAudio = () => {
    const newState = soundSynthesizer.toggle();
    setIsAudioPlaying(newState);
  };

  const triggerGlobalCelebration = () => {
    // Fireworks and confetti bursts
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#0A5C36', '#F59E0B', '#C5221F', '#FEF08A', '#10B981'],
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.5, x: 0.3 },
        colors: ['#D49A00', '#FBBF24', '#074428'],
      });
    }, 250);
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.5, x: 0.7 },
        colors: ['#9B111E', '#F59E0B', '#127847'],
      });
    }, 450);

    soundSynthesizer.playCelebrationChime();
  };

  const handleOpenShareWithMessage = (msg: string) => {
    setCustomShareMessage(msg);
    setShareModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-[#07130D] text-amber-50'
        : 'bg-[#FAF8F2] text-neutral-900'
    }`}>
      {/* Loading Entrance */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Sticky Top Navbar */}
      <Navbar
        lang={lang}
        onLangChange={handleLangChange}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        onOpenShare={() => {
          setCustomShareMessage(undefined);
          setShareModalOpen(true);
        }}
        onCelebrateTrigger={triggerGlobalCelebration}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Sections */}
      <main id="main-content">
        <Hero
          lang={lang}
          onCelebrate={triggerGlobalCelebration}
        />

        <Countdown
          lang={lang}
          onTriggerGlobalCelebration={triggerGlobalCelebration}
        />

        <DateCard
          lang={lang}
        />

        <CulturalStory
          lang={lang}
        />

        <FlowerSection
          lang={lang}
        />

        <CultureBento
          lang={lang}
        />

        <LandscapeSection
          lang={lang}
        />

        <Gallery
          lang={lang}
        />

        {/* Unified Oromia & Oromo Heritage Hub (Oromo Heritage and Oromia in Pictures under one button switcher) */}
        <OromiaHub
          lang={lang}
        />

        <MusicPlayer
          lang={lang}
          isPlaying={isAudioPlaying}
          onTogglePlay={handleToggleAudio}
        />

        <GreetingGenerator
          lang={lang}
          onOpenShareMessage={handleOpenShareWithMessage}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenShare={() => {
          setCustomShareMessage(undefined);
          setShareModalOpen(true);
        }}
      />

      {/* Share Dialog */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        lang={lang}
        customMessage={customShareMessage}
      />
    </div>
  );
}
