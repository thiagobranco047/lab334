export const GRUPO_AZIMUTE_SECTIONS = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "papel-do-perfil", label: "Papel do perfil" },
  { id: "arquitetura-das-empresas", label: "Arquitetura das empresas" },
  { id: "posicionamento", label: "Posicionamento editorial" },
  { id: "fase-estrategica", label: "Fase estratégica atual" },
  { id: "objetivos-editoriais", label: "Objetivos editoriais" },
  { id: "publicos", label: "Públicos e empresas" },
  { id: "criterios-de-pertencimento", label: "Critérios de pertencimento" },
  { id: "pilares-editoriais", label: "Pilares editoriais" },
  { id: "series-editoriais", label: "Séries editoriais" },
  { id: "distribuicao-sugerida", label: "Distribuição sugerida" },
  { id: "sistema-de-collabs", label: "Sistema de collabs" },
  { id: "tipos-e-formatos", label: "Tipos e formatos" },
  { id: "tom-de-voz", label: "Tom de voz" },
  { id: "modelo-de-pauta", label: "Modelo de pauta" },
  { id: "banco-de-pautas", label: "Banco de pautas" },
  { id: "cta-mensagens-chave", label: "CTAs e mensagens-chave" },
  { id: "evolucao-estrategica", label: "Evolução estratégica" },
] as const;

export type GrupoCompanyRow = {
  name: string;
  role: string;
  territory: string;
  playbookSlug: string | null;
};

export type GrupoAudienceRow = {
  audience: string;
  needs: string;
  relatedCompanies: string;
};

export type GrupoCollabRow = {
  situation: string;
  publication: string;
};

export type GrupoPillar = {
  label: string;
  percentage: number;
  description: string;
};

export type GrupoSeries = {
  title: string;
  objective: string;
  pillar: string;
  companies: string;
  formats: string;
};

export type GrupoFormat = {
  format: string;
  function: string;
};

export type GrupoPhase = {
  title: string;
  period: string;
  priorities: string[];
};

export type GrupoContentIdea = {
  title: string;
  needsConfirmation?: boolean;
};

