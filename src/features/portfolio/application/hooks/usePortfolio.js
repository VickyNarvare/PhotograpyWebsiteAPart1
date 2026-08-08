import { portfolioRepository } from "../../infrastructure/portfolioRepository";

export function usePortfolio() {
  return {
    getProject: (id) => portfolioRepository.getById(id),
    getNextProject: (id) => portfolioRepository.getNext(id),
    getCategories: () => portfolioRepository.getCategories(),
    getCategoryLabel: (category) => portfolioRepository.getCategoryLabel(category),
  };
}
