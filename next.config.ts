import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: '/banana',
          },
        ];
    }
};

export default nextConfig;