export const grupoAzimuteContent = {
  overviewIntro:
    "Este playbook orienta a comunicação institucional do Grupo Azimute e a integração editorial entre suas empresas. Os posicionamentos, públicos, serviços e territórios específicos de cada marca são detalhados em seus respectivos playbooks.",
  overviewPoints: [
    "Por que o perfil do Grupo existe",
    "Quais conteúdos pertencem a ele",
    "Como as empresas devem aparecer",
    "Como demonstrar integração sem apagar o protagonismo de cada empresa",
    "Como construir continuidade editorial",
  ],
  editorialRule:
    "O Grupo articula e conecta. Os serviços são executados pelas empresas que o compõem e devem ser atribuídos nominalmente a elas.",
  profileRole:
    "Tornar visível como as competências das empresas se complementam diante de problemas reais.",
  profileShould: [
    "Articular as competências das empresas do ecossistema",
    "Fortalecer a reputação institucional",
    "Apresentar integrações legítimas",
    "Mostrar projetos relevantes para o ecossistema",
    "Comunicar história, cultura e visão de futuro",
    "Direcionar o público para a empresa adequada",
  ],
  profileShouldNot: [
    "Assumir genericamente a execução dos serviços",
    "Reproduzir pautas comerciais específicas",
    "Repetir conteúdos dos perfis individuais sem contexto",
    "Publicar datas setoriais sem relação institucional legítima",
    'Usar "soluções integradas" sem explicar quais empresas participam e o que cada uma entrega',
  ],
  companies: [
    {
      name: "Azimute Engenharia",
      role: "Planejamento, projetos, gerenciamento, supervisão e soluções técnicas",
      territory: "Engenharia e infraestrutura",
      playbookSlug: "azimute-engenharia",
    },
    {
      name: "Azimute SAN",
      role: "Consultoria, estudos, projetos e serviços especializados",
      territory: "Saneamento básico",
      playbookSlug: "azimute-san",
    },
    {
      name: "Azimute Tech",
      role: "Investigação, inspeção e diagnóstico tecnológico",
      territory: "Tecnologias aplicadas à infraestrutura",
      playbookSlug: "azimute-tech",
    },
    {
      name: "Aria",
      role: "Captura, processamento e representação técnica da realidade",
      territory: "Aerolevantamento, topografia, escaneamento e modelagem 3D",
      playbookSlug: "aria",
    },
    {
      name: "Azimute Imóveis",
      role: "Consultoria e intermediação imobiliária",
      territory: "Compra, venda, avaliação e desenvolvimento imobiliário",
      playbookSlug: "azimute-imoveis",
    },
    {
      name: "Grupo Azimute",
      role: "Articulação institucional das competências",
      territory: "Integração, reputação, cultura e visão estratégica",
      playbookSlug: null,
    },
  ] satisfies GrupoCompanyRow[],
  positioning:
    "O Grupo Azimute é a estrutura institucional que conecta empresas especializadas em engenharia, saneamento, tecnologia, captura da realidade e mercado imobiliário. Sua comunicação mostra como essas competências atuam separadamente ou se complementam diante de desafios reais.",
  positioningNotes: [
    "Cada desafio deve ser relacionado à especialidade correta",
    "O Grupo fortalece a integração; a execução pertence às empresas",
    "A comunicação precisa mostrar situações reais, contribuições e benefícios",
  ],
  currentPhase: {
    title: "Restante de 2026 — clareza e reconhecimento",
    priorities: [
      "Explicar quais empresas formam o Grupo",
      "Mostrar o que cada uma faz",
      "Relacionar competências a problemas reais",
      "Demonstrar integrações de maneira compreensível",
      "Corrigir a percepção de que o Grupo executa todos os serviços",
      "Fortalecer o reconhecimento das marcas individuais",
    ],
  },
  editorialObjectives: [
    "Tornar claro quem faz o quê dentro do Grupo",
    "Mostrar como as competências se complementam em situações reais",
    "Comprovar capacidade por meio de projetos, equipes, processos e resultados",
    "Construir gradualmente uma visão própria sobre infraestrutura, cidades, tecnologia e desenvolvimento",
  ],
  audiences: [
    {
      audience: "Prefeituras e órgãos públicos",
      needs: "Planejar, contratar e fiscalizar soluções com segurança técnica",
      relatedCompanies: "Engenharia, SAN, Tech e Aria",
    },
    {
      audience: "Construtoras e incorporadoras",
      needs: "Reduzir incertezas, compatibilizar informações e viabilizar projetos",
      relatedCompanies: "Engenharia, Tech, Aria e Imóveis",
    },
    {
      audience: "Indústrias e utilities",
      needs: "Conhecer ativos, manter operações e planejar intervenções",
      relatedCompanies: "Engenharia, Tech e Aria",
    },
    {
      audience: "Investidores e proprietários",
      needs: "Avaliar oportunidades e tomar decisões imobiliárias seguras",
      relatedCompanies: "Imóveis e Engenharia",
    },
    {
      audience: "Empresas de infraestrutura",
      needs: "Obter dados, projetos e apoio técnico confiável",
      relatedCompanies: "Engenharia, SAN, Tech e Aria",
    },
    {
      audience: "Comunidade técnica",
      needs: "Acessar conhecimento, métodos, aplicações e experiências",
      relatedCompanies: "Empresas relacionadas ao assunto",
    },
  ] satisfies GrupoAudienceRow[],
  belongsWhen: [
    "Envolve duas ou mais empresas",
    "Demonstra complementaridade",
    "Apresenta um projeto relevante para o ecossistema",
    "Trata de cultura, história ou posicionamento institucional",
    "Mostra a importância de uma empresa para a capacidade do conjunto",
    "Aborda uma visão transversal sobre infraestrutura, cidades, tecnologia ou desenvolvimento",
    "Fortalece a percepção de atuação multidisciplinar ou nacional",
  ],
  staysIndividualWhen: [
    "Explica exclusivamente um serviço",
    "Possui objetivo comercial específico",
    "Interessa predominantemente ao público de uma empresa",
    "Apresenta uma aplicação técnica sem relação institucional",
    "Não possui integração ou contexto legítimo para o Grupo",
  ],
  belongingRule:
    "Se não for possível explicar por que a pauta pertence ao Grupo e qual empresa executa a solução, o conteúdo deve ser revisto ou direcionado ao perfil individual.",
  pillars: [
    {
      label: "Problemas reais, soluções especializadas",
      percentage: 30,
      description:
        "Conteúdos que começam por uma situação concreta e apresentam nominalmente a empresa que atua nela.",
    },
    {
      label: "Competências conectadas",
      percentage: 25,
      description:
        "Integrações reais entre duas ou mais empresas, explicando a contribuição específica de cada uma.",
    },
    {
      label: "Projetos, processos e resultados",
      percentage: 25,
      description:
        "Cases, entregas, etapas, dados, tecnologias empregadas, alcance, bastidores técnicos e aprendizados.",
    },
    {
      label: "Pessoas, história e cultura técnica",
      percentage: 15,
      description:
        "Equipes, trajetória, capacitação e conhecimento acumulado, sempre relacionados à capacidade técnica.",
    },
    {
      label: "Visão de futuro",
      percentage: 5,
      description:
        "Análises sobre infraestrutura, cidades, saneamento, digitalização, inteligência territorial e inovação aplicada.",
    },
  ] satisfies GrupoPillar[],
  pillarsNote:
    "Temas como ESG, inovação, desenvolvimento urbano, treinamentos, eventos e datas institucionais não são pilares isolados. Funcionam como assuntos ou formatos dentro dos pilares adequados.",
  distributionNote:
    "Em 2027, o percentual de projetos, processos e resultados poderá crescer conforme aumente a disponibilidade de cases, indicadores e materiais reais.",
  series: [
    {
      title: "Quem atua em cada etapa?",
      objective: "Mostrar papéis ao longo de um fluxo de projeto",
      pillar: "Competências conectadas",
      companies: "Duas ou mais, conforme a etapa",
      formats: "Carrossel, infográfico",
    },
    {
      title: "Antes de começar uma obra",
      objective: "Antecipar riscos e decisões técnicas",
      pillar: "Problemas reais, soluções especializadas",
      companies: "Engenharia, Tech, Aria, SAN",
      formats: "Carrossel, vídeo curto, artigo",
    },
    {
      title: "O problema que os dados revelaram",
      objective: "Partir de evidência para decisão",
      pillar: "Projetos, processos e resultados",
      companies: "Tech, Aria, Engenharia",
      formats: "Case, carrossel, artigo",
    },
    {
      title: "Competências que se conectam",
      objective: "Explicar integrações reais entre empresas",
      pillar: "Competências conectadas",
      companies: "Duas ou mais participantes",
      formats: "Carrossel, vídeo, infográfico",
    },
    {
      title: "Por dentro de um projeto",
      objective: "Abrir etapas, processos e bastidores técnicos",
      pillar: "Projetos, processos e resultados",
      companies: "Empresa responsável + complementares",
      formats: "Case, vídeo, carrossel",
    },
    {
      title: "Azimute em campo",
      objective: "Mostrar atuação prática e presença técnica",
      pillar: "Pessoas, história e cultura técnica",
      companies: "Empresa em campo",
      formats: "Vídeo curto, stories, estático",
    },
    {
      title: "Especialistas explicam",
      objective: "Atribuir conhecimento a pessoas e empresas",
      pillar: "Pessoas, história e cultura técnica",
      companies: "Empresa do especialista",
      formats: "Entrevista, vídeo, artigo",
    },
    {
      title: "Onde cada empresa entra",
      objective: "Mapear contribuições em um desafio",
      pillar: "Competências conectadas",
      companies: "Todas as envolvidas",
      formats: "Infográfico, carrossel",
    },
    {
      title: "Projetos pelo Brasil",
      objective: "Demonstrar alcance e diversidade de atuação",
      pillar: "Projetos, processos e resultados",
      companies: "Empresa do projeto",
      formats: "Case, estático, carrossel",
    },
    {
      title: "Decisões apoiadas por dados",
      objective: "Mostrar como informação técnica orienta escolhas",
      pillar: "Problemas reais, soluções especializadas",
      companies: "Tech, Aria, Engenharia, SAN",
      formats: "Artigo, carrossel, case",
    },
  ] satisfies GrupoSeries[],
  collabs: [
    {
      situation: "Serviço específico",
      publication: "Perfil da empresa responsável",
    },
    {
      situation: "Projeto institucionalmente relevante de uma empresa",
      publication: "Empresa + Grupo",
    },
    {
      situation: "Integração entre duas ou mais empresas",
      publication: "Grupo + empresas participantes",
    },
    {
      situation: "Case técnico aprofundado",
      publication: "Empresa responsável",
    },
    {
      situation: "História ou cultura do ecossistema",
      publication: "Grupo",
    },
    {
      situation: "Data profissional ou setorial",
      publication: "Empresa diretamente relacionada",
    },
    {
      situation: "Posicionamento institucional transversal",
      publication: "Grupo",
    },
  ] satisfies GrupoCollabRow[],
  collabsNote:
    "Collabs devem refletir participação verdadeira no assunto e não apenas aumentar alcance.",
  formats: [
    { format: "Carrossel", function: "Explicar processos, etapas e integrações" },
    { format: "Vídeo curto", function: "Apresentar especialistas, bastidores e situações práticas" },
    {
      format: "Publicação estática",
      function: "Comunicar mensagens objetivas, dados ou marcos",
    },
    { format: "Artigo", function: "Aprofundar conhecimento técnico ou posicionamento" },
    { format: "Case", function: "Comprovar capacidade por meio de uma entrega real" },
    { format: "Entrevista", function: "Atribuir conhecimento às pessoas e empresas" },
    {
      format: "Infográfico",
      function: "Organizar fluxos, dados ou papéis complementares",
    },
  ] satisfies GrupoFormat[],
  toneAttributes: "Profissional, claro, técnico, claro e confiável.",
  toneRules: [
    "Abrir com situações reconhecíveis, não com slogans",
    "Trabalhar um assunto principal por publicação",
    "Explicar termos técnicos quando necessário",
    "Identificar nominalmente a empresa executora",
    "Explicar o papel de cada empresa quando houver integração",
    "Evitar frases grandiosas, abstratas ou enigmáticas",
    "Evitar títulos artificiais construídos com dois-pontos",
    'Não usar "soluções completas" ou "soluções integradas" sem explicar quais são',
    "Priorizar verbos concretos: mapear, investigar, projetar, analisar, inspecionar, supervisionar",
    "Utilizar dados, projetos e evidências quando estiverem disponíveis",
    "Terminar com CTA direto e afirmativo",
    "Adaptar hashtags ao assunto de cada publicação",
    "Evitar homenagens ou datas comemorativas sem conexão estratégica",
    "Não apresentar o Grupo como executor genérico",
  ],
  preferExamples: [
    "Antes da escavação, a Azimute Tech investiga interferências subterrâneas.",
    "A Aria captura a realidade do terreno; a Engenharia projeta a partir desses dados.",
  ],
  avoidExamples: [
    "Soluções integradas para transformar cidades e negócios.",
    "Um grupo, múltiplas especialidades, um só propósito.",
  ],
  narrativeModel: [
    "Situação concreta ou dor",
    "Consequência da situação",
    "Empresa responsável",
    "Solução ou atuação",
    "Integração, quando houver",
    "Benefício produzido",
    "CTA direto",
  ],
  narrativeExample:
    "Uma escavação pode encontrar redes que não aparecem nos cadastros disponíveis, provocando paralisações, retrabalho e riscos à operação.\n\nA Azimute Tech utiliza o GPR para investigar interferências subterrâneas antes da intervenção. Quando os dados precisam ser incorporados ao projeto, a empresa responsável pela etapa complementar deve ser identificada e sua contribuição explicada claramente.\n\nEssa integração transforma o que estava oculto em informação técnica para decisões mais seguras.\n\nConheça as empresas do Grupo Azimute e identifique as competências adequadas ao seu projeto.",
  briefFields: [
    "Título ou assunto",
    "Objetivo estratégico",
    "Pilar editorial",
    "Série editorial",
    "Público prioritário",
    "Problema ou situação real",
    "Empresa executora",
    "Empresas complementares",
    "Contribuição de cada empresa",
    "Solução abordada",
    "Prova ou referência disponível",
    "Mensagem principal",
    "Formato",
    "CTA",
    "Perfis participantes da collab",
    "Canal de publicação",
  ],
  briefRule:
    "A pauta não deve avançar enquanto empresa executora, objetivo e justificativa de pertencimento ao Grupo não estiverem claros.",
  contentIdeas: [
    {
      title:
        "Uma rede não cadastrada pode paralisar uma obra: onde entram Tech, Aria e Engenharia?",
      needsConfirmation: true,
    },
    {
      title: "O que precisa ser conhecido antes de ampliar um sistema de drenagem urbana?",
      needsConfirmation: true,
    },
    {
      title:
        "Como aerolevantamento e projeto de engenharia trabalham sobre a mesma base de dados?",
      needsConfirmation: true,
    },
    {
      title: "Da inspeção ao diagnóstico: o caminho da informação antes de uma intervenção.",
    },
    {
      title:
        "Como diferentes empresas do Grupo participam do desenvolvimento de um empreendimento.",
      needsConfirmation: true,
    },
    {
      title: "Por que um modelo 3D confiável começa com uma captura precisa da realidade.",
    },
    {
      title:
        "O que a supervisão técnica identifica antes que um desvio se transforme em retrabalho.",
    },
    {
      title: "Como dados de campo se transformam em decisões de projeto.",
      needsConfirmation: true,
    },
    {
      title: "Um projeto em diferentes etapas: quem atua e o que entrega.",
      needsConfirmation: true,
    },
    {
      title: "Como o Grupo mantém capacidade técnica em projetos realizados pelo Brasil.",
      needsConfirmation: true,
    },
  ] satisfies GrupoContentIdea[],
  ideasNote:
    "Banco inicial de pautas — não são afirmações de cases já realizados. Quando a pauta exigir confirmação técnica ou comprovação, o desenvolvimento depende de informações fornecidas pelas empresas.",
  keyMessages: [
    "Empresas especializadas, competências que se complementam.",
    "Cada desafio exige a especialidade certa.",
    "Engenharia, dados e tecnologia aplicados a decisões reais.",
    "Diferentes competências conectadas ao longo de um projeto.",
    "Conhecimento técnico para compreender, planejar e transformar.",
    "A solução é executada por especialistas e fortalecida pela integração.",
  ],
  primaryCta:
    "Conheça as empresas do Grupo Azimute e identifique as competências adequadas ao seu projeto.",
  ctaVariations: [
    { intent: "Conhecer as empresas", text: "Conheça as empresas do Grupo Azimute." },
    {
      intent: "Entender uma competência",
      text: "Entenda a competência adequada ao seu desafio.",
    },
    {
      intent: "Conversar sobre um projeto",
      text: "Converse com a equipe sobre o seu projeto.",
    },
    {
      intent: "Acessar um playbook individual",
      text: "Acesse o playbook da empresa relacionada.",
    },
    { intent: "Conhecer um case", text: "Conheça um projeto e sua entrega técnica." },
    {
      intent: "Acompanhar conteúdos técnicos",
      text: "Acompanhe os conteúdos técnicos do Grupo Azimute.",
    },
  ],
  evolution: [
    {
      title: "Clareza e reconhecimento",
      period: "Restante de 2026",
      priorities: [
        "Explicar as empresas e suas competências",
        "Relacionar serviços a problemas reais",
        "Mostrar integrações compreensíveis",
        "Organizar a percepção do mercado",
      ],
    },
    {
      title: "Autoridade e comprovação",
      period: "2027",
      priorities: [
        "Ampliar a presença de cases",
        "Apresentar especialistas",
        "Mostrar processos e bastidores técnicos",
        "Utilizar dados e indicadores",
        "Demonstrar alcance geográfico",
        "Criar conteúdos assinados",
        "Desenvolver séries recorrentes",
        "Fortalecer integrações comerciais legítimas",
      ],
    },
    {
      title: "Liderança de pensamento",
      period: "Após 2027",
      priorities: [
        "Produzir estudos proprietários",
        "Publicar análises de mercado",
        "Discutir tendências técnicas",
        "Construir posicionamentos institucionais",
        "Abordar o futuro da infraestrutura, do saneamento, das cidades e da tecnologia",
        "Desenvolver materiais ricos e conteúdos de referência",
      ],
    },
  ] satisfies GrupoPhase[],
} as const;
