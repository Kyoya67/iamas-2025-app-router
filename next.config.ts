import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
  images: {
    domains: ['images.microcms-assets.io', 'img.youtube.com', 'd3jxpylbfj8spt.cloudfront.net'],
    unoptimized: true,
  },
  // 本番環境でのみ適用される設定
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
    basePath: '/exhibit25',
    assetPrefix: '/exhibit25',
  } : {})
};

export default nextConfig;
