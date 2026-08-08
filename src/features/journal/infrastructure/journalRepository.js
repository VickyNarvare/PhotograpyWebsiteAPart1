import { journal } from "../domain/data/journalData";
import { findArticle, findNextArticle } from "../domain/entities/journal";

export const journalRepository = {
  getAll() {
    return journal;
  },

  getById(slug) {
    return findArticle(journal, slug);
  },

  getNext(slug) {
    return findNextArticle(journal, slug);
  },
};
