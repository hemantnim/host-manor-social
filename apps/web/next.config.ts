import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dynamic deployment config for Vercel */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
