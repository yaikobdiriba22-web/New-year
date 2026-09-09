import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  ZoomIn, 
  X, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  LayoutGrid, 
  Columns3 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../lib/translations';
import { OROMIA_GALLERY_PHOTOS, OromiaGalleryPhoto } from '../lib/oromoData';
import { OdaaTreeIcon, CelebrationRibbon } from './EthiopianPatterns';

interface OromiaGalleryProps {
  lang: Language;
  hideHeader?: boolean;
}

export const OromiaGallery: React.FC<OromiaGalleryProps> = ({ lang, hideHeader = false }) => {
  const t = translations[lang].oromiaGallery;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid'); // Default matches Celebrating Ethiopia grid
  const [lightboxPhoto, setLightboxPhoto] = useState<OromiaGalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'irreecha', label: t.filterIrreecha },
    { id: 'nature', label: t.filterNature },
    { id: 'heritage', label: t.filterHeritage },
    { id: 'attire', label: t.filterAttire },
    { id: 'culinary', label: t.filterCulinary },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? OROMIA_GALLERY_PHOTOS
    : OROMIA_GALLERY_PHOTOS.filter(p => p.category === selectedCategory);

  const handleNextPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxPhoto) return;
    const currentIdx = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const nextIdx = (currentIdx + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIdx]);
  }, [filteredPhotos, lightboxPhoto]);

  const handlePrevPhoto = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxPhoto) return;
    const currentIdx = filteredPhotos.findIndex(p => p.id === lightboxPhoto.id);
    const prevIdx = (currentIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIdx]);
  }, [filteredPhotos, lightboxPhoto]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      if (e.key === 'Escape') {
        setLightboxPhoto(null);
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, handleNextPhoto, handlePrevPhoto]);

  const content = (
    <>
      {/* Section Header */}
      {!hideHeader ? (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Camera size={14} className="text-amber-600 dark:text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
            {t.title}
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            {t.subtitle}
          </p>

          {/* Top Controls: Photo Count & View Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200/70 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 text-xs font-mono">
              <Layers size={13} />
              <span>{filteredPhotos.length} {t.photoCount}</span>
            </div>

            {/* View Switcher: Aligned Grid (matches Celebrating Ethiopia) vs Masonry Flow */}
            <div className="inline-flex items-center p-1 rounded-full bg-neutral-200/80 dark:bg-emerald-950/80 border border-neutral-300/60 dark:border-emerald-900/60 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`min-h-[34px] px-3 py-1 rounded-full flex items-center gap-1.5 transition-all font-medium ${
                  viewMode === 'grid'
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="Aligned 4-Column Grid"
              >
                <LayoutGrid size={13} />
                <span>{t.viewGrid}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('masonry')}
                className={`min-h-[34px] px-3 py-1 rounded-full flex items-center gap-1.5 transition-all font-medium ${
                  viewMode === 'masonry'
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
                title="Fluid Masonry Flow"
              >
                <Columns3 size={13} />
                <span>{t.viewMasonry}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* When embedded under unified button section: render compact controls */
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200/70 dark:bg-emerald-950/60 text-neutral-700 dark:text-neutral-300 text-xs font-mono">
            <Layers size={13} />
            <span>{filteredPhotos.length} {t.photoCount}</span>
          </div>

          <div className="inline-flex items-center p-1 rounded-full bg-neutral-200/80 dark:bg-emerald-950/80 border border-neutral-300/60 dark:border-emerald-900/60 text-xs">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`min-h-[34px] px-3 py-1 rounded-full flex items-center gap-1.5 transition-all font-medium ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid size={13} />
              <span>{t.viewGrid}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('masonry')}
              className={`min-h-[34px] px-3 py-1 rounded-full flex items-center gap-1.5 transition-all font-medium ${
                viewMode === 'masonry'
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Columns3 size={13} />
              <span>{t.viewMasonry}</span>
            </button>
          </div>
        </div>
      )}

      {/* Filter Category Tabs - Touch friendly */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 border ${
              selectedCategory === cat.id
                ? 'bg-amber-500 border-amber-500 text-neutral-950 shadow-md scale-105'
                : 'bg-neutral-100 dark:bg-emerald-950/40 border-neutral-200 dark:border-emerald-900/50 text-neutral-700 dark:text-neutral-300 hover:border-amber-400/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* PHOTO GALLERY: Swappable between Aligned Grid and Masonry Flow */}
      {viewMode === 'grid' ? (
        /* Aligned 4-Column Grid: Exactly matches Celebrating Ethiopia (Gallery.tsx) with gap-6 & h-72 */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
            const title = lang === 'am' ? photo.titleAm : lang === 'om' ? photo.titleOm : photo.titleEn;
            const caption = lang === 'am' ? photo.captionAm : lang === 'om' ? photo.captionOm : photo.captionEn;
            const location = lang === 'am' ? photo.locationAm : lang === 'om' ? photo.locationOm : photo.locationEn;

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900 border border-neutral-200/40 dark:border-emerald-950/60"
              >
                <img
                  src={photo.image}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-[10px] font-mono text-amber-300 uppercase tracking-wider border border-white/10">
                  {photo.category.replace('_', ' ')}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-900/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <ZoomIn size={15} />
                </div>

                {/* Bottom Photo Information */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-mono mb-1">
                    <MapPin size={11} className="shrink-0" />
                    <span className="truncate">{location}</span>
                  </div>
                  <h3 className="text-base font-bold font-serif leading-snug group-hover:text-amber-300 transition-colors line-clamp-1">
                    {title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 mt-0.5 font-light">
                    {caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Masonry Flow: Multi-column flow adhering strictly to gap-6 & space-y-6 rhythm */
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((photo) => {
            const title = lang === 'am' ? photo.titleAm : lang === 'om' ? photo.titleOm : photo.titleEn;
            const caption = lang === 'am' ? photo.captionAm : lang === 'om' ? photo.captionOm : photo.captionEn;
            const location = lang === 'am' ? photo.locationAm : lang === 'om' ? photo.locationOm : photo.locationEn;

            const aspectClass = photo.aspectRatio === 'tall'
              ? 'aspect-[3/4] sm:aspect-[4/5]'
              : photo.aspectRatio === 'wide'
              ? 'aspect-[16/10]'
              : 'aspect-square';

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200/40 dark:border-emerald-950/60"
              >
                <div className={`w-full ${aspectClass} overflow-hidden relative`}>
                  <img
                    src={photo.image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/70 backdrop-blur-md text-[10px] font-mono text-amber-300 uppercase tracking-wider border border-white/10">
                    {photo.category.replace('_', ' ')}
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-900/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ZoomIn size={15} />
                  </div>

                  {/* Bottom Photo Information */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-mono mb-1">
                      <MapPin size={11} className="shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>
                    <h3 className="text-base font-bold font-serif leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-light opacity-90">
                      {caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal - Fully responsive with minimum 44px tap targets */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-neutral-950 text-white shadow-2xl border border-neutral-800 flex flex-col max-h-[92vh]"
          >
            {/* Top Close Button - 44px touch target */}
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left & Right Nav Arrows - 44px touch target */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              aria-label="Previous photograph"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-amber-500 hover:text-neutral-950 text-white transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={handleNextPhoto}
              aria-label="Next photograph"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-neutral-900/80 hover:bg-amber-500 hover:text-neutral-950 text-white transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Image Viewport */}
            <div className="relative flex-1 min-h-[40vh] sm:min-h-[50vh] max-h-[55vh] sm:max-h-[68vh] flex items-center justify-center bg-black overflow-hidden p-2">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.titleEn}
                className="max-h-[55vh] sm:max-h-[68vh] w-auto max-w-full object-contain select-none"
              />
            </div>

            <CelebrationRibbon />

            {/* Bottom Caption Container */}
            <div className="p-4 sm:p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 overflow-y-auto">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 uppercase tracking-widest">
                    <MapPin size={12} />
                    <span>
                      {lang === 'am'
                        ? lightboxPhoto.locationAm
                        : lang === 'om'
                        ? lightboxPhoto.locationOm
                        : lightboxPhoto.locationEn}
                    </span>
                  </span>
                  <span className="text-neutral-500 text-xs">•</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                    {lightboxPhoto.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                  {lang === 'am'
                    ? lightboxPhoto.titleAm
                    : lang === 'om'
                    ? lightboxPhoto.titleOm
                    : lightboxPhoto.titleEn}
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                  {lang === 'am'
                    ? lightboxPhoto.captionAm
                    : lang === 'om'
                    ? lightboxPhoto.captionOm
                    : lightboxPhoto.captionEn}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <OdaaTreeIcon size={20} className="text-amber-500" />
                <span>Oromia Heritage</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (hideHeader) {
    return <div id="oromia-gallery" className="relative w-full">{content}</div>;
  }

  return (
    <section id="oromia-gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {content}
    </section>
  );
};
