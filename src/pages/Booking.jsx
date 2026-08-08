import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import BookingForm from "../components/BookingForm";
import ProcessSteps from "../components/ProcessSteps";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { site } from "../App";

const notes = [
  {
    title: "Availability",
    text: "We take a limited number of shoots each month so every story gets real attention. The earlier you write, the better.",
  },
  {
    title: "The consultation is free",
    text: "The first conversation — planning dates, locations and ideas — costs nothing and commits you to nothing.",
  },
  {
    title: "A human replies",
    text: "Every inquiry is read by the studio, not an assistant or an algorithm. Expect a personal reply within 24 hours.",
  },
  {
    title: "Not sure yet?",
    text: "That's completely fine. Tell us where you are in the thinking and we'll meet you there.",
  },
];

export default function Booking() {
  return (
    <>
      <PageHeader
        label="Book a Session"
        title={
          <>
            Let's make something <em className="italic text-clay">worth remembering.</em>
          </>
        }
        subtitle={`Tell us a little about what you're planning. We'll get back to you ${site.responseTime} with dates, ideas and honest answers.`}
        image="photo-1516035069371-29a1b244cc32"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Before You Write</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.15] text-espresso md:text-4xl">
                A few things worth <em className="italic text-terracotta">knowing.</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-10 space-y-8">
                {notes.map((note, index) => (
                  <li key={note.title} className="flex items-start gap-5">
                    <span className="font-display text-3xl font-medium italic text-terracotta md:text-4xl">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-body text-sm font-bold uppercase tracking-[0.18em] text-espresso">
                        {note.title}
                      </h3>
                      <p className="mt-2 font-body text-sm font-light leading-relaxed text-espresso/60">{note.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <Link
                to="/services"
                className="group mt-12 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
              >
                Not sure which service fits?
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-warmwhite py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionLabel>What Happens Next</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl">
              From first conversation to <em className="italic text-terracotta">final frame.</em>
            </h2>
          </Reveal>
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>
    </>
  );
}
