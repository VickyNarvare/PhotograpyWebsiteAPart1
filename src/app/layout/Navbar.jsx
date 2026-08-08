import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { site } from "../../shared/data/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `relative pb-1 text-[11px] font-bold uppercase tracking-widest2 transition-colors duration-300 ${
      isActive
        ? "border-b border-terracotta text-terracotta"
        : scrolled
          ? "border-b border-transparent text-espresso/70 hover:text-espresso"
          : "border-b border-transparent text-cream/80 hover:text-cream"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-cinematic ${
          scrolled
            ? "bg-cream/95 text-espresso shadow-[0_1px_0_rgba(23,20,18,0.08)] backdrop-blur-md"
            : "bg-transparent text-cream"
        }`}
      >
        <div
          className={`container-x flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3" : "py-5 md:py-7"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
            <span className="font-display text-xl font-semibold tracking-[0.22em]">
              NOIR FRAME<span className="text-terracotta">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className={`hidden px-6 py-3 text-[11px] font-bold uppercase tracking-widest2 transition-all duration-500 lg:inline-flex ${
                scrolled
                  ? "border border-espresso text-espresso hover:border-terracotta hover:bg-terracotta hover:text-cream"
                  : "border border-cream/50 text-cream hover:bg-cream hover:text-espresso"
              }`}
            >
              Book a Session
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`inline-flex items-center gap-2 px-2 py-2 text-[11px] font-bold uppercase tracking-widest2 transition-colors lg:hidden ${
                scrolled ? "text-espresso hover:text-terracotta" : "text-cream hover:text-clay"
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
