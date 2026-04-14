import type { HomeContent } from "@/i18n/content";

type MilestonesSectionProps = {
  content: HomeContent["milestones"];
};

// 里程碑模块：按时间轴表达企业成长节点。
export function MilestonesSection({ content }: MilestonesSectionProps): React.JSX.Element {
  return (
    <section id="milestones" className="container-shell">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title mt-5 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item) => {
          return (
            <article
              key={`${item.year}-${item.title}`}
              className="glass-card rounded-[28px] border border-(--line) p-6 shadow-[0_16px_44px_rgba(31,29,25,0.05)]"
            >
              <p className="text-sm font-semibold tracking-[0.24em] text-(--accent) uppercase">{item.year}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
