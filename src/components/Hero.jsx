import React from 'react'

function Hero() {
  return (
    <>

         <section id="top" className="mx-auto max-w-6xl px-6 py-28 md:py-40">
      <p className="mb-6 text-sm uppercase tracking-widest opacity-60">
        01 / The philosophy
      </p>
      <h1 className="font-serif text-6xl leading-none md:text-8xl">
        Built for <em className="text-accent">more.</em>
      </h1>
      <p className="mt-8 max-w-xl text-lg opacity-70">
        Private online coaching for people who want their strength to show up
        everywhere, wherever in the world they live.
      </p>
      <a
        href="#enquiry"
        className="mt-10 inline-block rounded-lg bg-accent px-8 hover:rounded-xl hover:text-accent  hover:bg-accent/10 transition-color duration-200 ease-in-out  py-3 font-medium text-ink"
      >
        Book a free call
      </a>
    </section>

    </>
  )
}

export default Hero