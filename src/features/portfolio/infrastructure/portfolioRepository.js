import { portfolio, categories, categoryLabels } from "../domain/data/portfolioData";
import { isProjectMatch } from "../domain/entities/portfolio";

export const portfolioRepository = {
  getAll() {
    return portfolio;
  },

  getById(id) {
    return portfolio.find((project) => isProjectMatch(project, id));
  },

  getNext(id) {
    const index = portfolio.findIndex((project) => isProjectMatch(project, id));
    return portfolio[(index + 1) % portfolio.length];
  },

  getCategories() {
    return categories;
  },

  getCategoryLabel(category) {
    return category === "All" ? "All" : categoryLabels[category] || category;
  },
};
