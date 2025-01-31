/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.microcms-assets.io', 'img.youtube.com'],
    },
    experimental: {
        optimizeFonts: false
    }
}

module.exports = nextConfig 