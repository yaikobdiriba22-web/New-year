import React, { useState } from 'react';
import { Camera, ZoomIn, X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, GalleryPhoto } from '../types';
import { translations } from '../lib/translations';
import { GALLERY_PHOTOS } from '../lib/cultureData';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = translations[lang].gallery;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'new_year', label: t.filterNewYear },
    { id: 'clothing', label: t.filterClothing },
    { id: 'culture', label: t.filterCulture },
    { id: 'food', label: t.filterFood },
    { id: 'nature', label: t.filterNature },
    { id: 'historic', label: t.filterHistoric },
  ];

  const filteredPhotos =
    selectedCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxPhoto) return;
    const currentIdx = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
    const nextIdx = (currentIdx + 1) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[nextIdx]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxPhoto) return;
    const currentIdx = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
    const prevIdx = (currentIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setLightboxPhoto(filteredPhotos[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
          <Camera size={14} />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-amber-100 font-serif tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light">
          {t.subtitle}
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
              selectedCategory === c.id
                ? 'bg-amber-500 text-neutral-950 shadow-md scale-105'
                : 'bg-neutral-200/70 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-800'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Photo Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => {
          const title = lang === 'am' ? photo.titleAm : lang === 'om' ? photo.titleOm : photo.titleEn;
          const caption = lang === 'am' ? photo.captionAm : lang === 'om' ? photo.captionOm : photo.captionEn;

          return (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden h-72 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900"
            >
              <img
                src={photo.image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={16} />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-mono mb-1">
                  <MapPin size={11} />
                  <span>{photo.locationEn}</span>
                </div>
                <h3 className="text-base font-bold font-serif line-clamp-1 group-hover:text-amber-300 transition-colors">
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

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-neutral-950 text-white shadow-2xl border border-neutral-800"
          >
            {/* Top Close Bar */}
            <button
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left / Right navigation */}
            <button
              onClick={handlePrevPhoto}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNextPhoto}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Large Image */}
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.titleEn}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {lightboxPhoto.locationEn}
                </span>
                <h3 className="text-xl font-bold font-serif text-white">
                  {lang === 'am'
                    ? lightboxPhoto.titleAm
                    : lang === 'om'
                    ? lightboxPhoto.titleOm
                    : lightboxPhoto.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1 max-w-xl">
                  {lang === 'am'
                    ? lightboxPhoto.captionAm
                    : lang === 'om'
                    ? lightboxPhoto.captionOm
                    : lightboxPhoto.captionEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
