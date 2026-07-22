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
  subtitle: "Ecossistema multidisciplinar de soluções integradas",
  description:
    "O Grupo Azimute é um ecossistema de empresas que conecta engenharia, saneamento, tecnologia, geotecnologia e mercado imobiliário para desenvolver soluções completas para cidades, empresas, indústrias, prefeituras, construtoras e investidores.",
  status: "Planejamento Editorial",
  tags: ["Ecossistema", "Infraestrutura", "ESG", "Inovação", "Cidades"],
  accentColor: "#2D5A7B",
  positioning:
    "O Grupo Azimute deve ser comunicado como um ecossistema multidisciplinar de soluções integradas, não apenas como um conjunto de empresas. A marca vende capacidade técnica, integração, confiança, inovação, pessoas, cultura e impacto.",
  editorialObjective:
    "Posicionar o Grupo Azimute como referência em soluções integradas de engenharia, saneamento, tecnologia, geotecnologia e desenvolvimento urbano.",
  editorialMission:
    "Produzir conteúdos que eduquem, demonstrem autoridade técnica e fortaleçam a reputação do grupo, gerando confiança e oportunidades comerciais.",
  priorityAudiences: [
    "Prefeituras e órgãos públicos",
    "Construtoras e incorporadoras",
    "Indústrias e utilities",
    "Investidores e fundos",
    "Empresas de infraestrutura",
    "Comunidade técnica e acadêmica",
  ],
  contentPillars: [
    { label: "Pessoas e cultura", icon: "👥" },
    { label: "Grandes projetos", icon: "🏗️" },
    { label: "Soluções integradas", icon: "🔗" },
    { label: "Desenvolvimento urbano", icon: "🏙️" },
    { label: "Inovação e tecnologia", icon: "💡" },
    { label: "ESG e sustentabilidade", icon: "🌱" },
    { label: "Bastidores e eventos", icon: "🎬" },
    { label: "Treinamentos e capacitações", icon: "📚" },
    { label: "Datas institucionais", icon: "📅" },
  ],
  toneOfVoice: "Profissional, acolhedor, técnico, inspirador e confiável.",
  recurringThemes: [
    "Integração entre especialidades",
    "Transformação de cidades",
    "Segurança e sustentabilidade",
    "Pessoas como centro do ecossistema",
    "Inovação aplicada à infraestrutura",
  ],
  contentTypes: [
    "Posts institucionais e cultura",
    "Cases e grandes projetos",
    "Carrosséis educativos",
    "Vídeos de bastidores",
    "Stories de equipe e eventos",
    "Artigos de autoridade técnica",
  ],
  distribution: [
    { label: "Institucional e cultura", percentage: 30 },
    { label: "Soluções integradas", percentage: 25 },
    { label: "Autoridade técnica", percentage: 20 },
    { label: "Cases e projetos", percentage: 15 },
    { label: "Datas e eventos", percentage: 10 },
  ],
  keyMessages: [
    { text: "Engenharia, tecnologia e propósito conectados." },
    { text: "Soluções completas para transformar cidades e negócios." },
    { text: "Desenvolvimento com inteligência, segurança e sustentabilidade." },
    { text: "Um grupo, múltiplas especialidades, um só propósito." },
  ],
  contentIdeas: [
    { title: "Como um ecossistema integrado reduz riscos em grandes projetos" },
    { title: "O papel da engenharia consultiva no desenvolvimento urbano" },
    { title: "Pessoas por trás dos maiores projetos do grupo" },
    { title: "Sustentabilidade como pilar de decisão em infraestrutura" },
    { title: "Inovação que conecta engenharia, tech e saneamento" },
  ],
  cta: "Conheça o ecossistema Azimute e descubra como soluções integradas transformam cidades e negócios.",
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
  group: "grupo-azimute",
};

