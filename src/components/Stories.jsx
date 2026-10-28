import { stories } from "../data/stories";

export default function Stories() {
  return (
    <section id="stories" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        04 / Member stories
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Real people. <em className="text-accent">Real results.</em>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stories.map((s, i) => (
          <blockquote key={i} className="rounded-2xl bg-white/5 p-8">
            <p className="font-serif text-lg leading-relaxed">“{s.quote}”</p>
            <footer className="mt-6 text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="block opacity-60">{s.location}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}