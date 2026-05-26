import {
  IconBuilding,
  IconLayersLinked,
  IconMapPin,
  IconTools
} from "@tabler/icons-react";
import { differentiators, processSteps } from "@/lib/site";

const differentiatorIcons = [IconTools, IconMapPin, IconBuilding, IconLayersLinked];

export function DiferenciaisSection() {
  return (
    <section className="section-pad bg-mega-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div data-aos="fade-up">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
            Diferenciais comerciais
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-none md:text-6xl">
            Menos vitrine genérica. Mais decisão de compra.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            A MegaFilm orienta a escolha da película conforme o ambiente, o nível
            de privacidade desejado, a incidência solar e o acabamento esperado.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = differentiatorIcons[index];
            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="card-lift rounded-md border border-white/15 bg-white/5 p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-mega-red">
                  <Icon size={30} />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold uppercase">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mega-red">
              Como funciona
            </p>
            <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-none text-white">
              Do primeiro contato à aplicação.
            </h3>
          </div>
        </div>
        <div className="relative grid gap-4 md:grid-cols-4">
          <div className="pointer-events-none absolute left-10 right-10 top-10 hidden h-px bg-mega-red/55 md:block" />
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card-lift relative rounded-md border border-white/15 bg-white/[0.06] p-6"
            >
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mega-red font-display text-xl font-extrabold text-white shadow-[0_0_0_8px_rgba(26,26,26,0.85)]">
                  0{index + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white">
                  <step.icon size={24} />
                </div>
              </div>
              <p className="mt-6 font-bold uppercase tracking-[0.1em]">{step.title}</p>
              <p className="mt-3 text-sm leading-6 text-white/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
