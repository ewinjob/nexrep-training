import { PHONE } from "../config";

export default function ProgramCard({ id, title, desc, points }) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in ${title}. Please share details.`
  );

  return (
    <article className="flex flex-col rounded-2xl border border-white/10 p-8 transition hover:border-accent/60">
      <span className="font-serif text-4xl text-accent">{id}</span>
      <h3 className="mt-6 font-serif text-2xl">{title}</h3>
      <p className="mt-3 opacity-70">{desc}</p>

      <ul className="mt-6 space-y-2 text-sm opacity-80">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-accent">→</span>
            {p}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${PHONE}?text=${msg}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block self-start rounded-full border border-white/30 px-5 py-2 text-sm transition-color duration-500 hover:bg-accent hover:text-ink"
      >
        Enquire →
      </a>
    </article>
  );
}