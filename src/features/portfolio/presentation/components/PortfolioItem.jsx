import { ArrowUpRight } from "lucide-react";

export default function PortfolioItem({ project, layout, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block h-full w-full cursor-pointer overflow-hidden bg-charcoal text-left ${layout.base}`}
      aria-label={`View ${project.title} — ${project.category} photography in ${project.location}`}
    >
      <img
        src={project.coverImage}
        alt={`${project.title}, ${project.category.toLowerCase()} photography, ${project.location}`}
        loading="lazy"
        decoding="async"
        className="img-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-end justify-between p-6 sm:p-8">
        <div className="translate-y-3 transition-transform duration-700 ease-cinematic group-hover:translate-y-0">
          <p className="label text-[10px] text-cream/70">
            {project.category} · {project.location.split(",")[0]}
          </p>
          <h3 className="mt-2 font-display text-2xl font-medium text-cream sm:text-[1.7rem]">
            {project.title}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/30 text-cream opacity-0 transition-all duration-500 ease-cinematic group-hover:opacity-100 group-hover:bg-cream group-hover:text-espresso">
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>
    </button>
  );
}
