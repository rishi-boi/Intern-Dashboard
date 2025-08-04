import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000", // Example: if your frontend is on port 3001
    "http://192.168.28.164", // Example: if you're using a custom domain via /etc/hosts
  ],
};

export default nextConfig;
