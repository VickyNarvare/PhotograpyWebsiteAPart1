import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { img } from "../../../../shared/utils/img";

export default function Hero() {
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
