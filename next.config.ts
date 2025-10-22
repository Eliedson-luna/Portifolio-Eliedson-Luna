import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com', // substitua pelo domínio real
        port: '',
        pathname: '/**',
      }
    ],
  },
}

export default withContentlayer(nextConfig);
