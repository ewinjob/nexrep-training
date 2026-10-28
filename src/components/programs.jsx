import { programs } from "../data/programs";
import ProgramCard from "../components/ProgarmCard";


export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        02 / Training programs
      </p>
      <h2 className="font-serif text-5xl md:text-6xl">
        Find your <em className="text-accent">edge.</em>
      </h2>
      <p className="mt-6 max-w-xl opacity-70">
        Three ways to train. One standard of coaching. Choose the structure
        that makes your next level inevitable.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {programs.map((p) => (
          <ProgramCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}