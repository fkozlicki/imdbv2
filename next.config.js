/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['image.tmdb.org', 'img.youtube.com'],
	},
};

module.exports = nextConfig;
