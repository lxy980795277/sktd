import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { getProductCategories } from "@/constants/products";
import { getHomeContent } from "@/i18n/content";
import { isLocale } from "@/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getHomeContent(locale);

  // 将产品分类动态注入到 Products 导航项的 children，保持分类数据单一来源
  const productCategories = getProductCategories();
  const navigation = content.header.navigation.map((item) => {
    if (item.href === "/products") {
      return {
        ...item,
        children: productCategories.map((cat) => ({
          label: cat.title,
          href: `/products?category=${cat.id}`,
        })),
      };
    }
    return item;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        locale={locale}
        navigation={navigation}
      />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={locale} content={content.footer} />
    </div>
  );
}
