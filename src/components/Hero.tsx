import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface HeroProps {
  lang: Language;
  onCelebrate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onCelebrate }) => {
  const t = translations[lang].hero;

  // Floating Adey Abeba petals and light sparkles
  const floatingElements = [
    { top: '14%', left: '8%', size: 28, duration: 6.5, delay: 0, type: 'flower' },
    { top: '22%', right: '10%', size: 34, duration: 8.2, delay: 1, type: 'flower' },
    { top: '68%', left: '7%', size: 26, duration: 7.1, delay: 2, type: 'flower' },
    { top: '78%', right: '12%', size: 22, duration: 9.0, delay: 0.5, type: 'flower' },
    { top: '42%', right: '5%', size: 24, duration: 7.8, delay: 1.5, type: 'flower' },
    { top: '35%', left: '16%', size: 18, duration: 8.5, delay: 2.2, type: 'flower' },
  ];

  const heroPillars = [
    { icon: '🇪🇹', labelEn: 'Ethiopian Heritage', labelAm: 'የኢትዮጵያ ቅርስ', labelOm: 'Dhaala Itoophiyaa' },
    { icon: '🌼', labelEn: 'Adey Abeba Bloom', labelAm: 'የአደይ አበባ ንጋት', labelOm: 'Abaaboo Adey Abeba' },
    { icon: '🎉', labelEn: 'Enkutatash Festival', labelAm: 'የእንቁጣጣሽ በዓል', labelOm: 'Ayyaana Enkutatash' },
    { icon: '✨', labelEn: 'Meskerem 1 • 2019 E.C.', labelAm: 'መስከረም ፩ • ፳፻፲፱ ዓ.ም', labelOm: 'Fuulbaana 1 • 2019 E.C.' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic High-Res Ethiopian Highlands Sunrise & Golden Meadow Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2200&auto=format&fit=crop"
          alt="Ethiopian Highlands Sunrise and Blooming Countryside"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.78] dark:brightness-[0.42] contrast-[1.08]"
        />
        {/* Cinematic gradient overlays: atmospheric warmth + midnight emerald base */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-emerald-950/45 to-[#FAF8F2] dark:to-[#07130D]" />
        {/* Soft Golden Sunrise Radiance at Top */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,_var(--tw-gradient-stops))] from-amber-400/25 via-yellow-600/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating Adey Abeba Petals & Golden Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {floatingElements.map((item, idx) => (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              top: item.top,
              left: (item as { left?: string }).left,
              right: (item as { right?: string }).right,
            }}
            animate={{
              y: [0, -28, 0],
              x: [0, 16, 0],
              rotate: [0, 50, 0],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
            className="drop-shadow-lg filter"
          >
            <AdeyAbebaIcon size={item.size} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Small top label */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/50 bg-neutral-950/70 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-lg shadow-black/20"
        >
          <AdeyAbebaIcon size={18} />
          <span className="font-mono tracking-wider font-bold">ENKUTATASH • 2019 E.C.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-emerald-300 font-serif font-bold">መስከረም ፩</span>
        </motion.div>

        {/* Main Display Title: መልካም አዲስ ዓመት! */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white font-serif drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] mb-3 select-none leading-tight"
        >
          {t.mainTitle}
        </motion.h1>

        {/* English: Happy Ethiopian New Year */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-amber-300 drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] mb-2"
        >
          Happy Ethiopian New Year 2019 E.C.
        </motion.h2>

        {/* Afaan Oromo: Baga Bara Haaraa Geessan! */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-5 font-serif"
        >
          Baga Bara Haaraa Geessan!
        </motion.p>

        {/* Traditional Tibeb decorative divider */}
        <div className="w-64 sm:w-96 my-2 opacity-95">
          <TibebBorder colorVariant="gold" />
        </div>

        {/* Strong Supporting Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-neutral-100/95 font-light leading-relaxed mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] px-2"
        >
          {lang === 'am'
            ? 'አዲሱን ፳፻፲፱ ዓ.ም በሰላም፣ በጤና፣ በፍቅር እና በደስታ አብረን እንቀበል። ክረምቱ አልፎ በወርቃማው አደይ አበባ የተዋበችው ኢትዮጵያ እንኳን አደረሰቻችሁ።'
            : lang === 'om'
            ? 'Bara haaraa kan nagaa, jaalalaa, gabbinaa fi badhaadhinaa isiniif haa ta\'u. Dhaha bara Itoophiyaa 2019 simachuuf baga gammaddan.'
            : 'Welcome the dawn of 2019 E.C. across the Ethiopian highlands. A sacred 3,000-year heritage blooms anew under thirteen months of sunshine, welcoming renewal, peace, and joyous community.'}
        </motion.p>

        {/* 4 Pillars Immediate Communication Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 max-w-3xl"
        >
          {heroPillars.map((pillar, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/75 backdrop-blur-md border border-amber-400/30 text-neutral-100 text-xs sm:text-sm font-semibold shadow-md"
            >
              <span className="text-base">{pillar.icon}</span>
              <span>
                {lang === 'am' ? pillar.labelAm : lang === 'om' ? pillar.labelOm : pillar.labelEn}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onCelebrate}
            id="hero-celebrate-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-transform"
          >
            <Sparkles size={18} className="text-neutral-950" />
            <span>{t.celebrateBtn}</span>
          </button>

          <a
            href="#culture"
            id="hero-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide bg-neutral-950/70 hover:bg-neutral-950/90 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-md transition-colors"
          >
            <Compass size={18} />
            <span>{t.exploreBtn}</span>
          </a>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.a
          href="#countdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="inline-flex flex-col items-center gap-1.5 mt-12 text-xs font-semibold tracking-widest text-amber-200/80 hover:text-amber-300 transition-colors uppercase"
        >
          <span>{t.scrollPrompt}</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
