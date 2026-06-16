import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

  images: {
    unoptimized: true, // Capacitor tan a ngai
  },
  trailingSlash: false, // 'export' tan true a tha zawk
}

export default nextConfig