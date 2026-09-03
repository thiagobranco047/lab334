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

const planningGrupo = {
  title: "Planejamento Estratégico",
  items: [
    "Reunião mensal de alinhamento",
    "Planejamento editorial",
    "Definição de pautas",
    "Priorização das ações do mês",
    "Organização do calendário de publicações",
    "Identificação de oportunidades de comunicação",
    "Coordenação entre as empresas do Grupo",
  ],
};

const planningEngenharia = {
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
    "Planejamento mensal",
    "Calendário editorial",
    "Reunião de alinhamento",
    "Organização das pautas",
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

const socialEssential = {
  title: "Comunicação e Redes Sociais",
  items: [
    "Produção contínua de conteúdo",
    "Desenvolvimento das pautas",
    "Pesquisa de referências",
    "Copywriting",
    "Direção criativa",
    "Criação das artes",
    "Adaptação para Instagram, Facebook, LinkedIn e Google Meu Negócio",
    "Publicação",
    "Monitoramento",
  ],
};

const audiovisualGrupo = {
  title: "Conteúdo Audiovisual",
  items: [
    "Captação mensal de fotos institucionais",
    "Captação mensal de vídeos institucionais",
    "Organização do banco de imagens",
    "Edição de vídeos para redes sociais",
    "Adequação para formatos horizontal, quadrado e vertical",
    "Inserção de legendas quando necessário",
    "Ajustes básicos de áudio",
    "Organização dos arquivos produzidos",
  ],
  note: "Não inclui motion graphics avançado, modelagem 3D, VFX ou produções audiovisuais especiais.",
};

const audiovisualEngenharia = {
  title: "Conteúdo Audiovisual",
  items: [
    "Edição de vídeos para redes sociais",
    "Adequação para formatos horizontal, quadrado e vertical",
    "Inserção de legendas quando necessário",
    "Cortes de vídeos longos",
    "Ajustes básicos de áudio",
    "Thumbnails simples",
  ],
  note: "Não inclui motion graphics avançado, modelagem 3D, VFX ou produções audiovisuais especiais.",
};

const audiovisualEssential = {
  title: "Conteúdo Audiovisual",
  items: [
    "Edição básica de vídeos para redes sociais",
    "Adequação para diferentes formatos",
    "Inserção de legendas quando necessário",
    "Pequenos cortes",
  ],
  note: "Não inclui motion graphics avançado, VFX, modelagem 3D ou produções audiovisuais especiais.",
};

const youtubeGrupo = {
  title: "Canal do YouTube",
  items: [
    "Upload dos vídeos",
    "Configuração de títulos",
    "Configuração de descrições",
    "Organização das playlists",
    "Inserção de thumbnails",
    "Organização geral do canal",
    "Publicação",
    "Atualizações quando necessárias",
  ],
};

const youtubeEngenharia = {
  title: "Canal do YouTube",
  items: [
    "Organização do canal",
    "Upload dos vídeos",
    "Configuração de títulos",
    "Configuração de descrições",
    "Tags",
    "Inserção de thumbnails",
    "Organização das playlists",
    "Publicação",
  ],
};

const podcastGrupo = {
  title: "Podcast Corporativo",
  items: [
    "1 episódio por mês",
    "Rodízio entre as empresas do Grupo",
    "Desenvolvimento da pauta",
    "Desenvolvimento do roteiro",
    "Organização da gravação",
    "Interface com o estúdio",
    "Acompanhamento da produção",
    "Publicação do episódio",
    "Desenvolvimento de cortes para redes sociais",
  ],
};

const blogGrupo = {
  title: "Blog Institucional",
  items: [
    "Gestão do blog institucional",
    "Produção de artigos institucionais",
    "Conteúdo de comunicação corporativa do Grupo",
  ],
};

const blogEngenharia = {
  title: "Blog Institucional",
  items: [
    "Gestão do blog institucional",
    "Produção de artigos técnicos",
    "Conteúdo de posicionamento em infraestrutura",
  ],
};

const websiteBlock = {
  title: "Website",
  items: [
    "Atualizações",
    "Correções",
    "Inclusão de novos conteúdos",
    "Criação de páginas institucionais simples",
  ],
  note: "Não inclui desenvolvimento de sistemas, reformulação completa do website ou integrações complexas.",
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
  title: "Gestão de Tráfego Pago",
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
    "Materiais institucionais",
    "Peças promocionais",
    "Apresentações simples",
    "Adaptações de campanhas",
  ],
  note: "Não inclui branding, identidade visual, catálogos ou projetos gráficos complexos.",
};

const serviceBlock = {
  title: "Atendimento",
  items: [
    "Atendimento recorrente",
    "Organização das demandas",
    "Reuniões de alinhamento",
    "Acompanhamento das ações do mês",
  ],
};

const youtubeEssential = {
  title: "Canal do YouTube",
  items: [
    "Suporte pontual de publicação",
    "Ajustes básicos de título e descrição",
    "Orientações para organização do canal",
  ],
  note: "Incluso parcialmente. A gestão completa do canal não faz parte do Programa Essencial.",
};

