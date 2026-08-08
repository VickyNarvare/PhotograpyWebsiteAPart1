import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import Testimonials from "../../../testimonials/presentation/components/Testimonials";

export default function TestimonialsSection() {
  return (
    <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
            What they <em className="italic text-terracotta">felt.</em>
          </h2>
        </Reveal>
        <div className="mt-16">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
