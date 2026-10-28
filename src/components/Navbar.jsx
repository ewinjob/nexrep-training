import React from 'react'
import { href } from 'react-router-dom'
import { BRAND } from '../config'


const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Stories", href: "#stories" },
];

function Navbar() {
  return (
    <>
       <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl font-semibold">
          {BRAND}<span className="text-accent">.</span>
        </a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-70 transition hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#enquiry"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-ink"
        >
          Enquire
        </a>
      </nav>
    </header>
    </>
  )
}

export default Navbar