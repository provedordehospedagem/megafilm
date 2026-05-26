import type { Metadata } from "next";
import { existsSync } from "fs";
import { Building2, Home, PackageCheck, Store, Wrench } from "lucide-react";
import Image from "next/image";
import { join } from "path";
import { ButtonLink } from "@/components/ButtonLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços de Películas em Curitiba",
  description:
    "Serviços MegaFilm: venda, distribuição e instalação de películas solares, decorativas e de segurança para imóveis, lojas, casas e prédios em Curitiba."
};

const services = [
  {
    title: "Instalação em imóveis",
    description:
      "Aplicação de películas em casas, apartamentos, salas comerciais e áreas com grande incidência solar.",
    icon: Home
  },
  {
    title: "Lojas e vitrines",
    description:
      "Soluções para reduzir calor, proteger produtos, melhorar privacidade e valorizar fachadas comerciais.",
    icon: Store
  },
  {
    title: "Prédios e fachadas",
    description:
      "Películas para vidros de maior escala, com foco em conforto térmico, segurança e leitura arquitetônica.",
    icon: Building2
  },
  {
    title: "Venda e distribuição",
    description:
      "Fornecimento de películas, bobinas e linhas sob consulta para compra comercial e reposição de material.",
    icon: PackageCheck
  }
];

const visualReferences = [
  {
    src: "/images/mega-1.jpg",
    title: "Residências com grandes vidros",
    description: "Controle solar sem perder a integração visual do ambiente."
  },
  {
    src: "/images/mega-2.webp",
    title: "Prédios e fachadas",
    description: "Películas para reduzir calor e melhorar conforto em áreas verticais."
  },
  {
    src: "/images/mega-3.avif",
    title: "Vidros arquitetônicos",
    description: "Acabamento mais discreto para projetos que pedem privacidade."
  },
  {
    src: "/images/mega-4.webp",
    title: "Casas e fachadas",
    description: "Aplicações em imóveis com foco em conforto, estética e proteção."
  }
];

const hasClientVideo = existsSync(join(process.cwd(), "public/videos/video-mega.mp4"));

export default function ServicosPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
              Venda e instalação
            </p>
            <h1 className="mt-3 font-display text-6xl font-extrabold uppercase leading-none md:text-7xl">
              Películas para o seu ambiente e para o seu projeto.
            </h1>
          </div>
          <p className="text-lg leading-8 text-mega-steel">
            A MegaFilm não atua apenas com distribuição. A empresa também atende
            projetos de instalação em imóveis, lojas, casas, prédios e ambientes
            comerciais, indicando a película mais adequada para cada objetivo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card-lift border border-black/10 bg-white p-6">
                <Icon className="text-mega-red" size={32} />
                <h2 className="mt-5 font-display text-[2rem] font-bold uppercase leading-none">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-mega-steel">{service.description}</p>
              </article>
            );
          })}
        </div>

        <section id="aplicacoes" className="mt-16 scroll-mt-24">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
                Aplicações reais e referências
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-none md:text-6xl">
                Ambientes que mostram o efeito da película.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-mega-steel">
              Imagens mais próximas da aplicação real ajudam o cliente a entender
              onde a película entra: fachada, residência, prédio, loja ou ambiente interno.
            </p>
          </div>

          <div className={`grid gap-5 ${hasClientVideo ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
            <div className="grid gap-5 sm:grid-cols-2">
              {visualReferences.map((item) => (
                <article key={item.title} className="card-lift overflow-hidden border border-black/10 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-3xl font-bold uppercase leading-none">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-mega-steel">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {hasClientVideo && (
              <div className="border border-mega-ink bg-white p-4 shadow-hard">
                <video
                  className="aspect-[9/16] max-h-[720px] w-full bg-mega-ink object-cover"
                  src="/videos/video-mega.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/mega-1.jpg"
                />
              </div>
            )}
          </div>
        </section>

        <div className="mt-14 grid gap-8 border border-mega-ink bg-mega-ink p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Wrench className="text-mega-red" size={34} />
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-none">
              Quer entender qual película usar?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Envie uma mensagem com o tipo de vidro, local de instalação e objetivo:
              reduzir calor, dar privacidade, proteger ou melhorar o acabamento.
            </p>
          </div>
          <ButtonLink href={whatsappLink()} target="_blank" variant="whatsapp">
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Falar no WhatsApp
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
