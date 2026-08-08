export function filterPortfolioByCategory(portfolio, category) {
  if (category === "All") return portfolio;
  return portfolio.filter((item) => item.category === category);
}

export function buildSlides(filteredPortfolio) {
  return filteredPortfolio.flatMap((project) => project.images.map((image) => ({ ...project, image })));
}

export function getSlideStartIndex(filteredPortfolio, projectIndex) {
  return filteredPortfolio.slice(0, projectIndex).reduce((total, project) => total + project.images.length, 0);
}
