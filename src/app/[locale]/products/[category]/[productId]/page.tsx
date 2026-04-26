import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProductSlugs, getProductByIds } from "@/constants/products";
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
    backToProducts: "Back to products",
    highlightLabel: "Product highlight",
    specsLabel: "Key specifications",
    longDescriptionTitle: "Detailed product overview",
    storyBlocks: [
      {
        title: "Commercial positioning",
        description:
          "This product direction is designed for stable channel performance, clear shelf presence, and long-cycle replenishment. It is suitable for both retail and project-based sourcing programs.",
      },
      {
        title: "Material and quality control",
        description:
          "Material selection follows practical durability standards and repeatable process controls. Each production run can be managed through standardized checkpoints to improve consistency.",
      },
      {
        title: "Supply and delivery readiness",
        description:
          "The sourcing model supports scalable order volumes with structured planning windows. Packaging, labeling, and shipment workflows can be adjusted for different destination markets.",
      },
      {
        title: "Customization potential",
        description:
          "Specification details, finishing options, and branding presentation can be tailored by project scope. This enables private-label adaptation while keeping execution predictable.",
      },
    ],
  },
  de: {
    productsLabel: "Produkte",
    backToProducts: "Zurück zu Produkten",
    highlightLabel: "Produkt-Highlight",
    specsLabel: "Wichtige Spezifikationen",
    longDescriptionTitle: "Detaillierte Produktübersicht",
    storyBlocks: [
      {
        title: "Kommerzielle Positionierung",
        description:
          "Diese Produktlinie ist auf stabile Kanalperformance, klare Präsentation und verlässliche Nachversorgung ausgelegt.",
      },
      {
        title: "Material und Qualität",
        description:
          "Die Materialauswahl folgt praxisnahen Haltbarkeitsstandards und wiederholbaren Qualitätsprozessen.",
      },
      {
        title: "Lieferfähigkeit",
        description:
          "Das Modell unterstützt skalierbare Volumina mit planbaren Zeitfenstern für Verpackung und Versand.",
      },
      {
        title: "Anpassbarkeit",
        description:
          "Spezifikationen, Oberflächen und Markenauftritt können projektbezogen flexibel angepasst werden.",
      },
    ],
  },
  zh: {
    productsLabel: "产品",
    backToProducts: "返回产品页",
    highlightLabel: "产品亮点",
    specsLabel: "关键规格",
    longDescriptionTitle: "产品详细介绍",
    storyBlocks: [
      {
        title: "商业定位",
        description: "该产品方向面向稳定渠道表现与持续补货能力，适用于零售场景和项目型采购场景。",
      },
      {
        title: "材料与质量控制",
        description: "材料选择强调耐用性与可复用工艺，通过标准化质控节点保障批次一致性。",
      },
      {
        title: "供应与交付能力",
        description: "支持规模化订单与分阶段交付计划，可按不同市场要求进行包装与物流协同。",
      },
      {
        title: "定制化扩展",
        description: "可根据项目需求调整规格、外观与品牌展示方式，在保证落地效率的同时提升适配度。",
      },
    ],
  },
} as const;

/** 商品详情页主图路径 */
const getDetailImage = (category: string, productId: string): string => {
  return `/images/products/${category}/${productId}/detail.jpg`;
};

export function generateStaticParams(): Array<{ category: string; productId: string }> {
  return getAllProductSlugs();
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { locale, category, productId } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const result = getProductByIds(category, productId);

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
  const result = getProductByIds(category, productId);

  if (!result) {
    notFound();
  }

  const detailImage = getDetailImage(category, productId);

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

      {/* 下方详细介绍区（后续调整） */}
      <div className="container-shell py-10 sm:py-12 lg:py-14">
        <section className="mx-auto max-w-6xl">
          <h2 className="section-title text-3xl leading-[0.95] font-semibold sm:text-4xl">
            {copy.longDescriptionTitle}
          </h2>

          <div className="mt-5 space-y-8 lg:space-y-10">
            {copy.storyBlocks.map((block, index) => {
              const isReverse = index % 2 === 1;
              const rowClassName = isReverse
                ? "grid items-center gap-5 lg:grid-cols-[0.95fr_1.05fr]"
                : "grid items-center gap-5 lg:grid-cols-[1.05fr_0.95fr]";
              const textClassName = isReverse ? "lg:order-2" : "lg:order-1";
              const imageClassName = isReverse ? "lg:order-1" : "lg:order-2";

              return (
                <article key={block.title} className={rowClassName}>
                  <div className={`${textClassName} border-l-2 border-(--accent)/35 pl-4 sm:pl-5`}>
                    <h3 className="text-foreground text-xl font-semibold">{block.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-(--muted) sm:text-base">
                      {block.description}
                    </p>
                  </div>

                  <div
                    className={`${imageClassName} relative min-h-[240px] overflow-hidden rounded-[20px] border border-(--line) sm:min-h-[280px]`}
                  >
                    <Image
                      src={detailImage}
                      alt={`${result.product.name} detail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
