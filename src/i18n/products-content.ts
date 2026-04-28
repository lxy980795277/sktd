import type { Locale } from "@/i18n/config";

export type ProductStoryItem = {
  title: string;
  description: string;
  /** 图片在左侧时为 true */
  imageLeft: boolean;
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
      title: "Uncompromising standards at every stage",
      description:
        "We don't just move products — we build them right. Every item in our catalog goes through structured quality control checkpoints, from raw material selection to pre-shipment inspection. Our team works directly with production lines to enforce specifications, eliminate deviation, and ensure what arrives at your destination matches what was agreed on paper.",
      imageLeft: false,
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
      title: "Kompromisslose Standards auf jeder Stufe",
      description:
        "Wir liefern nicht nur Produkte – wir stellen sicher, dass sie richtig gebaut sind. Jeder Artikel in unserem Katalog durchläuft strukturierte Qualitätskontrollpunkte, von der Rohstoffauswahl bis zur Vorversandinspektion. Unser Team arbeitet direkt mit den Produktionslinien zusammen, um Spezifikationen durchzusetzen, Abweichungen zu eliminieren und sicherzustellen, dass das, was bei Ihnen ankommt, mit dem vereinbarten Standard übereinstimmt.",
      imageLeft: false,
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
      title: "每个环节，品质毫不妥协",
      description:
        "我们不只是搬运产品——我们确保产品被正确制造。目录中的每一款产品均经过系统化质量管控节点，从原材料选择到装船前检验，全程把关。我们的团队直接深入生产线，执行规格标准，消除偏差，确保最终到达目的地的货物与合同约定完全一致。",
      imageLeft: false,
    },
  ],
};

export const getProductStories = (locale: Locale): ProductStoryItem[] => {
  return productStoriesContent[locale];
};
