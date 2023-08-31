/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['image.tmdb.org', 'img.youtube.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'img.youtube.com',
				port: '',
			},
		],
	},
};

module.exports = nextConfig;
