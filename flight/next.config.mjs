/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/tools/new",
        destination: "/tools-new",
      },
    ];
  },
};

export default nextConfig;
