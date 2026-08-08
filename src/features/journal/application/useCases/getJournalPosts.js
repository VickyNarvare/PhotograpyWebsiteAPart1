import { journalRepository } from "../../infrastructure/journalRepository";

export function getJournalPosts() {
  return journalRepository.getAll();
}
