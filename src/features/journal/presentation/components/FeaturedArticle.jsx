import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";

export default function FeaturedArticle({ article }) {
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
