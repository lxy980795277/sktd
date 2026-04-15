"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type ProductCard = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  products: ProductCard[];
};

type ProductsShowcaseContent = {
  categoriesLabel: string;
  selectedCategoryLabel: string;
  categories: ProductCategory[];
};

type ProductsShowcaseProps = {
  locale: Locale;
  content: ProductsShowcaseContent;
};

const ACTIVE_BUTTON_CLASS_NAME =
  "border-(--accent) bg-(--accent) text-white shadow-[0_10px_28px_rgba(139,63,44,0.25)]";
const INACTIVE_BUTTON_CLASS_NAME =
  "border-(--line) bg-white/75 text-(--foreground) hover:border-(--accent)/40";

export const ProductsShowcase: FC<ProductsShowcaseProps> = ({ locale, content }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(content.categories[0]?.id ?? "");

  // 说明：根据当前激活分类实时取数，保证下方商品区与上方点击状态同步。
  const activeCategory =
    content.categories.find((category) => {
      return category.id === activeCategoryId;
    }) ?? content.categories[0];

  return (
    <section className="mt-8 lg:mt-10">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-(--accent) uppercase">
          {content.categoriesLabel}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.categories.map((category) => {
            const buttonClassName =
              activeCategoryId === category.id
                ? ACTIVE_BUTTON_CLASS_NAME
                : INACTIVE_BUTTON_CLASS_NAME;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={cn(
                  "cursor-pointer rounded-[18px] border px-4 py-3 text-left text-sm font-semibold transition-all",
                  buttonClassName,
                )}
              >
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      {activeCategory && (
        <div className="mt-6 rounded-[24px] border border-(--line) bg-white/55 p-4 sm:p-5 lg:p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-(--accent) uppercase">
            {content.selectedCategoryLabel}
          </p>
          <h2 className="section-title mt-3 text-3xl leading-[0.95] font-semibold sm:text-4xl">
            {activeCategory.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
            {activeCategory.summary}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.products.map((product) => {
              return (
                <Link
                  key={`${activeCategory.id}-${product.id}`}
                  href={`/${locale}/products/${activeCategory.id}/${product.id}`}
                  className="cursor-pointer overflow-hidden rounded-[18px] border border-(--line) bg-white transition hover:shadow-[0_14px_30px_rgba(31,29,25,0.12)]"
                >
                  <div className="relative h-44">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground text-base font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-(--muted)">{product.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
