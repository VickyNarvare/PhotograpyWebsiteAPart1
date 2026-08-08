import { getSlideStartIndex } from "../../domain/rules/portfolioRules";

export function openGalleryAt(filteredPortfolio, projectIndex) {
  return getSlideStartIndex(filteredPortfolio, projectIndex);
}

export function nextImage(currentIndex, total) {
  if (total === 0) return currentIndex;
  return (currentIndex + 1) % total;
}

export function previousImage(currentIndex, total) {
  if (total === 0) return currentIndex;
  return (currentIndex - 1 + total) % total;
}
