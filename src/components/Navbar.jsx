import { useEffect, useState,useRef } from "react";
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

  const [hideEnquire, setHideEnquire] = useState(false);
const lastY = useRef(0);

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
  const y = window.scrollY;

  setScrolled(y > 20);
  if (y < 200) setActive("");

  // hide when scrolling down, show when scrolling up
  if (y > 120 && y > lastY.current) {
    setHideEnquire(true);
  } else {
    setHideEnquire(false);
  }
  lastY.current = y;
};
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-2 md:py-3" : "py-3 md:py-5"
        }`}
      >
        <a href="#top" className="order-1 font-serif text-xl font-semibold">
          {BRAND}<span className="text-accent">.</span>
        </a>

        {/* Links: second row on phones, centre on laptops */}
        <ul className="order-3 mt-2 flex w-full justify-between text-sm md:order-2 md:mt-0 md:w-auto md:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`block py-1 transition-colors duration-300 hover:text-accent ${
                  active === l.href ? "text-accent" : "opacity-70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
  href="#enquiry"
  className={`order-2 rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-ink transition-all duration-300 hover:bg-transparent hover:text-accent md:order-3 ${
    hideEnquire
      ? "pointer-events-none translate-y--8px opacity-0"
      : "translate-y-0 opacity-100"
  }`}
>
  Enquire
</a>
      </nav>
    </header>
  );
}