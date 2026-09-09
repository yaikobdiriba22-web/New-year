import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Flower2, RotateCcw } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface FlowerSectionProps {
  lang: Language;
}

interface PlantedFlower {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export const FlowerSection: React.FC<FlowerSectionProps> = ({ lang }) => {
  const t = translations[lang].flowers;
  const [plantedFlowers, setPlantedFlowers] = useState<PlantedFlower[]>([
    { id: 1, x: 20, y: 35, size: 48, rotation: 12 },
    { id: 2, x: 80, y: 25, size: 56, rotation: -20 },
    { id: 3, x: 35, y: 70, size: 40, rotation: 35 },
    { id: 4, x: 65, y: 65, size: 52, rotation: 5 },
    { id: 5, x: 50, y: 40, size: 64, rotation: -10 },
  ]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newFlower: PlantedFlower = {
      id: Date.now(),
      x: Math.min(92, Math.max(8, x)),
      y: Math.min(88, Math.max(12, y)),
      size: Math.floor(Math.random() * 24) + 36,
      rotation: Math.floor(Math.random() * 360),
    };

    setPlantedFlowers((prev) => [...prev.slice(-15), newFlower]);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlantedFlowers([]);
  };

  return (
    <section id="flowers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
          <Flower2 size={14} />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-lg font-semibold text-amber-600 dark:text-amber-400 font-serif mb-2">
          {t.name}
        </p>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* Interactive Meadow Canvas Card */}
      <div
        onClick={handleContainerClick}
        className="relative min-h-[420px] sm:min-h-[500px] rounded-3xl bg-gradient-to-b from-[#082015] via-[#0E2E1F] to-[#082015] border-2 border-amber-400/40 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-hidden cursor-crosshair select-none group"
      >
        {/* Subtle background grass texture pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        {/* Ambient golden sun rays top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Interactive Prompt Overlay */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-amber-400/30 backdrop-blur-md text-amber-300 text-xs font-semibold">
            <Sparkles size={14} className="text-amber-400" />
            <span>{t.interactiveHint}</span>
          </div>

          {plantedFlowers.length > 0 && (
            <button
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
            >
              <RotateCcw size={13} />
              <span>{t.clearBtn} ({plantedFlowers.length})</span>
            </button>
          )}
        </div>

        {/* Planted Interactive Adey Abeba Flowers */}
        <AnimatePresence>
          {plantedFlowers.map((flower) => (
            <motion.div
              key={flower.id}
              initial={{ scale: 0, opacity: 0, rotate: flower.rotation - 90 }}
              animate={{ scale: 1, opacity: 1, rotate: flower.rotation }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                position: 'absolute',
                left: `${flower.x}%`,
                top: `${flower.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="pointer-events-none filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]"
            >
              <AdeyAbebaIcon size={flower.size} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Traditional Poetic Inscription Bottom */}
        <div className="relative z-10 max-w-xl bg-neutral-950/75 backdrop-blur-md p-5 rounded-2xl border border-amber-500/30 text-amber-100">
          <div className="font-serif text-base sm:text-lg font-bold text-amber-300 mb-1">
            {t.poemLine1}
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-light italic leading-relaxed">
            {t.poemLine2}
          </p>
        </div>
      </div>
    </section>
  );
};