const azimuteImoveis: Playbook = {
  slug: "azimute-imoveis",
  name: "Azimute Imóveis",
  subtitle: "A imobiliária que une mercado imobiliário e inteligência técnica de engenharia",
  description:
    "A Azimute Imóveis atua em Joinville e região com compra, venda, intermediação e consultoria imobiliária. Trabalha com imóveis residenciais, apartamentos, terrenos, áreas industriais, loteamentos e oportunidades de investimento.",
  status: "Planejamento Editorial",
  tags: ["Imobiliário", "Investimento", "Joinville", "Consultoria"],
  accentColor: "#8B6914",
  positioning:
    "A imobiliária que une mercado imobiliário e inteligência técnica de engenharia.",
  editorialObjective:
    "Ser percebida como uma imobiliária consultiva, segura e estratégica, capaz de orientar decisões patrimoniais com transparência e conhecimento técnico.",
  editorialMission:
    "Educar o mercado imobiliário e construir confiança nas decisões patrimoniais dos clientes.",
  priorityAudiences: [
    "Compradores de imóveis",
    "Vendedores e proprietários",
    "Investidores imobiliários",
    "Empresas em busca de áreas industriais",
    "Famílias em busca da casa própria",
  ],
  contentPillars: [
    { label: "Compra segura", icon: "🏠" },
    { label: "Venda de imóveis", icon: "🔑" },
    { label: "Investimento imobiliário", icon: "📈" },
    { label: "Valorização patrimonial", icon: "💰" },
    { label: "Terrenos e grandes áreas", icon: "🌿" },
    { label: "Loteamentos", icon: "🏘️" },
    { label: "Imóveis no litoral", icon: "🌊" },
    { label: "Mercado imobiliário de Joinville e região", icon: "📍" },
    { label: "Permuta imobiliária", icon: "🔄" },
    { label: "Casa própria", icon: "❤️" },
  ],
  toneOfVoice: "Acolhedor, seguro, próximo, consultivo e inspirador.",
  recurringThemes: [
    "Decisões patrimoniais conscientes",
    "Segurança na negociação",
    "Mercado local de Joinville",
    "Valorização e investimento",
  ],
  contentTypes: [
    "Dicas de compra e venda",
    "Tour de imóveis",
    "Análises de mercado",
    "Stories de conquistas",
    "Carrosséis educativos",
  ],
  distribution: [
    { label: "Educação imobiliária", percentage: 35 },
    { label: "Oportunidades e imóveis", percentage: 25 },
    { label: "Mercado e investimento", percentage: 20 },
    { label: "Institucional e relacionamento", percentage: 20 },
  ],
  keyMessages: [
    { text: "Seu imóvel como decisão de futuro." },
    { text: "Comprar bem é comprar com orientação." },
    { text: "Segurança, transparência e estratégia em cada negociação." },
    { text: "O imóvel certo transforma planos em conquistas." },
  ],
  contentIdeas: [
    { title: "Como saber se um imóvel tem bom potencial de valorização?" },
    { title: "Vale a pena investir em terrenos?" },
    { title: "Como vender um imóvel com mais segurança?" },
    { title: "O que é permuta imobiliária?" },
    { title: "Por que comprar com uma imobiliária consultiva?" },
  ],
  cta: "Tome decisões patrimoniais com segurança. Fale com a Azimute Imóveis.",
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
  group: "grupo-azimute",
};

const azimuteSan: Playbook = {
  slug: "azimute-san",
  name: "Azimute San",
  subtitle: "Especialistas em infraestrutura de saneamento para cidades mais eficientes, sustentáveis e resilientes",
  description:
    "A Azimute San atua em saneamento básico, meio ambiente, planos municipais, gestão integrada de resíduos, abastecimento de água, esgotamento sanitário, drenagem urbana, manejo de águas pluviais, concessões, PPPs, estudos e projetos.",
  status: "Planejamento Editorial",
  tags: ["Saneamento", "Água", "Sustentabilidade", "Cidades", "PPP"],
  accentColor: "#1B6B7A",
  positioning:
    "Especialistas em infraestrutura de saneamento para cidades mais eficientes, sustentáveis e resilientes.",
  editorialObjective:
    "Ser lembrada como empresa técnica e estratégica para o desenvolvimento do saneamento, apoiando prefeituras, órgãos públicos e empresas com soluções sustentáveis.",
  editorialMission:
    "Educar sobre a importância do saneamento e posicionar a Azimute San como parceira técnica de transformação urbana.",
  priorityAudiences: [
    "Prefeituras e gestores públicos",
    "Companhias de saneamento",
    "Órgãos ambientais",
    "Investidores em PPPs",
    "Comunidade técnica",
  ],
  contentPillars: [
    { label: "Abastecimento de água", icon: "💧" },
    { label: "Esgotamento sanitário", icon: "🚿" },
    { label: "Drenagem urbana", icon: "🌧️" },
    { label: "Manejo de águas pluviais", icon: "☔" },
    { label: "Resíduos sólidos", icon: "♻️" },
    { label: "Planos de saneamento", icon: "📋" },
    { label: "Concessões e PPPs", icon: "🤝" },
    { label: "Redução de perdas", icon: "📉" },
    { label: "Segurança hídrica", icon: "🛡️" },
    { label: "Sustentabilidade e meio ambiente", icon: "🌱" },
    { label: "Marco Legal do Saneamento", icon: "⚖️" },
  ],
  toneOfVoice: "Técnico, responsável, sustentável, educativo e institucional.",
  recurringThemes: [
    "Qualidade de vida urbana",
    "Sustentabilidade hídrica",
    "Planejamento municipal",
    "Marco legal e compliance",
  ],
  contentTypes: [
    "Conteúdo educativo sobre saneamento",
    "Cases de projetos municipais",
    "Análises de marco legal",
    "Infográficos de impacto",
    "Posts institucionais",
  ],
  distribution: [
    { label: "Educação", percentage: 45 },
    { label: "Projetos e soluções", percentage: 20 },
    { label: "Sustentabilidade e impacto", percentage: 20 },
    { label: "Institucional", percentage: 15 },
  ],
  keyMessages: [
    { text: "Saneamento é qualidade de vida." },
    { text: "Cuidar da água é cuidar do futuro." },
    { text: "Planejamento técnico para cidades mais preparadas." },
    { text: "Soluções sustentáveis para transformar realidades." },
  ],
  contentIdeas: [
    { title: "Por que cidades precisam de Planos de Saneamento?" },
    { title: "Como reduzir perdas no abastecimento de água?" },
    { title: "Drenagem urbana e prevenção de alagamentos." },
    { title: "Gestão integrada de resíduos sólidos." },
    { title: "Saneamento como infraestrutura essencial." },
  ],
  cta: "Planeje o saneamento da sua cidade com quem entende de infraestrutura. Fale com a Azimute San.",
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

export const PLAYBOOK_SECTIONS = [
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
] as const;
