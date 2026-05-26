import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { proofPoints, trustItems, whatsappLink } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-mega-ink text-white">
      <Image
        src="/images/mega-1.jpg"
        alt="Fachada residencial com película aplicada em grandes vidros"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 scale-[1.02] object-cover blur-[2px]"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center px-4 py-16 lg:px-8">
        <div className="max-w-4xl reveal-up">
          <span className="inline-flex rounded-md border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur">
            Películas solares em Curitiba
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-normal text-white md:text-6xl lg:text-7xl">
            Conforto, segurança e privacidade em cada vidro.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Venda e instalação de películas para casas, lojas, prédios e projetos comerciais.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink()} target="_blank" variant="primary">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Solicitar orçamento
            </ButtonLink>
            <ButtonLink
              href="/catalogo"
              variant="outline"
              className="border-mega-red bg-transparent text-mega-red hover:border-mega-red hover:bg-mega-red hover:text-white"
            >
              Catálogo de produtos
              <ArrowRight size={18} />
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white shadow-sm backdrop-blur"
              >
                <span className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-mega-red">
                  {item.label}
                </span>
                <span className="font-display text-sm font-bold uppercase leading-none">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid max-w-3xl gap-2 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/20 bg-black/25 px-3 text-center text-sm font-bold leading-tight backdrop-blur"
                >
                  <Icon size={18} className="shrink-0 text-mega-red" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-mega-red" />
    </section>
  );
}
