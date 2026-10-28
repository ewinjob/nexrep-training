import { PHONE, EMAIL } from "../config";

export default function EnqButton({ program = "" }) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in ${program || "your training programs"}. Please share details.`
  );

  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={`https://wa.me/${PHONE}?text=${msg}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-accent hover:bg-accent/50 px-8 py-3 font-medium text-ink"
      >
        Enquire on WhatsApp
      </a>
      <a
        href={`mailto:${EMAIL}?subject=Training enquiry&body=${msg}`}
        className="rounded-full border border-white/30 px-8 py-3 font-medium hover:bg-accent hover:text-black"
      >
        Email us
      </a>
    </div>
  );
}