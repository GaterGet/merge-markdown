import { Pathnames } from 'next-intl/navigation'

export const port = process.env.PORT || 3000
export const host = process.env.VERCEL_URL || `http://localhost:${port}`

export const defaultLocale = 'en' as const
export const locales = ['en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'ru', 'fr', 'de', 'es', 'pt'] as const

export const pathnames = {
	'/': '/',
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
