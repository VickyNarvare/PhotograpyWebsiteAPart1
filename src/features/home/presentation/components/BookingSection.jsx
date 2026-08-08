import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import BookingForm from "../../../booking/presentation/components/BookingForm";
import { site } from "../../../../shared/data/site";

export default function BookingSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Book a Session</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl">
              Let's make something <em className="italic text-terracotta">worth remembering.</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-md font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              Tell us a little about what you're planning. We'll get back to you {site.responseTime} — no pressure, no
              sales script, just a conversation about your story.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 space-y-5">
              {[
                "A personal reply from the studio, never a bot",
                "Location, date and light planning included",
                "Flexible collections for every kind of story",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 font-body text-sm font-light text-espresso/70">
                  <span className="mt-2 h-px w-8 shrink-0 bg-terracotta" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
