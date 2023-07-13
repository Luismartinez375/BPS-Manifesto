/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
