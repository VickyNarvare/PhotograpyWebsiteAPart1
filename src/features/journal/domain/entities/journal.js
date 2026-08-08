export function findArticle(articles, slug) {
  return articles.find((article) => article.slug === slug);
}

export function findNextArticle(articles, slug) {
  const index = articles.findIndex((article) => article.slug === slug);
  return articles[(index + 1) % articles.length];
}
