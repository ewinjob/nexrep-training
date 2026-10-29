import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BRAND } from "../config";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#top" className="font-serif text-xl font-semibold">
          {BRAND}<span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors duration-300 hover:text-accent ${
                  active === l.href ? "text-accent" : "opacity-70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#enquiry"
            className="rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:bg-transparent hover:text-accent"
          >
            Enquire
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-2xl md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-white/10 px-6 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-lg ${
                  active === l.href ? "text-accent" : "opacity-80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}