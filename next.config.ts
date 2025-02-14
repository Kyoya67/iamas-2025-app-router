import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
  images: {
    unoptimized: true,
  },
  // 本番環境でのみ全ての設定を適用
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
    basePath: '/exhibit25',
    assetPrefix: '/exhibit25',
  } : {})
};

export default nextConfig;
