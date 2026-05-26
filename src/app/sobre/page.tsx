import type { Metadata } from "next";
import { MapPin, PackageCheck, Truck } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a MegaFilm Películas",
  description:
    "Conheça a MegaFilm Películas, empresa em Curitiba com venda e instalação de películas solares, decorativas e de segurança."
};

export default function SobrePage() {
  return (
    <div>
      <section className="section-pad border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
              Sobre a MegaFilm
            </p>
            <h1 className="mt-3 font-display text-6xl font-extrabold uppercase leading-none md:text-7xl">
              Distribuição técnica com raiz em Curitiba.
            </h1>
          </div>
          <div className="text-lg leading-8 text-mega-steel">
            <p>
              A MegaFilm atua com venda, distribuição e instalação de películas
              de controle solar, segurança e decoração. O atendimento contempla
              imóveis, lojas, casas, prédios e projetos que precisam melhorar
              conforto, privacidade e acabamento.
            </p>
            <p className="mt-5">
              A operação tem base no Atuba, em Curitiba/PR, com atendimento
              comercial por telefone e WhatsApp, além de envio para todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3 lg:px-8">
          {[
            { icon: MapPin, title: "Endereço físico", text: site.address },
            { icon: PackageCheck, title: "Mix de produtos", text: "Solar, refletiva, segurança, decorativa e bobinas." },
            { icon: Truck, title: "Atendimento nacional", text: "Consulte disponibilidade, compra e envio para sua região." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border border-black/10 bg-mega-paper p-6">
                <Icon className="text-mega-red" size={32} />
                <h2 className="mt-5 font-display text-3xl font-bold uppercase">{item.title}</h2>
                <p className="mt-3 leading-7 text-mega-steel">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
