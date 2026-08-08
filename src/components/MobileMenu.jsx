import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { InstagramIcon } from "../App";
import { site } from "../data/site";

const links = [
  { to: "/", label: "Home", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/work", label: "Work", index: "03" },
  { to: "/services", label: "Services", index: "04" },
  { to: "/journal", label: "Journal", index: "05" },
  { to: "/contact", label: "Contact", index: "06" },
];

export default function MobileMenu({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      document.body.style.overflow = "hidden";
      return () => cancelAnimationFrame(raf);
    }
    if (mounted) {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 600);
      document.body.style.overflow = "";
      return () => clearTimeout(timer);
    }
  }, [open, mounted]);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    []
  );

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex flex-col bg-espresso text-cream transition-opacity duration-500 ease-cinematic ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="container-x flex items-center justify-between py-5">
        <span className="font-display text-lg font-semibold tracking-[0.22em]">
          NOIR FRAME<span className="text-terracotta">.</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest2 text-cream/80 transition-colors hover:text-clay"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6 sm:px-10" aria-label="Mobile">
        {links.map((link, i) => (
          <div
            key={link.to}
            className={`transition-all duration-700 ease-cinematic ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${120 + i * 70}ms` }}
          >
            <Link to={link.to} onClick={onClose} className="group flex items-baseline gap-5 py-2">
              <span className="font-body text-[11px] font-bold tracking-[0.3em] text-terracotta">
                {link.index}
              </span>
              <span className="font-display text-4xl font-medium transition-colors duration-300 group-hover:text-clay sm:text-5xl">
                {link.label}
              </span>
              <ArrowUpRight className="h-6 w-6 text-cream/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-clay" strokeWidth={1.5} />
            </Link>
          </div>
        ))}
      </nav>

      <div
        className={`container-x flex flex-col gap-6 border-t border-cream/10 py-8 transition-all duration-700 ease-cinematic ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: "560ms" }}
      >
        <Link to="/booking" onClick={onClose} className="btn btn-terracotta w-full px-8 py-4">
          Book a Session
        </Link>
        <div className="flex items-center justify-between">
          <a href={`mailto:${site.email}`} className="text-xs tracking-wide text-cream/60 hover:text-cream">
            {site.email}
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-wide text-cream/60 transition-colors hover:text-clay"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
