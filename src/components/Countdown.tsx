import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RotateCcw, Clock, Calendar as CalendarIcon, Bell } from 'lucide-react';
import { Language, CountdownTime } from '../types';
import { translations } from '../lib/translations';
import { calculateCountdown, ENKUTATASH_2019_GREGORIAN, toGeez } from '../lib/calendar';
import { soundSynthesizer } from '../lib/soundSynthesizer';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface CountdownProps {
  lang: Language;
  onTriggerGlobalCelebration: () => void;
}

export const Countdown: React.FC<CountdownProps> = ({ lang, onTriggerGlobalCelebration }) => {
  const t = translations[lang].countdown;
  const [countdown, setCountdown] = useState<CountdownTime>(() => calculateCountdown(ENKUTATASH_2019_GREGORIAN));
  const [isTestMode, setIsTestMode] = useState(false);
  const celebrationTriggeredRef = useRef(false);

  // Confetti launcher helper
  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { x: 0.2, y: 0.6 },
      colors: ['#0A5C36', '#F59E0B', '#EF4444', '#FCD34D', '#10B981'],
    });
    // Right burst
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { x: 0.8, y: 0.6 },
      colors: ['#0A5C36', '#F59E0B', '#EF4444', '#FCD34D', '#10B981'],
    });
    // Sound chime
    soundSynthesizer.playCelebrationChime();
  };

  useEffect(() => {
    if (isTestMode) return;

    const timer = setInterval(() => {
      const updated = calculateCountdown(ENKUTATASH_2019_GREGORIAN);
      setCountdown(updated);

      if (updated.isPassed && !celebrationTriggeredRef.current) {
        celebrationTriggeredRef.current = true;
        triggerConfetti();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestMode]);

  const handleTestZero = () => {
    setIsTestMode(true);
    setCountdown({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isPassed: true,
    });
    triggerConfetti();
    onTriggerGlobalCelebration();
  };

  const handleResetLive = () => {
    setIsTestMode(false);
    celebrationTriggeredRef.current = false;
    setCountdown(calculateCountdown(ENKUTATASH_2019_GREGORIAN));
  };

  const pad = (n: number) => n.toString().padStart(2, '0');

  const timeUnits = [
    { label: t.days, value: countdown.days, geez: toGeez(countdown.days), max: 365 },
    { label: t.hours, value: countdown.hours, geez: toGeez(countdown.hours), max: 24 },
    { label: t.minutes, value: countdown.minutes, geez: toGeez(countdown.minutes), max: 60 },
    { label: t.seconds, value: countdown.seconds, geez: toGeez(countdown.seconds), max: 60 },
  ];

  return (
    <section
      id="countdown"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F1E8]/70 dark:bg-[#091B13]/90 transition-colors border-y border-amber-900/10 dark:border-emerald-900/40 overflow-hidden"
    >
      {/* Subtle ambient golden backglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 dark:bg-amber-400/5 blur-3xl pointer-events-none rounded-full" />

      {/* Background celebration pulse */}
      {countdown.isPassed && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/15 via-amber-500/20 to-rose-600/15 animate-pulse pointer-events-none" />
      )}

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
          <Clock size={14} className="animate-spin" />
          <span>{isTestMode ? 'CELEBRATION ACTIVE' : t.liveBadge}</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-2">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-medium max-w-xl mx-auto mb-10">
          {t.subtitle}
        </p>

        {/* Celebration Banner when zero reached */}
        <AnimatePresence>
          {countdown.isPassed && (
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900/95 via-amber-900/95 to-emerald-900/95 border-2 border-amber-400 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 opacity-20 rotate-12 pointer-events-none">
                <AdeyAbebaIcon size={160} />
              </div>

              <div className="flex items-center justify-center gap-3 mb-2">
                <Sparkles className="text-yellow-300 animate-spin" size={28} />
                <span className="text-2xl sm:text-4xl font-extrabold font-serif text-amber-300">
                  {t.celebrationTitle}
                </span>
                <Sparkles className="text-yellow-300 animate-spin" size={28} />
              </div>

              <p className="text-base sm:text-lg text-amber-100 max-w-2xl mx-auto mb-2 font-medium">
                {t.celebrationSub}
              </p>

              <p className="text-sm sm:text-base text-emerald-300 font-serif">
                {t.celebrationOromo}
              </p>

              <button
                type="button"
                onClick={triggerConfetti}
                className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <Sparkles size={16} />
                <span>Launch More Fireworks</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glass Cards Countdown Group with Elegant Separators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-2 max-w-4xl mx-auto mb-8">
          {timeUnits.map((unit, index) => (
            <React.Fragment key={index}>
              {/* Glass Unit Card */}
              <div className="relative group w-[calc(50%-0.5rem)] sm:w-44 md:w-48 p-5 sm:p-6 rounded-3xl bg-white/80 dark:bg-[#07170F]/85 backdrop-blur-md border border-neutral-200/80 dark:border-emerald-800/50 shadow-xl shadow-amber-500/5 hover:border-amber-400/70 dark:hover:border-amber-400/60 hover:shadow-amber-500/10 transition-all duration-300 flex flex-col items-center justify-center">
                {/* Ge'ez numeral watermark */}
                <span className="absolute top-2 right-3 text-xs font-serif font-bold text-amber-600/50 dark:text-amber-400/40">
                  {unit.geez}
                </span>

                {/* Animated numerical display */}
                <div className="font-mono text-4xl sm:text-6xl md:text-7xl font-black text-emerald-950 dark:text-amber-400 tracking-tight leading-none mb-2 select-none">
                  {pad(unit.value)}
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-300">
                  {unit.label}
                </span>

                {/* Micro golden progress bar */}
                <div className="w-12 h-1 bg-amber-500/20 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (unit.value / unit.max) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Elegant Separator between units (visible on md screens) */}
              {index < timeUnits.length - 1 && (
                <div className="hidden md:flex flex-col items-center justify-center gap-2 px-1 text-amber-500/60 dark:text-amber-400/50 select-none">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse shadow-sm" />
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse shadow-sm" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Controls: Interactive test zero celebration button & reset */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleTestZero}
            id="countdown-test-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/15 hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-colors shadow-xs"
          >
            <Bell size={15} />
            <span>{t.testZeroBtn}</span>
          </button>

          {isTestMode && (
            <button
              type="button"
              onClick={handleResetLive}
              id="countdown-reset-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <RotateCcw size={15} />
              <span>{t.resetCountdownBtn}</span>
            </button>
          )}
        </div>

        {/* Informative Calendar Pill */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-white/60 dark:bg-neutral-900/60 px-4 py-1.5 rounded-full border border-neutral-200/60 dark:border-emerald-900/40">
          <CalendarIcon size={14} className="text-amber-500" />
          <span>Meskerem 1, 2019 E.C. corresponds exactly to September 11, 2026 G.C.</span>
        </div>
      </div>

      <div className="mt-14 max-w-2xl mx-auto opacity-75">
        <TibebBorder colorVariant="gold" />
      </div>
    </section>
  );
};
