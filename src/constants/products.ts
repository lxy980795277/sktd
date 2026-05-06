import fs from "fs";
import path from "path";
import type { Locale } from "@/i18n/config";
import { getProductCategoriesText } from "@/i18n/product-categories-content";
import { imgV } from "@/utils/image-version";

export type ProductItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
  specs: string[];
};

export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  products: ProductItem[];
};

/**
 * 各商品的封面图路径（与语言无关，独立维护）
 * key 格式：`${categoryId}/${productId}`
 */
const PRODUCT_IMAGES: Record<string, string> = {
  "clothes/womens-clothing": imgV("/images-v3/products/clothes/womens-clothing/1.jpg"),
  "clothes/mens-clothing": imgV("/images-v3/products/clothes/mens-clothing/1.jpg"),
  "clothes/activewear": imgV("/images-v3/products/clothes/activewear/1.jpg"),
  "foods/nuts": imgV("/images-v3/products/foods/nuts/1.jpg"),
  "foods/canned-foods": imgV("/images-v3/products/foods/canned-foods/1.jpg"),
  "foods/honey": imgV("/images-v3/products/foods/honey/1.jpg"),
  "foods/noodles": imgV("/images-v3/products/foods/noodles/1.jpg"),
  "home-appliances/leisure-armchair": imgV("/images-v3/products/home-appliances/leisure-armchair/1.jpg"),
  "home-appliances/two-tone-carpet": imgV("/images-v3/products/home-appliances/two-tone-carpet/1.jpg"),
  "home-appliances/bedding-set": imgV("/images-v3/products/home-appliances/bedding-set/1.jpg"),
  "home-appliances/outdoor-furniture": imgV("/images-v3/products/home-appliances/outdoor-furniture/1.jpg"),
  "home-appliances/sofa": imgV("/images-v3/products/home-appliances/sofa/1.jpg"),
  "home-appliances/swing-chair": imgV("/images-v3/products/home-appliances/swing-chair/1.jpg"),
  "home-appliances/corner-storage-cabinet": imgV("/images-v3/products/home-appliances/corner-storage-cabinet/1.jpg"),
  "home-appliances/patio-umbrella": imgV("/images-v3/products/home-appliances/patio-umbrella/1.jpg"),
  "home-furnishings/health-kettle": imgV("/images-v3/products/home-furnishings/health-kettle/1.jpg"),
  "home-furnishings/humidifier": imgV("/images-v3/products/home-furnishings/humidifier/1.jpg"),
  "home-furnishings/vacuum-cleaner": imgV("/images-v3/products/home-furnishings/vacuum-cleaner/1.jpg"),
  "home-furnishings/hair-dryer": imgV("/images-v3/products/home-furnishings/hair-dryer/1.jpg"),
  "home-furnishings/coffee-maker": imgV("/images-v3/products/home-furnishings/coffee-maker/1.jpg"),
  "home-furnishings/food-processor": imgV("/images-v3/products/home-furnishings/food-processor/1.jpg"),
  "home-furnishings/breakfast-maker": imgV("/images-v3/products/home-furnishings/breakfast-maker/1.jpg"),
  "home-furnishings/juicer": imgV("/images-v3/products/home-furnishings/juicer/1.jpg"),
  "home-furnishings/cooking-machine": imgV("/images-v3/products/home-furnishings/cooking-machine/1.jpg"),
  "home-furnishings/oven": imgV("/images-v3/products/home-furnishings/oven/1.jpg"),
  "home-furnishings/induction-cooker": imgV("/images-v3/products/home-furnishings/induction-cooker/1.jpg"),
  "home-furnishings/air-fryer": imgV("/images-v3/products/home-furnishings/air-fryer/1.jpg"),
  "home-furnishings/mite-remover": imgV("/images-v3/products/home-furnishings/mite-remover/1.jpg"),
  "home-furnishings/electric-fan": imgV("/images-v3/products/home-furnishings/electric-fan/1.jpg"),
  "hotel-supplies/bathroom-supplies": imgV("/images-v3/products/hotel-supplies/bathroom-supplies/1.jpg"),
  "hotel-supplies/soap-dispenser": imgV("/images-v3/products/hotel-supplies/soap-dispenser/1.jpg"),
  "hotel-supplies/vanity-mirror": imgV("/images-v3/products/hotel-supplies/vanity-mirror/1.jpg"),
  "hotel-supplies/hotel-decor": imgV("/images-v3/products/hotel-supplies/hotel-decor/1.jpg"),
  "shoes/urban-comfort-sneakers": imgV("/images-v3/products/shoes/urban-comfort-sneakers/1.jpg"),
  "shoes/indoor-soft-slippers": imgV("/images-v3/products/shoes/indoor-soft-slippers/1.jpg"),
  "shoes/lifestyle-walking-shoes": imgV("/images-v3/products/shoes/lifestyle-walking-shoes/1.jpg"),
  "shoes/lightweight-canvas-series": imgV("/images-v3/products/shoes/lightweight-canvas-series/1.jpg"),
  "shoes/hybrid-comfort-loafers": imgV("/images-v3/products/shoes/hybrid-comfort-loafers/1.jpg"),
  "shoes/outdoor-casual-sandals": imgV("/images-v3/products/shoes/outdoor-casual-sandals/1.jpg"),
};

/** 将 i18n 文案与图片路径合并，返回完整的品类数据 */
export const getProductCategories = (locale: Locale): ProductCategory[] => {
  return getProductCategoriesText(locale).map((category) => ({
    id: category.id,
    title: category.title,
    summary: category.summary,
    products: category.products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      highlight: product.highlight,
      specs: product.specs,
      image: PRODUCT_IMAGES[`${category.id}/${product.id}`] ?? "",
    })),
  }));
};

export const getProductByIds = (
  locale: Locale,
  categoryId: string,
  productId: string,
): { category: ProductCategory; product: ProductItem } | undefined => {
  const categories = getProductCategories(locale);
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return undefined;
  }

  const product = category.products.find((item) => item.id === productId);

  if (!product) {
    return undefined;
  }

  return { category, product };
};

/**
 * 生成所有商品的静态路由参数（不依赖 locale，ID 在所有语言中一致）
 */
export const getAllProductSlugs = (): Array<{ category: string; productId: string }> => {
  // 从英文内容中提取 ID 即可，ID 与语言无关
  return getProductCategoriesText("en").flatMap((category) =>
    category.products.map((product) => ({
      category: category.id,
      productId: product.id,
    })),
  );
};

/**
 * 服务端专用：读取指定商品目录下的所有图片路径
 * 用于商品详情页底部轮播图（ProductFilmSection），只展示当前商品自身的图片
 */
export const getProductImages = (categoryId: string, productId: string): string[] => {
  const productDir = path.join(process.cwd(), "public", "images-v3", "products", categoryId, productId);

  try {
    return fs
      .readdirSync(productDir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      // 使用自然排序，确保 10.jpg 排在 9.jpg 之后而非 2.jpg 之前
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((f) => imgV(`/images-v3/products/${categoryId}/${productId}/${f}`));
  } catch {
    return [];
  }
};
