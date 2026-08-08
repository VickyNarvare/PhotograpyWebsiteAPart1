import Hero from "../components/Hero";
import StudioSection from "../components/StudioSection";
import SelectedWork from "../components/SelectedWork";
import ServicesPreview from "../components/ServicesPreview";
import PhotographerSection from "../components/PhotographerSection";
import QuoteSection from "../../../../shared/components/QuoteSection";
import JournalPreview from "../components/JournalPreview";
import TestimonialsSection from "../components/TestimonialsSection";
import ProcessSection from "../components/ProcessSection";
import CollectionsSection from "../components/CollectionsSection";
import InstagramWall from "../components/InstagramWall";
import BookingSection from "../components/BookingSection";
import FinalCTA from "../../../../shared/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StudioSection />
      <SelectedWork />
      <ServicesPreview />
      <PhotographerSection />
      <QuoteSection image="photo-1506794778202-cad84cf45f1d" sat={0} alt="A black-and-white portrait study" />
      <JournalPreview />
      <TestimonialsSection />
      <ProcessSection />
      <CollectionsSection />
      <div className="py-24 md:py-32">
        <div className="container-x">
          <InstagramWall />
        </div>
      </div>
      <BookingSection />
      <FinalCTA />
    </>
  );
}
