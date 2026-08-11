export type ContentPillar = {
  label: string;
  icon?: string;
};

export type EditorialDistribution = {
  label: string;
  percentage: number;
};

export type KeyMessage = {
  text: string;
};

export type ContentIdea = {
  title: string;
};

export type Playbook = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  status: string;
  tags: string[];
  accentColor: string;
  positioning: string;
  editorialObjective: string;
  editorialMission: string;
  priorityAudiences: string[];
  contentPillars: ContentPillar[];
  toneOfVoice: string;
  recurringThemes: string[];
  contentTypes: string[];
  distribution: EditorialDistribution[];
  keyMessages: KeyMessage[];
  contentIdeas: ContentIdea[];
  cta: string;
  enabled: boolean;
  group?: string;
};

import {
  antunesComercio,
  // bridgeAgency,
  dutex,
  fenap,
  // gmex,
  injepol,
  joinsul,
  massterPlasticos,
  moramoBrasil,
  saraRapouso,
  // tudocnc,
} from "./playbooks/content/lab-clients";

const grupoAzimutePlaybook: Playbook = {
  slug: "grupo-azimute",
  name: "Grupo Azimute",
  subtitle: "Estrutura institucional que conecta competências especializadas",
  description:
    "O Grupo Azimute é a estrutura institucional que conecta empresas especializadas em engenharia, saneamento, tecnologia, captura da realidade e mercado imobiliário. Sua comunicação mostra como essas competências atuam separadamente ou se complementam diante de desafios reais.",
  status: "Planejamento Editorial",
  tags: ["Institucional", "Integração", "Infraestrutura", "Editorial"],
  accentColor: "#2D5A7B",
  positioning:
    "O Grupo Azimute é a estrutura institucional que conecta empresas especializadas em engenharia, saneamento, tecnologia, captura da realidade e mercado imobiliário. Sua comunicação mostra como essas competências atuam separadamente ou se complementam diante de desafios reais.",
  editorialObjective:
    "Tornar claro quem faz o quê dentro do Grupo e mostrar como as competências se complementam em situações reais.",
  editorialMission:
    "Tornar visível como as competências das empresas se complementam diante de problemas reais.",
  priorityAudiences: [
    "Prefeituras e órgãos públicos",
    "Construtoras e incorporadoras",
    "Indústrias e utilities",
    "Investidores e proprietários",
    "Empresas de infraestrutura",
    "Comunidade técnica",
  ],
  contentPillars: [
    { label: "Problemas reais, soluções especializadas" },
    { label: "Competências conectadas" },
    { label: "Projetos, processos e resultados" },
    { label: "Pessoas, história e cultura técnica" },
    { label: "Visão de futuro" },
  ],
  toneOfVoice: "Profissional, claro, técnico, direto e confiável.",
  recurringThemes: [
    "Quem atua em cada etapa?",
    "Antes de começar uma obra",
    "Competências que se conectam",
    "Por dentro de um projeto",
    "Decisões apoiadas por dados",
  ],
  contentTypes: [
    "Carrossel",
    "Vídeo curto",
    "Publicação estática",
    "Artigo",
    "Case",
    "Entrevista",
    "Infográfico",
  ],
  distribution: [
    { label: "Problemas reais, soluções especializadas", percentage: 30 },
    { label: "Competências conectadas", percentage: 25 },
    { label: "Projetos, processos e resultados", percentage: 25 },
    { label: "Pessoas, história e cultura técnica", percentage: 15 },
    { label: "Visão de futuro", percentage: 5 },
  ],
  keyMessages: [
    { text: "Empresas especializadas, competências que se complementam." },
    { text: "Cada desafio exige a especialidade certa." },
    { text: "Engenharia, dados e tecnologia aplicados a decisões reais." },
    { text: "A solução é executada por especialistas e fortalecida pela integração." },
  ],
  contentIdeas: [
    {
      title:
        "Uma rede não cadastrada pode paralisar uma obra: onde entram Tech, Aria e Engenharia?",
    },
    {
      title: "O que precisa ser conhecido antes de ampliar um sistema de drenagem urbana?",
    },
    {
      title:
        "Como aerolevantamento e projeto de engenharia trabalham sobre a mesma base de dados?",
    },
    {
      title: "Da inspeção ao diagnóstico: o caminho da informação antes de uma intervenção.",
    },
    {
      title:
        "Como diferentes empresas do Grupo participam do desenvolvimento de um empreendimento.",
    },
  ],
  cta: "Conheça as empresas do Grupo Azimute e identifique as competências adequadas ao seu projeto.",
  enabled: true,
  group: "grupo-azimute",
};

