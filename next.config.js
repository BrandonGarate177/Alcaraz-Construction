/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    // During production builds, treat type errors as build failures
    ignoreBuildErrors: false,
  },
  eslint: {
    // During production builds, treat lint errors as build failures
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
