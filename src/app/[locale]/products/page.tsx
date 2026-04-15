import type { Metadata } from "next";
import { ProductsShowcase } from "@/components/products/products-showcase";
import { getProductCategories } from "@/constants/products";
import { isLocale } from "@/i18n/config";

type ProductsPageContent = {
  title: string;
  description: string;
  categoriesLabel: string;
  selectedCategoryLabel: string;
};

type ProductsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const pageText: Record<"en" | "de" | "zh", ProductsPageContent> = {
  en: {
    title: "Products",
    description:
      "Explore SKTD product categories and preview representative product directions for each segment.",
    categoriesLabel: "Product categories",
    selectedCategoryLabel: "Selected segment",
  },
  de: {
    title: "Produkte",
    description:
      "Entdecken Sie die Produktkategorien von SKTD und sehen Sie repräsentative Produktausrichtungen je Segment.",
    categoriesLabel: "Produktkategorien",
    selectedCategoryLabel: "Ausgewähltes Segment",
  },
  zh: {
    title: "产品",
    description: "查看 SKTD 的产品分类，并按分类预览对应的代表性商品方向。",
    categoriesLabel: "产品分类",
    selectedCategoryLabel: "当前分类",
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
}: ProductsPageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const content = pageText[resolvedLocale];
  const categories = getProductCategories();

  return (
    <main className="container-shell py-10 sm:py-12 lg:py-14">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-(--accent) uppercase">SKTD</p>
        <h1 className="section-title mt-3 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>
        <p className="mt-5 text-sm leading-8 text-(--muted) sm:text-base">{content.description}</p>
        <ProductsShowcase
          locale={resolvedLocale}
          content={{
            categoriesLabel: content.categoriesLabel,
            selectedCategoryLabel: content.selectedCategoryLabel,
            categories,
          }}
        />
      </section>
    </main>
  );
}
