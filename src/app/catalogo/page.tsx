import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo de Películas",
  description:
    "Catálogo MegaFilm com películas solares, decorativas, de segurança, instalação e produtos sob consulta em Curitiba."
};

export default function CatalogoPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
            Catálogo MegaFilm
          </p>
          <h1 className="mt-3 font-display text-6xl font-extrabold uppercase leading-none md:text-7xl">
            Películas para venda e instalação.
          </h1>
          <p className="mt-6 text-lg leading-8 text-mega-steel">
            Linhas organizadas por aplicação para facilitar orçamento, instalação,
            compra de produto e escolha técnica conforme o ambiente.
          </p>
        </div>

        <div className="mt-14 grid gap-14">
          {products.map((group) => (
            <section key={group.category} id={group.category.toLowerCase().replaceAll(" ", "-")}>
              <div className="mb-5 flex items-end justify-between border-b-4 border-mega-ink pb-4">
                <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
                  {group.category}
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {group.items.map((product, index) => (
                  <ProductCard key={product.name} {...product} aosDelay={index * 50} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
