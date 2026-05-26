import {
  Building2,
  CheckCircle2,
  Factory,
  FileCheck2,
  MapPin,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Store,
  Wrench,
  CalendarCheck
} from "lucide-react";

export const site = {
  name: "MegaFilm Películas",
  shortName: "MegaFilm",
  phone: "(41) 3367-9685",
  whatsappDisplay: "(41) 99888-0769",
  whatsappNumber: "5541998880769",
  address: "Rua Rio Araguari, 285 - Atuba - Curitiba/PR",
  email: "comercial@megafilm.com.br",
  mapQuery: "Rua Rio Araguari, 285 Atuba Curitiba PR",
  message:
    "Olá! Gostaria de falar com a MegaFilm sobre películas e instalação."
};

export function whatsappLink(message = site.message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export const categories = [
  {
    title: "Arquitetura e Imóveis",
    slug: "arquitetura-imoveis",
    eyebrow: "Casas, lojas, prédios e fachadas",
    description:
      "Projeto, venda e instalação de películas para controle solar, segurança, privacidade e acabamento em ambientes residenciais e comerciais.",
    products: ["Residências", "Lojas", "Prédios", "Fachadas"],
    icon: Building2
  },
  {
    title: "Decorativa e Privacidade",
    slug: "decorativa-privacidade",
    eyebrow: "Vidros, divisórias e ambientes",
    description:
      "Soluções para valorizar espaços internos, reduzir visibilidade direta e criar acabamentos mais limpos em vidros e divisórias.",
    products: ["Jateada", "Privacidade", "Decorativa", "Texturizada"],
    icon: Ruler
  },
  {
    title: "Venda e Distribuição",
    slug: "venda-distribuicao",
    eyebrow: "Produtos, bobinas e reposição",
    description:
      "Fornecimento de películas e bobinas para profissionais, empresas e demandas de reposição com atendimento comercial direto.",
    products: ["Bobinas", "Controle solar", "Segurança", "Acessórios"],
    icon: Factory
  }
];

export const products = [
  {
    category: "Arquitetura e Imóveis",
    items: [
      {
        code: "ARQ-01",
        name: "Película Controle Solar",
        description:
          "Indicada para reduzir calor, luminosidade e incidência UV em casas, lojas, salas comerciais e fachadas.",
        application: "Imóveis e fachadas",
        finish: "Fumê, prata ou natural",
        tags: ["conforto térmico", "proteção UV"]
      },
      {
        code: "ARQ-02",
        name: "Película Refletiva",
        description:
          "Acabamento metalizado para maior privacidade diurna e leitura visual mais técnica em áreas envidraçadas.",
        application: "Prédios, vitrines e salas",
        finish: "Refletivo prata",
        tags: ["privacidade", "fachadas"]
      },
      {
        code: "SEG-03",
        name: "Película de Segurança",
        description:
          "Filme de proteção que ajuda a manter o vidro agregado em caso de impacto, reduzindo riscos e danos.",
        application: "Portas, vitrines e áreas críticas",
        finish: "Transparente técnico",
        tags: ["segurança", "proteção"]
      }
    ]
  },
  {
    category: "Decorativa e Privacidade",
    items: [
      {
        code: "DEC-01",
        name: "Película Jateada",
        description:
          "Visual fosco para privacidade elegante em divisórias, portas de vidro, consultórios e ambientes corporativos.",
        application: "Divisórias e portas",
        finish: "Fosco jateado",
        tags: ["privacidade", "corporativo"]
      },
      {
        code: "DEC-02",
        name: "Película Decorativa",
        description:
          "Linha para personalizar vidros e interiores com acabamento limpo, sem obra pesada e com rápida aplicação.",
        application: "Interiores e vitrines",
        finish: "Texturas e padrões",
        tags: ["decoração", "acabamento"]
      },
      {
        code: "DEC-03",
        name: "Película Privacidade",
        description:
          "Solução para controlar a visibilidade entre ambientes mantendo entrada de luz e aparência profissional.",
        application: "Escritórios e residências",
        finish: "Translúcido ou escurecido",
        tags: ["ambientes", "conforto"]
      }
    ]
  },
  {
    category: "Venda e Distribuição",
    items: [
      {
        code: "DIS-01",
        name: "Bobina Profissional",
        description:
          "Bobinas para aplicação profissional, reposição de estoque e compras comerciais sob consulta.",
        application: "Aplicadores e empresas",
        finish: "Conforme linha escolhida",
        tags: ["bobinas", "comercial"]
      },
      {
        code: "DIS-02",
        name: "Linha Alta Performance",
        description:
          "Películas com melhor desempenho para projetos que exigem conforto térmico, durabilidade e acabamento superior.",
        application: "Projetos premium",
        finish: "Solar e segurança",
        tags: ["performance", "premium"]
      },
      {
        code: "DIS-03",
        name: "Ferramentas e Acessórios",
        description:
          "Itens de apoio para instalação profissional, organização de serviço e acabamento de aplicação.",
        application: "Instalação profissional",
        finish: "Sob disponibilidade",
        tags: ["ferramentas", "aplicação"]
      }
    ]
  }
];

export const differentiators = [
  {
    title: "Venda e instalação",
    description:
      "Atendimento para quem precisa comprar película e para quem precisa instalar em imóvel, loja, casa ou prédio.",
    icon: Wrench
  },
  {
    title: "Base em Curitiba",
    description:
      "Equipe com endereço físico no Atuba para atendimento comercial, orçamento e organização de serviço.",
    icon: PackageCheck
  },
  {
    title: "Projetos comerciais",
    description:
      "Soluções para vitrines, fachadas, escritórios, salas comerciais e imóveis residenciais.",
    icon: Store
  },
  {
    title: "Linhas sob medida",
    description:
      "Controle solar, privacidade, segurança e decoração com indicação conforme o objetivo do ambiente.",
    icon: CheckCircle2
  }
];

export const proofPoints = [
  { label: "Projetos", value: "Imóveis" },
  { label: "Atuação", value: "Instalação" },
  { label: "Produtos", value: "Películas" },
  { label: "Base", value: "Curitiba" }
];

export const processSteps = [
  {
    title: "Conte o ambiente",
    description: "Informe tipo de vidro, local e objetivo do projeto.",
    icon: Ruler
  },
  {
    title: "Receba indicação",
    description: "A equipe orienta a película ideal para o uso.",
    icon: ShieldCheck
  },
  {
    title: "Aprove o orçamento",
    description: "Defina compra, instalação ou retirada de material.",
    icon: FileCheck2
  },
  {
    title: "Agende a execução",
    description: "Organize aplicação, entrega ou próximo atendimento.",
    icon: CalendarCheck
  }
];

export const trustItems = [
  { label: "Venda e instalação", icon: Wrench },
  { label: "Endereço físico no Atuba", icon: MapPin },
  { label: "Indicação por ambiente", icon: ShieldCheck }
];
