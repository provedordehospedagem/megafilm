import { ButtonLink } from "@/components/ButtonLink";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type ProductCardProps = {
  code: string;
  name: string;
  description: string;
  application: string;
  finish: string;
  tags: string[];
  aosDelay?: number;
};

export function ProductCard({
  code,
  name,
  description,
  application,
  finish,
  tags,
  aosDelay = 0
}: ProductCardProps) {
  return (
    <article
      className="card-lift flex h-full flex-col rounded-md border border-black/10 bg-white p-6"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="bg-mega-ink px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
          {code}
        </span>
        <span className="text-right text-[0.68rem] font-bold uppercase tracking-[0.14em] text-mega-red">
          Produto sob consulta
        </span>
      </div>
      <div className="mb-5 h-24 rounded-md border border-black/10 film-sheen" aria-hidden="true" />
      <h3 className="font-display text-[2rem] font-bold uppercase leading-none md:text-3xl">
        {name}
      </h3>
      <p className="mt-4 flex-1 leading-7 text-mega-steel">{description}</p>
      <dl className="mt-5 grid gap-3 border-t border-black/10 pt-5 text-sm">
        <div>
          <dt className="font-bold uppercase tracking-[0.12em] text-mega-red">Aplicação</dt>
          <dd className="mt-1 text-mega-steel">{application}</dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-[0.12em] text-mega-red">Acabamento</dt>
          <dd className="mt-1 text-mega-steel">{finish}</dd>
        </div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-mega-paper px-3 py-2 text-xs font-bold uppercase tracking-[0.12em]"
          >
            {tag}
          </span>
        ))}
      </div>
      <ButtonLink
        href={whatsappLink(`Olá! Quero cotar: ${name}`)}
        target="_blank"
        variant="whatsapp"
        className="mt-6"
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" />
        Cotar via WhatsApp
      </ButtonLink>
    </article>
  );
}