const azimuteEngenharia: Playbook = {
  slug: "azimute-engenharia",
  name: "Azimute Engenharia",
  subtitle: "A engenharia que reduz riscos antes da obra começar",
  description:
    "A Azimute Engenharia é a primeira empresa do Grupo Azimute, com quase 40 anos de história. Atua com projetos de engenharia, infraestrutura, transporte, topografia, urbanismo, estudos de viabilidade, aprovações, fiscalização e supervisão de obras.",
  status: "Planejamento Editorial",
  tags: ["Engenharia", "Infraestrutura", "Supervisão", "Consultoria"],
  accentColor: "#3D6B4F",
  positioning: "A engenharia que reduz riscos antes da obra começar.",
  editorialObjective:
    "Ser reconhecida como referência em engenharia consultiva, planejamento técnico e supervisão de obras.",
  editorialMission:
    "Educar o mercado sobre a importância do planejamento técnico e demonstrar autoridade em engenharia consultiva.",
  priorityAudiences: [
    "Construtoras e incorporadoras",
    "Investidores em infraestrutura",
    "Órgãos públicos",
    "Engenheiros e técnicos",
    "Gestores de obras",
  ],
  contentPillars: [
    { label: "Engenharia consultiva", icon: "📋" },
    { label: "Projetos de infraestrutura", icon: "🛤️" },
    { label: "Planejamento e viabilidade", icon: "📊" },
    { label: "Supervisão e fiscalização de obras", icon: "🔍" },
    { label: "Topografia e urbanismo", icon: "🗺️" },
    { label: "Mobilidade e transporte", icon: "🚌" },
    { label: "Grandes obras e cases", icon: "🏗️" },
    { label: "Segurança técnica e redução de riscos", icon: "🛡️" },
  ],
  toneOfVoice: "Técnico, seguro, experiente e consultivo.",
  recurringThemes: [
    "Planejamento antes da execução",
    "Redução de riscos técnicos",
    "Experiência e precisão",
    "Infraestrutura como desenvolvimento",
  ],
  contentTypes: [
    "Posts educativos técnicos",
    "Cases de grandes obras",
    "Carrosséis de processo",
    "Vídeos de supervisão",
    "Artigos de viabilidade",
  ],
  distribution: [
    { label: "Conteúdo educativo", percentage: 40 },
    { label: "Cases e projetos", percentage: 25 },
    { label: "Serviços estratégicos", percentage: 20 },
    { label: "Institucional e equipe", percentage: 15 },
  ],
  keyMessages: [
    { text: "Antes da obra, existe planejamento." },
    { text: "Engenharia que transforma ideias em projetos seguros." },
    { text: "Supervisão técnica que protege investimentos." },
    { text: "Experiência nacional com precisão local." },
  ],
  contentIdeas: [
    { title: "Por que uma obra começa muito antes do canteiro?" },
    { title: "O papel da supervisão técnica na redução de riscos." },
    { title: "Como estudos de viabilidade evitam prejuízos." },
    { title: "Infraestrutura urbana como vetor de desenvolvimento." },
    { title: "Topografia e dados técnicos na tomada de decisão." },
  ],
  cta: "Planeje com segurança. Conheça a engenharia consultiva Azimute.",
  enabled: false,
  group: "grupo-azimute",
};

