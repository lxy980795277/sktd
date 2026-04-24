import type { Locale } from "@/i18n/config";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  note: string;
  image: string;
  highlights: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
  value: string;
}

export interface GridItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface HomeContent {
  seo: {
    title: string;
    description: string;
  };
  topBar: string;
  header: {
    navigation: NavigationItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  featuredBanner: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    images: string[];
  };
  hero: {
    slides: HeroSlide[];
  };
  advantages: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    description: string;
    items: GridItem[];
  };
  planning: {
    eyebrow: string;
    title: string;
    items: GridItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    officesLabel: string;
    offices: string[];
    actionLabel: string;
    actionHref: string;
    image: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: GridItem[];
  };
  milestones: {
    eyebrow: string;
    title: string;
    items: MilestoneItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  footer: {
    blurb: string;
    links: NavigationItem[];
    rights: string;
  };
}

const content: Record<Locale, HomeContent> = {
  en: {
    seo: {
      title: "SKTD | Bridging Asia and Europe since 2014",
      description:
        "Multilingual corporate homepage for SKTD, delivering end-to-end sourcing, product development, quality management, financing and logistics.",
    },
    topBar: "Since 2014, SKTD has connected Asia and Europe with controlled end-to-end solutions.",
    header: {
      navigation: [
        { label: "Home", href: "/home" },
        { label: "Products", href: "/products" },
        { label: "About Us", href: "/about" },
      ],
      ctaLabel: "Contact us",
      ctaHref: "/contact",
    },
    featuredBanner: {
      eyebrow: "SKTD international partnership",
      title: "Since 2014, SKTD has connected Asia and Europe through reliable execution.",
      description:
        "We blend German engineering discipline, Italian design perspective and Asian sourcing strength to deliver practical end-to-end value.",
      primaryLabel: "Explore capabilities",
      primaryHref: "#services",
      secondaryLabel: "View milestones",
      secondaryHref: "#milestones",
      images: [
        "/images/home/featured-banner/1.webp",
        "/images/home/featured-banner/2.webp",
        "/images/home/featured-banner/3.webp",
        "/images/home/featured-banner/4.webp",
      ],
    },
    hero: {
      slides: [
        {
          eyebrow: "Trusted cross-border growth partner",
          title: "Connecting Asia and Europe with engineering precision and design insight.",
          description:
            "SKTD combines German engineering, Italian design thinking and Asian product excellence to create commercial momentum for global clients.",
          primaryLabel: "Explore our capabilities",
          primaryHref: "#services",
          secondaryLabel: "View milestones",
          secondaryHref: "#milestones",
          note: "Germany · Italy · China · Vietnam",
          image: "/images/home/hero-carousel/1.webp",
          highlights: [
            "Established in Düsseldorf in 2014",
            "Strategic offices across Europe and Asia",
            "End-to-end controlled execution",
          ],
        },
        {
          eyebrow: "Global reach, local fluency",
          title: "A multicultural team that understands markets, languages and business customs.",
          description:
            "From Düsseldorf and Milan to Shanghai and Ho Chi Minh City, SKTD responds quickly with regional knowledge and local-language support.",
          primaryLabel: "See our global presence",
          primaryHref: "#about",
          secondaryLabel: "Plan a collaboration",
          secondaryHref: "#planning",
          note: "Europe · Asia · North America",
          image: "/images/home/hero-carousel/2.webp",
          highlights: [
            "Multilingual commercial communication",
            "Regional business understanding",
            "Fast coordination across time zones",
          ],
        },
        {
          eyebrow: "Reliable execution from source to destination",
          title:
            "From sourcing and product development to financing and logistics, every stage stays under control.",
          description:
            "We manage the moving parts of international trade so your teams can focus on brand growth, sales and long-term partnerships.",
          primaryLabel: "Discover the workflow",
          primaryHref: "#planning",
          secondaryLabel: "Meet SKTD",
          secondaryHref: "#about",
          note: "Reliability · Efficiency · Innovation",
          image: "/images/home/hero-carousel/3.webp",
          highlights: [
            "Sourcing and product development",
            "Quality management and project financing",
            "Logistics with controlled delivery rhythm",
          ],
        },
      ],
    },
    advantages: {
      eyebrow: "Why work with SKTD",
      title: "A refined operating model for ambitious international growth.",
      description:
        "Built for companies that want dependable execution, international perspective and a partner who can move from concept to delivery without handoff friction.",
      items: [
        {
          title: "Network",
          description:
            "A structured bridge between Asian product ecosystems and European market expectations.",
          value: "4 Offices",
        },
        {
          title: "Execution",
          description:
            "Controlled product development and quality management to reduce surprises across borders.",
          value: "End-to-End",
        },
        {
          title: "Resilience",
          description:
            "Reliable coordination across procurement, financing and logistics to keep projects moving.",
          value: "Since 2014",
        },
      ],
    },
    sectors: {
      eyebrow: "Markets we support",
      title: "For businesses from interiors to lifestyle, retail and hospitality.",
      description:
        "The homepage follows the same modular rhythm as the reference site, while the content is tailored to SKTD’s B2B value proposition.",
      items: [
        {
          title: "Corner storage rack",
          description:
            "This corner shelf is 90-degree right angle, fits wall corners and does not occupy excess space.",
        },
        {
          title: "Two tone carpet",
          description:
            "Expertly woven from lightweight cotton and designed without rubber backing.",
        },
        {
          title: "Exquisite bed products",
          description:
            "This solid bedding comforter set perfectly blends exquisite textured craft and everyday comfort.",
        },
        {
          title: "Courtyard furniture set",
          description:
            "This practical patio conversation set is the perfect addition to your outdoor space.",
        },
        {
          title: "Sunshade",
          description: "Unique double-top canopy design for both commercial and residential use.",
        },
        {
          title: "Swing chair",
          description:
            "Model Name Accent Chair, Vintage Wingback Chair with Pillow and Arm, Mid Century Tall Back Chair.",
        },
        {
          title: "Minimal table lamp",
          description:
            "A slim-profile lamp with warm diffusion, ideal for bedside styling and curated interior lighting.",
        },
        {
          title: "Decor storage basket",
          description:
            "Hand-finished woven basket with clean proportions, suitable for living-room, office, and entryway organization.",
        },
      ],
    },
    planning: {
      eyebrow: "Plan your collaboration",
      title: "Five controlled touchpoints from project brief to delivery.",
      items: [
        {
          title: "Strategic offices",
          description: "Düsseldorf, Milan, Shanghai and Ho Chi Minh City.",
        },
        {
          title: "Product development",
          description: "Translate commercial intent into manufacturable outcomes.",
        },
        {
          title: "Quality management",
          description: "Keep standards visible, measurable and actionable.",
        },
        {
          title: "Project financing",
          description: "Support healthy cash flow across cross-border timelines.",
        },
        {
          title: "Logistics control",
          description: "Coordinate shipping, packaging and final movement efficiently.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Partner perspectives",
      title: "Designed to feel editorial and credible, just like the reference experience.",
      description:
        "These quotes act as refined placeholders until you replace them with official SKTD testimonials and approved client names.",
      items: [
        {
          quote:
            "SKTD gave us a much clearer sourcing process and a stronger sense of control across product development and delivery.",
          author: "Hannah Becker",
          company: "Northern Habitat · Hamburg",
        },
        {
          quote:
            "Their multicultural team made communication across Europe and Asia noticeably faster and more reliable.",
          author: "Luca Bianchi",
          company: "Casa Atelier · Milan",
        },
        {
          quote:
            "What stood out most was the balance between design sensitivity, commercial realism and execution discipline.",
          author: "Mia Chen",
          company: "Forma Collective · Shanghai",
        },
      ],
    },
    about: {
      eyebrow: "About SKTD",
      title:
        "A trusted partner shaped by engineering rigor, design culture and international trade know-how.",
      description:
        "Founded in Düsseldorf in 2014, SKTD has grown into a trusted bridge between Asia and Europe. We provide fully controlled solutions across sourcing, product development, quality management, project financing and logistics—always with reliability, efficiency and innovation at the core.",
      officesLabel: "Strategic offices",
      offices: ["Düsseldorf", "Milan", "Shanghai", "Ho Chi Minh City"],
      actionLabel: "Learn more about SKTD",
      actionHref: "#cta",
      image: "/images/home/about-section/1.webp",
    },
    services: {
      eyebrow: "Capabilities",
      title: "Five service lanes that mirror the reference site’s quick-entry rhythm.",
      items: [
        {
          title: "Sourcing",
          description: "Identify suppliers and products with market-fit in mind.",
        },
        {
          title: "Product Development",
          description: "Refine specifications, quality targets and launch readiness.",
        },
        {
          title: "Quality Management",
          description: "Make inspection standards part of the workflow, not an afterthought.",
        },
        {
          title: "Project Financing",
          description: "Support commercial flexibility and stable execution windows.",
        },
        {
          title: "Logistics",
          description: "Move goods across regions with better planning and visibility.",
        },
      ],
    },
    milestones: {
      eyebrow: "Milestones",
      title: "A growth story built step by step since 2014.",
      items: [
        {
          year: "2014",
          title: "Founded in Düsseldorf",
          description: "SKTD started in Germany with a mission to connect Asia and Europe.",
        },
        {
          year: "2015",
          title: "€1M in annual sales",
          description: "The business passed its first major commercial threshold.",
        },
        {
          year: "2016",
          title: "Shanghai sourcing center",
          description: "A strategic procurement hub was established in China.",
        },
        {
          year: "2017",
          title: "Milan design & sales center",
          description: "The business expanded its design and commercial footprint in Italy.",
        },
        {
          year: "2019",
          title: "Vietnam office and KUKA HOME partnership",
          description: "Regional presence grew alongside new strategic cooperation.",
        },
        {
          year: "2022",
          title: "Low-carbon project launched",
          description:
            "Plastic reduction and sustainability initiatives became part of the roadmap.",
        },
      ],
    },
    cta: {
      title: "Ready to shape your next cross-border opportunity?",
      subtitle:
        "Use this high-fidelity homepage as the foundation. You can replace imagery, partner names and call-to-action targets later without restructuring the design.",
      primaryLabel: "Start a conversation",
      primaryHref: "/contact",
      secondaryLabel: "Review milestones",
      secondaryHref: "#milestones",
    },
    footer: {
      blurb:
        "SKTD creates dependable links between Asia and Europe through sourcing, development, quality control, financing and logistics.",
      links: [
        { label: "Home", href: "/home" },
        { label: "Products", href: "/products" },
        { label: "Milestones", href: "#milestones" },
        { label: "About Us", href: "/about" },
      ],
      rights: "© SKTD. All rights reserved.",
    },
  },
  de: {
    seo: {
      title: "SKTD | Verbindet Asien und Europa seit 2014",
      description:
        "Mehrsprachige Unternehmens-Website für SKTD mit End-to-End-Lösungen für Sourcing, Produktentwicklung, Qualitätsmanagement, Finanzierung und Logistik.",
    },
    topBar: "Seit 2014 verbindet SKTD Asien und Europa mit kontrollierten End-to-End-Lösungen.",
    header: {
      navigation: [
        { label: "Warum SKTD", href: "/home" },
        { label: "Produkte", href: "/products" },
        { label: "Über uns", href: "/about" },
      ],
      ctaLabel: "Team kontaktieren",
      ctaHref: "/contact",
    },
    featuredBanner: {
      eyebrow: "SKTD internationale Partnerschaft",
      title: "Seit 2014 verbindet SKTD Asien und Europa durch verlässliche Umsetzung.",
      description:
        "Wir vereinen deutsche Ingenieursdisziplin, italienische Designperspektive und asiatische Sourcing-Stärke zu belastbarem End-to-End-Mehrwert.",
      primaryLabel: "Leistungen entdecken",
      primaryHref: "#services",
      secondaryLabel: "Meilensteine ansehen",
      secondaryHref: "#milestones",
      images: [
        "/images/home/featured-banner/1.webp",
        "/images/home/featured-banner/2.webp",
        "/images/home/featured-banner/3.webp",
        "/images/home/featured-banner/4.webp",
      ],
    },
    hero: {
      slides: [
        {
          eyebrow: "Verlässlicher Partner für internationales Wachstum",
          title:
            "Wir verbinden Asien und Europa mit technischer Präzision und gestalterischem Verständnis.",
          description:
            "SKTD vereint deutsche Ingenieurskunst, italienisches Designverständnis und asiatische Produktstärke zu belastbaren Lösungen für internationale Kunden.",
          primaryLabel: "Leistungen entdecken",
          primaryHref: "#services",
          secondaryLabel: "Meilensteine ansehen",
          secondaryHref: "#milestones",
          note: "Deutschland · Italien · China · Vietnam",
          image: "/images/home/hero-carousel/1.webp",
          highlights: [
            "2014 in Düsseldorf gegründet",
            "Strategische Büros in Europa und Asien",
            "Kontrollierte End-to-End-Umsetzung",
          ],
        },
        {
          eyebrow: "Globale Reichweite, lokale Sprachkompetenz",
          title:
            "Ein multikulturelles Team mit Verständnis für Märkte, Sprachen und Geschäftskulturen.",
          description:
            "Von Düsseldorf und Mailand bis Shanghai und Ho-Chi-Minh-Stadt arbeitet SKTD schnell, regional verankert und mehrsprachig.",
          primaryLabel: "Globale Präsenz ansehen",
          primaryHref: "#about",
          secondaryLabel: "Zusammenarbeit planen",
          secondaryHref: "#planning",
          note: "Europa · Asien · Nordamerika",
          image: "/images/home/hero-carousel/2.webp",
          highlights: [
            "Mehrsprachige Kommunikation",
            "Verständnis regionaler Geschäftspraxis",
            "Schnelle Abstimmung über Zeitzonen hinweg",
          ],
        },
        {
          eyebrow: "Verlässliche Umsetzung vom Ursprung bis zum Ziel",
          title:
            "Von Sourcing und Produktentwicklung bis Finanzierung und Logistik bleibt jeder Schritt unter Kontrolle.",
          description:
            "Wir steuern die Komplexität des internationalen Handels, damit sich Ihre Teams auf Marke, Vertrieb und langfristige Partnerschaften konzentrieren können.",
          primaryLabel: "Ablauf entdecken",
          primaryHref: "#planning",
          secondaryLabel: "SKTD kennenlernen",
          secondaryHref: "#about",
          note: "Zuverlässigkeit · Effizienz · Innovation",
          image: "/images/home/hero-carousel/3.webp",
          highlights: [
            "Sourcing und Produktentwicklung",
            "Qualitätsmanagement und Projektfinanzierung",
            "Logistik mit kontrolliertem Lieferrhythmus",
          ],
        },
      ],
    },
    advantages: {
      eyebrow: "Warum SKTD",
      title: "Ein verfeinertes Betriebsmodell für ambitioniertes internationales Wachstum.",
      description:
        "Für Unternehmen, die zuverlässige Umsetzung, internationale Perspektive und einen Partner suchen, der Konzepte ohne Reibungsverluste bis zur Auslieferung führt.",
      items: [
        {
          title: "Integriertes Sourcing-Netzwerk",
          description:
            "Eine strukturierte Brücke zwischen asiatischen Produktökosystemen und europäischen Markterwartungen.",
          value: "4 strategische Standorte",
        },
        {
          title: "Qualitätsorientierte Umsetzung",
          description:
            "Kontrollierte Produktentwicklung und Qualitätsmanagement reduzieren Überraschungen im internationalen Geschäft.",
          value: "End-to-End-Kontrolle",
        },
        {
          title: "Kommerzielle Stabilität",
          description:
            "Zuverlässige Koordination von Einkauf, Finanzierung und Logistik hält Projekte in Bewegung.",
          value: "Seit 2014",
        },
      ],
    },
    sectors: {
      eyebrow: "Märkte, die wir unterstützen",
      title: "Für Unternehmen aus Interior, Lifestyle, Retail und Hospitality.",
      description:
        "Die Seitenstruktur folgt dem Rhythmus der Referenzseite, während die Inhalte auf das B2B-Profil von SKTD zugeschnitten sind.",
      items: [
        {
          title: "Home & Interior",
          description: "Möbel, Dekor und designorientierte Wohnsortimente.",
        },
        {
          title: "Event & Styling",
          description: "Styling-Konzepte und kuratierte Sortimente für Events.",
        },
        {
          title: "Food & Delikatessen",
          description: "Importierte Spezialitäten mit kuratorischer Unterstützung.",
        },
        {
          title: "Mode & Accessoires",
          description: "Trendbewusstes Sourcing für Soft Goods und Accessoires.",
        },
        {
          title: "Corporate Gifts",
          description: "Geschenkartikel, Saisonlinien und Verpackungsansätze.",
        },
        {
          title: "Office & Workspace",
          description: "Funktionale Produkte mit Balance aus Ästhetik und Nutzen.",
        },
        {
          title: "Hospitality",
          description: "Projektgeeignete Lösungen für Hotel, Gastronomie und Freizeit.",
        },
        {
          title: "Baby & Kids",
          description: "Sicherheitsbewusste Sortimente für familienorientierte Marken.",
        },
        {
          title: "Floral & Green",
          description: "Accessoires und Konzepte für saisonale Inszenierungen.",
        },
        {
          title: "Lifestyle Retail",
          description: "Kollektionen für frische und differenzierte Handelsflächen.",
        },
      ],
    },
    planning: {
      eyebrow: "Zusammenarbeit planen",
      title: "Fünf kontrollierte Berührungspunkte vom Briefing bis zur Lieferung.",
      items: [
        {
          title: "Strategische Standorte",
          description: "Düsseldorf, Mailand, Shanghai und Ho-Chi-Minh-Stadt.",
        },
        {
          title: "Produktentwicklung",
          description: "Aus kommerziellen Zielen werden marktreife Produkte.",
        },
        {
          title: "Qualitätsmanagement",
          description: "Standards bleiben sichtbar, messbar und umsetzbar.",
        },
        {
          title: "Projektfinanzierung",
          description: "Unterstützt gesunden Cashflow über internationale Zeitachsen.",
        },
        {
          title: "Logistiksteuerung",
          description: "Versand, Verpackung und Warenbewegung werden effizient koordiniert.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Partnerstimmen",
      title: "Editorial gedacht und glaubwürdig inszeniert – wie beim Referenzauftritt.",
      description:
        "Diese Zitate sind hochwertige Platzhalter, bis offizielle Referenzen und freigegebene Kundennamen vorliegen.",
      items: [
        {
          quote:
            "SKTD hat unseren Sourcing-Prozess deutlich klarer gemacht und die Kontrolle über Entwicklung und Auslieferung spürbar verbessert.",
          author: "Hannah Becker",
          company: "Northern Habitat · Hamburg",
        },
        {
          quote:
            "Das multikulturelle Team hat die Kommunikation zwischen Europa und Asien schneller und verlässlicher gemacht.",
          author: "Luca Bianchi",
          company: "Casa Atelier · Mailand",
        },
        {
          quote:
            "Besonders überzeugend war das Zusammenspiel aus Designverständnis, kommerziellem Realismus und konsequenter Umsetzung.",
          author: "Mia Chen",
          company: "Forma Collective · Shanghai",
        },
      ],
    },
    about: {
      eyebrow: "Über SKTD",
      title:
        "Ein vertrauenswürdiger Partner, geprägt von Ingenieursdisziplin, Designkultur und internationalem Handelswissen.",
      description:
        "SKTD wurde 2014 in Düsseldorf gegründet und ist heute eine belastbare Brücke zwischen Asien und Europa. Wir bieten vollständig kontrollierte Lösungen für Sourcing, Produktentwicklung, Qualitätsmanagement, Projektfinanzierung und Logistik – stets mit Zuverlässigkeit, Effizienz und Innovation im Zentrum.",
      officesLabel: "Strategische Büros",
      offices: ["Düsseldorf", "Mailand", "Shanghai", "Ho-Chi-Minh-Stadt"],
      actionLabel: "Mehr über SKTD",
      actionHref: "#cta",
      image: "/images/home/about-section/1.webp",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Fünf Leistungslinien im schnellen Einstiegsrhythmus der Referenzseite.",
      items: [
        {
          title: "Sourcing",
          description: "Lieferanten und Produkte werden mit Blick auf Market Fit identifiziert.",
        },
        {
          title: "Produktentwicklung",
          description: "Spezifikationen, Qualitätsziele und Marktreife werden geschärft.",
        },
        {
          title: "Qualitätsmanagement",
          description: "Prüfstandards werden fester Bestandteil des Workflows.",
        },
        {
          title: "Projektfinanzierung",
          description: "Unterstützt kommerzielle Flexibilität und stabile Zeitfenster.",
        },
        {
          title: "Logistik",
          description: "Waren werden mit besserer Planung und Transparenz bewegt.",
        },
      ],
    },
    milestones: {
      eyebrow: "Meilensteine",
      title: "Eine Wachstumsgeschichte, die seit 2014 Schritt für Schritt entsteht.",
      items: [
        {
          year: "2014",
          title: "Gründung in Düsseldorf",
          description:
            "SKTD startete in Deutschland mit der Mission, Asien und Europa zu verbinden.",
        },
        {
          year: "2015",
          title: "1 Mio. € Jahresumsatz",
          description: "Das Unternehmen überschritt die erste große Umsatzschwelle.",
        },
        {
          year: "2016",
          title: "Sourcing Center in Shanghai",
          description: "In China wurde ein strategischer Einkaufsstandort aufgebaut.",
        },
        {
          year: "2017",
          title: "Design- und Vertriebszentrum in Mailand",
          description: "Die Design- und Vertriebspräsenz in Italien wurde erweitert.",
        },
        {
          year: "2019",
          title: "Vietnam-Büro und Partnerschaft mit KUKA HOME",
          description: "Die regionale Präsenz wuchs zusammen mit neuer strategischer Kooperation.",
        },
        {
          year: "2022",
          title: "Start des Low-Carbon-Projekts",
          description: "Plastikreduktion und Nachhaltigkeitsinitiativen wurden Teil der Roadmap.",
        },
      ],
    },
    cta: {
      title: "Bereit für Ihre nächste grenzüberschreitende Chance?",
      subtitle:
        "Diese hochgradig referenznahe Startseite ist die Basis. Bilder, Partnernamen und CTA-Ziele können später ohne Designumbau ersetzt werden.",
      primaryLabel: "Gespräch starten",
      primaryHref: "/contact",
      secondaryLabel: "Meilensteine prüfen",
      secondaryHref: "#milestones",
    },
    footer: {
      blurb:
        "SKTD schafft belastbare Verbindungen zwischen Asien und Europa durch Sourcing, Entwicklung, Qualitätskontrolle, Finanzierung und Logistik.",
      links: [
        { label: "Warum SKTD", href: "/home" },
        { label: "Produkte", href: "/products" },
        { label: "Meilensteine", href: "#milestones" },
        { label: "Über uns", href: "/about" },
      ],
      rights: "© SKTD. Alle Rechte vorbehalten.",
    },
  },
  zh: {
    seo: {
      title: "SKTD | 自 2014 年起连接亚洲与欧洲",
      description:
        "SKTD 多语言企业官网首页，展示采购、产品开发、质量管理、项目融资与物流等端到端能力。",
    },
    topBar: "自 2014 年起，SKTD 通过完全可控的端到端方案连接亚洲与欧洲。",
    header: {
      navigation: [
        { label: "为什么选择 SKTD", href: "/home" },
        { label: "产品", href: "/products" },
        { label: "关于我们", href: "/about" },
      ],
      ctaLabel: "联系团队",
      ctaHref: "/contact",
    },
    featuredBanner: {
      eyebrow: "SKTD 国际合作伙伴",
      title: "自 2014 年起，SKTD 以可靠执行持续连接亚洲与欧洲。",
      description:
        "我们融合德国工程纪律、意大利设计视角与亚洲供应链优势，提供可落地的端到端商业价值。",
      primaryLabel: "查看服务能力",
      primaryHref: "#services",
      secondaryLabel: "浏览发展历程",
      secondaryHref: "#milestones",
      images: [
        "/images/home/featured-banner/1.webp",
        "/images/home/featured-banner/2.webp",
        "/images/home/featured-banner/3.webp",
        "/images/home/featured-banner/4.webp",
      ],
    },
    hero: {
      slides: [
        {
          eyebrow: "值得信赖的跨境增长伙伴",
          title: "以德国工程精度与意大利设计洞察，连接亚洲与欧洲。",
          description:
            "SKTD 将德国工程技术、意大利设计理念与亚洲卓越产品能力融合，为全球客户创造稳定而高效的商业增长动能。",
          primaryLabel: "查看服务能力",
          primaryHref: "#services",
          secondaryLabel: "浏览发展历程",
          secondaryHref: "#milestones",
          note: "德国 · 意大利 · 中国 · 越南",
          image: "/images/home/hero-carousel/1.webp",
          highlights: [
            "2014 年于杜塞尔多夫成立",
            "欧洲与亚洲多地战略办公室",
            "端到端全流程可控执行",
          ],
        },
        {
          eyebrow: "全球布局，本地语言响应",
          title: "一个真正理解市场、语言与商业习惯的多元文化团队。",
          description:
            "从杜塞尔多夫、米兰到上海和胡志明市，SKTD 以本地语言和区域经验快速响应欧洲、亚洲和北美客户的多样化需求。",
          primaryLabel: "了解全球布局",
          primaryHref: "#about",
          secondaryLabel: "规划合作路径",
          secondaryHref: "#planning",
          note: "欧洲 · 亚洲 · 北美",
          image: "/images/home/hero-carousel/2.webp",
          highlights: ["多语言商业沟通能力", "深入理解区域商业惯例", "跨时区快速协同响应"],
        },
        {
          eyebrow: "从源头到交付的可靠执行",
          title: "从采购、产品开发到融资与物流，每个阶段都保持可控。",
          description:
            "我们帮助客户把跨境贸易中的复杂环节收束成清晰流程，让团队可以更专注于品牌增长、市场销售与长期伙伴关系。",
          primaryLabel: "查看执行流程",
          primaryHref: "#planning",
          secondaryLabel: "认识 SKTD",
          secondaryHref: "#about",
          note: "可靠 · 高效 · 创新",
          image: "/images/home/hero-carousel/3.webp",
          highlights: ["采购与产品开发", "质量管理与项目融资", "物流节奏与交付控制"],
        },
      ],
    },
    advantages: {
      eyebrow: "为什么选择 SKTD",
      title: "一个为国际化增长而打磨的高标准协作模型。",
      description: "适合希望获得可靠执行、国际视角以及从概念走到交付全过程协作能力的企业。",
      items: [
        {
          title: "一体化采购网络",
          description: "在亚洲产品生态与欧洲市场需求之间建立清晰、稳定的桥梁。",
          value: "4 个战略办公室",
        },
        {
          title: "质量优先执行",
          description: "通过受控的产品开发与质量管理，降低跨境协作中的不确定性。",
          value: "端到端全链路可控",
        },
        {
          title: "商业韧性更强",
          description: "在采购、融资与物流之间形成可靠协调，保证项目持续推进。",
          value: "自 2014 年持续发展",
        },
      ],
    },
    sectors: {
      eyebrow: "服务行业",
      title: "面向家居、生活方式、零售与 hospitality 等多元 B2B 场景。",
      description:
        "页面结构完整沿用了参考站点的模块节奏，但文案与业务表达已经切换为 SKTD 的企业定位。",
      items: [
        {
          title: "家居与室内",
          description: "家具、软装与设计导向生活方式产品。",
        },
        {
          title: "活动与陈列",
          description: "面向商业活动和空间风格的陈列解决方案。",
        },
        {
          title: "食品与精选品类",
          description: "支持进口商品与精选特色品类的拓展。",
        },
        {
          title: "时尚与配饰",
          description: "为软装和配饰类产品提供趋势型采购支持。",
        },
        {
          title: "企业礼赠",
          description: "礼品、季节性系列与包装方向整合。",
        },
        {
          title: "办公与工作空间",
          description: "兼顾功能、效率与审美表达的产品方案。",
        },
        {
          title: "酒店与餐饮",
          description: "适用于 hospitality 场景的项目型解决方案。",
        },
        {
          title: "母婴与儿童",
          description: "为家庭与儿童相关品牌提供安全导向产品线。",
        },
        {
          title: "花艺与绿色生活",
          description: "支持季节性陈列与视觉营销的延展品类。",
        },
        {
          title: "生活方式零售",
          description: "帮助零售空间持续保持新鲜感与差异化。",
        },
      ],
    },
    planning: {
      eyebrow: "规划合作流程",
      title: "从项目需求到交付执行的五个关键触点。",
      items: [
        {
          title: "战略办公室网络",
          description: "杜塞尔多夫、米兰、上海、胡志明市。",
        },
        {
          title: "产品开发",
          description: "将商业目标转化为可制造、可落地的产品方案。",
        },
        {
          title: "质量管理",
          description: "让标准在每个执行环节中清晰、可衡量、可追踪。",
        },
        {
          title: "项目融资",
          description: "帮助跨境项目维持更健康的现金流与执行节奏。",
        },
        {
          title: "物流控制",
          description: "更高效地协调运输、包装与最终交付。",
        },
      ],
    },
    testimonials: {
      eyebrow: "合作方视角",
      title: "先做出和参考站一致的高级感，再逐步替换为正式客户证言。",
      description: "以下内容是高质量占位文案，未来你可以替换为 SKTD 正式客户评价与已授权客户名称。",
      items: [
        {
          quote: "SKTD 让我们的采购流程更清晰，也让产品开发到交付之间的控制力显著提升。",
          author: "Hannah Becker",
          company: "Northern Habitat · Hamburg",
        },
        {
          quote: "他们的多元文化团队让欧洲和亚洲之间的沟通速度与可靠性都有明显提升。",
          author: "Luca Bianchi",
          company: "Casa Atelier · Milan",
        },
        {
          quote: "最打动我们的是对设计的敏感度、商业现实感以及执行纪律之间的平衡。",
          author: "Mia Chen",
          company: "Forma Collective · Shanghai",
        },
      ],
    },
    about: {
      eyebrow: "关于 SKTD",
      title: "一个由工程严谨性、设计文化与国际贸易经验共同塑造的长期伙伴。",
      description:
        "SKTD 于 2014 年成立于杜塞尔多夫，始终致力于成为连接亚洲与欧洲的可信赖合作伙伴。我们提供覆盖采购、产品开发、质量管理、项目融资与物流的完全可控解决方案，并始终以可靠性、效率和创新为核心。",
      officesLabel: "战略办公室",
      offices: ["杜塞尔多夫", "米兰", "上海", "胡志明市"],
      actionLabel: "进一步了解 SKTD",
      actionHref: "#cta",
      image: "/images/home/about-section/1.webp",
    },
    services: {
      eyebrow: "服务能力",
      title: "用与参考站相同的快速入口节奏，展示五条核心服务线。",
      items: [
        {
          title: "采购",
          description: "围绕市场匹配度识别供应商与产品机会。",
        },
        {
          title: "产品开发",
          description: "推动规格、质量目标与上市准备度持续收敛。",
        },
        {
          title: "质量管理",
          description: "将检验标准真正嵌入流程，而不是放在最后补救。",
        },
        {
          title: "项目融资",
          description: "支持更稳健的商业灵活性与执行周期。",
        },
        {
          title: "物流",
          description: "让跨区域流转具备更好的计划性与可见性。",
        },
      ],
    },
    milestones: {
      eyebrow: "发展里程碑",
      title: "自 2014 年起，SKTD 以稳健节奏持续成长。",
      items: [
        {
          year: "2014",
          title: "在杜塞尔多夫成立",
          description: "SKTD 在德国成立，开启连接亚洲与欧洲的长期使命。",
        },
        {
          year: "2015",
          title: "年销售额突破 100 万欧元",
          description: "公司迈过第一个关键商业增长节点。",
        },
        {
          year: "2016",
          title: "上海采购中心成立",
          description: "在中国设立战略采购中心，并成为 JYSK 官方供应商。",
        },
        {
          year: "2017",
          title: "米兰设计与销售中心启用",
          description: "年销售额突破 1000 万欧元，欧洲布局进一步强化。",
        },
        {
          year: "2019",
          title: "越南办事处成立",
          description: "与 KUKA HOME 建立战略合作伙伴关系。",
        },
        {
          year: "2022",
          title: "启动低碳环保项目",
          description: "减少塑料使用，推动更可持续的发展方向。",
        },
      ],
    },
    cta: {
      title: "准备开启下一次跨境增长机会了吗？",
      subtitle:
        "这版首页已经具备高保真参考站结构，后续你只需要替换图片、正式客户名称和最终跳转目标，不需要重做页面框架。",
      primaryLabel: "开始沟通",
      primaryHref: "/contact",
      secondaryLabel: "查看里程碑",
      secondaryHref: "#milestones",
    },
    footer: {
      blurb:
        "SKTD 通过采购、产品开发、质量控制、融资与物流，在亚洲与欧洲之间建立稳定可信的合作链路。",
      links: [
        { label: "为什么选择 SKTD", href: "/home" },
        { label: "产品", href: "/products" },
        { label: "发展里程碑", href: "#milestones" },
        { label: "关于我们", href: "/about" },
      ],
      rights: "© SKTD. 保留所有权利。",
    },
  },
};

export const getHomeContent = (locale: Locale): HomeContent => {
  return content[locale];
};
