import PageHeader from "../../../../shared/components/PageHeader";
import Studio from "../components/Studio";
import PhotographerSection from "../components/PhotographerSection";
import Beliefs from "../components/Beliefs";
import QuoteSection from "../../../../shared/components/QuoteSection";
import ProcessSteps from "../../../../shared/components/ProcessSteps";
import Testimonials from "../../../testimonials/presentation/components/Testimonials";
import FinalCTA from "../../../../shared/components/FinalCTA";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";

export default function About() {
  return (
    <>
      <PageHeader
        label="About the Studio"
        title={
          <>
            The studio behind <em className="italic text-clay">the frames.</em>
          </>
        }
        subtitle="A small, obsessive photography studio in Indore, India — making pictures that stay alive long after the moment is gone."
        image="photo-1531891437562-4301cf35b7e4"
      />
      <Studio />
      <PhotographerSection />
      <Beliefs />
      <QuoteSection image="photo-1531891437562-4301cf35b7e4" sat={-100} alt="A photographer in black and white, holding a camera to their eye" />

      <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionLabel>The Process</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl">
              From first conversation to <em className="italic text-terracotta">final frame.</em>
            </h2>
          </Reveal>
          <div className="mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="border-t border-espresso/10 py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Kind Words</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl">
              Words from <em className="italic text-terracotta">the work.</em>
            </h2>
          </Reveal>
          <div className="mt-16">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>

      <FinalCTA
        heading={
          <>
            Let's write your story <em className="italic text-clay">in light.</em>
          </>
        }
        image="photo-1501785888041-af3ef285b470"
      />
    </>
  );
}
