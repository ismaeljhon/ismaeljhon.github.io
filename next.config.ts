import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="/<repo-name>" for GitHub Pages project sites.
// Leave empty for user sites (<user>.github.io) or custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
