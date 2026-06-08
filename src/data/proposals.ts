export type ProposalSlide = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  highlight?: string;
  type?: "cover" | "text" | "pillar" | "investment" | "cta";
};

export type Proposal = {
  slug: string;
  client: string;
  title: string;
  date: string;
  investment?: string;
  approveUrl?: string;
  pdfUrl?: string;
  slides: ProposalSlide[];
};

export const proposals: Record<string, Proposal> = {
  "azimute-engenharia": {
    slug: "azimute-engenharia",
    client: "Azimute Engenharia",
    title: "Programa de Presença Digital, Autoridade e Inteligência de Mercado",
    date: "Julho de 2025",
    investment: "R$ 4.500,00 / mês",
    approveUrl:
      "mailto:contato@lab334.com.br?subject=Aprovação%20-%20Proposta%20Azimute%20Engenharia",
    slides: [
      {
        type: "cover",
        title: "Programa de Presença Digital, Autoridade e Inteligência de Mercado",
        subtitle: "Azimute Engenharia",
        body: "Julho de 2025",
      },
      {
        type: "text",
        title: "A engenharia transforma territórios. A autoridade transforma oportunidades.",
        body: "Ao longo de mais de 39 anos, a Azimute Engenharia construiu uma história pautada pela excelência técnica, inovação e compromisso com o desenvolvimento. Hoje, além de executar grandes projetos, é necessário garantir que essa autoridade seja reconhecida e encontrada no ambiente digital.",
      },
      {
        type: "text",
        title: "O cenário está mudando",
        body: "Durante décadas, as empresas disputaram espaço nos resultados do Google. Agora, elas também disputam espaço nas respostas geradas por Inteligência Artificial.",
        bullets: [
          "Empresas de infraestrutura",
          "Projetos de acessos rodoviários",
          "Engenharia urbana",
          "Desenvolvimento territorial",
          "Supervisão de obras",
        ],
      },
      {
        type: "text",
        title: "Objetivos do projeto",
        bullets: [
          "Fortalecer o posicionamento institucional da Azimute Engenharia",
          "Aumentar a autoridade digital da marca",
          "Expandir a presença da empresa nos mecanismos de busca",
          "Consolidar a Azimute como referência em infraestrutura",
          "Gerar novas oportunidades de negócio",
          "Construir relevância em mecanismos de Inteligência Artificial",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 01",
        title: "Estratégia e Planejamento",
        bullets: [
          "Planejamento estratégico",
          "Calendário editorial mensal",
          "Definição de pautas",
          "Reuniões de alinhamento",
          "Identificação de oportunidades",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 02",
        title: "Conteúdo e Redes Sociais",
        bullets: [
          "2 publicações semanais",
          "Instagram",
          "Facebook",
          "LinkedIn",
          "Criação de artes",
          "Desenvolvimento de copies",
          "Publicação e monitoramento",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 03",
        title: "Design e Comunicação Institucional",
        bullets: [
          "Campanhas institucionais",
          "Comunicados internos",
          "Convites",
          "Materiais corporativos",
          "Apresentações comerciais",
          "Suporte criativo estratégico",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 04",
        title: "Gestão de Tráfego Pago",
        bullets: [
          "Meta Ads",
          "Google Ads",
          "Segmentação estratégica",
          "Remarketing",
          "Otimizações contínuas",
          "Relatórios de desempenho",
        ],
        highlight: "Investimento em mídia não incluso.",
      },
      {
        type: "pillar",
        eyebrow: "Pilar 05",
        title: "Website e Performance",
        bullets: [
          "Atualização de conteúdo",
          "Criação de páginas institucionais simples",
          "Melhorias de SEO",
          "Correções e ajustes",
          "Monitoramento de performance",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 06",
        title: "SEO e Autoridade Digital",
        body: "Aparecer nas buscas é importante. Ser reconhecido como referência é essencial.",
        bullets: [
          "SEO contínuo",
          "Otimização de conteúdos",
          "Estratégias de posicionamento",
          "Monitoramento de palavras-chave",
          "Estruturação de conteúdos para mecanismos de IA",
        ],
      },
      {
        type: "pillar",
        eyebrow: "Pilar 07",
        title: "Inteligência de Mercado e Presença em IA",
        bullets: [
          "Monitoramento em ChatGPT, Gemini e Perplexity",
          "Benchmark com concorrentes",
          "Evolução da autoridade digital",
          "Identificação de oportunidades de posicionamento",
        ],
        highlight: "Porque o futuro das buscas já começou.",
      },
      {
        type: "pillar",
        title: "Relatórios e Dashboard Executivo",
        bullets: [
          "Presença digital",
          "Tráfego orgânico",
          "SEO",
          "Campanhas pagas",
          "Presença em IA",
          "Evolução da autoridade digital",
          "Benchmark competitivo",
        ],
        highlight: "Transformando dados em decisões.",
      },
      {
        type: "text",
        title: "Resultados esperados",
        bullets: [
          "Fortalecimento da marca Azimute Engenharia",
          "Consolidação da autoridade técnica",
          "Crescimento da presença digital",
          "Aumento da relevância em mecanismos de busca",
          "Maior visibilidade em plataformas de IA",
          "Geração de novas oportunidades de negócio",
          "Posicionamento como referência em infraestrutura",
        ],
      },
      {
        type: "investment",
        title: "Investimento",
        subtitle: "Programa de Presença Digital, Autoridade e Inteligência de Mercado",
        highlight: "R$ 4.500,00 / mês",
        body: "Inclui todos os pilares apresentados nesta proposta. Investimento em mídia paga não incluso.",
      },
      {
        type: "cta",
        title: "Construindo o futuro com precisão",
        body: "A Azimute Engenharia já possui a experiência, a credibilidade e a capacidade técnica. Nosso papel é garantir que essa força também seja percebida, encontrada e valorizada no ambiente digital.",
        highlight: "Vamos construir essa próxima etapa juntos.",
      },
    ],
  },
};

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals[slug];
}

export function getAllProposalSlugs(): string[] {
  return Object.keys(proposals);
}
