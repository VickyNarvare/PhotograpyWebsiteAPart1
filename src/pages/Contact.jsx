import { Link } from "react-router-dom";
import { Clock, Mail, Phone, ArrowUpRight, MapPin, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import { site, InstagramIcon, WhatsAppIcon } from "../App";

function ContactInfo({ dark = false }) {
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

export default function Contact() {
  return (
    <>
      <PageHeader
        label="Contact"
        title={
          <>
            Come Say <em className="italic text-clay">Hello</em>
          </>
        }
        subtitle="Whether it's a wedding, a campaign or just an idea that needs a photographer — we'd love to hear about it."
        image="photo-1502920917128-1aa500764cbd"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <SectionLabel>The Details</SectionLabel>
          </Reveal>
          <div className="mt-14">
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="border-t border-espresso/10 bg-warmwhite py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel>Prefer a Conversation?</SectionLabel>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.12] text-espresso md:text-5xl">
                We reply {site.responseTime} <em className="italic text-terracotta">— every time.</em>
              </h2>
              <p className="mt-6 max-w-lg font-body text-[15px] font-light leading-[1.9] text-espresso/70">
                The fastest way to start is to fill in the inquiry form and tell us about your plans. For something
                urgent, a call or a WhatsApp message works just as well.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/booking" className="btn btn-terracotta px-8 py-4">
                  Send an Inquiry
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-8 py-4">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark px-8 py-4">
                  <InstagramIcon className="h-4 w-4" />
                  DM on Instagram
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <div className="flex h-full flex-col justify-between gap-10 border border-espresso/10 bg-cream p-9 md:p-12">
                <div>
                  <p className="label text-[10px] text-terracotta">Studio Hours</p>
                  <dl className="mt-6 space-y-4 font-body text-sm">
                    {[
                      ["Tuesday — Saturday", "10:00 AM – 7:00 PM"],
                      ["Sunday", "By appointment"],
                      ["Monday", "Studio closed · edits happen"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex items-baseline justify-between gap-6 border-b border-espresso/10 pb-4">
                        <dt className="font-light text-espresso/60">{day}</dt>
                        <dd className="text-right font-medium text-espresso">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="border-t border-espresso/10 pt-8">
                  <p className="label text-[10px] text-terracotta">The Studio Address</p>
                  <p className="mt-4 font-display text-xl font-medium italic leading-relaxed text-espresso">
                    {site.address}
                  </p>
                  <p className="mt-3 font-body text-xs font-light text-espresso/50">
                    Parking available · 5 minutes from the city centre
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
