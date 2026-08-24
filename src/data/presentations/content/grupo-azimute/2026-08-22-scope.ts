import type { CompanyScopeData, PresentationSlide, ScopeStatus } from "../../types";

const included: ScopeStatus = "included";
const partial: ScopeStatus = "partial";
const excluded: ScopeStatus = "excluded";

function scope(
  company: string,
  program: string,
  investment: string,
  objective: string,
  channels: string[],
  blocks: CompanyScopeData["blocks"],
  exclusions?: string[]
): PresentationSlide {
  return {
    type: "companyScope",
    title: company,
    subtitle: "Anexo de escopo",
    companyScope: {
      company,
      program,
      objective,
      investment,
      channels,
      blocks,
      exclusions,
    },
  };
}

const channelsAll = ["Instagram", "Facebook", "LinkedIn", "Google Meu Negócio"];

const planningFull = {
  title: "Planejamento Estratégico",
  items: [
    "Reunião mensal de alinhamento",
    "Planejamento editorial",
    "Definição de pautas",
    "Priorização das ações do mês",
    "Organização do calendário de publicações",
    "Identificação de oportunidades de comunicação",
  ],
};

const planningEssential = {
  title: "Planejamento Estratégico",
  items: [
    "Reunião mensal de alinhamento",
    "Planejamento editorial",
    "Definição de pautas",
    "Priorização das ações do mês",
    "Organização do calendário de publicações",
  ],
};

const socialFull = {
  title: "Comunicação e Redes Sociais",
  items: [
    "Desenvolvimento das pautas",
    "Pesquisa de referências",
    "Copywriting",
    "Direção criativa",
    "Criação das artes",
    "Adaptação dos formatos por rede",
    "Agendamento",
    "Publicação",
    "Monitoramento das publicações",
  ],
};

const audiovisualFull = {
  title: "Conteúdo Audiovisual",
  items: [
    "Edição de vídeos para redes sociais",
    "Formatos horizontal, quadrado e vertical",
    "Inserção de legendas",
    "Cortes de vídeos longos",
    "Ajustes básicos de áudio",
    "Thumbnails simples",
  ],
  note: "Não inclui motion graphics avançado, modelagem 3D, VFX ou animações complexas.",
};

const audiovisualBasic = {
  title: "Conteúdo Audiovisual",
  items: [
    "Edição básica de vídeos para redes sociais",
    "Formatos horizontal, quadrado e vertical",
    "Inserção de legendas",
    "Cortes de vídeos longos",
    "Ajustes básicos de áudio",
    "Thumbnails simples",
  ],
  note: "Não inclui motion graphics avançado, modelagem 3D, VFX ou animações complexas.",
};

const websiteBlock = {
  title: "Website",
  items: [
    "Atualizações de textos",
    "Atualizações de imagens",
    "Páginas institucionais simples",
    "Correções de conteúdo",
    "Pequenos ajustes visuais",
    "Novos blocos compatíveis com a estrutura",
  ],
  note: "Não inclui novas funcionalidades, reformulação completa, integrações complexas ou sistemas.",
};

const seoBlock = {
  title: "SEO e AEO",
  items: [
    "Otimização contínua de páginas",
    "Otimização de artigos",
    "Estruturação de headings",
    "Meta Titles",
    "Meta Descriptions",
    "Links internos",
    "Melhorias de performance relacionadas ao SEO",
    "Estruturação de conteúdo para mecanismos de IA",
  ],
};

const trafficBlock = {
  title: "Tráfego Pago",
  items: [
    "Planejamento das campanhas",
    "Configuração das campanhas",
    "Meta Ads",
    "Google Ads",
    "Segmentações",
    "Remarketing",
    "Otimizações",
    "Relatórios",
  ],
  note: "O investimento em mídia não está incluso e será definido pelo cliente.",
};

const creativeBlock = {
  title: "Suporte Criativo",
  items: [
    "Convites",
    "Certificados",
    "Comunicados",
    "Apresentações simples",
    "Materiais institucionais",
    "Peças promocionais",
    "Adaptações de campanhas",
    "Materiais internos",
  ],
  note: "Não inclui catálogos complexos ou projetos editoriais extensos.",
};

const serviceBlock = {
  title: "Atendimento",
  items: [
    "Atendimento contínuo",
    "Reuniões de alinhamento",
    "Organização das demandas",
    "Acompanhamento da execução",
    "Suporte consultivo para comunicação",
  ],
};

const youtubeBlock = {
  title: "Canal do YouTube",
  items: [
    "Organização do canal",
    "Upload dos vídeos",
    "Configuração de título",
    "Descrição",
    "Tags",
    "Miniaturas simples",
    "Organização das playlists",
    "Publicação",
  ],
};

