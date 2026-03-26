import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? "/kaylaweb" : "",
  assetPrefix: isGithubActions ? "/kaylaweb/" : "",
};

export default nextConfig;
