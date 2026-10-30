import { BRAND, BRAND_FULL, INSTAGRAM } from "../config";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-8 text-center text-sm md:flex-row md:justify-between md:py-10 md:pr-24 md:text-left xl:pr-6">
        <a href="#top" className="font-serif text-xl font-semibold">
          {BRAND}
          <span className="text-accent">.</span>
        </a>

        <p className="opacity-60">
          © {new Date().getFullYear()} {BRAND_FULL}. All rights reserved.
        </p>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="NEXREP TRAINING on Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink"
        >
          <SiInstagram />
        </a>
      </div>
    </footer>
  );
}