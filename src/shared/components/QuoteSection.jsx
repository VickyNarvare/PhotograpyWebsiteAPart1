import Reveal from "./Reveal";
import { img } from "../utils/img";

export default function QuoteSection({ image, sat = 0, alt = "A black-and-white portrait study" }) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-charcoal text-cream">
      <img
        src={img(image, 2200, 1400, sat)}
        alt={alt}
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
