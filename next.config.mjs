/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: false, // Set to `true` for a permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  