import { redirect } from "next/navigation";
import { isLocale } from "@/i18n/config";

type LegacyProducesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LegacyProducesPage({
  params,
}: LegacyProducesPageProps): Promise<never> {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  redirect(`/${resolvedLocale}/products`);
}
