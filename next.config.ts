/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // API routes hi static export ah a kal lo, mahse Vercel ah a kal tho
  // trailingSlash: true, // routing buai chuan uncomment rawh
}

module.exports = nextConfig