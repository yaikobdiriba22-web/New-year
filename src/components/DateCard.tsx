import React, { useState } from 'react';
import { Calendar as CalendarIcon, ArrowRightLeft, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { gregorianToEthiopian, ethiopianToGregorian, ETHIOPIAN_MONTHS, toGeez } from '../lib/calendar';
import { AdeyAbebaIcon } from './EthiopianPatterns';

interface DateCardProps {
  lang: Language;
}

export const DateCard: React.FC<DateCardProps> = ({ lang }) => {
  const t = translations[lang].calendar;

  // State for interactive date converter
  const [selectedGregorianDate, setSelectedGregorianDate] = useState('2026-09-11');
  const [convertedEthDate, setConvertedEthDate] = useState(() => {
    return gregorianToEthiopian(new Date('2026-09-11T12:00:00'));
  });

  const handleGregorianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSelectedGregorianDate(val);
    if (val) {
      const d = new Date(`${val}T12:00:00`);
      if (!isNaN(d.getTime())) {
        setConvertedEthDate(gregorianToEthiopian(d));
      }
    }
  };

  // State for reverse conversion (Eth to Greg)
  const [ethYear, setEthYear] = useState(2019);
  const [ethMonth, setEthMonth] = useState(1);
  const [ethDay, setEthDay] = useState(1);
  const [convertedGregorian, setConvertedGregorian] = useState<string>('2026-09-11');

  const handleEthToGregConvert = () => {
    try {
      const gDate = ethiopianToGregorian(ethYear, ethMonth, ethDay);
      setConvertedGregorian(gDate.toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));
    } catch {
      setConvertedGregorian('Invalid Date');
    }
  };

  return (
    <section id="calendar" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} />
          <span>{t.title}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-amber-100 font-serif mb-4">
          Meskerem 1 • መስከረም ፩ • Fuulbaana 1
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          {t.subtitle}
        </p>
      </div>

      {/* Main Dual Date Comparison Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Ethiopian Calendar Card */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-[#0C2419] to-emerald-900 text-white border-2 border-amber-400/80 shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <AdeyAbebaIcon size={160} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-neutral-950">
                {t.ecDateLabel}
              </span>
              <span className="font-mono text-sm font-bold text-amber-300">
                {toGeez(1)} / {toGeez(1)} / {toGeez(2019)}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-200 mb-1">
              መስከረም ፩ ቀን ፳፻፲፱ ዓ.ም
            </h3>
            <p className="text-xl font-bold text-white mb-4">
              Meskerem 1, 2019 E.C.
            </p>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
              Enkutatash officially opens the Ethiopian New Year. In the Ge&apos;ez calendar, Meskerem is the first month, celebrating sunshine, crop harvest, and peaceful beginnings.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-amber-300/80 font-medium">
            <span>Month 1 of 13</span>
            <span>Season of Birra (Harvest)</span>
          </div>
        </div>

        {/* Gregorian Equivalent Card */}
        <div className="relative p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-emerald-900/40 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                {t.gcDateLabel}
              </span>
              <span className="font-mono text-xs font-semibold text-neutral-500">
                Universal Standard (G.C.)
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-neutral-900 dark:text-white mb-1">
              Friday, September 11, 2026
            </h3>
            <p className="text-xl font-medium text-emerald-700 dark:text-emerald-400 mb-4">
              September 11, 2026 G.C.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Because the Ethiopian leap year rule places Pagumē with 5 days (6 days once every 4 years), New Year lands on September 11 in common years and September 12 following a leap year.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            <span>Day 254 of 365</span>
            <span>Julian-Gregorian Shift: 7-8 Years</span>
          </div>
        </div>
      </div>

      {/* 3 Core Ethiopian Calendar Pillars Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-emerald-900/30">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg mb-4">
            13
          </div>
          <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-serif">
            {t.fact1Title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t.fact1Desc}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-emerald-900/30">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg mb-4">
            7-8
          </div>
          <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-serif">
            {t.fact2Title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t.fact2Desc}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-emerald-900/30">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg mb-4">
            ☀️
          </div>
          <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-serif">
            {t.fact3Title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t.fact3Desc}
          </p>
        </div>
      </div>

      {/* Interactive Calendar Converter Tool */}
      <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100/70 dark:bg-[#071911] border border-amber-500/20 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-serif flex items-center gap-2">
              <CalendarIcon className="text-amber-500" size={20} />
              <span>{t.converterTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {t.convertPrompt}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold">
            Algorithm: Annianus Alexandrian JDN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mode 1: Gregorian to Ethiopian */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              1. Choose Gregorian Date (G.C.)
            </label>
            <input
              type="date"
              value={selectedGregorianDate}
              onChange={handleGregorianChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 mb-4"
            />

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-[11px] font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wider">
                {t.ethiopianResult}:
              </span>
              <div className="text-xl sm:text-2xl font-black font-serif text-emerald-950 dark:text-emerald-200 mt-1">
                {convertedEthDate.monthNameAm} {toGeez(convertedEthDate.day)} ቀን {toGeez(convertedEthDate.year)} ዓ.ም
              </div>
              <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {convertedEthDate.monthNameEn} {convertedEthDate.day}, {convertedEthDate.year} E.C.
              </div>
              <div className="text-xs text-neutral-500 font-serif mt-1">
                Oromo: {convertedEthDate.monthNameOm} {convertedEthDate.day}, {convertedEthDate.year} E.C.
              </div>
            </div>
          </div>

          {/* Mode 2: Ethiopian to Gregorian */}
          <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              2. Choose Ethiopian Date (E.C.)
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div>
                <span className="text-[10px] text-neutral-400 font-bold block mb-1">Month</span>
                <select
                  value={ethMonth}
                  onChange={(e) => setEthMonth(Number(e.target.value))}
                  className="w-full px-2.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-medium focus:outline-none"
                >
                  {ETHIOPIAN_MONTHS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.en} ({m.am})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 font-bold block mb-1">Day (1-30)</span>
                <input
                  type="number"
                  min="1"
                  max={ethMonth === 13 ? 6 : 30}
                  value={ethDay}
                  onChange={(e) => setEthDay(Number(e.target.value))}
                  className="w-full px-2.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-mono focus:outline-none"
                />
              </div>

              <div>
                <span className="text-[10px] text-neutral-400 font-bold block mb-1">Year (E.C.)</span>
                <input
                  type="number"
                  min="1900"
                  max="2100"
                  value={ethYear}
                  onChange={(e) => setEthYear(Number(e.target.value))}
                  className="w-full px-2.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-mono focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleEthToGregConvert}
              className="w-full py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center gap-1.5 transition-colors mb-3"
            >
              <ArrowRightLeft size={14} />
              <span>Convert to Gregorian</span>
            </button>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
              <span className="text-neutral-500 font-bold">Equivalent Gregorian: </span>
              <span className="font-bold text-amber-700 dark:text-amber-300 ml-1">
                {convertedGregorian}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
