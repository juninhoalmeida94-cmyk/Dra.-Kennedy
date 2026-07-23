export const company = {
  name: "Nome da Empresa",
  shortName: "Empresa",
  professionalName: "Especialista Responsável",
  tagline: "A sua melhor versão.",
  category: "Atendimento especializado",
  locationLabel: "Sua cidade • UF",
  contact: {
    whatsappNumber: "5500000000000",
    whatsappDisplay: "(00) 00000-0000",
    instagramHandle: "@suaempresa",
    instagramUrl: "https://www.instagram.com/",
    email: "contato@suaempresa.com.br",
  },
  address: {
    street: "Rua Exemplo, 100 – Centro",
    city: "Sua cidade",
    state: "UF",
    postalCode: "00000-000",
    country: "BR",
    mapsQuery: "Rua Exemplo, 100, Centro",
  },
  navigation: [
    ["Início", "#hero"],
    ["Sobre", "#sobre"],
    ["Especialidade", "#earshutt"],
    ["Serviços", "#procedimentos"],
    ["Galeria", "#resultados"],
    ["Contato", "#contato"],
  ],
  hero: {
    eyebrow: "ATENDIMENTO ESPECIALIZADO • SUA CIDADE • UF",
    title: "A experiência mais elegante é aquela criada especialmente para você.",
    description:
      "Soluções personalizadas para valorizar o que importa, com cuidado, segurança e excelência.",
    highlight: "Especialista em soluções personalizadas",
    primaryAction: "Agendar atendimento",
    secondaryAction: "Conhecer serviços",
    photoAlt: "Especialista responsável",
    scrollLabel: "Role",
  },
  about: {
    eyebrow: "Sobre",
    title: "Especialista Responsável",
    paragraphs: [
      "Conhecimento técnico, olhar refinado e atendimento humanizado se unem para entregar resultados seguros e alinhados à individualidade de cada cliente.",
      "Uma trajetória construída sobre cuidado, dedicação e aperfeiçoamento constante sustenta soluções personalizadas e uma experiência de alto padrão.",
    ],
    credentials: [
      "Especialista em sua área de atuação",
      "Referência em soluções personalizadas",
      "Atendimento individualizado e humanizado",
      "Serviços avançados e de alta qualidade",
    ],
  },
  services: {
    eyebrow: "Portfólio",
    title: "Serviços",
    description:
      "Cada serviço parte de uma avaliação individual, pensada para o seu objetivo e para preservar sua identidade.",
    categories: {
      principal: {
        label: "Soluções principais",
        items: [
          ["Serviço personalizado", "Uma solução planejada para suas necessidades."],
          ["Consultoria especializada", "Orientação clara para alcançar seus objetivos."],
          ["Experiência premium", "Cuidado e atenção em todos os detalhes."],
          ["Solução completa", "Acompanhamento do início ao fim."],
        ],
      },
      complementary: {
        label: "Serviços complementares",
        items: [
          ["Avaliação individual", "Análise completa e direcionada."],
          ["Planejamento", "Estratégia criada para cada cliente."],
          ["Acompanhamento", "Suporte contínuo em todas as etapas."],
          ["Atendimento exclusivo", "Tempo, privacidade e atenção individual."],
        ],
      },
      additional: {
        label: "Outras soluções",
        items: [
          ["Serviço sob medida", "Flexibilidade para diferentes objetivos."],
          ["Programa especial", "Uma jornada completa e organizada."],
          ["Atendimento recorrente", "Continuidade e evolução ao longo do tempo."],
          ["Projeto exclusivo", "Soluções combinadas para cada necessidade."],
        ],
      },
    },
  },
  gallery: {
    eyebrow: "Galeria",
    counterLabel: "Resultados",
    resultLabel: "Projeto em destaque",
    objectiveLabel: "Objetivo",
    slides: [
      ["video", "Solução personalizada", "Visão principal", "Criar uma experiência equilibrada e individual."],
      ["video", "Atendimento especializado", "Visão comparativa", "Entregar um resultado natural e consistente."],
      ["video", "Projeto completo", "Outro ângulo", "Valorizar cada detalhe de forma sutil."],
      ["image", "Experiência premium", "Antes e depois", "Unir qualidade, cuidado e equilíbrio."],
      ["video", "Solução personalizada", "Detalhe do resultado", "Aprimorar o resultado preservando a identidade."],
      ["video", "Atendimento especializado", "Nova perspectiva", "Apresentar o resultado em diferentes ângulos."],
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Quem viveu a experiência",
    items: [
      ["Atendimento cuidadoso do início ao fim. O resultado ficou exatamente como eu esperava.", "Relato ilustrativo"],
      ["Profissionalismo e atenção impecáveis. Senti segurança em cada etapa.", "Relato ilustrativo"],
      ["A experiência superou minhas expectativas. Recomendo de olhos fechados.", "Relato ilustrativo"],
    ],
    disclaimer:
      "Resultados individuais podem variar. Imagens e relatos devem ser utilizados mediante autorização dos clientes.",
  },
  faq: {
    eyebrow: "Conteúdo e orientação",
    title: "Informação para escolher com segurança",
    items: [
      ["Dúvidas frequentes", "Respostas claras sobre serviços, etapas e cuidados."],
      ["Vídeos da empresa", "Explicações profissionais sobre soluções e experiências."],
      ["Cuidados e orientações", "Informações importantes para cada etapa do atendimento."],
    ],
  },
  cta: {
    eyebrow: "Próximo passo",
    title: "Pronto para descobrir a solução ideal para você?",
    description:
      "Agende um atendimento personalizado e receba uma orientação segura para o seu caso.",
    action: "Agendar pelo WhatsApp",
  },
  footer: {
    description: "Soluções personalizadas · Atendimento especializado",
    copyright: "Todos os direitos reservados.",
    signature: "Experiência premium",
  },
  messages: {
    schedule: "Olá, gostaria de agendar um atendimento.",
    contact: "Olá, gostaria de falar com a empresa.",
    career: "Olá! Gostaria de enviar meu currículo.",
  },
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
