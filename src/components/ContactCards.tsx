"use client";

import {
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone
} from "@tabler/icons-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

function isOpenNow(date = new Date()) {
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const current = hour * 60 + minute;

  const weekdayOpen = 8 * 60;
  const weekdayClose = 18 * 60;
  const saturdayClose = 12 * 60;

  if (day >= 1 && day <= 5) {
    return current >= weekdayOpen && current < weekdayClose;
  }

  if (day === 6) {
    return current >= weekdayOpen && current < saturdayClose;
  }

  return false;
}

const contactItems = [
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    icon: IconBrandWhatsapp
  },
  {
    label: "Televendas",
    value: site.phone,
    icon: IconPhone
  },
  {
    label: "Endereço",
    value: "Rua Rio Araguari, 285 - Atuba - Curitiba/PR",
    icon: IconMapPin
  },
  {
    label: "E-mail",
    value: site.email,
    icon: IconMail
  }
];

export function ContactCards() {
  const mapSrc =
    "https://maps.google.com/maps?q=Rua+Rio+Araguari,+285,+Atuba,+Curitiba,+PR&output=embed";
  const mapLink =
    "https://www.google.com/maps/search/?api=1&query=Rua%20Rio%20Araguari%2C%20285%2C%20Atuba%2C%20Curitiba%2C%20PR";
  const open = isOpenNow();

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <section className="card-lift rounded-md border border-black/10 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
          Contato comercial
        </p>
        <h2
          className="mt-3 font-display text-5xl font-extrabold uppercase leading-none md:text-6xl"
          data-aos="fade-right"
        >
          Fale com a MegaFilm
        </h2>
        <p className="mt-5 text-lg leading-8 text-mega-steel">
          Atendimento para orçamento de instalação, compra de películas,
          disponibilidade de produtos e indicação técnica por ambiente.
        </p>

        <div className="mt-8 grid gap-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex gap-4 rounded-md border border-black/10 bg-mega-paper p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white text-mega-red shadow-sm">
                  <Icon size={25} stroke={1.8} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-mega-red">
                    {item.label}
                  </p>
                  <p className="mt-1 break-words font-bold leading-6 text-mega-ink">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-md border border-black/10 bg-mega-ink p-4 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
            Horário de atendimento
          </p>
          <p className="mt-2 font-display text-2xl font-bold uppercase">
            Seg-Sex: 8h-18h · Sáb: 8h-12h
          </p>
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md border border-[#25D366] bg-[#25D366] px-5 py-4 text-center text-sm font-bold uppercase leading-tight tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:border-[#1EBE5D] hover:bg-[#1EBE5D]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </section>

      <section
        className="overflow-hidden rounded-md border border-mega-ink bg-mega-ink p-4 text-white shadow-hard"
        data-aos="fade-left"
      >
        <div className="flex flex-col justify-between gap-4 p-2 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-mega-red">
              Localização
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none">
              Como chegar
            </h2>
          </div>
          <span
            className={`inline-flex w-fit rounded-md px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] ${
              open ? "bg-[#25D366] text-white" : "bg-white text-mega-ink"
            }`}
          >
            {open ? "Aberto agora" : "Fechado no momento"}
          </span>
        </div>
        <iframe
          title="Mapa MegaFilm Curitiba"
          src={mapSrc}
          className="mt-4 min-h-[520px] w-full rounded-md border-0 lg:h-[calc(100%-96px)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={mapLink}
          target="_blank"
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/25 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-mega-ink"
        >
          Abrir no Google Maps
        </a>
      </section>
    </div>
  );
}
