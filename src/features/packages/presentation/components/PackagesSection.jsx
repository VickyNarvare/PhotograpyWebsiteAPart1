import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import { usePackages } from "../../application/hooks/usePackages";

export default function PackagesSection({ heading = "Collections", subtitle }) {
  const { packages } = usePackages();

  return (
    <div className="container-x">
      <Reveal className="max-w-2xl">
        <h2 className="font-display text-4xl font-medium text-cream md:text-5xl lg:text-6xl">{heading}</h2>
        {subtitle ? (
          <p className="mt-5 font-body text-[15px] font-light leading-relaxed text-cream/60">{subtitle}</p>
        ) : null}
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {packages.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 140} className={pkg.featured ? "lg:-mt-8" : ""}>
            <div
              className={`relative flex h-full flex-col p-9 transition-transform duration-700 ease-cinematic lg:p-10 ${
                pkg.featured
                  ? "border border-terracotta/60 bg-warmwhite text-espresso lg:shadow-soft"
                  : "border border-cream/10 bg-charcoal text-cream"
              }`}
            >
              {pkg.badge ? (
                <span className="absolute -top-3.5 left-9 bg-terracotta px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.26em] text-cream">
                  {pkg.badge}
                </span>
              ) : null}

              <p className={`label text-[10px] ${pkg.featured ? "text-terracotta" : "text-clay"}`}>{pkg.priceNote}</p>
              <h3 className="mt-3 font-display text-[2.6rem] font-medium leading-none">{pkg.price}</h3>
              <p
                className={`mt-2 font-body text-xs font-bold uppercase tracking-[0.3em] ${
                  pkg.featured ? "text-espresso/50" : "text-cream/50"
                }`}
              >
                {pkg.name}
              </p>

              <ul className="mt-9 flex-1 space-y-3.5">
                {(pkg.features || pkg.for || []).map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 font-body text-sm font-light ${
                      pkg.featured ? "text-espresso/70" : "text-cream/70"
                    }`}
                  >
                    <Plus className={`h-3.5 w-3.5 shrink-0 ${pkg.featured ? "text-terracotta" : "text-clay"}`} strokeWidth={1.8} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={pkg.to}
                className={`group/cta mt-10 inline-flex w-full items-center justify-center gap-3 px-6 py-4 font-body text-[11px] font-bold uppercase tracking-widest2 transition-all duration-500 ${
                  pkg.featured
                    ? "border border-terracotta bg-terracotta text-cream hover:border-espresso hover:bg-espresso"
                    : "border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-espresso"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