const azimuteImoveis: Playbook = {
  slug: "azimute-imoveis",
  name: "Azimute Imóveis",
  subtitle: "Decisões imobiliárias com orientação, clareza e segurança",
  description:
    "A Azimute Imóveis atua de forma consultiva na compra, venda, avaliação e desenvolvimento de oportunidades imobiliárias em Joinville e região, unindo conhecimento de mercado, atendimento próximo e segurança em cada decisão.",
  status: "Planejamento Editorial",
  tags: ["Imobiliário", "Consultoria", "Joinville", "Negociação"],
  accentColor: "#8B6914",
  positioning:
    "A Azimute Imóveis atua de forma consultiva na compra, venda, avaliação e desenvolvimento de oportunidades imobiliárias, unindo conhecimento de mercado, atendimento próximo e segurança em cada decisão.",
  editorialObjective:
    "Fortalecer a percepção da Azimute Imóveis como imobiliária consultiva e ajudar compradores e vendedores a tomar decisões mais informadas.",
  editorialMission:
    "Transformar decisões imobiliárias complexas em processos mais claros, seguros e bem orientados.",
  priorityAudiences: [
    "Compradores da casa própria",
    "Vendedores e proprietários",
    "Investidores imobiliários",
    "Empresas e indústrias",
    "Proprietários de terrenos e grandes áreas",
    "Incorporadores e parceiros",
    "Famílias em mudança",
  ],
  contentPillars: [
    { label: "Decisões imobiliárias seguras" },
    { label: "Mercado, localização e oportunidades" },
    { label: "Imóveis e soluções para diferentes necessidades" },
    { label: "Processos, atendimento e resultados" },
    { label: "Investimento e desenvolvimento imobiliário" },
  ],
  toneOfVoice:
    "Próximo, consultivo, claro, seguro, transparente, conhecedor do mercado e acolhedor sem ser excessivamente emocional.",
  recurringThemes: [
    "Antes de comprar",
    "Antes de vender",
    "O olhar da avaliação",
    "Oportunidades em Joinville",
    "Decisão imobiliária sem complicação",
  ],
  contentTypes: [
    "Carrossel",
    "Vídeo curto",
    "Tour",
    "Publicação estática",
    "Artigo",
    "Depoimento",
    "Case",
    "Stories",
    "Infográfico",
  ],
  distribution: [
    { label: "Decisões imobiliárias seguras", percentage: 30 },
    { label: "Mercado, localização e oportunidades", percentage: 25 },
    { label: "Imóveis e soluções para diferentes necessidades", percentage: 20 },
    { label: "Processos, atendimento e resultados", percentage: 15 },
    { label: "Investimento e desenvolvimento imobiliário", percentage: 10 },
  ],
  keyMessages: [
    { text: "Decisões imobiliárias começam com informação." },
    { text: "Comprar ou vender exige orientação, transparência e conhecimento." },
    { text: "O imóvel certo precisa fazer sentido para a sua realidade." },
    { text: "Avaliar bem é o primeiro passo para negociar com segurança." },
  ],
  contentIdeas: [
    { title: "O que avaliar antes de visitar um imóvel?" },
    { title: "Quais informações ajudam a definir o preço de venda?" },
    { title: "Como preparar um imóvel para divulgação?" },
    { title: "Documentos que precisam ser verificados antes da compra." },
    { title: "Como funciona o atendimento consultivo da Azimute Imóveis?" },
  ],
  cta: "Fale com a Azimute Imóveis e encontre a orientação adequada para sua decisão imobiliária.",
  enabled: true,
  group: "grupo-azimute",
};

