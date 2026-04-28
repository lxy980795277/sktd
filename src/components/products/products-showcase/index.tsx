"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { FC } from "react";
import type { Locale } from "@/i18n/config";
import "./products-showcase.css";

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
  categories: ProductCategory[];
};

type ProductsShowcaseProps = {
  locale: Locale;
  content: ProductsShowcaseContent;
};

export const ProductsShowcase: FC<ProductsShowcaseProps> = ({ locale, content }) => {
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    gridRefs.current.forEach((grid) => {
      if (!grid) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            grid.classList.add("products-grid--visible");
            observer.unobserve(grid);
          }
        },
        // 网格顶部进入视口 6% 时触发，略提前，节奏自然
        { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
      );

      observer.observe(grid);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section className="mt-8 lg:mt-10">
      <div className="space-y-12 lg:space-y-14">
        {content.categories.map((category, categoryIndex) => {
          return (
            <div
              key={category.id}
              className="grid gap-6 border-t border-(--line) pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <h2 className="text-foreground text-lg font-semibold tracking-[0.04em] sm:text-xl">
                  {category.title}
                </h2>
              </div>

              {/* 产品网格：被 IntersectionObserver 观察 */}
              <div
                ref={(el) => {
                  gridRefs.current[categoryIndex] = el;
                }}
                className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:gap-6"
              >
                {category.products.map((product, productIndex) => (
                  <Link
                    key={`${category.id}-${product.id}`}
                    href={`/${locale}/products/${category.id}/${product.id}`}
                    className="product-card group cursor-pointer"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[10px] border border-(--line)">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 33vw, 260px"
                        priority={productIndex < 3}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-(--muted) sm:text-base">
                      {product.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
