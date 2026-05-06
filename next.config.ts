import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: currentDirectory,
  },
  /** 每次设计师替换图片后，将此版本号 +1，所有图片缓存自动失效 */
  env: {
    NEXT_PUBLIC_IMAGE_VERSION: "2",
  },
  images: {
    /**
     * 允许 /images/** 下的所有本地图片，含版本号 query string（?v=1）
     * 不指定 search 字段表示接受任意 query string
     */
    localPatterns: [
      {
        pathname: "/images-v3/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
