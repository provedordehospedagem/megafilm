import { Star } from "lucide-react";

const testimonials = [
  {
    nome: "Carlos M.",
    tipo: "Residencial",
    texto:
      "Instalação impecável na sala e nos quartos. Reduziu muito o calor da tarde sem escurecer o ambiente."
  },
  {
    nome: "Fernanda R.",
    tipo: "Comercial",
    texto:
      "Fizemos a película em toda a fachada da loja. Profissionalismo do início ao fim, entrega no prazo."
  },
  {
    nome: "Ricardo T.",
    tipo: "Residencial",
    texto:
      "Já era cliente e voltei para o segundo apartamento. Qualidade consistente e atendimento rápido pelo WhatsApp."
  }
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-mega-paper">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl reveal-up" data-aos="fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
            O que dizem nossos clientes
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none md:text-6xl">
            Quem instalou, aprovou.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.nome}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card-lift rounded-md border border-black/10 bg-white p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-mega-ink font-display text-lg font-bold text-white">
                    {initials(testimonial.nome)}
                  </div>
                  <div>
                    <h3 className="font-bold text-mega-ink">{testimonial.nome}</h3>
                    <span className="mt-1 inline-flex rounded-md bg-mega-paper px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-mega-red">
                      {testimonial.tipo}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-mega-red" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 leading-7 text-mega-steel">“{testimonial.texto}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
