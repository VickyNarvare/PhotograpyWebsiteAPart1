import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useGallery } from "../context/GalleryContext";

export default function Lightbox() {
  const { lightboxOpen, currentSlide, currentIndex, slides, closeLightbox, next, prev } = useGallery();
  const touchStartX = useRef(null);

  const onKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    },
    [lightboxOpen, closeLightbox, next, prev]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  if (!lightboxOpen || !currentSlide) return null;

  const total = slides.length;
  const counter = `${String(currentIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[100] flex flex-col bg-espresso/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentSlide.title} — photograph ${currentIndex + 1} of ${total}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between p-5 sm:p-8">
        <p className="label text-[11px] text-cream/60">{counter}</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center border border-cream/30 text-cream transition-colors duration-300 hover:border-clay hover:text-clay"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center border border-cream/30 text-cream transition-colors duration-300 hover:border-clay hover:text-clay"
            aria-label="Next photograph"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={closeLightbox}
            className="ml-2 flex h-11 w-11 items-center justify-center border border-cream/30 text-cream transition-colors duration-300 hover:border-clay hover:text-clay"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-16"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <div
          key={currentIndex}
          className="lightbox-slide flex h-full max-h-full w-full max-w-6xl items-center justify-center"
        >
          <img
            src={currentSlide.image}
            alt={`${currentSlide.title} — photograph ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain shadow-2xl"
          />
        </div>
      </div>

      <div className="flex items-end justify-between px-5 pb-8 sm:px-8 sm:pb-10">
        <div>
          <p className="label text-[10px] text-clay">{currentSlide.category}</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-cream sm:text-3xl">
            {currentSlide.title}
          </h2>
          <p className="mt-1 font-body text-sm font-light text-cream/60">
            {currentSlide.location} · {currentSlide.year}
          </p>
        </div>
      </div>
    </div>
  );
}
