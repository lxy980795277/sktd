import type { Locale } from "@/i18n/config";

type AboutMilestone = {
  year: string;
  title: string;
  description: string;
};

type AboutStorySection = {
  title: string;
  description: string;
  locations?: string[];
};

export type AboutPageContent = {
  seo: {
    title: string;
    description: string;
  };
  pageTitle: string;
  eyebrow: string;
  title: string;
  storySections: AboutStorySection[];
  milestonesTitle: string;
  milestones: AboutMilestone[];
  galleryTitle: string;
};

const aboutContent: Record<Locale, AboutPageContent> = {
  en: {
    seo: {
      title: "About SKTD | Bridging Asia and Europe",
      description:
        "Learn how SKTD has connected Asia and Europe since 2014 through reliable end-to-end sourcing, development, quality and logistics execution.",
    },
    pageTitle: "About Us",
    eyebrow: "About SKTD",
    title: "Connecting Asia and Europe with excellence since 2014.",
    storySections: [
      {
        title: "Your Cross-Border Growth Partner",
        description:
          "Founded in Düsseldorf in 2014, SKTD has grown into a trusted bridge between Asia and Europe. We combine German engineering discipline, Italian design intelligence, and Asian manufacturing strength to deliver practical value for global business teams.",
      },
      {
        title: "Partnership-First Culture & Long-Term Growth Mindset",
        description:
          "We work as an extension of our clients' teams through transparent communication, accountable ownership, and measurable outcomes. This partnership-first approach helps transform one-time projects into long-term strategic collaborations.",
      },
      {
        title: "End-to-End Execution Model",
        description:
          "Our integrated operating model covers the full value chain, from procurement and product development to quality management, project financing, and logistics coordination. This end-to-end control reduces uncertainty, shortens lead times, and ensures more consistent delivery.",
      },
      {
        title: "Strategic Global Presence",
        description:
          "We support clients across Europe, Asia, and beyond through multicultural teams operating in local languages and market contexts, enabling clear communication and faster execution.",
        locations: ["Düsseldorf", "Milan", "Shanghai", "Ho Chi Minh City"],
      },
    ],
    milestonesTitle: "Milestones in our journey",
    galleryTitle: "Life at SKTD",
    milestones: [
      {
        year: "2014",
        title: "Founded in Düsseldorf",
        description:
          "Established the foundation for cross-border sourcing and coordinated delivery services.",
      },
      {
        year: "2015",
        title: "Sales Surpassed €1M",
        description:
          "Validated early market demand and strengthened client confidence in our execution model.",
      },
      {
        year: "2016",
        title: "Shanghai Hub & JYSK Partnership",
        description:
          "Expanded upstream supply capabilities and formalized collaboration with global retail channels.",
      },
      {
        year: "2017",
        title: "Italian Design Center & €10M Revenue",
        description:
          "Integrated design-driven product strategy with commercial growth in the European market.",
      },
      {
        year: "2019",
        title: "Vietnam Expansion & KUKA HOME",
        description:
          "Enhanced regional flexibility and scaled support for large-volume furniture programs.",
      },
      {
        year: "2022",
        title: "Low-Carbon Commitment",
        description:
          "Aligned product and supply-chain practices with long-term environmental responsibility goals.",
      },
    ],
  },
  de: {
    seo: {
      title: "Über SKTD | Verbindung zwischen Asien und Europa",
      description:
        "Erfahren Sie, wie SKTD seit 2014 Asien und Europa mit verlässlicher End-to-End-Umsetzung in Beschaffung, Entwicklung, Qualität und Logistik verbindet.",
    },
    pageTitle: "Über uns",
    eyebrow: "Über SKTD",
    title: "Seit 2014 verbinden wir Asien und Europa mit exzellenter Umsetzung.",
    storySections: [
      {
        title: "Ihr Partner für grenzüberschreitendes Wachstum",
        description:
          "Seit der Gründung in Düsseldorf im Jahr 2014 hat sich SKTD zu einem verlässlichen Partner zwischen Asien und Europa entwickelt. Wir verbinden deutsche Ingenieursdisziplin, italienisches Designverständnis und asiatische Fertigungsstärke zu konkretem Geschäftsnutzen.",
      },
      {
        title: "Partnerschaft als Grundprinzip & langfristige Wachstumsorientierung",
        description:
          "Wir verstehen uns als Erweiterung der Teams unserer Kunden – mit transparenter Kommunikation, klarer Verantwortlichkeit und messbaren Ergebnissen. Dieser partnerschaftsorientierte Ansatz verwandelt einmalige Projekte in langfristige strategische Kooperationen.",
      },
      {
        title: "End-to-End-Umsetzungsmodell",
        description:
          "Unser integriertes Leistungsmodell deckt die gesamte Wertschöpfungskette ab – von Beschaffung und Produktentwicklung über Qualitätsmanagement und Projektfinanzierung bis hin zur Logistikkoordination. Diese End-to-End-Steuerung reduziert Unsicherheiten, verkürzt Durchlaufzeiten und sorgt für eine konsistentere Lieferqualität.",
      },
      {
        title: "Strategische globale Präsenz",
        description:
          "Wir unterstützen Kunden in Europa, Asien und darüber hinaus durch multikulturelle Teams, die in lokalen Sprachen und Marktumfeldern agieren – für klare Kommunikation und schnellere Umsetzung.",
        locations: ["Düsseldorf", "Mailand", "Shanghai", "Ho-Chi-Minh-Stadt"],
      },
    ],
    milestonesTitle: "Meilensteine unserer Entwicklung",
    galleryTitle: "Leben bei SKTD",
    milestones: [
      {
        year: "2014",
        title: "Gründung in Düsseldorf",
        description:
          "Startpunkt für grenzüberschreitende Beschaffung und koordinierte Lieferprozesse.",
      },
      {
        year: "2015",
        title: "Umsatz über 1 Mio. EUR",
        description: "Frühe Marktvalidierung und Aufbau langfristigen Kundenvertrauens.",
      },
      {
        year: "2016",
        title: "Shanghai-Zentrum & JYSK-Partner",
        description:
          "Ausbau der Lieferkette und Professionalisierung internationaler Handelsbeziehungen.",
      },
      {
        year: "2017",
        title: "Designzentrum Mailand & 10 Mio. EUR",
        description: "Verzahnung von Designkompetenz und kommerziellem Wachstum in Europa.",
      },
      {
        year: "2019",
        title: "Vietnam-Standort & KUKA HOME",
        description: "Erweiterung der regionalen Umsetzungskraft für skalierbare Möbelprogramme.",
      },
      {
        year: "2022",
        title: "Nachhaltigkeitsstrategie",
        description:
          "Stärkere Verankerung nachhaltiger Standards in Produkt- und Lieferkettenprozessen.",
      },
    ],
  },
  zh: {
    seo: {
      title: "关于 SKTD | 连接亚洲与欧洲",
      description:
        "了解 SKTD 自 2014 年以来，如何通过采购、研发、质量与物流的端到端执行，持续连接亚洲与欧洲市场。",
    },
    pageTitle: "关于我们",
    eyebrow: "关于 SKTD",
    title: "自 2014 年起，以卓越执行连接亚洲与欧洲。",
    storySections: [
      {
        title: "跨区域发展起点",
        description:
          "SKTD 于 2014 年在德国杜塞尔多夫成立，长期专注于成为连接亚洲与欧洲的可信赖合作伙伴。我们融合德国工程方法、意大利设计思维与亚洲制造优势，为全球客户提供可落地的商业价值。",
      },
      {
        title: "全球战略布局",
        description:
          "我们在杜塞尔多夫、米兰、上海和胡志明市设有战略办公室，服务覆盖欧洲、亚洲和北美。多元文化团队具备本地语言能力与区域商业认知，能够在复杂跨境协作中实现高效沟通与快速响应。",
      },
      {
        title: "端到端协同能力",
        description:
          "我们的服务覆盖完整链路：采购、产品开发、质量管理、项目融资与物流协同。通过端到端的可控执行，我们帮助客户降低不确定性、缩短交付周期、提升结果一致性。",
      },
      {
        title: "面向未来的承诺",
        description:
          "在客户长期信任与支持下，SKTD 持续成长。面向未来，我们将继续坚持可靠、效率与创新，探索新市场并共建更可持续的解决方案。",
      },
    ],
    milestonesTitle: "发展历程里程碑",
    galleryTitle: "SKTD 的日常",
    milestones: [
      {
        year: "2014",
        title: "于杜塞尔多夫创立",
        description: "确立跨境采购与协同交付的业务基础。",
      },
      {
        year: "2015",
        title: "销售额突破百万欧元",
        description: "完成早期市场验证并建立客户信任。",
      },
      {
        year: "2016",
        title: "上海中心 · JYSK 供应商",
        description: "强化上游供应能力，提升国际零售合作深度。",
      },
      {
        year: "2017",
        title: "意大利设计中心 · 破千万",
        description: "实现设计能力与欧洲市场增长的协同。",
      },
      {
        year: "2019",
        title: "越南办事处 · KUKA HOME",
        description: "增强区域交付弹性，支持规模化家具业务。",
      },
      {
        year: "2022",
        title: "低碳可持续战略",
        description: "将可持续理念纳入产品与供应链实践。",
      },
    ],
  },
};

export const getAboutPageContent = (locale: Locale): AboutPageContent => {
  return aboutContent[locale];
};
