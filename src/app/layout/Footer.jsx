import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../../shared/data/site";
import { FacebookIcon, InstagramIcon, PinterestIcon, WhatsAppIcon } from "../../shared/components/icons";

const exploreLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
];

const connectLinks = [
  { href: site.instagramUrl, label: "Instagram", Icon: InstagramIcon },
  { href: site.pinterestUrl, label: "Pinterest", Icon: PinterestIcon },
  { href: site.facebookUrl, label: "Facebook", Icon: FacebookIcon },
  { href: site.whatsappUrl, label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="container-x pt-20 md:pt-28">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:justify-between">
          <div>
            <p className="font-display text-5xl font-medium tracking-[0.18em] md:text-7xl">
              NOIR FRAME<span className="text-terracotta">.</span>
            </p>
            <p className="mt-5 font-body text-sm font-light italic text-cream/55">
              {site.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3 lg:gap-x-24">
            <nav aria-label="Footer — explore">
              <p className="label text-[10px] text-clay">Explore</p>
              <ul className="mt-5 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-body text-sm font-light text-cream/60 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer — connect">
              <p className="label text-[10px] text-clay">Connect</p>
              <ul className="mt-5 space-y-3">
                {connectLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 font-body text-sm font-light text-cream/60 transition-colors duration-300 hover:text-cream"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="label text-[10px] text-clay">Contact</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 font-body text-sm font-light text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2.5 font-body text-sm font-light text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 font-body text-sm font-light text-cream/60">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  {site.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-cream/10 py-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs font-light text-cream/40">
            © 2026 Noir Frame Studio. All photographs are original work.
          </p>
          <div className="flex items-center gap-6">
            <span className="cursor-pointer font-body text-xs font-light text-cream/40 transition-colors hover:text-cream">
              Privacy
            </span>
            <span className="cursor-pointer font-body text-xs font-light text-cream/40 transition-colors hover:text-cream">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
