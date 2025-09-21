/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Note: suppressHydrationWarning is not a valid Next.js config option
  // Hydration warnings are handled at the component level instead
  // Suppress webpack warnings for Genkit dependencies
  webpack: (config) => {
    config.ignoreWarnings = [
      /require.extensions is not supported by webpack/,
      /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
    ];
    return config;
  },
};

module.exports = nextConfig;
