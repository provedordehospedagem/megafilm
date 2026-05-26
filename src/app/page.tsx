import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DiferenciaisSection } from "@/components/DiferenciaisSection";
import { HeroSection } from "@/components/HeroSection";
import { SolucoesSection } from "@/components/SolucoesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustSection } from "@/components/TrustSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Distribuidora de Películas em Curitiba",
  description:
    "MegaFilm Películas: venda e instalação de películas solares, decorativas e de segurança em Curitiba para casas, lojas, prédios e projetos comerciais."
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolucoesSection />
      <TrustSection />
      <DiferenciaisSection />
      <TestimonialsSection />
      <section className="section-pad bg-mega-paper">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="industrial-panel grid gap-8 rounded-md border border-mega-ink p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
                Compra comercial
              </p>
              <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none">
                Precisa comprar ou instalar película?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-mega-steel">
                Chame a equipe da MegaFilm e informe o tipo de vidro, ambiente
                ou produto desejado. O atendimento retorna com a indicação ideal
                e o próximo passo para venda ou instalação.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href={whatsappLink()} target="_blank" variant="whatsapp">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Falar no WhatsApp
              </ButtonLink>
              <ButtonLink href="/servicos" variant="outline">
                Ver serviços
                <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
