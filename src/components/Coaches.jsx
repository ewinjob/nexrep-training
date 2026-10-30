import { coaches } from "../data/coaches";

export default function Coaches() {
  return (
    <section id="coaches" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        03 / Meet your team
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Coached by <em className="text-accent">experts.</em>
      </h2>

      <div className="mt-14 grid gap-10 md:grid-cols-2 ">
        {coaches.map((c) => (
          <article
            key={c.name}
            className="rounded-2xl border border-white/10 p-6  transition-colors duration-300 hover:border-accent/60"
          >
            {c.photo ? (
             <img
          src={c.photo}
              alt={c.name}
            className="h-fit w-full rounded-xl bg-white/5 object-cover"
             />
            ) : (
              <div className="flex h-72 items-center justify-center rounded-xl bg-white/5 font-serif text-6xl text-accent">
                {c.name.trim().split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
            )}

            <h3 className="mt-5 font-serif text-2xl">{c.name}</h3>
            <p className="mt-1 text-sm text-accent">{c.role}</p>
            <p className="mt-3 text-sm opacity-70">{c.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}