/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/mypage/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
