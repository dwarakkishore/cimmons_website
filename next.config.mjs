/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces an `out/` folder that can be uploaded to
  // any static host (GoDaddy cPanel/Apache, etc.). No Node.js server needed.
  output: "export",
  // Each route becomes a folder with its own index.html, so Apache serves
  // /about-us/ -> /about-us/index.html without extra rewrite rules.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
