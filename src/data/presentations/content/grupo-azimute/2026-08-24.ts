import type { Presentation } from "../../types";
import { grupoAzimute20260824ScopeAnnex } from "./2026-08-24-scope";

const essentialScopeBullets = [
  "Planejamento estratégico: planejamento mensal, calendário editorial, reunião de alinhamento e organização das pautas.",
  "Comunicação e redes sociais: produção contínua de conteúdo, desenvolvimento de pautas, pesquisa de referências, copywriting, direção criativa, criação de artes, adaptação para Instagram, Facebook, LinkedIn e Google Meu Negócio, publicação e monitoramento.",
  "Conteúdo audiovisual: edição básica de vídeos para redes sociais, adequação para diferentes formatos, legendas quando necessário e pequenos cortes. Não inclui motion graphics avançado, VFX, modelagem 3D ou produções audiovisuais especiais.",
  "YouTube (parcial): suporte pontual de publicação e ajustes básicos — sem gestão completa do canal.",
  "SEO e AEO (parcial): recomendações e ajustes pontuais — sem gestão contínua.",
  "Suporte criativo e atendimento: convites, certificados, comunicados, materiais institucionais, peças promocionais, apresentações simples, adaptações de campanhas, atendimento recorrente, organização das demandas e acompanhamento das ações do mês. Não inclui branding, identidade visual, catálogos ou projetos gráficos complexos.",
];

