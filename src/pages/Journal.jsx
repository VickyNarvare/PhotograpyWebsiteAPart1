import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import JournalCard from "../components/JournalCard";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import FinalCTA from "../components/FinalCTA";
import { journal } from "../data/journal";

function FeaturedArticle({ article }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <Link to={`/journal/${article.slug}`} className="group relative block overflow-hidden bg-charcoal">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={article.image}
              alt={article.alt}
              loading="lazy"
              decoding="async"
              className="img-zoom h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-5 top-5 bg-terracotta px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.26em] text-cream">
            Latest
          </span>
        </Link>
      </Reveal>

      <Reveal delay={150}>
        <div className="flex items-center gap-3">
          <span className="label text-[10px] text-terracotta">{article.category}</span>
          <span className="h-px w-6 bg-espresso/20" aria-hidden="true" />
          <span className="font-body text-xs font-light text-espresso/50">
            {article.date} · {article.readTime}
          </span>
        </div>
        <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-espresso md:text-5xl">
          <Link to={`/journal/${article.slug}`} className="transition-colors duration-300 hover:text-terracotta">
            {article.title}
          </Link>
        </h2>
        <p className="mt-6 max-w-xl font-body text-[15px] font-light leading-relaxed text-espresso/65">
          {article.excerpt}
        </p>
        <Link
          to={`/journal/${article.slug}`}
          className="group/link mt-8 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
        >
          Read Article
          <span className="flex h-10 w-10 items-center justify-center border border-espresso/25 transition-all duration-500 group-hover/link:border-terracotta group-hover/link:bg-terracotta group-hover/link:text-cream">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </Link>
      </Reveal>
    </article>
  );
}

export default function Journal() {
  const [featured, ...rest] = journal;

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
