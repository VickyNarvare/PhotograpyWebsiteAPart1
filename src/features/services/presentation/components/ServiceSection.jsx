import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";

export default function ServiceSection({ service, index, to = "/services" }) {
  const reversed = index % 2 === 1;
  return (
    <article className="group border-t border-espresso/10 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
        <div className={`relative overflow-hidden bg-charcoal ${reversed ? "md:order-2" : ""}`}>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={service.image}
              alt={service.alt}
              loading="lazy"
              decoding="async"
              className="img-zoom h-full w-full object-cover"
            />
          </div>
          <span className="absolute left-6 top-6 font-display text-5xl font-medium italic text-cream/30 md:text-6xl">
            {service.number}
          </span>
        </div>

        <div className={reversed ? "md:order-1" : ""}>
          <Reveal>
            <h3 className="font-display text-3xl font-medium text-espresso md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {service.title}
            </h3>
            <p className="mt-5 max-w-lg font-body text-[15px] font-light leading-relaxed text-espresso/70">
              {service.description}
            </p>
            <ul className="mt-7 space-y-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-body text-sm text-espresso/65">
                  <span className="h-px w-6 bg-terracotta" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to={to}
              className="group/link mt-8 inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-widest2 text-terracotta transition-colors duration-300 hover:text-espresso"
            >
              Explore
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-500 ease-cinematic group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
