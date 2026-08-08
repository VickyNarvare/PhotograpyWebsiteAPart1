import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import PackagesSection from "../../../packages/presentation/components/PackagesSection";

export default function CollectionsSection() {
  return (
    <section className="bg-espresso py-24 text-cream md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel tone="dark">Invest in Memory</SectionLabel>
        </Reveal>
        <div className="mt-14">
          <PackagesSection
            heading="Collections"
            subtitle="Three ways to work with the studio. Every collection is shaped around your story — these are the starting points."
          />
        </div>
      </div>
    </section>
  );
}
