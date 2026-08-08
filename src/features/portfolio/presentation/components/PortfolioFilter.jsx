import { usePortfolio } from "../../application/hooks/usePortfolio";

export default function PortfolioFilter({ category, onChange, className = "" }) {
  const { getCategories, getCategoryLabel } = usePortfolio();
  const categories = getCategories();

  return (
    <div className={`flex flex-wrap gap-2 md:gap-3 ${className}`} role="tablist" aria-label="Filter portfolio by category">
      {categories.map((c) => {
        const label = getCategoryLabel(c);
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
