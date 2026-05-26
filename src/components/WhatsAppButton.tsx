import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#25D366] text-white shadow-[0_16px_35px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#1EBE5D]"
      aria-label="Falar com a MegaFilm no WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
