import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { site } from "../../../../shared/data/site";
import { img } from "../../../../shared/utils/img";

export default function StudioSection() {
  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] w-[86%] overflow-hidden bg-charcoal">
              <img
                src={img("photo-1524504388940-b1c1722653e1", 1200, 1500)}
                alt="A portrait photographed in warm natural light"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={250} className="absolute bottom-0 right-0 w-[52%] sm:w-[45%]">
            <div className="relative aspect-[3/4] overflow-hidden border-8 border-cream bg-charcoal">
              <img
                src={img("photo-1494790108377-be9c29b29330", 900, 1100)}
                alt="A candid portrait of a woman laughing"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="absolute -left-4 bottom-14 rotate-180 text-center sm:-left-10" style={{ writingMode: "vertical-rl" }} aria-hidden="true">
            <p className="label text-[10px] text-espresso/40">EST. 2018</p>
          </div>
        </div>

        <div>
          <Reveal>
            <SectionLabel>The Studio</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-espresso md:text-5xl lg:text-[3.4rem]">
              Photography with feeling, <em className="italic text-terracotta">not just focus.</em>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              We believe the most meaningful photographs are the ones that bring you back to a moment — the laughter,
              the silence, the movement and everything in between. Since {site.foundedYear}, we've been making
              photographs that stay alive long after the day is over.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              Our Story
              <span className="flex h-10 w-10 items-center justify-center border border-espresso/25 transition-all duration-500 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" strokeWidth={1.5} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
