import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { categories, categoryLabels } from "../data/portfolio";

export function PortfolioFilter({ category, onChange, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 md:gap-3 ${className}`} role="tablist" aria-label="Filter portfolio by category">
      {categories.map((c) => {
        const label = c === "All" ? "All" : categoryLabels[c] || c;
        const active = category === c;
        return (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(c)}
            className={`cursor-pointer border px-5 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-500 ease-cinematic ${
              active
                ? "border-terracotta bg-terracotta text-cream"
                : "border-espresso/20 text-espresso/60 hover:border-espresso/60 hover:text-espresso"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function PortfolioItem({ project, layout, onOpen }) {
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

const layouts = [
  { base: "aspect-[4/5] md:aspect-[4/3]", wrap: "lg:col-span-7" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-5 lg:mt-24" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-5 lg:-mt-8" },
  { base: "aspect-[4/5] md:aspect-[4/3]", wrap: "lg:col-span-7 lg:mt-12" },
  { base: "aspect-[4/5] md:aspect-[16/10]", wrap: "lg:col-span-8" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-4 lg:mt-16" },
];

export function PortfolioGrid({ items, onOpen }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-10">
      {items.map((project, index) => {
        const layout = layouts[index % layouts.length];
        return (
          <Reveal key={`${project.id}-${index}`} delay={(index % 3) * 120} className={layout.wrap}>
            <PortfolioItem project={project} layout={layout} onOpen={() => onOpen(index)} />
          </Reveal>
        );
      })}
    </div>
  );
}
