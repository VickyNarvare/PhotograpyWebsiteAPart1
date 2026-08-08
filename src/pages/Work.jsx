import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { PortfolioFilter, PortfolioGrid } from "../components/PortfolioGrid";
import FinalCTA from "../components/FinalCTA";
import Reveal from "../components/Reveal";
import { useGallery } from "../App";

export default function Work() {
  const { category, setCategory, filtered, openLightbox } = useGallery();

  useEffect(() => {
    setCategory("All");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [setCategory]);

  return (
    <>
      <PageHeader
        label="The Work"
        title={
          <>
            Selected <em className="italic text-clay">Stories</em>
          </>
        }
        subtitle="A collection of moments, people and places we've had the privilege to photograph — weddings, editorials, portraits and campaigns from across India."
        image="photo-1520854221256-17451cc331bf"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="label text-[10px] text-terracotta">
                  {filtered.length} {filtered.length === 1 ? "Story" : "Stories"}
                </p>
                <h2 className="mt-4 font-display text-3xl font-medium text-espresso md:text-4xl">
                  {category === "All" ? (
                    <>
                      Every frame, <em className="italic text-terracotta">every season.</em>
                    </>
                  ) : (
                    <>
                      The <em className="italic text-terracotta">{category}s</em>
                    </>
                  )}
                </h2>
              </div>
              <PortfolioFilter category={category} onChange={setCategory} />
            </div>
          </Reveal>

          <div className="mt-16">
            <PortfolioGrid items={filtered} onOpen={openLightbox} />
          </div>
        </div>
      </section>

      <FinalCTA
        heading={
          <>
            Your story belongs <em className="italic text-clay">in this gallery.</em>
          </>
        }
        image="photo-1516589178581-6cd7833ae3b2"
      />
    </>
  );
}
