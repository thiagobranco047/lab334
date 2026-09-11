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
  calendarUrl?: string;
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
  accentColor: "#313131",
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
  calendarUrl:
    "https://drive.google.com/drive/folders/1MJqEP2PKc0pdNmEhX1ksk-QrNWaEcX7M?usp=drive_link",
};

const azimuteEngenharia: Playbook = {
  slug: "azimute-engenharia",
  name: "Azimute Engenharia",
  subtitle:
    "Consultoria e projetos de engenharia de infraestrutura, do estudo à supervisão",
  description:
    "Fundada em 1987, a Azimute Engenharia é a empresa fundadora do Grupo Azimute. Atua com consultoria e projetos de infraestrutura, engenharia de transportes, topografia aplicada ao projeto, urbanismo, regularização, fiscalização e supervisão de obras para organizações públicas e privadas.",
  status: "Planejamento Editorial",
  tags: ["Engenharia", "Infraestrutura", "Transportes", "Supervisão"],
  accentColor: "#50A275",
  positioning:
    "Consultoria e projetos de engenharia de infraestrutura para desafios complexos, com precisão, responsabilidade e parceria estratégica.",
  editorialObjective:
    "Gerar consideração e conversa comercial junto ao ICP, fortalecendo a autoridade da Azimute Engenharia em infraestrutura.",
  editorialMission:
    "Ajudar o mercado a reconhecer problemas de infraestrutura e a enxergar o papel da empresa na solução, do estudo preliminar à fiscalização.",
  priorityAudiences: [
    "Concessionárias de rodovias, ferrovias e saneamento",
    "Indústrias e grandes plantas",
    "Construtoras, loteadoras e incorporadoras",
    "Portos, terminais e operadores de infraestrutura",
    "Prefeituras e órgãos públicos",
    "Gestores de engenharia, expansão e obras",
  ],
  contentPillars: [
    { label: "Dores, soluções e oportunidades" },
    { label: "Educação técnica para decisão" },
    { label: "Autoridade, cases e evidências" },
    { label: "Pessoas, campo e cultura técnica" },
    { label: "Tecnologia aplicada ao projeto" },
  ],
  toneOfVoice:
    "Profissional, técnico e humanizado; claro, objetivo e orientado à solução e ao impacto prático.",
  recurringThemes: [
    "Antes da obra começar",
    "Regularizar o acesso",
    "Supervisão que protege o investimento",
    "Infraestrutura industrial",
    "Do estudo à fiscalização",
  ],
  contentTypes: [
    "Reels / vídeo curto",
    "Carrossel",
    "Artigo / LinkedIn",
    "Case",
    "Podcast e cortes",
    "Bastidores",
  ],
  distribution: [
    { label: "Dores, soluções e oportunidades", percentage: 30 },
    { label: "Educação técnica para decisão", percentage: 25 },
    { label: "Autoridade, cases e evidências", percentage: 20 },
    { label: "Pessoas, campo e cultura técnica", percentage: 15 },
    { label: "Tecnologia aplicada ao projeto", percentage: 10 },
  ],
  keyMessages: [
    { text: "Agregando valor aos projetos dos clientes com experiência, responsabilidade e tecnologia." },
    { text: "Tecnologia, precisão e parceria estratégica para desafios complexos." },
    { text: "Do estudo preliminar à supervisão, a Engenharia acompanha o empreendimento." },
    { text: "Antes da obra, existem projeto, regularização e decisão técnica." },
  ],
  contentIdeas: [
    { title: "O que precisa estar regularizado antes de liberar um acesso rodoviário?" },
    { title: "Por que uma obra de infraestrutura começa muito antes do canteiro?" },
    { title: "O papel da supervisão técnica na redução de desvios e custos evitáveis." },
    { title: "O que integrar em um projeto de expansão industrial além da terraplanagem?" },
    { title: "O que um contratante deve exigir no escopo além do preço?" },
  ],
  cta: "Converse com a Azimute Engenharia sobre o acesso, o projeto ou a supervisão do seu empreendimento.",
  enabled: true,
  group: "grupo-azimute",
  calendarUrl:
    "https://drive.google.com/drive/folders/1krfSP8PyDfqk4yCEqGDYx6duBg4SEiDI?usp=drive_link",
};

