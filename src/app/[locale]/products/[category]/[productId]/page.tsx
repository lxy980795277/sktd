import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/products/product-gallery";
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

const DETAIL_IMAGES = [
  "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
] as const;

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

  return (
    <main className="container-shell py-10 sm:py-12 lg:py-14">
      <section className="mx-auto max-w-6xl">
        <Link
          href={`/${resolvedLocale}/products`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-(--accent-strong)"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.backToProducts}
        </Link>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch lg:gap-10">
          <ProductGallery
            images={[result.product.image, result.product.image, result.product.image]}
            productName={result.product.name}
          />

          <div className="h-full">
            <h1 className="section-title text-4xl leading-[0.95] font-semibold sm:text-5xl">
              {result.product.name}
            </h1>
            <p className="mt-4 text-sm leading-8 text-(--muted) sm:text-base">
              {result.product.description}
            </p>

            <div className="mt-6 rounded-[20px] border border-(--line) bg-white/70 p-4 sm:p-5">
              <h2 className="text-sm font-semibold tracking-[0.14em] text-(--accent) uppercase">
                {copy.highlightLabel}
              </h2>
              <p className="mt-2 text-sm leading-8 text-(--muted) sm:text-base">
                {result.product.highlight}
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-sm font-semibold tracking-[0.14em] text-(--accent) uppercase">
                {copy.specsLabel}
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-(--muted) sm:text-base">
                {result.product.specs.map((spec) => {
                  return (
                    <li
                      key={spec}
                      className="rounded-[14px] border border-(--line) bg-white/60 px-4 py-2"
                    >
                      {spec}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-10 lg:mt-12">
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
              const image = DETAIL_IMAGES[index];

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
                      src={image}
                      alt={`${result.product.name} detail visual ${index + 1}`}
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
      </section>
    </main>
  );
}
