import type { Locale } from "@/i18n/config";

export type ProductStoryItem = {
  title: string;
  description: string;
  /** 图片在左侧时为 true */
  imageLeft: boolean;
  /** 可选 CTA 按钮文案，有值时在描述下方渲染按钮 */
  ctaLabel?: string;
};

const productStoriesContent: Record<Locale, ProductStoryItem[]> = {
  en: [
    {
      title: "A product range built for every market",
      description:
        "From home furnishings and hotel supplies to apparel, footwear, appliances, and food — SKTD covers six core categories with depth and breadth. Whether you need a single SKU or a full assortment program, our sourcing network spans hundreds of verified factories across China, giving you access to the full spectrum of consumer goods under one partnership.",
      imageLeft: true,
    },
    {
      title: "Can't find exactly what you're looking for?",
      description:
        "Our team is ready to create customised solutions for your business.",
      imageLeft: false,
      ctaLabel: "Contact Us",
    },
  ],
  de: [
    {
      title: "Ein Produktsortiment für jeden Markt",
      description:
        "Von Heimtextilien und Hotelzubehör bis hin zu Bekleidung, Schuhen, Haushaltsgeräten und Lebensmitteln – SKTD deckt sechs Kernkategorien mit Tiefe und Breite ab. Ob ein einzelner Artikel oder ein vollständiges Sortimentsprogramm: Unser Beschaffungsnetzwerk umfasst Hunderte geprüfte Fabriken in China und eröffnet Ihnen Zugang zum gesamten Konsumgüterspektrum aus einer Partnerschaft heraus.",
      imageLeft: true,
    },
    {
      title: "Nicht das Richtige gefunden?",
      description:
        "Wir unterstützen Sie mit individuellen Produktlösungen und maßgeschneiderter Fertigung.",
      imageLeft: false,
      ctaLabel: "Kontakt aufnehmen",
    },
  ],
  zh: [
    {
      title: "覆盖各类市场需求的产品矩阵",
      description:
        "从家居用品、酒店用品到服装、鞋履、家用电器与食品——SKTD 深度覆盖六大核心品类。无论是单一 SKU 还是完整的品类组合方案，我们的采购网络遍布数百家中国认证工厂，助您在一个合作伙伴下获取全品类消费品资源。",
      imageLeft: true,
    },
    {
      title: "找不到您想要的产品？",
      description:
        "我们的团队随时准备为您的业务提供定制化解决方案。",
      imageLeft: false,
      ctaLabel: "联系我们",
    },
  ],
};

export const getProductStories = (locale: Locale): ProductStoryItem[] => {
  return productStoriesContent[locale];
};
