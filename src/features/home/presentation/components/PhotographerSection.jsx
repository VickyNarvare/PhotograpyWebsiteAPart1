import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { site } from "../../../../shared/data/site";
import { img } from "../../../../shared/utils/img";

export default function PhotographerSection() {
  return (
    <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-charcoal">
              <img
                src={img("photo-1531891437562-4301cf35b7e4", 1100, 1400)}
                alt={`${site.photographer}, photographer at ${site.name}, holding a camera`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -right-4 h-24 w-24 border border-terracotta/50" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>The Photographer</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl">
              Behind the <em className="italic text-terracotta">Camera</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl font-display text-xl font-light italic leading-relaxed text-espresso/75 md:text-2xl">
              "I'm a photographer and visual storyteller drawn to honest moments, natural light and photographs that
              still feel alive years later."
            </p>
            <p className="mt-6 max-w-2xl font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              {site.photographer} founded {site.name} in {site.foundedYear} in Indore with a single camera and a
              stubborn belief: that the best photographs aren't staged, they're witnessed. Since then the studio has
              travelled across India — from palace weddings in Udaipur to fashion editorials in Mumbai — chasing
              exactly that.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {site.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 100}>
                <p className="font-display text-4xl font-medium text-espresso md:text-5xl">{stat.value}</p>
                <p className="mt-2 font-body text-[11px] font-bold uppercase tracking-[0.22em] text-espresso/50">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              More About Me
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