const azimuteImoveis: Playbook = {
  slug: "azimute-imoveis",
  name: "Azimute Imóveis",
  subtitle: "Decisões imobiliárias com orientação, avaliação técnica e segurança",
  description:
    "A Azimute Imóveis nasceu em 2011 da experiência da Engenharia e atua de forma consultiva na compra, venda, avaliação e desenvolvimento de oportunidades em Joinville e região. Comunica viabilidade, EIV e avaliação segundo a NBR 14653; a execução de engenharia, licenciamento e obra permanece nas empresas especializadas.",
  status: "Planejamento Editorial",
  tags: ["Imobiliário", "Consultoria", "Avaliação", "EIV", "Joinville"],
  accentColor: "#1E5285",
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
    "Operadores de saneamento e infraestrutura",
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
    "O que o EIV revela",
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
    { text: "Avaliação técnica e leitura de vizinhança para decisões patrimoniais mais seguras." },
    { text: "A Imóveis articula a decisão; a execução técnica pertence à empresa especializada." },
  ],
  contentIdeas: [
    { title: "O que avaliar antes de visitar um imóvel?" },
    { title: "Como a NBR 14653 organiza a determinação técnica do valor de um imóvel?" },
    { title: "O que um EIV precisa esclarecer antes de implantar um empreendimento?" },
    { title: "Quais informações precisam ser conhecidas antes de analisar uma oportunidade de investimento?" },
    { title: "O que muda quando a avaliação de uma área serve a um traçado de saneamento?" },
  ],
  cta: "Fale com a Azimute Imóveis e encontre a orientação adequada para sua decisão imobiliária.",
  enabled: true,
  group: "grupo-azimute",
  calendarUrl:
    "https://drive.google.com/drive/folders/1BmeEK4D6kjL3gibnn6NAEx36AocW0Vg8?usp=drive_link",
};

