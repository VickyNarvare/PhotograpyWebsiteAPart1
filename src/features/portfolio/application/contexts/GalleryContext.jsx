import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { filterPortfolio, buildGallerySlides } from "../useCases/filterPortfolio";
import { openGalleryAt, nextImage, previousImage } from "../useCases/navigateGallery";
import { portfolioRepository } from "../../infrastructure/portfolioRepository";
import { lockBodyScroll, unlockBodyScroll } from "../../../../shared/utils/bodyScroll";

export const GalleryContext = createContext(null);

export function GalleryProvider({ children }) {
  const [category, setCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = useMemo(() => filterPortfolio(category), [category]);

  const slides = useMemo(() => buildGallerySlides(filtered), [filtered]);

  const openLightbox = useCallback(
    (projectIndex) => {
      setCurrentIndex(openGalleryAt(filtered, projectIndex));
      setLightboxOpen(true);
      lockBodyScroll();
    },
    [filtered]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    unlockBodyScroll();
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((index) => nextImage(index, slides.length));
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((index) => previousImage(index, slides.length));
  }, [slides.length]);

  const value = useMemo(
    () => ({
      portfolio: portfolioRepository.getAll(),
      category,
      setCategory,
      filtered,
      slides,
      lightboxOpen,
      currentIndex,
      currentSlide: slides[currentIndex] || null,
      openLightbox,
      closeLightbox,
      next,
      prev,
    }),
    [category, filtered, slides, lightboxOpen, currentIndex, openLightbox, closeLightbox, next, prev]
  );

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}
