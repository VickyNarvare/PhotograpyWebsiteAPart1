import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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
                src={img("photo-1507003211169-0a1dd7228f2d", 1100, 1400)}
                alt={`${site.photographer}, founder of ${site.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 -right-4 h-24 w-24 border border-terracotta/50" aria-hidden="true" />
            <div className="absolute -left-3 top-8 bg-terracotta px-5 py-4" aria-hidden="true">
              <p className="font-display text-2xl font-medium italic text-cream">est. {site.foundedYear}</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>Behind the Camera</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
              {site.photographer}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl font-display text-xl font-light italic leading-relaxed text-espresso/75 md:text-2xl">
              "I'm a photographer and visual storyteller drawn to honest moments, natural light and photographs that
              still feel alive years later."
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-8 space-y-5 font-body text-[15px] font-light leading-[1.9] text-espresso/70">
              <p>
                I grew up in Indore with a hand-me-down film camera and a grandmother who refused to smile for anyone.
                She was my first client, my first critic, and the reason I learned to photograph the unguarded second
                — the one just after the pose collapses.
              </p>
              <p>
                That instinct has carried me everywhere since: through 250+ weddings and editorial shoots, fifteen
                cities, and a box of prints I still keep of every family I've ever photographed. I believe a
                photograph is a promise — to remember. Everything else is technique.
              </p>
              <p>
                When I'm not shooting, I'm usually reading old contact sheets, teaching light to younger
                photographers, or driving somewhere to watch the sun go down.
              </p>
            </div>
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
              to="/booking"
              className="group mt-10 inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              Let's Work Together
              <span className="flex h-10 w-10 items-center justify-center border border-espresso/25 transition-all duration-500 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
