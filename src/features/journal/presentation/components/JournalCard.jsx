import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";

export default function JournalCard({ article, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 130} className={index % 2 === 1 ? "lg:mt-16" : ""}>
      <Link to={`/journal/${article.slug}`} className="group block">
        <div className="relative overflow-hidden bg-charcoal">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={article.image}
              alt={article.alt}
              loading="lazy"
              decoding="async"
              className="img-zoom h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="label text-[10px] text-terracotta">{article.category}</span>
          <span className="h-px w-6 bg-espresso/20" aria-hidden="true" />
          <span className="font-body text-xs font-light text-espresso/50">
            {article.date} · {article.readTime}
          </span>
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-espresso transition-colors duration-300 group-hover:text-terracotta md:text-[1.65rem]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-2 font-body text-sm font-light leading-relaxed text-espresso/60">
          {article.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 group-hover:text-terracotta">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5" strokeWidth={1.5} />
        </span>
      </Link>
    </Reveal>
  );
}
