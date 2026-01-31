import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@testa/forms", "@testa/help-center", "@testa/cms", "@testa/utils"],
};

export default nextConfig;
