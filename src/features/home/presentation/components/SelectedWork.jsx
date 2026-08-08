import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import PortfolioFilter from "../../../portfolio/presentation/components/PortfolioFilter";
import PortfolioGrid from "../../../portfolio/presentation/components/PortfolioGrid";
import { useGallery } from "../../../portfolio/application/hooks/useGallery";

export default function SelectedWork() {
  const { category, setCategory, filtered, openLightbox } = useGallery();
  return (
    <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
                Selected <em className="italic text-terracotta">Stories</em>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl font-body text-[15px] font-light leading-relaxed text-espresso/60">
                A collection of moments, people and places we've had the privilege to photograph.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12">
          <PortfolioFilter category={category} onChange={setCategory} />
        </Reveal>
        <div className="mt-14">
          <PortfolioGrid items={filtered} onOpen={openLightbox} />
        </div>
      </div>
    </section>
  );
}
