/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: isProd ? '/mypage/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
