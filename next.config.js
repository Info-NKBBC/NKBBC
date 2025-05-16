/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['nanke-blessing.vercel.app', 'chauhuis-projects.vercel.app'],
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
      {
        protocol: 'https',
        hostname: 'chauhuis-projects.vercel.app',
        port: '',
        pathname: '/yd9r/images/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
};