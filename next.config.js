/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.microcms-assets.io'],
    },
    experimental: {
        optimizeFonts: false  // フォントの最適化を無効化
    }
}

module.exports = nextConfig 