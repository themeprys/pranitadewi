/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imgix.cosmicjs.com', 'cdn.cosmicjs.com'],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      }
    }

    // Remove custom CSS configuration to use Next.js built-in CSS support
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('css')) {
            return {
              ...oneOfRule,
              use: ['next-style-loader', 'css-loader'],
            }
          }
          return oneOfRule
        })
      }
      return rule
    })

    return config
  },
}

module.exports = nextConfig