export const grupoAzimute20260822ScopeAnnex: PresentationSlide[] = [
  {
    type: "text",
    title: "Escopo Comparativo dos Programas",
    body: "Anexo executivo para leitura rápida, comparação entre empresas e impressão em PDF. A parte comercial da proposta permanece inalterada.",
    showScopeLegend: true,
  },
  scope(
    "Grupo Azimute",
    "Corporativo",
    "R$ 5.000,00",
    "Estruturar e coordenar a comunicação institucional do Grupo, fortalecendo a integração entre as empresas.",
    channelsAll,
    [
      planningFull,
      socialFull,
      audiovisualFull,
      {
        title: "Captação Mensal",
        items: [
          "Uma diária mensal de captação",
          "Fotografias institucionais",
          "Vídeos institucionais",
          "Registro de ações das empresas",
          "Banco de imagens para o mês",
        ],
      },
      {
        title: "Podcast Corporativo",
        items: [
          "1 episódio por mês",
          "Rodízio entre empresas do Grupo",
          "Desenvolvimento da pauta",
          "Desenvolvimento do roteiro",
          "Organização da gravação",
          "Interface com o estúdio",
          "Acompanhamento da produção",
          "Publicação do episódio",
          "Cortes para redes sociais",
        ],
      },
      websiteBlock,
      seoBlock,
      trafficBlock,
      creativeBlock,
      serviceBlock,
    ]
  ),
  scope(
    "Azimute Engenharia",
    "Estratégico",
    "R$ 3.750,00",
    "Comunicação contínua para posicionar a empresa como referência em infraestrutura.",
    channelsAll,
    [
      planningFull,
      socialFull,
      {
        title: "Blog e Conteúdo Técnico",
        items: [
          "Gestão do blog institucional",
          "Produção de artigos técnicos",
          "Conteúdo de posicionamento em infraestrutura",
        ],
      },
      audiovisualFull,
      youtubeBlock,
      websiteBlock,
      seoBlock,
      trafficBlock,
      creativeBlock,
      serviceBlock,
    ]
  ),
  scope(
    "Azimute Imóveis",
    "Essencial",
    "R$ 2.250,00",
    "Presença digital contínua voltada ao mercado imobiliário, com apoio a campanhas comerciais.",
    channelsAll,
    [
      planningEssential,
      {
        ...socialFull,
        items: [
          ...socialFull.items,
          "Conteúdo voltado ao mercado imobiliário",
          "Apoio às campanhas comerciais",
        ],
      },
      audiovisualBasic,
      websiteBlock,
      creativeBlock,
      serviceBlock,
    ],
    [
      "SEO e AEO",
      "Gestão contínua de mídia paga",
      "Gestão do canal do YouTube",
      "Captação mensal",
      "Podcast corporativo",
    ]
  ),
  scope(
    "Azimute Tech",
    "Estratégico",
    "R$ 3.250,00",
    "Comunicação contínua com foco em conteúdo técnico, cases e relacionamento com o mercado.",
    channelsAll,
    [
      planningFull,
      {
        ...socialFull,
        items: [
          ...socialFull.items,
          "Produção de conteúdo técnico",
          "Desenvolvimento de cases",
          "Artigos para LinkedIn",
        ],
      },
      audiovisualFull,
      youtubeBlock,
      websiteBlock,
      creativeBlock,
      serviceBlock,
    ],
    [
      "SEO e AEO (parceiro especializado atual)",
      "Gestão de tráfego pago (parceiro especializado atual)",
      "Captação mensal",
      "Podcast corporativo",
    ]
  ),
  scope(
    "Azimute SAN",
    "Essencial",
    "R$ 2.250,00",
    "Presença digital contínua com conteúdo técnico sobre saneamento e materiais institucionais.",
    channelsAll,
    [
      planningEssential,
      {
        ...socialFull,
        items: [
          ...socialFull.items,
          "Conteúdo técnico sobre saneamento",
          "Materiais institucionais",
        ],
      },
      audiovisualBasic,
      websiteBlock,
      creativeBlock,
      serviceBlock,
    ],
    [
      "SEO e AEO",
      "Gestão contínua de mídia paga",
      "Gestão do canal do YouTube",
      "Captação mensal",
      "Podcast corporativo",
    ]
  ),
  scope(
    "Aria",
    "Essencial",
    "R$ 2.250,00",
    "Presença digital contínua com conteúdo técnico sobre captura da realidade, topografia, Laser Scanner, LiDAR, BIM e drones.",
    channelsAll,
    [
      planningEssential,
      {
        ...socialFull,
        items: [
          ...socialFull.items,
          "Conteúdo técnico sobre captura da realidade",
          "Topografia, Laser Scanner, LiDAR, BIM e drones",
        ],
      },
      audiovisualBasic,
      websiteBlock,
      creativeBlock,
      serviceBlock,
    ],
    [
      "SEO e AEO",
      "Gestão contínua de mídia paga",
      "Gestão do canal do YouTube",
      "Captação mensal",
      "Podcast corporativo",
    ]
  ),
  {
    type: "programComparison",
    title: "Matriz comparativa dos programas",
    body: "Comparação imediata entre frentes de serviço e empresas do Programa Corporativo de Comunicação.",
    programComparison: {
      columns: [
        { key: "grupo", label: "Grupo" },
        { key: "engenharia", label: "Engenharia" },
        { key: "imoveis", label: "Imóveis" },
        { key: "tech", label: "Tech" },
        { key: "san", label: "SAN" },
        { key: "aria", label: "Aria" },
      ],
      rows: [
        {
          service: "Planejamento Estratégico",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Calendário Editorial",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Instagram",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Facebook",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "LinkedIn",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Google Meu Negócio",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Copywriting",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Criação das Artes",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "Edição de Vídeos",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: partial,
            tech: included,
            san: partial,
            aria: partial,
          },
        },
        {
          service: "Gestão do YouTube",
          values: {
            grupo: partial,
            engenharia: included,
            imoveis: excluded,
            tech: included,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Blog",
          values: {
            grupo: excluded,
            engenharia: included,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Artigos LinkedIn",
          values: {
            grupo: excluded,
            engenharia: excluded,
            imoveis: excluded,
            tech: included,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Captação Mensal",
          values: {
            grupo: included,
            engenharia: excluded,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Podcast Corporativo",
          values: {
            grupo: included,
            engenharia: excluded,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Website",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
        {
          service: "SEO",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "AEO",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Gestão de Tráfego",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: excluded,
            san: excluded,
            aria: excluded,
          },
        },
        {
          service: "Suporte Criativo",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: included,
            tech: included,
            san: included,
            aria: included,
          },
        },
      ],
    },
  },
];
