import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import Testimonials from "../components/Testimonials";
import ProcessSteps from "../components/ProcessSteps";
import FinalCTA from "../components/FinalCTA";
import { site, img } from "../App";

function Studio() {
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

function Photographer() {
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

const values = [
  {
    title: "Honesty over perfection",
    text: "We don't chase flawless frames. We chase real ones — the unguarded laugh, the tired hug, the quiet second nobody planned.",
  },
  {
    title: "Light is the first collaborator",
    text: "Every photograph starts with light. We arrive early, wait for it, and let it shape the frame before we add anything else.",
  },
  {
    title: "The story outlives the shoot",
    text: "A gallery is only successful if it still means something in ten years. We edit, colour and deliver with that test in mind.",
  },
];

function Beliefs() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>What We Believe</SectionLabel>
        </Reveal>
        <div className="mt-14 divide-y divide-espresso/10 border-y border-espresso/10">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 120}>
              <div className="grid gap-4 py-12 md:grid-cols-12 md:items-baseline md:gap-10">
                <p className="font-display text-4xl font-medium italic text-terracotta md:col-span-2 md:text-5xl">
                  0{index + 1}
                </p>
                <h3 className="font-display text-2xl font-medium text-espresso md:col-span-4 md:text-3xl">
                  {value.title}
                </h3>
                <p className="font-body text-[15px] font-light leading-relaxed text-espresso/65 md:col-span-6">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal text-cream">
      <img
        src={img("photo-1531891437562-4301cf35b7e4", 2200, 1400, -100)}
        alt="A photographer in black and white, holding a camera to their eye"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-espresso/55" aria-hidden="true" />
      <div className="container-x relative z-10 py-28 text-center">
        <Reveal>
          <span className="mx-auto block h-px w-14 bg-terracotta" aria-hidden="true" />
          <p className="mx-auto mt-10 max-w-4xl font-display text-3xl font-medium italic leading-[1.35] text-balance md:text-5xl">
            "The photograph matters because the moment mattered."
          </p>
          <p className="mt-8 label text-clay">— Noir Frame Studio</p>
        </Reveal>
      </div>
    </section>
  );
}

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
      <Photographer />
      <Beliefs />
      <Quote />

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
