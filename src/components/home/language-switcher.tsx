import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitcher({
  locale,
  className = "",
}: LanguageSwitcherProps): React.JSX.Element {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-white/75 p-1 text-xs font-semibold tracking-[0.2em] text-[color:var(--muted)] uppercase backdrop-blur ${className}`.trim()}
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            className={`rounded-full px-3 py-2 transition ${
              isActive ? "bg-[color:var(--accent)] text-white" : "hover:bg-black/5"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
