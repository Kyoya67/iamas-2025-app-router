import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
  images: {
    domains: ['images.microcms-assets.io', 'img.youtube.com'],
    unoptimized: true,
  },
  // 開発環境では basePath と assetPrefix を設定しない
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
    basePath: '/exhibit25',
    assetPrefix: '/exhibit25',
  } : {})
};

export default nextConfig;
