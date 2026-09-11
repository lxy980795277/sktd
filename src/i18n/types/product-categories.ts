/** 单个商品的可翻译文案（不含图片路径，图片在 products.ts 中维护） */
export type ProductItemTextContent = {
  id: string;
  name: string;
  description: string;
  highlight: string;
  specs: string[];
};

/** 品类的可翻译文案 */
export type ProductCategoryTextContent = {
  id: string;
  title: string;
  summary: string;
  products: ProductItemTextContent[];
};
