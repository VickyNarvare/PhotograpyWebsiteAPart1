import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { img } from "../utils/img";

export default function FinalCTA({
  heading = (
    <>
      Your story deserves more than <em className="italic text-clay">ordinary photographs.</em>
    </>
  ),
  image = "photo-1519821172144-4f87d85de2a1",
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-charcoal text-cream">
      <img
        src={img(image, 2200, 1400)}
        alt="A couple silhouetted against a golden sunset"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/35 to-espresso/80"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 py-32 text-center md:py-40">
        <p className="label text-clay">Ready when you are</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.06] text-balance">
          {heading}
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link to="/work" className="btn btn-terracotta px-9 py-4">
            View Our Work
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link to="/booking" className="btn btn-outline-cream px-9 py-4">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}
