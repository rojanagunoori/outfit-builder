// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <- this replaces the old export command
  trailingSlash: true, // optional but often helps with static routing
};

module.exports = nextConfig;
