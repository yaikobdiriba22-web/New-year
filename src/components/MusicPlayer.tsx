import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc3, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { CELEBRATION_TRACKS } from '../lib/cultureData';
import { soundSynthesizer } from '../lib/soundSynthesizer';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface MusicPlayerProps {
  lang: Language;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  lang,
  isPlaying,
  onTogglePlay,
}) => {
  const t = translations[lang].music;
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [tempo, setTempo] = useState(96);
  const [waveformData, setWaveformData] = useState<number[]>([12, 24, 16, 32, 20, 40, 18, 28, 14, 22, 36, 18]);
  const animationFrameRef = useRef<number | null>(null);

  const currentTrack = CELEBRATION_TRACKS[selectedTrackIndex];

  // Sync track scale changes
  const handleSelectTrack = (index: number) => {
    setSelectedTrackIndex(index);
    const track = CELEBRATION_TRACKS[index];
    soundSynthesizer.setScale(track.scaleType, track.tempo);
    setTempo(track.tempo);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundSynthesizer.setVolume(val);
  };

  // Waveform render loop
  useEffect(() => {
    const updateWave = () => {
      if (isPlaying) {
        const rawData = soundSynthesizer.getWaveformData();
        const sampled: number[] = [];
        const step = Math.max(1, Math.floor(rawData.length / 16));
        for (let i = 0; i < 16; i++) {
          const val = rawData[i * step] || 10;
          sampled.push(Math.max(8, Math.min(64, Math.floor(val * 0.35))));
        }
        setWaveformData(sampled);
      } else {
        setWaveformData([10, 14, 12, 16, 14, 12, 15, 12, 14, 10, 12, 14, 11, 13, 10, 12]);
      }
      animationFrameRef.current = requestAnimationFrame(updateWave);
    };

    animationFrameRef.current = requestAnimationFrame(updateWave);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying]);

  return (
    <section id="music" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
          <Music size={14} />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light">
          {t.subtitle}
        </p>
      </div>

      {/* Main Luxury Audio Deck */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#06180F] via-[#0A2619] to-[#040F09] text-white p-6 sm:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
        {/* Background glow & subtle rotating vinyl disk effect */}
        <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
          <Disc3 size={320} className={isPlaying ? 'animate-spin' : ''} />
        </div>

        {/* Top Now Playing Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-800/60">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Disc3 size={24} className={isPlaying ? 'animate-spin' : ''} />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                {t.nowPlaying}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-200">
                {lang === 'am'
                  ? currentTrack.titleAm
                  : lang === 'om'
                  ? currentTrack.titleOm
                  : currentTrack.titleEn}
              </h3>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
            {currentTrack.scaleType.toUpperCase()} SCALE • {currentTrack.tempo} BPM
          </span>
        </div>

        {/* Real-time Dynamic Waveform Display */}
        <div className="bg-[#030B07] rounded-2xl p-6 border border-emerald-900/60 mb-8 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 h-20 w-full max-w-lg mb-2">
            {waveformData.map((height, idx) => (
              <div
                key={idx}
                style={{ height: `${height}px` }}
                className={`w-2.5 sm:w-3.5 rounded-full transition-all duration-100 ${
                  isPlaying
                    ? 'bg-gradient-to-t from-amber-500 to-yellow-300'
                    : 'bg-emerald-900/40'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80 tracking-widest uppercase">
            {t.visualizerText} {isPlaying ? '• SYNTHESIZING KRAR' : '• STANDBY'}
          </span>
        </div>

        {/* Track Selection Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {CELEBRATION_TRACKS.map((track, idx) => (
            <button
              key={track.id}
              onClick={() => handleSelectTrack(idx)}
              className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                idx === selectedTrackIndex
                  ? 'border-amber-400 bg-amber-500/20 text-white shadow-sm'
                  : 'border-emerald-900/40 bg-[#06140D]/70 text-neutral-400 hover:text-white hover:border-emerald-700'
              }`}
            >
              <div className="text-xs font-bold font-serif text-amber-300">
                {lang === 'am' ? track.titleAm : lang === 'om' ? track.titleOm : track.titleEn}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1 font-light">
                {lang === 'am' ? track.descriptionAm : lang === 'om' ? track.descriptionOm : track.descriptionEn}
              </p>
            </button>
          ))}
        </div>

        {/* Controls: Play/Pause, Volume, Synthesizer Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-emerald-800/60">
          <button
            onClick={onTogglePlay}
            id="music-play-toggle-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-neutral-950 shadow-xl shadow-amber-500/20 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause size={18} />
                <span>{t.stopAudio}</span>
              </>
            ) : (
              <>
                <Play size={18} fill="currentColor" />
                <span>{t.startAudio}</span>
              </>
            )}
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-3 w-full sm:w-64">
            {volume === 0 ? (
              <VolumeX size={18} className="text-neutral-500 shrink-0" />
            ) : (
              <Volume2 size={18} className="text-amber-400 shrink-0" />
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume slider"
              className="w-full h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <span className="text-xs font-mono text-neutral-400 w-9 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
