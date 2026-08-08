import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../../../../shared/components/PageHeader";
import ServiceSection from "../components/ServiceSection";
import ProcessSteps from "../../../../shared/components/ProcessSteps";
import PackagesSection from "../../../packages/presentation/components/PackagesSection";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { useServices } from "../../application/hooks/useServices";

export default function Services() {
  const { services } = useServices();

  return (
    <>
      <PageHeader
        label="What We Do"
        title={
          <>
            Six ways we tell <em className="italic text-clay">your story.</em>
          </>
        }
        subtitle="Weddings, portraits, fashion, commercial work, pre-weddings and events — each one photographed with the same care, the same patience and the same obsession with what's real."
        image="photo-1515372039744-b8f02a3ae446"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-4">
            {services.map((service, index) => (
              <ServiceSection key={service.id} service={service} index={index} to="/booking" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso py-24 text-cream md:py-32">
        <div className="container-x">
          <Reveal>
            <SectionLabel tone="dark">How It Works</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] md:text-5xl">
              From first conversation to <em className="italic text-clay">final frame.</em>
            </h2>
          </Reveal>
          <div className="mt-20">
            <ProcessSteps tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-espresso py-24 pt-0 text-cream md:py-32 md:pt-0">
        <div className="container-x">
          <PackagesSection
            heading="Collections"
            subtitle="Every collection is shaped around your story. These are the starting points — we'll build the rest together."
          />
          <Reveal className="mt-16 text-center">
            <Link to="/booking" className="btn btn-outline-cream px-9 py-4">
              Start a Conversation
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
