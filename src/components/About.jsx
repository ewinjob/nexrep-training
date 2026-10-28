const stats = [
  { value: "12+", label: "Years of coaching" },
  { value: "2.4k", label: "Milestones reached" },
  { value: "1", label: "Standard: your best" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        01 / Our philosophy
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Discipline is <em className="text-accent">freedom.</em>
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <p className="text-lg opacity-70">
          We believe training should be demanding, intelligent, and deeply
          personal. No trends. No shortcuts. Just a clear plan, expert
          coaching, and the accountability to keep showing up.
        </p>

        <dl className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-white/20 pt-4">
              <dt className="font-serif text-4xl text-accent">{s.value}</dt>
              <dd className="mt-2 text-xs opacity-60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}