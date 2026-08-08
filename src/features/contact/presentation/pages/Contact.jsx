import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../../../../shared/components/PageHeader";
import ContactInfo from "../components/ContactInfo";
import Reveal from "../../../../shared/components/Reveal";
import SectionLabel from "../../../../shared/components/SectionLabel";
import { site } from "../../../../shared/data/site";
import { InstagramIcon, WhatsAppIcon } from "../../../../shared/components/icons";

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
