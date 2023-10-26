/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: { unoptimized: true },
  output: 'standalone',
};

module.exports = nextConfig;
