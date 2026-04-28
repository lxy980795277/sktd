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
  "clothes/womens-clothing": imgV("/images/products/clothes/womens-clothing/1.jpg"),
  "clothes/mens-clothing": imgV("/images/products/clothes/mens-clothing/1.jpg"),
  "clothes/activewear": imgV("/images/products/clothes/activewear/1.jpg"),
  "foods/nuts": imgV("/images/products/foods/nuts/1.jpg"),
  "foods/canned-foods": imgV("/images/products/foods/canned-foods/1.jpg"),
  "foods/honey": imgV("/images/products/foods/honey/1.jpg"),
  "foods/noodles": imgV("/images/products/foods/noodles/1.jpg"),
  "home-appliances/leisure-armchair": imgV("/images/products/home-appliances/leisure-armchair/1.jpg"),
  "home-appliances/two-tone-carpet": imgV("/images/products/home-appliances/two-tone-carpet/1.jpg"),
  "home-appliances/bedding-set": imgV("/images/products/home-appliances/bedding-set/1.jpg"),
  "home-appliances/outdoor-furniture": imgV("/images/products/home-appliances/outdoor-furniture/1.jpg"),
  "home-appliances/sofa": imgV("/images/products/home-appliances/sofa/1.jpg"),
  "home-appliances/swing-chair": imgV("/images/products/home-appliances/swing-chair/1.jpg"),
  "home-appliances/corner-storage-cabinet": imgV("/images/products/home-appliances/corner-storage-cabinet/1.jpg"),
  "home-appliances/patio-umbrella": imgV("/images/products/home-appliances/patio-umbrella/1.jpg"),
  "home-furnishings/health-kettle": imgV("/images/products/home-furnishings/health-kettle/1.jpg"),
  "home-furnishings/water-purifier": imgV("/images/products/home-furnishings/water-purifier/1.jpg"),
  "home-furnishings/humidifier": imgV("/images/products/home-furnishings/humidifier/1.jpg"),
  "home-furnishings/vacuum-cleaner": imgV("/images/products/home-furnishings/vacuum-cleaner/1.jpg"),
  "home-furnishings/hair-dryer": imgV("/images/products/home-furnishings/hair-dryer/1.jpg"),
  "home-furnishings/coffee-maker": imgV("/images/products/home-furnishings/coffee-maker/1.jpg"),
  "home-furnishings/desk-fan": imgV("/images/products/home-furnishings/desk-fan/1.jpg"),
  "home-furnishings/garment-steamer": imgV("/images/products/home-furnishings/garment-steamer/1.jpg"),
  "home-furnishings/food-processor": imgV("/images/products/home-furnishings/food-processor/1.jpg"),
  "home-furnishings/breakfast-maker": imgV("/images/products/home-furnishings/breakfast-maker/1.jpg"),
  "home-furnishings/juicer": imgV("/images/products/home-furnishings/juicer/1.jpg"),
  "home-furnishings/cooking-machine": imgV("/images/products/home-furnishings/cooking-machine/1.jpg"),
  "home-furnishings/oven": imgV("/images/products/home-furnishings/oven/1.jpg"),
  "home-furnishings/induction-cooker": imgV("/images/products/home-furnishings/induction-cooker/1.jpg"),
  "home-furnishings/air-fryer": imgV("/images/products/home-furnishings/air-fryer/1.jpg"),
  "home-furnishings/mite-remover": imgV("/images/products/home-furnishings/mite-remover/1.jpg"),
  "home-furnishings/electric-fan": imgV("/images/products/home-furnishings/electric-fan/1.jpg"),
  "hotel-supplies/flashlight": imgV("/images/products/hotel-supplies/flashlight/1.jpg"),
  "hotel-supplies/bathroom-supplies": imgV("/images/products/hotel-supplies/bathroom-supplies/1.jpg"),
  "hotel-supplies/cleaning-tools": imgV("/images/products/hotel-supplies/cleaning-tools/1.jpg"),
  "hotel-supplies/soap-dispenser": imgV("/images/products/hotel-supplies/soap-dispenser/1.jpg"),
  "hotel-supplies/display-stand": imgV("/images/products/hotel-supplies/display-stand/1.jpg"),
  "hotel-supplies/vanity-mirror": imgV("/images/products/hotel-supplies/vanity-mirror/1.jpg"),
  "hotel-supplies/hotel-decor": imgV("/images/products/hotel-supplies/hotel-decor/1.jpg"),
  "shoes/urban-comfort-sneakers": imgV("/images/products/shoes/urban-comfort-sneakers/1.jpg"),
  "shoes/indoor-soft-slippers": imgV("/images/products/shoes/indoor-soft-slippers/1.jpg"),
  "shoes/lifestyle-walking-shoes": imgV("/images/products/shoes/lifestyle-walking-shoes/1.jpg"),
  "shoes/lightweight-canvas-series": imgV("/images/products/shoes/lightweight-canvas-series/1.jpg"),
  "shoes/hybrid-comfort-loafers": imgV("/images/products/shoes/hybrid-comfort-loafers/1.jpg"),
  "shoes/outdoor-casual-sandals": imgV("/images/products/shoes/outdoor-casual-sandals/1.jpg"),
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
 * 服务端专用：读取品类目录下所有商品的所有图片路径
 * 用于商品详情页底部品类轮播图（ProductFilmSection）
 */
export const getCategoryProductImages = (categoryId: string): string[] => {
  const categoryDir = path.join(process.cwd(), "public", "images", "products", categoryId);

  try {
    const productDirs = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    return productDirs.flatMap((productId) => {
      const productDir = path.join(categoryDir, productId);
      return fs
        .readdirSync(productDir)
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort()
        .map((f) => imgV(`/images/products/${categoryId}/${productId}/${f}`));
    });
  } catch {
    return [];
  }
};
