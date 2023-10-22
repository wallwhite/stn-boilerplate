/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true },
  output: 'standalone',
};

module.exports = nextConfig;
