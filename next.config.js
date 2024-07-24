/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.b-e.az'], // Buraya güvenilir domaininizi ekleyin
  },

  reactStrictMode: true,
  webpack(config, options) {
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig
