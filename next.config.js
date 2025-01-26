/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.microcms-assets.io'],
    },
    experimental: {
        optimizeFonts: false
    }
}

module.exports = nextConfig 