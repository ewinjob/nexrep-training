import { FaWhatsapp } from "react-icons/fa6";
import { PHONE } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi, I'd like to know more.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 animate-bounce rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-lg"
    >
      <FaWhatsapp className="text-2xl"/>
    </a>
  );
}