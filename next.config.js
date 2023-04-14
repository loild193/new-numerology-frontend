/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    minimumCacheTTL: 10368000,
    domains: ['assets.io'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    APP_ENV: process.env.APP_ENV || 'development',
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin')

    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 5000,
      ignored: ['**/.git', '**/.next', '**/node_modules'],
    }

    return config
  },
}

module.exports = nextConfig