const azimuteTech: Playbook = {
  slug: "azimute-tech",
  name: "Azimute Tech",
  subtitle: "Parceira de engenharia, diagnóstico e gestão de infraestruturas subterrâneas",
  description:
    "A Azimute Tech transforma o que está sob a superfície em dados técnicos confiáveis. Atua com georadar, televisionamento, cadastro e As-Built em GIS, testes de fumaça e corante e relatórios com ART para operação, obras, manutenção e conformidade.",
  status: "Planejamento Editorial",
  tags: ["Georadar", "Televisionamento", "Subterrâneo", "Diagnóstico", "NDT"],
  accentColor: "#E2243D",
  positioning: "Transformamos o que está sob a superfície em dados técnicos confiáveis.",
  editorialObjective:
    "Ampliar a percepção da marca de empresa que inspeciona para parceira de engenharia, diagnóstico e gestão subterrânea.",
  editorialMission:
    "Conduzir o público do risco oculto à decisão segura, com evidência técnica, diagnóstico e priorização.",
  priorityAudiences: [
    "Concessionárias de saneamento",
    "Diretores e gerentes de operações",
    "Construtoras, incorporadoras e engenheiros de obras",
    "Indústrias de grande porte, energia, mineração e logística",
    "Órgãos públicos e prefeituras",
    "Integradores de MND e empresas de perfuração direcional",
  ],
  contentPillars: [
    { label: "Educar" },
    { label: "Evidenciar" },
    { label: "Tranquilizar" },
    { label: "Valorizar" },
  ],
  toneOfVoice:
    "Técnica, mas acessível; consultiva, segura, objetiva e baseada em situações reais de engenharia e operação.",
  recurringThemes: [
    "Risco oculto",
    "Qual método usar?",
    "Do campo ao diagnóstico",
    "Antes de perfurar ou escavar",
    "Relatório que decide",
  ],
  contentTypes: [
    "Carrossel",
    "Vídeo curto",
    "Artigo",
    "Case",
    "Infográfico",
    "Bastidores",
    "Trecho de relatório",
  ],
  distribution: [
    { label: "Educar", percentage: 30 },
    { label: "Evidenciar", percentage: 25 },
    { label: "Tranquilizar", percentage: 25 },
    { label: "Valorizar", percentage: 20 },
  ],
  keyMessages: [
    { text: "Transformamos o que está sob a superfície em dados técnicos confiáveis." },
    { text: "A Azimute Tech não entrega apenas inspeção: entrega diagnóstico para decidir." },
    { text: "Risco oculto, evidência técnica, diagnóstico, priorização e decisão segura." },
    { text: "Menos improviso, mais rastreabilidade." },
  ],
  contentIdeas: [
    { title: "Como os dados de campo se transformam em diagnóstico técnico?" },
    { title: "Como escolher a metodologia adequada ao problema da rede?" },
    { title: "Como comparar propostas além do preço?" },
    { title: "Quando o televisionamento é o método certo para a rede?" },
    { title: "Por que o relatório com ART é um entregável de engenharia?" },
  ],
  cta: "Apresente o problema à equipe técnica da Azimute Tech.",
  enabled: true,
  group: "grupo-azimute",
  calendarUrl:
    "https://drive.google.com/drive/folders/1K2ld7IwPZdcp0hU8CwC2ZyjD-_7dmVXU?usp=drive_link",
};

const azimuteSan: Playbook = {
  slug: "azimute-san",
  name: "Azimute SAN",
  subtitle: "Estudos, projetos e apoio técnico para universalizar o saneamento",
  description:
    "A Azimute SAN, constituída em 2020, desenvolve consultoria, estudos e projetos para água, esgoto, resíduos e drenagem. Também apoia concessões e PPPs e atua em controle de perdas e pesquisa de vazamentos para companhias, indústrias e condomínios.",
  status: "Planejamento Editorial",
  tags: ["Saneamento", "Água", "Esgoto", "PPP", "Perdas"],
  accentColor: "#0086C8",
  positioning:
    "A Azimute SAN desenvolve consultoria, estudos, projetos e serviços especializados para os sistemas de abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos, drenagem urbana e manejo de águas pluviais.",
  editorialObjective:
    "Fortalecer a autoridade técnica da Azimute SAN e tornar compreensíveis os desafios e componentes do saneamento básico.",
  editorialMission:
    "Ajudar o mercado a compreender, planejar e aprimorar os sistemas que sustentam o saneamento básico das cidades.",
  priorityAudiences: [
    "Prefeituras e gestores públicos",
    "Autarquias e companhias de saneamento",
    "Concessionárias, consórcios e estruturas de PPP",
    "Indústrias e condomínios",
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
    "Concessão com lastro técnico",
    "Perdas além da procura",
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
    { text: "Concessões e PPPs precisam de lastro técnico, não só de modelo jurídico." },
    { text: "Controlar perdas começa por conhecer o sistema, não por prometer redução." },
  ],
  contentIdeas: [
    { title: "Quais são os quatro componentes do saneamento básico?" },
    { title: "Como estudos e projetos orientam investimentos em saneamento?" },
    { title: "O que muda quando o município estrutura uma concessão ou PPP de saneamento?" },
    { title: "Por que diagnosticar perdas é diferente de simplesmente procurar vazamentos?" },
    { title: "Como o controle de perdas se aplica a indústrias e condomínios, não só a companhias?" },
  ],
  cta: "Converse com a Azimute SAN sobre os desafios e necessidades de saneamento do seu município ou organização.",
  enabled: true,
  group: "grupo-azimute",
  calendarUrl:
    "https://drive.google.com/drive/folders/1aP9HBx3-HVWrSmeO_yUjhoF0tff3EPAL?usp=drive_link",
};

