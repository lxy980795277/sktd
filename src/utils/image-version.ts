/**
 * 给本地图片路径追加全局版本号 query 参数
 * 版本号在 next.config.ts 的 env.NEXT_PUBLIC_IMAGE_VERSION 中维护
 * 每次设计师替换图片后只需将版本号 +1，浏览器/CDN 缓存即自动失效
 */
export const imgV = (src: string): string => {
  const v = process.env.NEXT_PUBLIC_IMAGE_VERSION;
  return v ? `${src}?v=${v}` : src;
};
