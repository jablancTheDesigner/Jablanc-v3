/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.jp", "i.ibb.co"],
  },
};

module.exports = nextConfig;
