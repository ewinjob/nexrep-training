import React from 'react'

function Hero() {
  return (
    <>

        <section id="top" className="mx-auto max-w-6xl px-6 pb-28 pt-40 md:pb-40 md:pt-52">
      <p className="mb-6 text-sm uppercase tracking-widest opacity-60">
        01 / The philosophy
      </p>
      <h1 className="font-serif text-6xl leading-none md:text-8xl">
       Trust humans<em className="text-accent">,not AI</em>
      </h1>
      <p className="mt-8 max-w-xl text-lg opacity-70">
        No AI can replace human connection. At NEXREP Training, get real coaching, genuine support, and results built together.
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