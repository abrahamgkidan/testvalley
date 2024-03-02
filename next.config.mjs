/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
        pathname: "/static/main_banner/**",
      },
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
        pathname: "/static/main_shortcut/**",
      },
      {
        protocol: "https",
        hostname: "dvd6ljcj7w3pj.cloudfront.net",
        port: "",
        pathname: "/media/PUBLICATION/**",
      },
      {
        protocol: "https",
        hostname: "prod-testvalley.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
