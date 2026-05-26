import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/site";

export function SolucoesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          data-aos="fade-up"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
              Soluções por demanda
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-none md:text-6xl">
              O catálogo organizado para compra profissional.
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.14em] text-mega-ink hover:text-mega-red"
          >
            Ver catálogo
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <article
                key={category.slug}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card-lift group relative overflow-hidden rounded-md border border-black/10 bg-mega-paper p-6"
              >
                <span className="pointer-events-none absolute right-4 top-2 font-display text-[5.5rem] font-light leading-none text-mega-ink/30 transition group-hover:text-mega-red/35">
                  0{index + 1}
                </span>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-mega-red shadow-sm">
                    <Icon size={32} />
                  </div>
                </div>
                <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-mega-red">
                  {category.eyebrow}
                </p>
                <h3 className="relative mt-3 font-display text-[2.45rem] font-extrabold uppercase leading-none md:text-[2.75rem]">
                  {category.title}
                </h3>
                <p className="mt-4 leading-7 text-mega-steel">{category.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-md border border-mega-red/20 bg-mega-red/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-mega-red"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
