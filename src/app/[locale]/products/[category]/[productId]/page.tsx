import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductFilmSection } from "@/components/products/product-film-section";
import { ProductStorySection } from "@/components/products/product-story-section";
import { getAllProductSlugs, getCategoryProductImages, getProductByIds } from "@/constants/products";
import { getProductStories } from "@/i18n/products-content";
import { imgV } from "@/utils/image-version";
import { isLocale } from "@/i18n/config";

type ProductDetailPageProps = {
  params: Promise<{
    locale: string;
    category: string;
    productId: string;
  }>;
};

const detailText = {
  en: {
    productsLabel: "Products",
    highlightLabel: "Product highlight",
    specsLabel: "Key specifications",
  },
  de: {
    productsLabel: "Produkte",
    highlightLabel: "Produkt-Highlight",
    specsLabel: "Wichtige Spezifikationen",
  },
  zh: {
    productsLabel: "产品",
    highlightLabel: "产品亮点",
    specsLabel: "关键规格",
  },
} as const;

/** 商品详情页主图路径，取第一张图 */
const getDetailImage = (category: string, productId: string): string => {
  return imgV(`/images-v3/products/${category}/${productId}/1.jpg`);
};

export function generateStaticParams(): Array<{ category: string; productId: string }> {
  return getAllProductSlugs();
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { locale, category, productId } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const result = getProductByIds(resolvedLocale, category, productId);

  if (!result) {
    return {
      title: "Product | SKTD",
      description: "Product details from SKTD.",
    };
  }

  return {
    title: `${result.product.name} | SKTD`,
    description: result.product.description,
    alternates: {
      canonical: `/${resolvedLocale}/products/${category}/${productId}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps): Promise<React.JSX.Element> {
  const { locale, category, productId } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const copy = detailText[resolvedLocale];
  const result = getProductByIds(resolvedLocale, category, productId);

  if (!result) {
    notFound();
  }

  const detailImage = getDetailImage(category, productId);
  /** 读取品类下所有商品图片，用于底部轮播 */
  const filmImages = getCategoryProductImages(category);
  /** 当前语言的产品故事文案 */
  const productStories = getProductStories(resolvedLocale);

  return (
    <main>
      {/* 页面头部：大标题 + 分割线 + 面包屑（对齐 Products 页面风格） */}
      <div className="container-shell pt-8 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {result.product.name}
          </h1>
          <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />
          {/* 面包屑：Products › 分类 › 商品 */}
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-(--muted)">
            <Link
              href={`/${resolvedLocale}/products`}
              className="font-medium text-(--accent) transition hover:text-(--accent-strong)"
            >
              {copy.productsLabel}
            </Link>
            <span className="text-(--muted)">&rsaquo;</span>
            <Link
              href={`/${resolvedLocale}/products?category=${category}`}
              className="font-medium text-(--accent) transition hover:text-(--accent-strong)"
            >
              {result.category.title}
            </Link>
            <span className="text-(--muted)">&rsaquo;</span>
            <span className="font-semibold text-foreground">{result.product.name}</span>
          </nav>
        </div>
      </div>

      {/* 顶部主区：左侧大图顶格 + 右侧产品信息 */}
      <div className="mt-6 grid min-h-[70vh] lg:grid-cols-2">
        {/* 左侧：图片从页面左边缘顶格铺满 */}
        <div className="relative min-h-[50vw] overflow-hidden lg:min-h-full">
          <Image
            src={detailImage}
            alt={result.product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 右侧：产品信息，垂直居中，有内边距 */}
        <div className="flex flex-col justify-center gap-7 px-8 py-10 lg:px-14 lg:py-16">
          {/* 标题 + 短线 + 描述 */}
          <div>
            <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl">
              {result.product.name}
            </h1>
            <div className="mt-5 h-[2px] w-10 rounded-full bg-(--accent)" />
            <p className="mt-5 text-sm leading-8 text-(--muted) sm:text-base">
              {result.product.description}
            </p>
          </div>

          {/* 产品亮点：accent 淡色背景卡 */}
          <div className="rounded-2xl bg-(--accent)/8 px-5 py-4">
            <p className="text-[11px] font-bold tracking-[0.2em] text-(--accent) uppercase">
              {copy.highlightLabel}
            </p>
            <p className="mt-2 text-sm leading-7 text-(--muted) sm:text-base">
              {result.product.highlight}
            </p>
          </div>

          {/* 规格：横向 pill 标签 */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-(--accent) uppercase">
              {copy.specsLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {result.product.specs.map((spec) => (
                <li
                  key={spec}
                  className="rounded-full border border-(--line) bg-white/70 px-4 py-1.5 text-sm text-(--muted)"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 底部品类图片滚动条 */}
      <div className="mt-14 sm:mt-16 lg:mt-20">
        <ProductFilmSection images={filmImages} />
      </div>

      {/* 公司产品理念双分区 */}
      <ProductStorySection stories={productStories} />

    </main>
  );
}
