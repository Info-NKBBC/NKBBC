/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['nanke-blessing.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/featured/**',
      },
      {
        protocol: 'https',
        hostname: 'nanke-blessing.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
};