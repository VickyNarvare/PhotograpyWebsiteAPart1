import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import ServiceSection from "../../../services/presentation/components/ServiceSection";
import { useServices } from "../../../services/application/hooks/useServices";

export default function ServicesPreview() {
  const { services } = useServices();

  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl lg:text-6xl">
            Six ways we tell <em className="italic text-terracotta">your story.</em>
          </h2>
        </Reveal>
        <div className="mt-10">
          {services.slice(0, 3).map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} to="/services" />
          ))}
        </div>
        <Reveal className="mt-4">
          <Link to="/services" className="btn btn-outline-dark px-9 py-4">
            Explore All Services
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
