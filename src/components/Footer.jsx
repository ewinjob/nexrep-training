import { BRAND,BRAND_FULL,INSTAGRAM } from "../config";
import { SiInstagram } from "react-icons/si";
import Link from 'react-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <a href="#top" className="font-serif text-xl font-semibold">
          {BRAND}<span className="text-accent">.</span>
        </a>
       <p className="opacity-60">
  © {new Date().getFullYear()} {BRAND_FULL}. All rights reserved.
</p>

    <div>
         <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="NEXREP TRAINING on Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink"
        >
          <SiInstagram />
        </a>
    </div>

      </div>
    </footer>
  );
}