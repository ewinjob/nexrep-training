import EnquiryButtons from "../components/EnqButton";
import { EMAIL } from "../config";

export default function Enquiry() {
  return (
    <section id="enquiry" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 md:px-16">
        <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
          05 / Get started
        </p>
        <h2 className="font-serif text-5xl md:text-6xl">
          Ready to <em className="text-accent">start?</em>
        </h2>
        <p className="mt-6 max-w-xl opacity-70">
          Send us a message and we will reply with the next steps. Train from
          anywhere in the world.
        </p>

        <div className="mt-10">
          <EnquiryButtons />
        </div>

        <p className="mt-8 text-sm opacity-60">
          Or write to us at <span className="text-paper">{EMAIL}</span>
        </p>
      </div>
    </section>
  );
}