const azimuteTech: Playbook = {
  slug: "azimute-tech",
  name: "Azimute Tech",
  subtitle: "A empresa que transforma redes subterrâneas em inteligência para tomada de decisão",
  description:
    "A Azimute Tech atua com inspeção e mapeamento de redes subterrâneas por métodos não destrutivos, usando Georadar, Vídeo Inspeção Robotizada, As-Built, relatórios técnicos, plantas georreferenciadas e diagnósticos para indústrias, construtoras, companhias de saneamento e prefeituras.",
  status: "Planejamento Editorial",
  tags: ["Georadar", "Inspeção", "Subterrâneo", "Dados", "NDT"],
  accentColor: "#4A3D8F",
  positioning:
    "A empresa que transforma redes subterrâneas em inteligência para tomada de decisão.",
  editorialObjective:
    "Ser reconhecida nacionalmente como referência em diagnóstico subterrâneo, inspeção não destrutiva e inteligência técnica aplicada à infraestrutura.",
  editorialMission:
    "Demonstrar que decisões seguras começam com diagnóstico preciso do que está abaixo do solo.",
  priorityAudiences: [
    "Companhias de saneamento",
    "Indústrias e plantas",
    "Prefeituras",
    "Construtoras",
    "Gestores de infraestrutura",
  ],
  contentPillars: [
    { label: "Georadar / GPR", icon: "📡" },
    { label: "Vídeo inspeção robotizada", icon: "🤖" },
    { label: "As-Built industrial", icon: "🏭" },
    { label: "Mapeamento subterrâneo", icon: "🗺️" },
    { label: "Diagnóstico técnico", icon: "🔬" },
    { label: "Indústrias e utilities", icon: "⚡" },
    { label: "Saneamento", icon: "💧" },
    { label: "Prefeituras", icon: "🏛️" },
    { label: "Auditorias e conformidade", icon: "✅" },
    { label: "Redução de riscos e custos", icon: "📉" },
    { label: "Manutenção preventiva", icon: "🔧" },
  ],
  toneOfVoice: "Técnico, preciso, preventivo, estratégico e orientado por dados.",
  recurringThemes: [
    "Riscos invisíveis",
    "Diagnóstico antes da escavação",
    "Dados para decisão",
    "Manutenção preventiva",
  ],
  contentTypes: [
    "Posts técnicos educativos",
    "Cases de aplicação",
    "Vídeos de inspeção",
    "Infográficos de processo",
    "Relatórios resumidos",
  ],
  distribution: [
    { label: "Educação técnica", percentage: 35 },
    { label: "Problemas reais e riscos", percentage: 25 },
    { label: "Cases e aplicações", percentage: 20 },
    { label: "Tecnologia", percentage: 10 },
    { label: "Institucional", percentage: 10 },
  ],
  keyMessages: [
    { text: "Menos improviso, mais controle." },
    { text: "Antes de escavar, conheça o que está abaixo." },
    { text: "Transformamos riscos invisíveis em dados técnicos confiáveis." },
    { text: "Diagnóstico subterrâneo para decisões seguras." },
  ],
  contentIdeas: [
    { title: "Por que escavar sem mapeamento é um risco?" },
    { title: "Como o As-Built ajuda plantas industriais?" },
    { title: "Georadar: o que é e quando utilizar?" },
    { title: "Vídeo inspeção robotizada em redes de saneamento." },
    { title: "Como prefeituras reduzem custos com inspeção preventiva?" },
  ],
  cta: "Antes de escavar, conheça o subsolo. Solicite um diagnóstico Azimute Tech.",
  enabled: false,
  group: "grupo-azimute",
};

