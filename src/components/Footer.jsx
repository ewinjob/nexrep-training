import { BRAND } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <a href="#top" className="font-serif text-xl font-semibold">
          {BRAND}<span className="text-accent">.</span>
        </a>
        <p className="opacity-60">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}