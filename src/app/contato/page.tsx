import type { Metadata } from "next";
import { ContactCards } from "@/components/ContactCards";

export const metadata: Metadata = {
  title: "Contato MegaFilm Curitiba",
  description:
    "Fale com a MegaFilm Películas em Curitiba. WhatsApp, telefone, endereço no Atuba e atendimento para cotação de películas."
};

export default function ContatoPage() {
  return (
    <div className="section-pad bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ContactCards />
      </div>
    </div>
  );
}
