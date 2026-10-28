import { coaches } from "../data/coaches";

export default function Coaches() {
  return (
    <section id="coaches" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        03 / Meet your coach
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Coached by <em className="text-accent">experts.</em>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coaches.map((c) => (
          <article key={c.name} className="rounded-2xl border border-white/10 p-6">
            <div className="flex h-40 items-center justify-center rounded-xl bg-white/5 font-serif text-5xl text-accent">
              {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
            </div>
            <h3 className="mt-5 font-serif text-xl">{c.name}</h3>
            <p className="mt-1 text-sm text-accent">{c.role}</p>
            <p className="mt-3 text-sm opacity-70">{c.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}