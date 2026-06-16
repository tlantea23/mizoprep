import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Hei hi uncomment/ti nung rawh. Play Store tan a pawimawh ber
  images: {
    unoptimized: true, // Capacitor tan a ngai
  },
  trailingSlash: true, // 'export' tan true a tha zawk
}

export default nextConfig