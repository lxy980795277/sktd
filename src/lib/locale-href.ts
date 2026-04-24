/**
 * 将 i18n 中配置的 `href` 拼成最终 URL。
 * - 以 `#` 开头：首页同页锚点，首页显式路由为 `/[locale]/home`。
 * - 以 `/` 开头：同语言下站内绝对路径（如 `/home`、`/about`、`/contact`）。
 */
export function getLocaleHref(locale: string, href: string): string {
  if (href.startsWith("#")) {
    return `/${locale}/home${href}`;
  }
  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }
  return `/${locale}/${href}`;
}
