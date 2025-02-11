import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('src/i18n/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}

export default withNextIntl(nextConfig)
