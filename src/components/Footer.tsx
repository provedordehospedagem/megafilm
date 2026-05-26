import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { navItems, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-mega-red bg-mega-paper text-mega-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex">
            <Image src="/logo-transparent.png" alt="MegaFilm Películas" width={210} height={75} />
          </div>
          <p className="max-w-md text-base leading-7 text-mega-steel">
            Venda, distribuição e instalação de películas solares, decorativas
            e de segurança para imóveis, lojas, casas, prédios e projetos comerciais.
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-none">Mapa do site</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-mega-steel transition hover:text-mega-red">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-none">Contato comercial</h2>
          <div className="mt-5 grid gap-4 text-mega-steel">
            <a href={whatsappLink()} target="_blank" className="flex gap-3 transition hover:text-mega-red">
              <WhatsAppIcon className="mt-1 h-[18px] w-[18px] shrink-0 text-mega-red" />
              <span>{site.whatsappDisplay} / {site.phone}</span>
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-mega-red" size={18} />
              <span>{site.address}</span>
            </p>
            <p className="text-sm">Seg-Sex: 8h-18h · Sáb: 8h-12h</p>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 px-4 py-5 text-center text-sm text-mega-steel">
        © 2026 MegaFilm Películas. Venda e instalação de películas em Curitiba.
      </div>
    </footer>
  );
}
