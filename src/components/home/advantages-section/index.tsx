import Image from "next/image";
import type { HomeContent } from "@/i18n/content";
import { imgV } from "@/utils/image-version";

type AdvantagesSectionProps = {
  content: HomeContent["advantages"];
};

const ADVANTAGE_IMAGES = [
  imgV("/images-v3/home/advantages-section/1.jpg"),
  imgV("/images-v3/home/advantages-section/2.jpg"),
  imgV("/images-v3/home/advantages-section/3.jpg"),
];

// 优势模块：聚焦 SKTD 的核心价值与差异化能力。
export function AdvantagesSection({ content }: AdvantagesSectionProps): React.JSX.Element {
  return (
    <section id="advantages" className="container-shell">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="grid gap-4 md:grid-cols-2">
          {content.items.slice(0, 2).map((item, index) => {
            const imageUrl = ADVANTAGE_IMAGES[index];

            return (
              <article
                key={item.title}
                className="glass-card overflow-hidden rounded-[28px] border border-(--line) p-0 shadow-[0_18px_50px_rgba(31,29,25,0.06)]"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-(--accent) uppercase">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="flex h-full flex-col">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
          <p className="mt-auto max-w-xl pt-5 text-base leading-8 text-(--muted) sm:text-lg">
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
