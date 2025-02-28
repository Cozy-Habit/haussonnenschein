/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Apply only for JavaScript/TypeScript
      use: ["@svgr/webpack"], // Use SVGR for these files
    });

    // Add rule for SVGs used as static assets (e.g., for background images)
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(css|sass|scss)$/i, // Apply only for CSS/SASS files
      type: "asset", // Emit them as files
    });
    return config;
  },
};

export default nextConfig;
