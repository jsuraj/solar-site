import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Backwards-compatible fallback for older Next.js versions
    // Keep both `domains` for older Next.js and `remotePatterns` for newer granular control
    domains: ['picsum.photos', 'raw.githubusercontent.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
