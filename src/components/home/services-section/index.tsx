import Link from "next/link";
import { ArrowRight, Factory, Landmark, PencilRuler, ShieldCheck, Truck } from "lucide-react";
import type { HomeContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

type ServicesSectionProps = {
  locale: Locale;
  content: HomeContent["services"];
};

const SERVICE_ICONS = [Factory, PencilRuler, ShieldCheck, Landmark, Truck] as const;

// 服务模块：快速呈现核心能力入口。
export function ServicesSection({ locale, content }: ServicesSectionProps): React.JSX.Element {
  return (
    <section id="services" className="container-shell">
      <div className="rounded-[36px] border border-(--line) bg-[#f9f6f0] px-6 py-8 shadow-[0_22px_64px_rgba(31,29,25,0.05)] sm:px-8 sm:py-10 lg:px-10">
        <p className="eyebrow">{content.eyebrow}</p>
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title max-w-3xl text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-[3.5rem]">
            {content.title}
          </h2>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent)">
            Contact SKTD
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-5">
          {content.items.map((item, index) => {
            const Icon = SERVICE_ICONS[index];

            return (
              <article
                key={item.title}
                className="rounded-[28px] border border-(--line) bg-white px-5 py-6 shadow-[0_12px_30px_rgba(31,29,25,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-xs font-semibold tracking-[0.22em] text-(--accent) uppercase">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
