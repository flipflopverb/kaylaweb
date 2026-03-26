import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/kaylaweb",
  assetPrefix: "/kaylaweb/",
};

export default nextConfig;
