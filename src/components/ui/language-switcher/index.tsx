import { useLocale } from 'next-intl'

import { locales } from '@/i18n/i18n'

import { useCustomGetTranslation } from '@/hooks/useCustomGetTranslation'
import { Globe } from 'lucide-react'
import { LocaleSwitcherSelect } from './LocaleSwitcherSelect'

import { localeNames } from '@/i18n/i18n'
import { cn } from '@/lib/utils'
export default function LocaleSwitcher() {
	const { t } = useCustomGetTranslation('Index')
	const locale = useLocale()

	return (
		<section className='flex items-center gap-1'>
			<Globe className={cn(
				"h-4 w-4",
				"text-foreground"
			)} />
			<LocaleSwitcherSelect defaultValue={locale} label={t('label').trim()}>
				{locales.map(cur => (
					<option className='bg-gray-700' key={cur} value={cur}>
						{localeNames[cur as keyof typeof localeNames]}
					</option>
				))}
			</LocaleSwitcherSelect>
		</section>
	)
}
