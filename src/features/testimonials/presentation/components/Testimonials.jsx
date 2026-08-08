import { Quote } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import { useTestimonials } from "../../application/hooks/useTestimonials";

export default function Testimonials({ limit = 3 }) {
  const { testimonials } = useTestimonials();

  return (
    <div className="grid gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, limit).map((t, index) => (
        <Reveal key={t.name} delay={index * 140} className={index % 2 === 1 ? "lg:mt-16" : ""}>
          <figure className="flex h-full flex-col">
            <Quote className="h-8 w-8 text-terracotta" strokeWidth={1.2} aria-hidden="true" />
            <blockquote className="mt-7 flex-1 font-display text-xl font-medium italic leading-relaxed text-espresso md:text-[1.45rem]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-8 border-t border-espresso/10 pt-6">
              <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-espresso">
                {t.name}
              </p>
              <p className="mt-1.5 font-body text-xs font-light tracking-wide text-espresso/50">
                {t.detail}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
