import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { img } from "../data/portfolio";

export const services = [
  {
    id: 1,
    number: "01",
    title: "Weddings",
    image: img("photo-1519741497674-611481863552", 1600, 1100),
    alt: "A bride and groom embracing on their wedding day",
    description:
      "Honest, emotional and cinematic wedding stories. From the morning rituals to the last dance, we photograph the full arc of your day — the moments between the planned ones, where the real story lives.",
    points: [
      "Full-day & multi-day coverage",
      "Two photographers on request",
      "Candid-first, directed-light approach",
      "Curated highlight films",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Portraits",
    image: img("photo-1494790108377-be9c29b29330", 1200, 1500),
    alt: "A natural-light portrait of a woman smiling softly",
    description:
      "Photographs that feel like you. Individual and family portrait sessions built around your personality, your light and your favourite places — with no stiff poses and no pretending to be someone you're not.",
    points: [
      "Individual & family sessions",
      "Natural-light locations",
      "Studio options in Indore",
      "Print-ready, gallery-graded edits",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Fashion",
    image: img("photo-1534528741775-53994a69daeb", 1200, 1500),
    alt: "A model in an editorial fashion portrait with dramatic light",
    description:
      "Editorial imagery with attitude, texture and character. Lookbooks, campaigns and magazine work — we design every shoot around the garment, the mood and the story you want the image to tell.",
    points: [
      "Lookbooks & campaigns",
      "Moodboards & art direction",
      "Studio & location sets",
      "Retouching & colour grading",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Commercial",
    image: img("photo-1487958449943-2429e8be8625", 1600, 1100),
    alt: "Modern white architecture photographed in clear light",
    description:
      "Visual stories designed to make brands memorable. Architecture, interiors, products and people at work — photographed with the patience and craft your brand's first impression deserves.",
    points: [
      "Architecture & interiors",
      "Product & F&B",
      "Brand portrait banks",
      "Licensed usage rights",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Pre-Wedding",
    image: img("photo-1519821172144-4f87d85de2a1", 1600, 1100),
    alt: "A couple silhouetted against a golden sunset before their wedding",
    description:
      "A cinematic chapter before the big day. Pre-wedding sessions are about the two of you without the schedule — a golden-hour drive, a city you love, or simply the light we find together.",
    points: [
      "Location scouting & styling help",
      "Golden-hour sessions",
      "Story-driven direction",
      "Same-gallery delivery with the wedding",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Events",
    image: img("photo-1470229722913-7c0e2dbbafd3", 1600, 1100),
    alt: "A concert crowd under warm stage lights",
    description:
      "The moments between the moments. Launches, festivals, anniversaries and private parties — documented with a documentary eye, so the people who matter most are never on the other side of a camera.",
    points: [
      "Launches & festivals",
      "Private celebrations",
      "Documentary-style coverage",
      "48-hour preview gallery",
    ],
  },
];

export function ServiceSection({ service, index, to = "/services" }) {
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

const packages = [
  {
    name: "Intimate",
    price: "₹15,000",
    priceNote: "Starting at",
    features: ["2 Hours", "1 Photographer", "100+ Edited Images", "Online Gallery"],
    cta: "Enquire",
    to: "/booking",
    featured: false,
  },
  {
    name: "Signature",
    price: "₹30,000",
    priceNote: "Starting at",
    badge: "Most Requested",
    features: [
      "5 Hours",
      "2 Photographers",
      "300+ Edited Images",
      "Premium Editing",
      "Online Gallery",
      "Highlight Film",
    ],
    cta: "Enquire",
    to: "/booking",
    featured: true,
  },
  {
    name: "Bespoke",
    price: "Custom",
    priceNote: "Tailored to your story",
    for: ["Full-day weddings", "Commercial campaigns", "Fashion editorials", "Destination shoots"],
    cta: "Discuss Your Project",
    to: "/booking",
    featured: false,
  },
];

export function PackagesSection({ heading = "Collections", subtitle }) {
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
