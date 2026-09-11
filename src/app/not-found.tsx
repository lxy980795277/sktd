import { NotFoundView } from "@/components/common/not-found-view";
import { getCommonContent } from "@/i18n/common-content";
import { defaultLocale } from "@/i18n/config";

export default function NotFound(): React.JSX.Element {
  return (
    <NotFoundView
      content={getCommonContent(defaultLocale).notFound}
      homeHref={`/${defaultLocale}/home`}
    />
  );
}
