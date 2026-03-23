import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/wiep', destination: '/podcast/wiep' },
      { source: '/peepaneip', destination: '/podcast/peepaneip' },
      { source: '/fusaka-files', destination: '/podcast/fusaka-files' },
      { source: '/epd', destination: '/podcast/epd' },
    ];
  },
  // Explicitly use webpack instead of Turbopack
  experimental: {
    webpackBuildWorker: true,
  },
  // Image optimization settings
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
  // Disable Turbopack to prevent SST file errors
  // Use --webpack flag in build command instead
  webpack: (config, { isServer, webpack }) => {
    // Fix for webpack runtime errors
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Ignore React Native modules in browser builds (MetaMask SDK issue)
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^@react-native-async-storage\/async-storage$/,
      })
    );
    
    // Ignore specific modules that cause issues
    config.ignoreWarnings = [
      { module: /node_modules\/@metamask\/sdk/ },
      { message: /Can't resolve '@react-native-async-storage\/async-storage'/ },
    ];
    
    return config;
  },
};

export default nextConfig;
