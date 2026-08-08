import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import JournalCard from "../../../journal/presentation/components/JournalCard";
import { useJournal } from "../../../journal/application/hooks/useJournal";

export default function JournalPreview() {
  const { posts } = useJournal();

  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionLabel>The Journal</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
              From The <em className="italic text-terracotta">Journal</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((article, index) => (
            <JournalCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
