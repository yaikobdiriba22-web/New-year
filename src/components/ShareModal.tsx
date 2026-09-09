import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { AdeyAbebaIcon, TibebBorder } from './EthiopianPatterns';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  customMessage?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  lang,
  customMessage,
}) => {
  const t = translations[lang].share;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://ethiopian-new-year-2019.app';
  const shareText = customMessage || t.shareMessage;
  const encodedText = encodeURIComponent(`${shareText}\n${currentUrl}`);
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${currentUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ethiopian New Year 2019 E.C. — Enkutatash',
          text: shareText,
          url: currentUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyLink();
    }
  };

  const socialChannels = [
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedText}`,
      color: 'bg-[#25D366] text-white',
      icon: MessageCircle,
    },
    {
      name: 'Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-[#0088cc] text-white',
      icon: Send,
    },
    {
      name: 'X (Twitter)',
      href: `https://twitter.com/intent/tweet?text=${encodedText}`,
      color: 'bg-black text-white dark:bg-neutral-800',
      icon: Share2,
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2] text-white',
      icon: Share2,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0A66C2] text-white',
      icon: Share2,
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF8F2] dark:bg-[#081810] border-2 border-amber-500/40 text-neutral-900 dark:text-white shadow-2xl p-6 sm:p-8 overflow-hidden"
      >
        <button
          onClick={onClose}
          aria-label="Close share modal"
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <AdeyAbebaIcon size={28} />
          <h3 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white">
            {t.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light mb-6">
          {t.subtitle}
        </p>

        {/* Share Message Preview Box */}
        <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-emerald-900/40 mb-6 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-serif leading-relaxed">
          {shareText}
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {socialChannels.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-2xl text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-sm ${ch.color}`}
              >
                <Icon size={15} />
                <span>{ch.name}</span>
              </a>
            );
          })}
        </div>

        {/* Copy Link & Native Device Share */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-200 dark:border-emerald-900/40">
          <button
            onClick={handleCopyLink}
            className="w-full sm:flex-1 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? t.copied : t.copyLink}</span>
          </button>

          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full sm:w-auto py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 text-neutral-800 dark:text-neutral-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 size={16} />
              <span>{t.nativeShare}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
