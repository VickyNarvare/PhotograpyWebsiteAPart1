import Reveal from "../../../../shared/components/Reveal";
import PortfolioItem from "./PortfolioItem";

const layouts = [
  { base: "aspect-[4/5] md:aspect-[4/3]", wrap: "lg:col-span-7" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-5 lg:mt-24" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-5 lg:-mt-8" },
  { base: "aspect-[4/5] md:aspect-[4/3]", wrap: "lg:col-span-7 lg:mt-12" },
  { base: "aspect-[4/5] md:aspect-[16/10]", wrap: "lg:col-span-8" },
  { base: "aspect-[4/5]", wrap: "lg:col-span-4 lg:mt-16" },
];

export default function PortfolioGrid({ items, onOpen }) {
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
