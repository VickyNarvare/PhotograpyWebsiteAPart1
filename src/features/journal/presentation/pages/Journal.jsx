import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../../../../shared/components/PageHeader";
import JournalCard from "../components/JournalCard";
import FeaturedArticle from "../components/FeaturedArticle";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import FinalCTA from "../../../../shared/components/FinalCTA";
import { useJournal } from "../../application/hooks/useJournal";

export default function Journal() {
  const { posts } = useJournal();
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        label="The Journal"
        title={
          <>
            From The <em className="italic text-clay">Journal</em>
          </>
        }
        subtitle="Notes from the studio — about light, weddings, the craft of photography, and the things we learn in between frames."
        image="photo-1520390138845-fd2d229dd553"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <FeaturedArticle article={featured} />
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-warmwhite py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionLabel>More Stories</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <JournalCard key={article.id} article={article} index={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-8 border border-espresso/10 bg-warmwhite p-9 md:flex-row md:items-center md:p-14">
            <div>
              <h2 className="font-display text-3xl font-medium text-espresso md:text-4xl">
                Prefer pictures to <em className="italic text-terracotta">words?</em>
              </h2>
              <p className="mt-3 max-w-md font-body text-sm font-light leading-relaxed text-espresso/60">
                The gallery is where the work speaks for itself — 20+ stories from across India.
              </p>
            </div>
            <Link to="/work" className="btn btn-terracotta shrink-0 px-8 py-4">
              Explore the Work
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA
        heading={
          <>
            The next story could be <em className="italic text-clay">yours.</em>
          </>
        }
        image="photo-1492684223066-81342ee5ff30"
      />
    </>
  );
}
