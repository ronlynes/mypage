/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    assetPrefix: isProd ? '/mypage/' : '',
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