const azimuteSan: Playbook = {
  slug: "azimute-san",
  name: "Azimute SAN",
  subtitle: "Consultoria, estudos e projetos para o saneamento básico",
  description:
    "A Azimute SAN desenvolve consultoria, estudos, projetos e serviços especializados para abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos, drenagem urbana e manejo de águas pluviais.",
  status: "Planejamento Editorial",
  tags: ["Saneamento", "Água", "Esgoto", "Resíduos", "Drenagem"],
  accentColor: "#1B6B7A",
  positioning:
    "A Azimute SAN desenvolve consultoria, estudos, projetos e serviços especializados para os sistemas de abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos, drenagem urbana e manejo de águas pluviais.",
  editorialObjective:
    "Fortalecer a autoridade técnica da Azimute SAN e tornar compreensíveis os desafios e componentes do saneamento básico.",
  editorialMission:
    "Ajudar o mercado a compreender, planejar e aprimorar os sistemas que sustentam o saneamento básico das cidades.",
  priorityAudiences: [
    "Prefeituras e gestores públicos",
    "Autarquias e companhias de saneamento",
    "Consórcios e estruturas regionais",
    "Equipes técnicas e de fiscalização",
    "Empresas de infraestrutura",
    "Gestores de limpeza urbana e resíduos",
    "Comunidade técnica e acadêmica",
  ],
  contentPillars: [
    { label: "Desafios do saneamento e decisões técnicas" },
    { label: "Planejamento, estudos e projetos" },
    { label: "Sistemas de saneamento explicados" },
    { label: "Projetos, processos e resultados" },
    { label: "Políticas públicas, regulação e futuro do saneamento" },
  ],
  toneOfVoice:
    "Técnico, claro, responsável, didático, institucional, seguro e orientado à realidade pública.",
  recurringThemes: [
    "Saneamento explicado",
    "Antes de elaborar um projeto",
    "O diagnóstico revela",
    "Quatro componentes, uma cidade",
    "Decisões apoiadas por dados",
  ],
  contentTypes: [
    "Carrossel",
    "Vídeo curto",
    "Artigo",
    "Case",
    "Infográfico",
    "Publicação estática",
    "Entrevista",
    "Bastidores",
  ],
  distribution: [
    { label: "Desafios do saneamento e decisões técnicas", percentage: 30 },
    { label: "Planejamento, estudos e projetos", percentage: 25 },
    { label: "Sistemas de saneamento explicados", percentage: 20 },
    { label: "Projetos, processos e resultados", percentage: 15 },
    { label: "Políticas públicas, regulação e futuro do saneamento", percentage: 10 },
  ],
  keyMessages: [
    { text: "Planejamento técnico para decisões mais seguras no saneamento." },
    { text: "Conhecer o sistema é o primeiro passo para aprimorá-lo." },
    { text: "Água, esgoto, resíduos e drenagem exigem planejamento especializado." },
    { text: "Saneamento básico começa com diagnóstico e planejamento." },
  ],
  contentIdeas: [
    { title: "Quais são os quatro componentes do saneamento básico?" },
    { title: "Como estudos e projetos orientam investimentos em saneamento?" },
    { title: "O que diferencia diagnóstico, plano, projeto, obra e operação?" },
    { title: "O que um município precisa conhecer sobre sua drenagem urbana?" },
    { title: "O que o Marco Legal representa para o planejamento do saneamento?" },
  ],
  cta: "Converse com a Azimute SAN sobre os desafios e necessidades de saneamento do seu município ou organização.",
  enabled: true,
  group: "grupo-azimute",
};

