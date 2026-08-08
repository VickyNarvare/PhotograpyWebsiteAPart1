import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { PortfolioFilter, PortfolioGrid } from "../components/PortfolioGrid";
import { services, ServiceSection, PackagesSection } from "../components/serviceData";
import Testimonials from "../components/Testimonials";
import ProcessSteps from "../components/ProcessSteps";
import JournalCard from "../components/JournalCard";
import BookingForm from "../components/BookingForm";
import FinalCTA from "../components/FinalCTA";
import { journal } from "../data/journal";
import { site, img, InstagramIcon, useGallery } from "../App";

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-cream">
      <img
        src={img("photo-1519741497674-611481863552", 2200, 1400)}
        alt="A bride and groom photographed cinematically in soft light"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/20 to-espresso/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-espresso/15" aria-hidden="true" />

      <div className="container-x relative z-10 pb-28 pt-40 md:pb-36">
        <p className="animate-rise label text-clay" style={{ animationDelay: "150ms" }}>
          Photography · Films · Stories
        </p>
        <h1
          className="animate-rise mt-6 font-display text-[clamp(2.9rem,9vw,7.5rem)] font-medium leading-[1.02] text-balance"
          style={{ animationDelay: "300ms" }}
        >
          Stories worth <em className="italic text-clay">remembering.</em>
        </h1>
        <div
          className="animate-rise mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: "500ms" }}
        >
          <p className="max-w-md font-body text-base font-light leading-relaxed text-cream/75">
            Cinematic photography for weddings, people, brands and the moments that matter most.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/work" className="btn btn-terracotta px-8 py-4">
              Explore Our Work
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/booking" className="btn btn-outline-cream px-8 py-4">
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-5 z-10 hidden items-center gap-3 sm:flex md:left-12">
        <span className="h-px w-10 bg-cream/40" aria-hidden="true" />
        <p className="label text-[10px] text-cream/60">India · Worldwide</p>
      </div>
      <div className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 sm:flex md:right-12">
        <p className="label text-[10px] text-cream/60">Scroll to Discover</p>
        <span className="relative flex h-10 w-px overflow-hidden bg-cream/25" aria-hidden="true">
          <span className="animate-scroll-dot absolute left-0 top-0 h-3 w-px bg-clay" />
        </span>
      </div>
    </section>
  );
}

const instagramPosts = [
  { src: "photo-1529626455594-4ff0802cfb7e", aspect: "aspect-[3/4]" },
  { src: "photo-1590650153855-d9e808231d41", aspect: "aspect-square" },
  { src: "photo-1519741497674-611481863552", aspect: "aspect-[3/4]" },
  { src: "photo-1534528741775-53994a69daeb", aspect: "aspect-square" },
  { src: "photo-1523580494863-6f3031224c94", aspect: "aspect-[3/4]" },
  { src: "photo-1509631179647-0177331693ae", aspect: "aspect-square" },
  { src: "photo-1516589178581-6cd7833ae3b2", aspect: "aspect-[3/4]" },
  { src: "photo-1487958449943-2429e8be8625", aspect: "aspect-square" },
];

function InstagramWall() {
  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-espresso md:text-4xl">
            A glimpse into <em className="italic text-terracotta">our visual diary.</em>
          </h2>
          <p className="mt-3 font-body text-sm font-light text-espresso/60">
            New frames every week — follow the making of the work.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagramHandle}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 columns-2 gap-3 md:columns-4 md:gap-4 [column-fill:balance]">
        {instagramPosts.map((post, index) => (
          <Reveal key={`${post.src}-${index}`} delay={index * 80} className="mb-3 break-inside-avoid md:mb-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`group relative block overflow-hidden bg-charcoal ${post.aspect}`}
              aria-label={`Open Instagram post ${index + 1}`}
            >
              <img
                src={img(post.src, 900, 1100)}
                alt={`Instagram post ${index + 1} from ${site.name}`}
                loading="lazy"
                decoding="async"
                className="img-zoom absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/45"
                aria-hidden="true"
              >
                <InstagramIcon className="h-6 w-6 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-8 py-4">
          Follow Along
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </Reveal>
    </div>
  );
}

function StudioSection() {
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

function SelectedWork() {
  const { category, setCategory, filtered, openLightbox } = useGallery();
  return (
    <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
                Selected <em className="italic text-terracotta">Stories</em>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl font-body text-[15px] font-light leading-relaxed text-espresso/60">
                A collection of moments, people and places we've had the privilege to photograph.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              View All Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12">
          <PortfolioFilter category={category} onChange={setCategory} />
        </Reveal>
        <div className="mt-14">
          <PortfolioGrid items={filtered} onOpen={openLightbox} />
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl lg:text-6xl">
            Six ways we tell <em className="italic text-terracotta">your story.</em>
          </h2>
        </Reveal>
        <div className="mt-10">
          {services.slice(0, 3).map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} to="/services" />
          ))}
        </div>
        <Reveal className="mt-4">
          <Link to="/services" className="btn btn-outline-dark px-9 py-4">
            Explore All Services
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
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

function Quote() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal text-cream">
      <img
        src={img("photo-1506794778202-cad84cf45f1d", 2200, 1400, 0)}
        alt="A black-and-white portrait study"
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

function JournalPreview() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionLabel>The Journal</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
              From The <em className="italic text-terracotta">Journal</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-3 font-body text-[11px] font-bold uppercase tracking-widest2 text-espresso transition-colors duration-300 hover:text-terracotta"
            >
              All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {journal.slice(0, 3).map((article, index) => (
            <JournalCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="border-t border-espresso/10 bg-warmwhite py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-medium text-espresso md:text-5xl lg:text-6xl">
            What they <em className="italic text-terracotta">felt.</em>
          </h2>
        </Reveal>
        <div className="mt-16">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl lg:text-6xl">
            From first conversation to <em className="italic text-terracotta">final frame.</em>
          </h2>
        </Reveal>
        <div className="mt-20">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section className="bg-espresso py-24 text-cream md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel tone="dark">Invest in Memory</SectionLabel>
        </Reveal>
        <div className="mt-14">
          <PackagesSection
            heading="Collections"
            subtitle="Three ways to work with the studio. Every collection is shaped around your story — these are the starting points."
          />
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
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

export default function Home() {
  return (
    <>
      <Hero />
      <StudioSection />
      <SelectedWork />
      <ServicesPreview />
      <Photographer />
      <Quote />
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
