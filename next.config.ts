import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [{ source: "/jjv", destination: "/", permanent: true }];
  },
};

export default nextConfig;
