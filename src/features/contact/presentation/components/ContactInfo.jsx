import { Clock, Mail, Phone, ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "../../../../shared/components/Reveal";
import { site } from "../../../../shared/data/site";
import { InstagramIcon } from "../../../../shared/components/icons";

export default function ContactInfo({ dark = false }) {
  const textColor = dark ? "text-cream/60" : "text-espresso/65";
  const labelColor = dark ? "text-clay" : "text-terracotta";
  return (
    <div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <Reveal>
          <p className={`label text-[10px] ${labelColor}`}>Studio</p>
          <p className={`mt-4 max-w-[16rem] font-body text-[15px] font-light leading-relaxed ${textColor}`}>
            {site.location}
          </p>
          <p className="mt-2 flex items-center gap-2 font-body text-xs text-espresso/40">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
            By appointment, Tue – Sun
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className={`label text-[10px] ${labelColor}`}>Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 font-body text-[15px] font-light text-espresso transition-colors duration-300 hover:text-terracotta"
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {site.email}
          </a>
          <p className="mt-2 font-body text-xs font-light text-espresso/40">Replies {site.responseTime}</p>
        </Reveal>

        <Reveal delay={200}>
          <p className={`label text-[10px] ${labelColor}`}>Phone</p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex items-center gap-2 font-body text-[15px] font-light text-espresso transition-colors duration-300 hover:text-terracotta"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            {site.phone}
          </a>
          <p className="mt-2 font-body text-xs font-light text-espresso/40">WhatsApp available</p>
        </Reveal>

        <Reveal delay={300}>
          <p className={`label text-[10px] ${labelColor}`}>Instagram</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-flex items-center gap-2 font-body text-[15px] font-light text-espresso transition-colors duration-300 hover:text-terracotta"
          >
            <InstagramIcon className="h-4 w-4 shrink-0" />
            {site.instagramHandle}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" strokeWidth={1.5} />
          </a>
          <p className="mt-2 font-body text-xs font-light text-espresso/40">Daily frames from the studio</p>
        </Reveal>
      </div>

      <Reveal delay={200} className="mt-16">
        <a
          href={site.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative block h-72 overflow-hidden bg-espresso sm:h-80"
          aria-label="Open studio location on Google Maps"
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,239,231,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,231,0.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
            <span className="flex h-14 w-14 items-center justify-center border border-cream/30 text-clay transition-all duration-500 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
              <MapPin className="h-6 w-6" strokeWidth={1.2} />
            </span>
            <div>
              <p className="label text-[10px] text-cream/60">The Studio</p>
              <p className="mt-2 font-display text-xl font-medium text-cream md:text-2xl">{site.location}</p>
            </div>
            <span className="inline-flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-widest2 text-clay transition-colors group-hover:text-cream">
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </div>
          <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/0" aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  );
}
