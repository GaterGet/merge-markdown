import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Montserrat } from 'next/font/google'
import { locales } from '@/i18n/i18n'
import { ToastProvider } from '@/components/ui/toast'
import Analytics from '@/components/Analytics'
import { Toaster } from '@/components/ui/toaster'

const monserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
// 	title: {
// 		template: '%s | Next-Intl Multiple Languages',
// 		default: 'Next-Intl Multiple Languages'
// 	},
// 	description:
// 		"Next-Intl is a Next.js template that's pre-configured with multiple languages and dark mode. It's built with Tailwind CSS, TypeScript, and ESLint."
// }
// export function generateStaticParams() {
// 	return locales.map((locale) => ({locale}));
// }
interface IRootLayoutProps {
	children: React.ReactNode
	params: { locale: string }
}

interface LayoutProps {
	children: React.ReactNode
	params: { locale: string };
}

export async function generateMetadata({ params }: Pick<LayoutProps, 'params'>
): Promise<Metadata> {
	const  { locale }  = params
	// 导入对应语言的字典
	const dict = await import(`../../../messages/${locale}.json`).then(module => module.default)

	// 构建语言替代链接对象
	const languageAlternates = {
		en: '/en',
		'zh-CN': '/zh-CN',
		'zh-TW': '/zh-TW',
		ja: '/ja',
		ko: '/ko',
		ru: '/ru',
		fr: '/fr',
		de: '/de',
		es: '/es',
		pt: '/pt'
	}

	return {
		title: dict.metadata.title,
		description: dict.metadata.description,
		keywords: dict.metadata.keywords,
		icons: {
			icon: '/favicon.png',
			shortcut: '/favicon.png',
			apple: '/favicon.png'
		},
		openGraph: {
			title: dict.metadata.title,
			description: dict.metadata.description,
			locale: locale,
			type: 'website',
			images: [
				{
					url: 'https://www.mergemarkdown.com/og-image.png',
					width: 1200,
					height: 630,
					alt: dict.metadata.title
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: dict.metadata.title,
			description: dict.metadata.description,
			images: ['https://www.mergemarkdown.com/og-image.png']
		},
		alternates: {
			languages: languageAlternates
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		}
	}
}

export default function RootLayout({
	children,
	params: { locale }
}: Readonly<IRootLayoutProps>) {
	const messages = useMessages()

	return (
		<html lang={locale}>
			<link rel='icon' href='/image/favicon.ico' sizes='any' />
			<body className={monserrat.className}>
				<Analytics />
				<ToastProvider>
					<NextIntlClientProvider locale={locale} messages={messages}>
						{children}
					</NextIntlClientProvider>
					<Toaster />
				</ToastProvider>
			</body>
		</html>
	)
}
