import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The original meter photo contains identifiable household information.
      // Keep the source in the restore archive, but stop serving it publicly.
      { source: "/case8.jpg", destination: "/projects", statusCode: 301 },
      {
        source: "/_next/image",
        has: [{ type: "query", key: "url", value: "/case8\\.jpg" }],
        destination: "/projects",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "dongxin24.com" }],
        destination: "https://www.dongxin24.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
