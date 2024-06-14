module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"],
  },
};