export const grupoAzimute20260824: Presentation = {
  slug: "grupo-azimute-24082026",
  client: "Grupo Azimute",
  title: "Programa Corporativo de Comunicação",
  date: "Agosto de 2026",
  createdAt: "2026-08-24",
  category: "proposal",
  investment: "R$ 16.950,00 / mês",
  approveUrl:
    "mailto:contato@lab334.com.br?subject=Aprovação%20-%20Proposta%20Grupo%20Azimute%20-%2024/08/2026",
  pdfUrl: "/propostas/grupo-azimute-24082026.pdf",
  slides: [
    {
      type: "cover",
      title: "Programa Corporativo de Comunicação",
      subtitle: "Uma estrutura única, padronizada e comparável para as marcas do Grupo Azimute.",
    },
    {
      type: "text",
      title: "O momento do Grupo Azimute",
      body: "O Grupo Azimute reúne empresas com atuações distintas e um desafio comum: comunicar com clareza, consistência e continuidade. À medida que o ecossistema cresce, a comunicação precisa de uma estrutura única, previsível e fácil de operar.",
      highlight:
        "Este é o momento de organizar a comunicação sob um mesmo guarda-chuva, com escopos claros e ritmo sustentável.",
    },
    {
      type: "text",
      title: "Por que reorganizar a comunicação",
      body: "Contratos isolados geram retrabalho, expectativas diferentes e pouca integração entre as marcas. Um programa corporativo padroniza a operação, deixa explícito o que está incluso em cada empresa e facilita o acompanhamento da parceria.",
      bullets: [
        "Uma direção para todas as marcas",
        "Escopos padronizados e previsíveis",
        "Integração entre as empresas do Grupo",
        "Clareza sobre canais, entregas e exclusões",
      ],
    },
    {
      type: "text",
      title: "Como funciona o Programa Corporativo de Comunicação",
      body: "Todas as empresas operam sob a mesma estrutura. O que muda é o nível de atuação, conforme a demanda e o papel de cada marca. Em todos os programas, as publicações ocorrem em Instagram, Facebook, LinkedIn e Google Meu Negócio.",
      bullets: [
        "Programa Corporativo: infraestrutura estratégica do Grupo Azimute",
        "Programa Estratégico: aceleração digital da Azimute Engenharia",
        "Programa Essencial: escopo operacional padronizado para Imóveis, Tech, SAN e Aria",
      ],
      highlight:
        "Imóveis e Aria operam em escopo enxuto; Tech e SAN incluem YouTube, SEO, AEO e edição de vídeos de forma parcial.",
    },

    {
      type: "package",
      eyebrow: "Programa Corporativo",
      title: "Grupo Azimute",
      body: "Concentra a infraestrutura estratégica de comunicação do Grupo: conteúdo audiovisual, YouTube, podcast, blog institucional, SEO, AEO e gestão de tráfego, com coordenação entre as marcas. Canais: Instagram, Facebook, LinkedIn e Google Meu Negócio.",
      bullets: [
        "Planejamento estratégico e coordenação entre empresas",
        "Comunicação institucional e redes sociais",
        "Captação mensal, edição audiovisual e gestão do YouTube",
        "Podcast corporativo mensal",
        "Blog institucional, website, SEO, AEO e tráfego pago",
        "Suporte criativo e atendimento recorrente",
      ],
      investment: "R$ 5.000,00 / mês",
    },
    {
      type: "text",
      eyebrow: "Grupo Azimute",
      title: "Planejamento e redes sociais",
      bullets: [
        "Planejamento estratégico: reunião mensal de alinhamento, planejamento editorial, definição de pautas, priorização das ações do mês, organização do calendário e identificação de oportunidades de comunicação.",
        "Comunicação e redes sociais: desenvolvimento de pautas, pesquisa de referências, copywriting, direção criativa, criação de artes, adaptação por rede, agendamento, publicação e monitoramento, conforme calendário aprovado.",
      ],
    },
    {
      type: "text",
      eyebrow: "Grupo Azimute",
      title: "Conteúdo audiovisual",
      bullets: [
        "Captação mensal de fotos institucionais",
        "Captação mensal de vídeos institucionais",
        "Organização do banco de imagens",
        "Edição de vídeos para redes sociais",
        "Adequação para formatos horizontal, quadrado e vertical",
        "Inserção de legendas quando necessário",
        "Ajustes básicos de áudio",
        "Organização dos arquivos produzidos",
      ],
      highlight:
        "Não inclui motion graphics avançado, modelagem 3D, VFX ou produções audiovisuais especiais.",
    },
    {
      type: "text",
      eyebrow: "Grupo Azimute",
      title: "Canal do YouTube",
      body: "O Grupo possui gestão completa do canal.",
      bullets: [
        "Upload dos vídeos",
        "Configuração de títulos",
        "Configuração de descrições",
        "Organização das playlists",
        "Inserção de thumbnails",
        "Organização geral do canal",
        "Publicação",
        "Atualizações quando necessárias",
      ],
    },
    {
      type: "text",
      eyebrow: "Grupo Azimute",
      title: "Podcast corporativo",
      body: "Um dos principais diferenciais do Programa Corporativo.",
      bullets: [
        "1 episódio por mês, com rodízio entre as empresas do Grupo",
        "Desenvolvimento da pauta e do roteiro",
        "Organização da gravação e interface com o estúdio",
        "Acompanhamento da produção, publicação e cortes para redes sociais",
      ],
    },
    {
      type: "text",
      eyebrow: "Grupo Azimute",
      title: "Website, blog, SEO, mídia e suporte",
      bullets: [
        "Blog institucional: gestão do blog do Grupo e produção de artigos institucionais para reforçar a comunicação corporativa e a integração entre as marcas.",
        "Website: atualizações, correções, inclusão de novos conteúdos e páginas institucionais simples. Não inclui sistemas, reformulação completa ou integrações complexas.",
        "SEO e AEO: otimização contínua de páginas e artigos, headings, meta titles, meta descriptions, links internos, performance relacionada a SEO e estruturação de conteúdo para mecanismos de inteligência artificial.",
        "Gestão de tráfego pago: planejamento, configuração e otimização de campanhas em Meta Ads e Google Ads, segmentações, remarketing e relatórios. O investimento em mídia não está incluso.",
        "Suporte criativo e atendimento: convites, certificados, comunicados, materiais institucionais, peças promocionais, apresentações simples, adaptações, atendimento recorrente e acompanhamento das ações do mês.",
      ],
    },

    {
      type: "package",
      eyebrow: "Programa Estratégico",
      title: "Azimute Engenharia",
      body: "Programa estratégico para acelerar a presença digital da Azimute Engenharia, com produção de conteúdo técnico, blog institucional e geração de oportunidades. Canais: Instagram, Facebook, LinkedIn e Google Meu Negócio.",
      bullets: [
        "Planejamento estratégico e calendário editorial",
        "Comunicação e redes sociais",
        "Blog institucional como diferencial",
        "Conteúdo audiovisual e gestão do YouTube",
        "Website, SEO, AEO e gestão de tráfego pago",
        "Suporte criativo e atendimento",
      ],
      investment: "R$ 3.750,00 / mês",
    },
    {
      type: "text",
      eyebrow: "Azimute Engenharia",
      title: "Planejamento, redes, blog e audiovisual",
      bullets: [
        "Planejamento estratégico: reunião mensal de alinhamento, planejamento editorial, definição de pautas, priorização das ações do mês, calendário de publicações e identificação de oportunidades.",
        "Comunicação e redes sociais: desenvolvimento de pautas, pesquisa de referências, copywriting, direção criativa, criação de artes, adaptação por rede, agendamento, publicação e monitoramento.",
        "Blog institucional: gestão do blog e produção de artigos técnicos para reforçar o posicionamento da empresa como referência em infraestrutura.",
        "Conteúdo audiovisual: edição para redes sociais, formatos horizontal, quadrado e vertical, legendas, cortes, ajustes básicos de áudio e thumbnails simples.",
      ],
    },
    {
      type: "text",
      eyebrow: "Azimute Engenharia",
      title: "YouTube, website, SEO, mídia e suporte",
      bullets: [
        "YouTube: organização do canal, upload, títulos, descrições, tags, thumbnails, playlists e publicação.",
        "Website: atualizações, correções, inclusão de novos conteúdos e páginas institucionais simples. Não inclui sistemas, reformulação completa ou integrações complexas.",
        "SEO e AEO: otimização contínua de páginas e artigos, headings, meta titles, meta descriptions, links internos, performance e estruturação de conteúdo para mecanismos de inteligência artificial.",
        "Tráfego, suporte e atendimento: gestão de Meta Ads e Google Ads com planejamento, otimizações e relatórios (mídia não inclusa); materiais institucionais; atendimento recorrente e acompanhamento das ações do mês.",
      ],
    },

    {
      type: "text",
      title: "Programa Essencial",
      body: "Azimute Tech e Azimute SAN compartilham o escopo essencial completo (com YouTube, SEO, AEO e edição de vídeos parciais). Azimute Imóveis e Aria operam em versão enxuta, sem esses itens — o diferencial editorial permanece em todas.",
      bullets: [
        "Base comum: planejamento, redes sociais, suporte criativo e atendimento",
        "Tech e SAN: YouTube, SEO, AEO e edição de vídeos inclusos parcialmente",
        "Imóveis e Aria: sem edição de vídeos, YouTube, SEO e AEO",
        "Investimento de R$ 1.850 (Imóveis e Aria) ou R$ 2.250 (Tech e SAN)",
      ],
      highlight: "Mesmo programa. Dois níveis de escopo no Essencial.",
    },
    {
      type: "text",
      eyebrow: "Programa Essencial",
      title: "Escopo operacional padronizado",
      bullets: essentialScopeBullets,
      highlight:
        "YouTube, SEO, AEO e edição de vídeos aplicam-se parcialmente a Tech e SAN. Em Imóveis e Aria esses itens não estão inclusos. Website e gestão de tráfego pago não fazem parte do Essencial.",
    },
    {
      type: "package",
      eyebrow: "Programa Essencial",
      title: "Azimute Imóveis",
      body: "Presença digital contínua voltada ao mercado imobiliário, com apoio a campanhas comerciais. Escopo enxuto do Programa Essencial — o diferencial é a linha editorial.",
      bullets: [
        "Planejamento mensal e calendário editorial",
        "Produção contínua de conteúdo imobiliário",
        "Materiais institucionais, suporte criativo e atendimento",
      ],
      investment: "R$ 1.850,00 / mês",
      highlight:
        "Não incluso: edição de vídeos, YouTube, SEO, AEO, website, gestão de tráfego pago, captação mensal e podcast.",
    },
    {
      type: "package",
      eyebrow: "Programa Essencial",
      title: "Azimute Tech",
      body: "Presença digital contínua com conteúdo técnico adequado ao segmento de tecnologia. Opera com o escopo essencial completo — o diferencial é a linha editorial.",
      bullets: [
        "Planejamento mensal e calendário editorial",
        "Produção contínua de conteúdo técnico",
        "Edição básica de vídeos para redes sociais",
        "Materiais institucionais, suporte criativo e atendimento",
      ],
      investment: "R$ 2.250,00 / mês",
      highlight:
        "Parcial: YouTube, SEO e AEO. Não incluso: website, gestão de tráfego pago, captação mensal e podcast.",
    },
    {
      type: "package",
      eyebrow: "Programa Essencial",
      title: "Azimute SAN",
      body: "Presença digital contínua com conteúdo técnico sobre saneamento e materiais institucionais. Opera com o escopo essencial completo — o diferencial é a linha editorial.",
      bullets: [
        "Planejamento mensal e calendário editorial",
        "Conteúdo técnico sobre saneamento",
        "Edição básica de vídeos para redes sociais",
        "Materiais institucionais, suporte criativo e atendimento",
      ],
      investment: "R$ 2.250,00 / mês",
      highlight:
        "Parcial: YouTube, SEO e AEO. Não incluso: website, gestão de tráfego pago, captação mensal e podcast.",
    },
    {
      type: "package",
      eyebrow: "Programa Essencial",
      title: "Aria",
      body: "Presença digital contínua com conteúdo técnico sobre captura da realidade, topografia, Laser Scanner, LiDAR, BIM e drones. Escopo enxuto do Programa Essencial — o diferencial é a linha editorial.",
      bullets: [
        "Planejamento mensal e calendário editorial",
        "Conteúdo técnico sobre captura da realidade",
        "Materiais institucionais, suporte criativo e atendimento",
      ],
      investment: "R$ 1.850,00 / mês",
      highlight:
        "Não incluso: edição de vídeos, YouTube, SEO, AEO, website, gestão de tráfego pago, captação mensal e podcast.",
    },

    {
      type: "table",
      title: "Comparativo entre programas",
      body: "Três níveis de atuação, com a mesma lógica de trabalho e clareza de escopo.",
      table: {
        headers: ["Programa", "Empresas", "Diferencial"],
        rows: [
          [
            "Corporativo",
            "Grupo Azimute",
            "Infraestrutura estratégica: audiovisual, YouTube, podcast, blog, SEO, AEO e tráfego",
          ],
          [
            "Estratégico",
            "Azimute Engenharia",
            "Aceleração digital, blog técnico, YouTube, SEO, AEO e tráfego",
          ],
          [
            "Essencial",
            "Imóveis, Tech, SAN e Aria",
            "Escopo compartilhado; Imóveis e Aria sem vídeo/YouTube/SEO/AEO",
          ],
        ],
      },
    },
    {
      type: "table",
      title: "Estrutura de investimento",
      body: "Distribuição do Programa Corporativo de Comunicação por empresa.",
      table: {
        headers: ["Empresa", "Programa", "Investimento"],
        rows: [
          ["Grupo Azimute", "Corporativo", "R$ 5.000"],
          ["Azimute Engenharia", "Estratégico", "R$ 3.750"],
          ["Azimute Imóveis", "Essencial", "R$ 1.850"],
          ["Azimute Tech", "Essencial", "R$ 2.250"],
          ["Azimute SAN", "Essencial", "R$ 2.250"],
          ["Aria", "Essencial", "R$ 1.850"],
        ],
      },
    },
    {
      type: "text",
      title: "Projetos especiais",
      body: "Demandas extraordinárias continuam sendo contratadas separadamente, fora do fee mensal.",
      bullets: [
        "Branding e identidade visual",
        "Websites completos e landing pages",
        "Apresentações institucionais e materiais gráficos complexos",
        "Campanhas especiais e cobertura de eventos",
        "Produções audiovisuais avançadas",
        "Projetos para novos empreendimentos",
      ],
    },
    ...grupoAzimute20260824ScopeAnnex,
    {
      type: "investment",
      title: "Investimento consolidado",
      subtitle: "Programa Corporativo de Comunicação",
      highlight: "R$ 16.950,00 / mês",
      body: "Valor consolidado para o Grupo Azimute e suas empresas. Investimento em mídia paga não incluso. Projetos especiais e demandas extraordinárias podem ser orçados separadamente.",
    },
    {
      type: "cta",
      title: "Clareza de escopo. Continuidade de comunicação.",
      body: "O Grupo concentra a infraestrutura estratégica. A Engenharia acelera a presença digital. Imóveis, Tech, SAN e Aria compartilham o mesmo Programa Essencial, com diferenciação apenas na linha editorial. Escopos explícitos, comparáveis e prontos para operar.",
      highlight:
        "A Lab. 334 atua como parceira responsável por organizar, fortalecer e manter a comunicação das marcas do Grupo.",
    },
  ],
};
