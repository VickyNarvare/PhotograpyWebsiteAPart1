import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { site } from "../../../../shared/data/site";
import { img } from "../../../../shared/utils/img";

export default function Studio() {
  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionLabel>The Studio</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-espresso md:text-5xl">
              A studio built on <em className="italic text-terracotta">honest light.</em>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              Noir Frame began in {site.foundedYear} as a one-camera operation in a small Indore apartment with a
              single window that caught beautiful evening light. That window taught us everything: that light is free,
              that honesty photographs better than perfection, and that the people in front of the camera matter more
              than the camera itself.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-5 font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              Eight years later, the studio has photographed more than 250 stories across India — weddings, campaigns,
              families and strangers who became friends. The light has changed. The approach hasn't: show up early,
              wait patiently, photograph what's real.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/work" className="btn btn-terracotta px-8 py-4">
                See the Work
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link to="/booking" className="btn btn-outline-dark px-8 py-4">
                Book a Session
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-[88%] overflow-hidden bg-charcoal lg:ml-auto">
              <img
                src={img("photo-1502920917128-1aa500764cbd", 1200, 1500)}
                alt="A vintage camera resting on a wooden table"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={250} className="absolute -bottom-10 left-0 w-[48%]">
            <div className="relative aspect-[3/4] overflow-hidden border-8 border-cream bg-charcoal">
              <img
                src={img("photo-1516035069371-29a1b244cc32", 900, 1100)}
                alt="A photographer's camera in low light"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
