import React, { useState, useId } from 'react';
import { Copy, Check, Share2, Sparkles, Download } from 'lucide-react';
import { Language, GreetingRecipient, GreetingStyle } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder, GeezCrossEmblem } from './EthiopianPatterns';
import {
  RECIPIENT_OPTIONS,
  STYLE_OPTIONS,
  getSalutation,
  getGreetingBody,
  getSignature,
  getFestivalSignoff,
  generateFullGreeting,
} from '../lib/greetingsEngine';

interface GreetingGeneratorProps {
  lang: Language;
  onOpenShareMessage: (msg: string) => void;
}

export const GreetingGenerator: React.FC<GreetingGeneratorProps> = ({
  lang,
  onOpenShareMessage,
}) => {
  const t = translations[lang].greetings;

  const [cardLang, setCardLang] = useState<Language>(lang);
  const [recipientType, setRecipientType] = useState<GreetingRecipient>('friend');
  const [style, setStyle] = useState<GreetingStyle>('warm');
  const [recipientName, setRecipientName] = useState('Abebe');
  const [senderName, setSenderName] = useState('');
  const [customQuote, setCustomQuote] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Pre-made poetic quotes
  const POETIC_QUOTES = {
    en: [
      'May the 13 months of sunshine illuminate your journey with peace, health, and joy.',
      'As the golden Adey Abeba blankets the highlands, may renewal bless your home.',
      'Happy Ethiopian New Year 2019! Wishing you abundance, harmony, and togetherness.',
    ],
    am: [
      'አበባየሁሽ በአደይ አበባ፣ ክረምት ወጣና አዲስ ዘመን ገባ! መልካም ፳፻፲፱ ዓ.ም!',
      'አዲሱ ዓመት የሰላም፣ የፍቅር፣ የጤና እና የበረከት ይሁንልን።',
      'እንኳን ለአዲሱ የ፳፻፲፱ ዓ.ም ዘመን መለወጫ በሰላም አደረሳችሁ!',
    ],
    om: [
      'Baga bara haaraa 2019 E.C. nagaan geessan! Barri kun kan nagaa fi badhaadhinaa haa ta\'u.',
      'Abaaboon Adey Abeba dirree uffisee dhufe; barri haaraan gammachuu haa fidu.',
      'Baga geessan! Bara haaraa kan jaalalaa fi tokkummaa isiniif haa ta\'u.',
    ],
  };

  // Unique accessible IDs for inputs
  const recipientInputId = useId();
  const senderInputId = useId();

  // Generated components
  const salutation = getSalutation(cardLang, recipientType, recipientName);
  const engineBody = getGreetingBody(cardLang, recipientType, style);
  const bodyText = customQuote || engineBody;
  const signatureText = getSignature(cardLang, senderName);
  const festivalSignoff = getFestivalSignoff(cardLang);

  const fullComposedGreeting = customQuote
    ? `${salutation}\n\n"${customQuote}"\n\n${signatureText ? signatureText + '\n' : ''}${festivalSignoff}`
    : generateFullGreeting({
        lang: cardLang,
        recipientType,
        style,
        recipientName,
        senderName,
      });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullComposedGreeting);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShareCard = () => {
    onOpenShareMessage(fullComposedGreeting);
  };

  const handleDownloadText = () => {
    const formattedCard = `╔════════════════════════════════════════════════════════╗
║         ETHIOPIAN NEW YEAR 2019 E.C. (ENKUTATASH)      ║
║                  መስከረም ፩ • ፳፻፲፱ ዓ.ም                    ║
╚════════════════════════════════════════════════════════╝

${fullComposedGreeting}

──────────────────────────────────────────────────────────
Meskerem 1, 2019 E.C. • September 11, 2026 G.C.
Celebrated with 🌼 Adey Abeba and 13 Months of Sunshine
`;

    const element = document.createElement('a');
    const file = new Blob([formattedCard], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Enkutatash_2019_Wish_${recipientType}_${style}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="greetings" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles size={14} />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Controls Configuration Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0C1E14] border border-neutral-200 dark:border-emerald-900/40 shadow-lg space-y-6">
          {/* Card Language Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              {t.langSelectLabel}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCardLang('en')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  cardLang === 'en'
                    ? 'bg-amber-500 text-neutral-950 shadow-xs'
                    : 'bg-neutral-100 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-emerald-900/40'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setCardLang('am')}
                className={`py-2 px-3 rounded-xl text-xs font-bold font-serif transition-all ${
                  cardLang === 'am'
                    ? 'bg-amber-500 text-neutral-950 shadow-xs'
                    : 'bg-neutral-100 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-emerald-900/40'
                }`}
              >
                አማርኛ
              </button>
              <button
                type="button"
                onClick={() => setCardLang('om')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  cardLang === 'om'
                    ? 'bg-amber-500 text-neutral-950 shadow-xs'
                    : 'bg-neutral-100 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-emerald-900/40'
                }`}
              >
                Afaan Oromo
              </button>
            </div>
          </div>

          {/* Recipient Category Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Recipient Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {RECIPIENT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setRecipientType(opt.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    recipientType === opt.id
                      ? 'bg-emerald-700 dark:bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-neutral-100 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-emerald-900/40'
                  }`}
                >
                  <span>{opt.icon}</span>
                  <span className="truncate">
                    {lang === 'am' ? opt.labelAm : lang === 'om' ? opt.labelOm : opt.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Style / Tone Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              {t.styleSelectLabel}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STYLE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setStyle(opt.id)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium text-center transition-all ${
                    style === opt.id
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                      : 'bg-neutral-100 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-emerald-900/40'
                  }`}
                >
                  <span className="truncate block">
                    {lang === 'am' ? opt.labelAm : lang === 'om' ? opt.labelOm : opt.labelEn}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recipient & Sender Input Fields */}
          <div className="space-y-4 pt-2">
            <div>
              <label htmlFor={recipientInputId} className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.recipientLabel}
              </label>
              <input
                id={recipientInputId}
                type="text"
                placeholder={t.recipientPlaceholder}
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-emerald-900/60 bg-neutral-50 dark:bg-emerald-950/40 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor={senderInputId} className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                {t.senderLabel}
              </label>
              <input
                id={senderInputId}
                type="text"
                placeholder={t.senderPlaceholder}
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-emerald-900/60 bg-neutral-50 dark:bg-emerald-950/40 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Pre-made Poetic Quotes Selector */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Poetic Quotes
              </label>
              {customQuote && (
                <button
                  type="button"
                  onClick={() => setCustomQuote(null)}
                  className="text-[10px] text-neutral-500 hover:text-amber-600 dark:hover:text-amber-300 underline font-mono"
                >
                  Reset to dynamic tone
                </button>
              )}
            </div>
            <div className="space-y-1.5">
              {POETIC_QUOTES[cardLang].map((quote, qIdx) => (
                <button
                  key={qIdx}
                  type="button"
                  onClick={() => setCustomQuote(quote)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs transition-all border ${
                    customQuote === quote
                      ? 'bg-amber-500/15 border-amber-500 text-amber-900 dark:text-amber-200 font-medium'
                      : 'bg-neutral-50 dark:bg-emerald-950/30 border-neutral-200 dark:border-emerald-900/40 text-neutral-700 dark:text-neutral-300 hover:border-amber-400/50'
                  }`}
                >
                  <span className="line-clamp-2 italic font-serif">&ldquo;{quote}&rdquo;</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Live Luxury Greeting Card Display */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#FAF8F2] via-[#F4EFE6] to-[#EFE7D8] dark:from-[#091D13] dark:via-[#07170F] dark:to-[#05100B] p-8 sm:p-12 border-2 border-amber-500/50 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Top Ornamental Tibeb Border */}
            <div className="w-full mb-6">
              <TibebBorder colorVariant="gold" />
            </div>

            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <AdeyAbebaIcon size={340} />
            </div>

            {/* Card Content Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-amber-700 dark:text-amber-400">
                  {t.customCardBadge}
                </span>
                <span className="text-xs font-serif font-bold text-emerald-800 dark:text-emerald-400">
                  መስከረም ፩ • ፳፻፲፱ ዓ.ም
                </span>
              </div>

              {/* Salutation */}
              <div className="text-lg sm:text-xl font-bold font-serif text-emerald-900 dark:text-amber-200 mb-4">
                {salutation}
              </div>

              {/* Greeting Body */}
              <p className="text-base sm:text-xl md:text-2xl font-serif leading-relaxed text-neutral-900 dark:text-white mb-6">
                &quot;{bodyText}&quot;
              </p>

              {/* Signature */}
              {senderName.trim() && (
                <div className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-300 font-serif text-right mt-2">
                  {signatureText.trim()}
                </div>
              )}

              {/* Official Festival Signoff */}
              <div className="text-xs sm:text-sm font-serif font-bold text-amber-700 dark:text-amber-400 text-right mt-2">
                {festivalSignoff.trim()}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AdeyAbebaIcon size={24} />
                <span className="text-[11px] font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-widest">
                  Enkutatash 2019 E.C.
                </span>
              </div>
              <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 font-mono">
                September 11, 2026 G.C.
              </div>
              <GeezCrossEmblem size={20} className="text-amber-600 dark:text-amber-400" />
            </div>

            {/* Bottom Ornamental Tibeb Border */}
            <div className="w-full mt-6">
              <TibebBorder colorVariant="gold" />
            </div>
          </div>

          {/* Action Buttons Toolbar: COPY, SHARE, DOWNLOAD */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-md transition-transform active:scale-95"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>{t.copiedToast}</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>{t.copyBtn}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleShareCard}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-emerald-800 hover:bg-emerald-700 text-white shadow-md transition-transform active:scale-95"
            >
              <Share2 size={16} />
              <span>{t.shareBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadText}
              title="Download Greeting Text File"
              className="p-3 rounded-full border border-neutral-300 dark:border-emerald-900/60 hover:bg-neutral-200 dark:hover:bg-emerald-900/40 text-neutral-700 dark:text-neutral-300 transition-colors"
            >
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
