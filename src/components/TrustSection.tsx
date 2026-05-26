import { Building2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const trustSignals = [
  {
    title: "Atendimento local em Curitiba",
    description:
      "Base física no Atuba para orientar orçamento, produto e instalação com mais segurança.",
    icon: MapPin
  },
  {
    title: "Venda e instalação",
    description:
      "A MegaFilm atende tanto quem compra película quanto quem precisa de aplicação em imóveis.",
    icon: Building2
  },
  {
    title: "Indicação por objetivo",
    description:
      "Controle solar, privacidade, segurança ou estética: a película é indicada conforme o ambiente.",
    icon: ShieldCheck
  },
  {
    title: "Contato direto",
    description:
      `Orçamento e dúvidas pelo WhatsApp ${site.whatsappDisplay}, sem formulário complexo.`,
    icon: MessageCircle
  }
];

export function TrustSection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="reveal-up" data-aos="fade-right">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
              Confiança para contratar
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none md:text-6xl">
              Antes da película, vem a escolha certa.
            </h2>
            <p className="mt-5 text-lg leading-8 text-mega-steel">
              Endereço físico, atendimento direto e orientação técnica reduzem
              dúvida na hora de escolher entre controle solar, segurança,
              privacidade ou acabamento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="card-lift rounded-md border border-black/10 bg-mega-paper p-6"
                >
                  <Icon className="text-mega-red" size={30} />
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-mega-steel">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
