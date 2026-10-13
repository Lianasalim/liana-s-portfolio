/** @type {import('next').NextConfig} */

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubActions
    ? { basePath: "/liana-s-portfolio" }
    : {}),
};

export default nextConfig;