const seoEssential = {
  title: "SEO e AEO",
  items: [
    "Recomendações básicas de otimização",
    "Ajustes pontuais em títulos e descrições",
    "Orientações para estruturação de conteúdo",
  ],
  note: "Incluso parcialmente. A gestão contínua de SEO e AEO não faz parte do Programa Essencial e pode ser ampliada futuramente.",
};

const essentialBlocks: CompanyScopeData["blocks"] = [
  planningEssential,
  socialEssential,
  audiovisualEssential,
  youtubeEssential,
  seoEssential,
  creativeBlock,
  serviceBlock,
];

const essentialExclusions = [
  "Manutenção de website",
  "Gestão contínua de SEO e AEO",
  "Gestão de tráfego pago (pode ser contratada futuramente conforme campanhas específicas)",
  "Gestão completa do canal do YouTube",
  "Captação mensal de fotos e vídeos",
  "Podcast corporativo",
];

/** Imóveis e Aria: sem edição de vídeos, YouTube, SEO e AEO. */
const essentialLiteBlocks: CompanyScopeData["blocks"] = [
  planningEssential,
  socialEssential,
  creativeBlock,
  serviceBlock,
];

const essentialLiteExclusions = [
  "Edição de vídeos",
  "Gestão do canal do YouTube",
  "SEO e AEO",
  "Manutenção de website",
  "Gestão de tráfego pago (pode ser contratada futuramente conforme campanhas específicas)",
  "Captação mensal de fotos e vídeos",
  "Podcast corporativo",
];

export const grupoAzimute20260824ScopeAnnex: PresentationSlide[] = [
  {
    type: "text",
    title: "Escopo Comparativo dos Programas",
    body: "Anexo executivo para leitura rápida e comparação entre empresas. O Grupo e a Engenharia concentram a infraestrutura estratégica. No Essencial, Tech e SAN incluem YouTube, SEO, AEO e edição de vídeos de forma parcial; Imóveis e Aria operam sem esses itens.",
    showScopeLegend: true,
  },
  scope(
    "Grupo Azimute",
    "Corporativo",
    "R$ 5.000,00",
    "Concentrar a infraestrutura estratégica de comunicação do Grupo: conteúdo audiovisual, YouTube, podcast, blog institucional, SEO, AEO e gestão de tráfego, com coordenação entre as marcas.",
    channelsAll,
    [
      planningGrupo,
      socialFull,
      audiovisualGrupo,
      youtubeGrupo,
      podcastGrupo,
      blogGrupo,
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
    "Acelerar a presença digital da Azimute Engenharia com produção de conteúdo técnico, blog institucional e geração de oportunidades.",
    channelsAll,
    [
      planningEngenharia,
      socialFull,
      blogEngenharia,
      audiovisualEngenharia,
      youtubeEngenharia,
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
    "R$ 1.850,00",
    "Presença digital contínua voltada ao mercado imobiliário, com apoio a campanhas comerciais. Escopo enxuto, sem edição de vídeos, YouTube, SEO e AEO.",
    channelsAll,
    essentialLiteBlocks,
    essentialLiteExclusions
  ),
  scope(
    "Azimute Tech",
    "Essencial",
    "R$ 2.250,00",
    "Presença digital contínua com conteúdo técnico adequado ao segmento de tecnologia, mantendo o mesmo escopo operacional do Programa Essencial.",
    channelsAll,
    essentialBlocks,
    essentialExclusions
  ),
  scope(
    "Azimute SAN",
    "Essencial",
    "R$ 2.250,00",
    "Presença digital contínua com conteúdo técnico sobre saneamento e materiais institucionais, no mesmo escopo operacional do Programa Essencial.",
    channelsAll,
    essentialBlocks,
    essentialExclusions
  ),
  scope(
    "Aria",
    "Essencial",
    "R$ 1.850,00",
    "Presença digital contínua com conteúdo técnico sobre captura da realidade, topografia, Laser Scanner, LiDAR, BIM e drones. Escopo enxuto, sem edição de vídeos, YouTube, SEO e AEO.",
    channelsAll,
    essentialLiteBlocks,
    essentialLiteExclusions
  ),
  {
    type: "programComparison",
    title: "Matriz comparativa dos programas",
    body: "Tech e SAN mantêm YouTube, SEO, AEO e edição de vídeos de forma parcial. Imóveis e Aria não contemplam esses itens. A gestão completa permanece no Grupo e na Engenharia.",
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
            imoveis: excluded,
            tech: partial,
            san: partial,
            aria: excluded,
          },
        },
        {
          service: "Gestão do YouTube",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: partial,
            san: partial,
            aria: excluded,
          },
        },
        {
          service: "Captação Mensal de Fotos e Vídeos",
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
          service: "Blog Institucional",
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
          service: "Website",
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
          service: "SEO",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: partial,
            san: partial,
            aria: excluded,
          },
        },
        {
          service: "AEO",
          values: {
            grupo: included,
            engenharia: included,
            imoveis: excluded,
            tech: partial,
            san: partial,
            aria: excluded,
          },
        },
        {
          service: "Gestão de Tráfego Pago",
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
