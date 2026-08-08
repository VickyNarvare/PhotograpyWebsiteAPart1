import { filterPortfolioByCategory, buildSlides } from "../../domain/rules/portfolioRules";
import { portfolioRepository } from "../../infrastructure/portfolioRepository";

export function filterPortfolio(category) {
  return filterPortfolioByCategory(portfolioRepository.getAll(), category);
}

export function buildGallerySlides(filteredPortfolio) {
  return buildSlides(filteredPortfolio);
}
