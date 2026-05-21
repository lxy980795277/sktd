import Image from "next/image";
import type { HomeContent } from "@/i18n/content";
import { imgV } from "@/utils/image-version";

type AdvantagesSectionProps = {
  content: HomeContent["advantages"];
};

const ADVANTAGE_IMAGES = [
  imgV("/images-v4/home/advantages-section/1.jpg"),
  imgV("/images-v4/home/advantages-section/2.jpg"),
  imgV("/images-v4/home/advantages-section/3.jpg"),
];

// 优势模块：eyebrow 置顶左对齐，三卡片平铺展示核心差异化能力。
export function AdvantagesSection({ content }: AdvantagesSectionProps): React.JSX.Element {
  return (
    <section id="advantages" className="w-full px-4 sm:px-6 lg:px-10">
      <p className="eyebrow mb-6">{content.eyebrow}</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.slice(0, 3).map((item, index) => {
          const imageUrl = ADVANTAGE_IMAGES[index];

          return (
            <article
              key={item.title}
              className="group relative h-[380px] cursor-pointer overflow-hidden rounded-[28px] border border-(--line) bg-(--card)! shadow-[0_18px_50px_rgba(31,29,25,0.06)]"
            >
              {/* 图片容器：默认 h-40，hover 时高度扩展至填满整张卡片 */}
              <div className="absolute inset-x-0 top-0 h-48 overflow-hidden transition-[height] duration-500 ease-out group-hover:h-full">
                <div className="relative h-full w-full">
                  <Image
                    src={imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* 暗色遮罩：hover 时渐显，承托居中白色文字 */}
              <div className="absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

              {/* 默认文字区（图片下方）：hover 时淡出下移 */}
              <div className="absolute inset-x-0 top-48 bottom-0 p-6 transition-[opacity,transform] duration-500 ease-out group-hover:translate-y-3 group-hover:opacity-0">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-(--accent)">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
              </div>

              {/* hover 居中文字：默认不可见，hover 时上移淡入 */}
              <div className="absolute inset-0 z-10 flex translate-y-3 flex-col items-center justify-center p-8 text-center text-white opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold tracking-[0.18em] text-white/70">
                  {item.value}
                </p>
                <p className="mt-4 max-w-xs text-sm leading-7 text-white/85">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
