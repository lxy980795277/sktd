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
    { title: "Can't find exactly what you're looking for?", description: "Our team is ready to create customised solutions for your business.", imageLeft: false, ctaLabel: "Contact Us" },
  ],
  de: [
    { title: "Nicht das Richtige gefunden?", description: "Wir unterstützen Sie mit individuellen Produktlösungen und maßgeschneiderter Fertigung.", imageLeft: false, ctaLabel: "Kontakt aufnehmen" },
  ],
  zh: [
    { title: "找不到您想要的产品？", description: "我们的团队随时准备为您的业务提供定制化解决方案。", imageLeft: false, ctaLabel: "联系我们" },
  ],
};

export const getProductStories = (locale: Locale): ProductStoryItem[] => {
  return productStoriesContent[locale];
};
