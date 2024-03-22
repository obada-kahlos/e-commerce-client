/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Adjust the pattern to match Hasura's subdomains
        port: "",
        pathname: "**", // Adjust if your path pattern differs
      },
    ],
  },
};

export default nextConfig;
