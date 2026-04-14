import { Landmark, MapPinned, PencilRuler, ShieldCheck, Truck } from "lucide-react";
import type { HomeContent } from "@/i18n/content";

type PlanningSectionProps = {
  content: HomeContent["planning"];
};

const PLANNING_ICONS = [MapPinned, PencilRuler, ShieldCheck, Landmark, Truck] as const;

// 规划模块：呈现合作路径与关键执行触点。
export function PlanningSection({ content }: PlanningSectionProps): React.JSX.Element {
  return (
    <section id="planning" className="container-shell">
      <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="glass-card rounded-[32px] border border-(--line) p-6 sm:p-8">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl">
            {content.title}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.items.map((item, index) => {
            const Icon = PLANNING_ICONS[index];

            return (
              <article
                key={item.title}
                className="glass-card rounded-[28px] border border-(--line) p-5 shadow-[0_18px_48px_rgba(31,29,25,0.05)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--surface) text-(--accent)">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
