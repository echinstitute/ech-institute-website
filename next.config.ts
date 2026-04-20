import type { NextConfig } from "next";
// Central route config — all aliases are defined in src/config/routes.ts
// @ts-ignore — runtime import of src/ file from config root
import { PATH_ALIASES } from "./src/config/routes";

const nextConfig: NextConfig = {
  // ─────────────────────────────────────────────
  // URL REWRITES  — short-path aliases
  // Add new aliases in src/config/routes.ts → PATH_ALIASES.
  // No changes needed here when adding new routes.
  // ─────────────────────────────────────────────
  async rewrites() {
    return PATH_ALIASES;
  },

  // ─────────────────────────────────────────────
  // URL REDIRECTS  — legacy path cleanup
  // ─────────────────────────────────────────────
  async redirects() {
    return [
      // Add manual redirects here if needed
    ];
  },


  // ─────────────────────────────────────────────
  // BUILD
  // ─────────────────────────────────────────────
  experimental: {
    webpackBuildWorker: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ─────────────────────────────────────────────
  // IMAGE OPTIMIZATION
  // ─────────────────────────────────────────────
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // WEBPACK OVERRIDES
  // Forces webpack instead of Turbopack (avoids SST/MetaMask SDK file errors)
  // ─────────────────────────────────────────────
  webpack: (config, { isServer, webpack }) => {
    // Browser build: stub Node-only modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    // Suppress MetaMask SDK's React Native async-storage import
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^@react-native-async-storage\/async-storage$/,
      })
    );

    // Silence MetaMask SDK resolve warnings
    config.ignoreWarnings = [
      { module: /node_modules\/@metamask\/sdk/ },
      { message: /Can't resolve '@react-native-async-storage\/async-storage'/ },
    ];

    return config;
  },
};

export default nextConfig;
