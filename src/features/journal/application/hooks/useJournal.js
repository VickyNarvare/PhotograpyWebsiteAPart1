import { getJournalPosts } from "../useCases/getJournalPosts";
import { journalRepository } from "../../infrastructure/journalRepository";

export function useJournal() {
  return {
    posts: getJournalPosts(),
    getArticle: (slug) => journalRepository.getById(slug),
    getNextArticle: (slug) => journalRepository.getNext(slug),
  };
}