const aria: Playbook = {
  slug: "aria",
  name: "Aria Imagem e Tecnologia",
  subtitle: "Inteligência visual e captura da realidade para decisão de engenharia",
  description:
    "A Aria, constituída em 2020, captura a realidade do terreno e dos ativos com aerolevantamento, topografia, escaneamento e modelagem 3D, inspeções aéreas e termografia. Entrega a base que o engenheiro usa; o projeto permanece com a Azimute Engenharia.",
  status: "Planejamento Editorial",
  tags: ["Geoespacial", "Aerolevantamento", "3D", "Termografia", "Inspeção"],
  accentColor: "#E25B15",
  positioning: "Inteligência visual para os melhores insights de negócios.",
  editorialObjective:
    "Ser reconhecida como empresa de captura da realidade e inteligência visual, não apenas como empresa de drones.",
  editorialMission:
    "Capturar, processar e representar a realidade do terreno para apoiar decisões de engenharia, obra e gestão de ativos.",
  priorityAudiences: [
    "Engenheiros e projetistas",
    "Construtoras e gestores de obras",
    "Empresas de energia solar",
    "Gestores de infraestrutura, mineração, logística e ferrovias",
    "Indústrias e operações",
    "Prefeituras, patrimônio e gestores de edifícios",
  ],
  contentPillars: [
    { label: "Captura da realidade" },
    { label: "Método, precisão e entregáveis" },
    { label: "Aplicações em projetos, obras e ativos" },
    { label: "Evidências visuais e cases" },
  ],
  toneOfVoice:
    "Técnico, visual, preciso, claro, confiável e orientado ao uso do dado — inovador sem virar espetáculo.",
  recurringThemes: [
    "O que o terreno já sabe",
    "Do voo ao modelo",
    "O que a termografia revela",
    "O dado na mesa da Engenharia",
    "Antes de projetar no escuro",
  ],
  contentTypes: [
    "Vídeo aéreo e timelapse",
    "Carrossel",
    "Artigo",
    "Case",
    "Comparativo antes/depois",
    "Infográfico",
    "Bastidores",
    "Modelo ou recorte 3D",
  ],
  distribution: [
    { label: "Captura da realidade", percentage: 30 },
    { label: "Método, precisão e entregáveis", percentage: 25 },
    { label: "Aplicações em projetos, obras e ativos", percentage: 25 },
    { label: "Evidências visuais e cases", percentage: 20 },
  ],
  keyMessages: [
    { text: "Inteligência visual para decidir com a realidade do terreno e do ativo." },
    { text: "A Aria captura; a Engenharia usa o dado no projeto." },
    { text: "Aerolevantamento, modelo 3D, inspeção aérea e termografia a serviço da decisão." },
    { text: "Captura da realidade com método, entregável e uso — não com o drone pelo drone." },
  ],
  contentIdeas: [
    { title: "O que precisa ser capturado antes de um projeto de engenharia avançar?" },
    { title: "Como aerolevantamento e projeto de engenharia trabalham sobre a mesma base de dados?" },
    { title: "O que a termografia revela — e o que ela não substitui — em um parque solar?" },
    { title: "Quando o escaneamento 3D é o método certo para documentar o existente?" },
    { title: "Por que a Aria captura e a Engenharia projeta — e o que quebra quando os papéis se misturam?" },
  ],
  cta: "Converse com a Aria sobre o terreno, o ativo ou a inspeção que precisa ser documentada.",
  enabled: true,
  group: "grupo-azimute",
  calendarUrl:
    "https://drive.google.com/drive/folders/1k73Z3ZR9OX3T3uGxnjE9P-j5RdzXrm80?usp=drive_link",
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
