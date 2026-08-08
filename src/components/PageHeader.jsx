import { img } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function PageHeader({ label, title, subtitle, image, tone = "dark" }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-charcoal pt-36 text-cream md:min-h-[68vh]">
      <img
        src={img(image, 2200, 1200)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/30 to-espresso/85"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 pb-16 md:pb-20">
        <Reveal>
          <SectionLabel tone={tone}>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.8rem)] font-medium leading-[1.06] text-balance">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-cream/70">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
