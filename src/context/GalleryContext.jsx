import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { portfolio } from "../data/portfolio";

const GalleryContext = createContext(null);

export function GalleryProvider({ children }) {
  const [category, setCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = useMemo(
    () => (category === "All" ? portfolio : portfolio.filter((p) => p.category === category)),
    [category]
  );

  const slides = useMemo(() => filtered.flatMap((p) => p.images.map((image) => ({ ...p, image }))), [filtered]);

  const openLightbox = useCallback(
    (projectIndex) => {
      const start = filtered.slice(0, projectIndex).reduce((total, p) => total + p.images.length, 0);
      setCurrentIndex(start);
      setLightboxOpen(true);
      document.body.style.overflow = "hidden";
    },
    [filtered]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const value = useMemo(
    () => ({
      portfolio,
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
    [portfolio, category, filtered, slides, lightboxOpen, currentIndex, openLightbox, closeLightbox, next, prev]
  );

  return <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>;
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
}