const aria: Playbook = {
  slug: "aria",
  name: "Aria Imagem e Tecnologia",
  subtitle: "Inteligência geoespacial aplicada a projetos, obras e ativos",
  description:
    "A Aria Imagem e Tecnologia atua com aerolevantamentos, drones, topografia georreferenciada, LiDAR, RTK, escaneamento 3D, modelagem, termografia aérea, inspeções, mapeamento de precisão e monitoramento inteligente.",
  status: "Planejamento Editorial",
  tags: ["Geoespacial", "Drones", "LiDAR", "3D", "Monitoramento"],
  accentColor: "#6B3D5C",
  positioning: "Inteligência geoespacial aplicada a projetos, obras e ativos.",
  editorialObjective:
    "Ser reconhecida como empresa de tecnologia geoespacial e captura da realidade, não apenas como empresa de drones.",
  editorialMission:
    "Demonstrar que dados geoespaciais precisos elevam o nível de projetos, obras e gestão de ativos.",
  priorityAudiences: [
    "Engenheiros e projetistas",
    "Construtoras",
    "Empresas de energia solar",
    "Gestores de infraestrutura",
    "Prefeituras e smart cities",
  ],
  contentPillars: [
    { label: "Aerolevantamento com drones", icon: "🚁" },
    { label: "Topografia georreferenciada", icon: "📐" },
    { label: "LiDAR", icon: "📡" },
    { label: "RTK", icon: "📍" },
    { label: "Fotogrametria", icon: "📷" },
    { label: "Escaneamento 3D", icon: "🧊" },
    { label: "Modelagem 3D", icon: "🏗️" },
    { label: "Termografia aérea", icon: "🌡️" },
    { label: "Energia solar", icon: "☀️" },
    { label: "Infraestrutura", icon: "🛤️" },
    { label: "Cidades inteligentes", icon: "🏙️" },
    { label: "Monitoramento de obras", icon: "👁️" },
  ],
  toneOfVoice: "Tecnológico, preciso, visual, inovador e confiável.",
  recurringThemes: [
    "Captura da realidade",
    "Precisão geoespacial",
    "Tecnologia aplicada",
    "Monitoramento inteligente",
  ],
  contentTypes: [
    "Vídeos aéreos e timelapses",
    "Comparativos antes/depois",
    "Posts educativos sobre tecnologia",
    "Cases de aplicação",
    "Modelos 3D interativos",
  ],
  distribution: [
    { label: "Educação", percentage: 40 },
    { label: "Cases e aplicações", percentage: 30 },
    { label: "Tecnologia", percentage: 15 },
    { label: "Institucional", percentage: 15 },
  ],
  keyMessages: [
    { text: "Dados precisos para decisões melhores." },
    { text: "Transformamos imagens em inteligência." },
    { text: "Tecnologia que eleva o nível dos projetos." },
    { text: "Captura da realidade com precisão, agilidade e confiabilidade." },
  ],
  contentIdeas: [
    { title: "Como drones aceleram levantamentos topográficos?" },
    { title: "Termografia aérea em parques solares." },
    { title: "Escaneamento 3D para obras e ativos." },
    { title: "LiDAR e modelagem para infraestrutura." },
    { title: "Como a inteligência geoespacial apoia cidades inteligentes?" },
  ],
  cta: "Transforme imagens em inteligência. Conheça a Aria Imagem e Tecnologia.",
  enabled: false,
  group: "grupo-azimute",
};

export const playbooks: Playbook[] = [
  grupoAzimutePlaybook,
  azimuteEngenharia,
  azimuteImoveis,
  azimuteTech,
  azimuteSan,
  aria,
  massterPlasticos,
  dutex,
  saraRapouso,
  // bridgeAgency,
  injepol,
  fenap,
  moramoBrasil,
  joinsul,
  // gmex,
  // tudocnc,
  antunesComercio,
];

const playbooksBySlug = Object.fromEntries(playbooks.map((playbook) => [playbook.slug, playbook]));

export function getAllPlaybooks(): Playbook[] {
  return playbooks;
}

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooksBySlug[slug];
}

export function getPlaybooksByGroup(group: string): Playbook[] {
  return playbooks.filter((playbook) => playbook.group === group);
}

export type PlaybookSection = {
  id: string;
  label: string;
};

export const PLAYBOOK_SECTIONS: readonly PlaybookSection[] = [
  { id: "posicionamento", label: "Posicionamento" },
  { id: "objetivos-editoriais", label: "Objetivos editoriais" },
  { id: "publicos-prioritarios", label: "Públicos prioritários" },
  { id: "pilares-de-conteudo", label: "Pilares de conteúdo" },
  { id: "tom-de-voz", label: "Tom de voz" },
  { id: "temas-recorrentes", label: "Temas recorrentes" },
  { id: "tipos-de-conteudo", label: "Tipos de conteúdo" },
  { id: "distribuicao-sugerida", label: "Distribuição sugerida" },
  { id: "ideias-iniciais", label: "Ideias iniciais" },
  { id: "cta-mensagens-chave", label: "CTA e mensagens-chave" },
];
