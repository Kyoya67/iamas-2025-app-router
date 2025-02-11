/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.microcms-assets.io', 'img.youtube.com'],
        unoptimized: true,
    },
    // 本番環境でのみ適用される設定
    ...(process.env.NODE_ENV === 'production' ? {
        output: 'export',
        basePath: '/exhibit25',
        assetPrefix: '/exhibit25',
    } : {})
}

module.exports = nextConfig