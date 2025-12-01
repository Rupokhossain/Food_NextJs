/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // এই "**" মানে হলো যেকোনো ডোমেইন থেকে ছবি এলাউড
      },
    ],
  },
};

export default nextConfig;