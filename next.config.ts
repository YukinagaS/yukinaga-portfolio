import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'out',
  basePath: '/yukinaga-portfolio',
  assetPrefix: '/yukinaga-portfolio',
};

export default nextConfig;
