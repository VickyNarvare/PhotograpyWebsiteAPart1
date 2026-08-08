import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import ProcessSteps from "../../../../shared/components/ProcessSteps";

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl lg:text-6xl">
            From first conversation to <em className="italic text-terracotta">final frame.</em>
          </h2>
        </Reveal>
        <div className="mt-20">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
