import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // output: 'export' tih hi awm lo hrim hrim tur
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
}

export default nextConfig