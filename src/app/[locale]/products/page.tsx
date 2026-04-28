import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ProductsShowcase } from "@/components/products/products-showcase";
import { getProductCategories } from "@/constants/products";
import { isLocale } from "@/i18n/config";

type ProductsPageContent = {
  title: string;
  description: string;
};

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

const pageText: Record<"en" | "de" | "zh", ProductsPageContent> = {
  en: {
    title: "Products",
    description:
      "Explore SKTD product categories and preview representative product directions for each segment.",
  },
  de: {
    title: "Produkte",
    description:
      "Entdecken Sie die Produktkategorien von SKTD und sehen Sie repräsentative Produktausrichtungen je Segment.",
  },
  zh: {
    title: "产品",
    description: "查看 SKTD 的产品分类，并按分类预览对应的代表性商品方向。",
  },
};

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = pageText[resolvedLocale];

  return {
    title: `${content.title} | SKTD`,
    description: content.description,
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: ProductsPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  const { category } = await searchParams;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = pageText[resolvedLocale];
  const categories = getProductCategories(resolvedLocale);

  // 无分类参数时，默认跳转到第一个分类
  if (!category) {
    redirect(`/${locale}/products?category=${categories[0].id}`);
  }

  // 找到匹配的分类；若 category 非法则回退到第一个
  const activeCategory =
    categories.find((c) => c.id === category) ?? categories[0];

  return (
    <main className="container-shell py-8 sm:py-10 lg:py-12">
      <section className="mx-auto max-w-7xl">
        <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>
        <div className="mt-6 h-[2px] w-full bg-(--line-strong)" />
        <p className="mt-5 max-w-4xl text-sm leading-7 text-(--muted) sm:text-base">
          {content.description}
        </p>
        {/* key 随分类变化，强制重新挂载以触发 IntersectionObserver */}
        <ProductsShowcase
          key={activeCategory.id}
          locale={resolvedLocale}
          content={{ categories: [activeCategory] }}
        />
      </section>
    </main>
  );
}
