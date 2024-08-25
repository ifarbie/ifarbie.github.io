/** @type {import('next').NextConfig} */
const allowedDomains = [
  'seeklogo.com',
  'img.icons8.com',
  'cdn-icons-png.flaticon.com',
  'cdn.icon-icons.com',
  'git-scm.com',
  'cdn.iconscout.com',
  'cdn4.iconfinder.com',
  'getbootstrap.com',
  'github.githubassets.com',
  'upload.wikimedia.org',
  'uxwing.com',
  'adware-technologies.s3.amazonaws.com',
  'cdn.worldvectorlogo.com',
  'raw.githubusercontent.com',
  'joi.dev',
  'opengraph.githubassets.com',
  'gorm.io',
  'i.pinimg.com'
];

const nextConfig = {
  images: {
    remotePatterns: allowedDomains.map((domain) => ({
      protocol: 'https',
      hostname: domain,
    })),
  },
  // output: "export"
};

export default nextConfig;
