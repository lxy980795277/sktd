export type ProductStoryItem = {
  title: string;
  description: string;
  /** 图片在左侧时为 true */
  imageLeft: boolean;
  /** 可选 CTA 按钮文案，有值时在描述下方渲染按钮 */
  ctaLabel?: string;
};
