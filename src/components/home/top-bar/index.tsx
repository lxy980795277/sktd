import type { HomeContent } from "@/i18n/content";

type TopBarProps = {
  message: HomeContent["topBar"];
};

// 顶部提示条：承载品牌一句话价值说明。
export function TopBar({ message }: TopBarProps): React.JSX.Element {
  return (
    <div className="bg-(--accent) py-3 text-white">
      <div className="container-shell flex items-center justify-center text-center text-xs font-medium tracking-[0.2em] uppercase sm:justify-start sm:text-left">
        <span>{message}</span>
      </div>
    </div>
  );
}
