import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import JournalBlock from "../components/JournalBlock";
import { useJournal } from "../../application/hooks/useJournal";

export default function JournalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getArticle, getNextArticle } = useJournal();
  const article = getArticle(id);

  useEffect(() => {
    if (!article) navigate("/journal", { replace: true });
  }, [article, navigate]);

  if (!article) return null;

  const nextArticle = getNextArticle(article.slug);

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal pt-36 text-cream">
        <img src={article.image} alt={article.alt} className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/25 to-espresso/85" aria-hidden="true" />

        <div className="container-x relative z-10 pb-14 md:pb-20">
          <Reveal>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
              All Articles
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="label text-[10px] text-clay">{article.category}</p>
              <p className="font-body text-sm font-light text-cream/70">
                {article.date} · {article.readTime}
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.2rem,6vw,4.6rem)] font-medium leading-[1.1] text-balance">
              {article.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="font-display text-xl font-light italic leading-relaxed text-espresso/75 md:text-2xl">
              {article.excerpt}
            </p>
          </Reveal>

          <div className="mt-10">
            {article.content.map((block, index) => (
              <JournalBlock key={index} block={block} />
            ))}
          </div>

          <Reveal className="mt-16 border-t border-espresso/10 pt-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="label text-[10px] text-espresso/45">Written by</p>
                <p className="mt-2 font-body text-sm font-bold uppercase tracking-[0.2em] text-espresso">
                  Vicky Narvare
                </p>
                <p className="mt-1 font-body text-xs font-light text-espresso/50">Founder, Noir Frame Studio</p>
              </div>
              <Link to="/booking" className="btn btn-terracotta px-8 py-4">
                Book a Session
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="border-t border-espresso/10 bg-warmwhite py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="label text-[10px] text-espresso/45">Up Next</p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              to={`/journal/${nextArticle.slug}`}
              className="group mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
            >
              <h2 className="max-w-3xl font-display text-3xl font-medium leading-[1.15] text-espresso transition-colors duration-300 group-hover:text-terracotta md:text-5xl">
                {nextArticle.title}
              </h2>
              <span className="inline-flex shrink-0 items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso/60 transition-colors duration-300 group-hover:text-terracotta">
                {nextArticle.category} · {nextArticle.readTime}
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
