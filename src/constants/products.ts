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
  "fashion-apparel/womens-clothing": imgV("/images-v3/products/fashion-apparel/womens-clothing/1.jpg"),
  "fashion-apparel/mens-clothing": imgV("/images-v3/products/fashion-apparel/mens-clothing/1.jpg"),
  "fashion-apparel/activewear": imgV("/images-v3/products/fashion-apparel/activewear/1.jpg"),
  "food-wellness/nuts-dried-fruits": imgV("/images-v3/products/food-wellness/nuts-dried-fruits/1.jpg"),
  "food-wellness/canned-foods": imgV("/images-v3/products/food-wellness/canned-foods/1.jpg"),
  "food-wellness/honey-natural-spreads": imgV("/images-v3/products/food-wellness/honey-natural-spreads/1.jpg"),
  "food-wellness/noodles-pasta": imgV("/images-v3/products/food-wellness/noodles-pasta/1.jpg"),
  "home-living/lounge-seating": imgV("/images-v3/products/home-living/lounge-seating/1.jpg"),
  "home-living/sofas-sectionals": imgV("/images-v3/products/home-living/sofas-sectionals/1.jpg"),
  "home-living/bed-linens": imgV("/images-v3/products/home-living/bed-linens/1.jpg"),
  "home-living/rugs-textiles": imgV("/images-v3/products/home-living/rugs-textiles/1.jpg"),
  "home-living/storage-organization": imgV("/images-v3/products/home-living/storage-organization/1.jpg"),
  "home-living/garden-swings": imgV("/images-v3/products/home-living/garden-swings/1.jpg"),
  "home-living/outdoor-shading-solutions": imgV("/images-v3/products/home-living/outdoor-shading-solutions/1.jpg"),
  "home-living/outdoor-living-furniture": imgV("/images-v3/products/home-living/outdoor-living-furniture/1.jpg"),
  "home-tech/wellness-kettle": imgV("/images-v3/products/home-tech/wellness-kettle/1.jpg"),
  "home-tech/humidifier": imgV("/images-v3/products/home-tech/humidifier/1.jpg"),
  "home-tech/vacuum-cleaner": imgV("/images-v3/products/home-tech/vacuum-cleaner/1.jpg"),
  "home-tech/hair-dryer": imgV("/images-v3/products/home-tech/hair-dryer/1.jpg"),
  "home-tech/coffee-maker": imgV("/images-v3/products/home-tech/coffee-maker/1.jpg"),
  "home-tech/food-processor": imgV("/images-v3/products/home-tech/food-processor/1.jpg"),
  "home-tech/breakfast-station": imgV("/images-v3/products/home-tech/breakfast-station/1.jpg"),
  "home-tech/juicer": imgV("/images-v3/products/home-tech/juicer/1.jpg"),
  "home-tech/multi-cooker": imgV("/images-v3/products/home-tech/multi-cooker/1.jpg"),
  "home-tech/oven": imgV("/images-v3/products/home-tech/oven/1.jpg"),
  "home-tech/induction-cooktop": imgV("/images-v3/products/home-tech/induction-cooktop/1.jpg"),
  "home-tech/air-fryer": imgV("/images-v3/products/home-tech/air-fryer/1.jpg"),
  "home-tech/mite-remover": imgV("/images-v3/products/home-tech/mite-remover/1.jpg"),
  "home-tech/electric-fan": imgV("/images-v3/products/home-tech/electric-fan/1.jpg"),
  "hotel-hospitality/bathroom-supplies": imgV("/images-v3/products/hotel-hospitality/bathroom-supplies/1.jpg"),
  "hotel-hospitality/soap-dispenser": imgV("/images-v3/products/hotel-hospitality/soap-dispenser/1.jpg"),
  "hotel-hospitality/vanity-mirror": imgV("/images-v3/products/hotel-hospitality/vanity-mirror/1.jpg"),
  "hotel-hospitality/hotel-decor": imgV("/images-v3/products/hotel-hospitality/hotel-decor/1.jpg"),
  "footwear/urban-comfort-sneakers": imgV("/images-v3/products/footwear/urban-comfort-sneakers/1.jpg"),
  "footwear/indoor-soft-slippers": imgV("/images-v3/products/footwear/indoor-soft-slippers/1.jpg"),
  "footwear/lifestyle-walking-shoes": imgV("/images-v3/products/footwear/lifestyle-walking-shoes/1.jpg"),
  "footwear/lightweight-canvas-series": imgV("/images-v3/products/footwear/lightweight-canvas-series/1.jpg"),
  "footwear/comfort-hybrid-loafers": imgV("/images-v3/products/footwear/comfort-hybrid-loafers/1.jpg"),
  "footwear/outdoor-casual-sandals": imgV("/images-v3/products/footwear/outdoor-casual-sandals/1.jpg"),
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
 * 服务端专用：读取品类下所有产品目录的图片，合并后用于详情页底部轮播。
 * 轮播展示整个品类的图片集，而非仅限于当前单品，视觉上更丰富。
 */
export const getCategoryImages = (categoryId: string): string[] => {
  const categoryDir = path.join(process.cwd(), "public", "images-v3", "products", categoryId);

  try {
    const productDirs = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    return productDirs.flatMap((productId) => {
      const productDir = path.join(categoryDir, productId);
      try {
        return fs
          .readdirSync(productDir)
          .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
          .map((f) => imgV(`/images-v3/products/${categoryId}/${productId}/${f}`));
      } catch {
        return [];
      }
    });
  } catch {
    return [];
  }
};
