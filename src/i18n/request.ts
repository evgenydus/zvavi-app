import { notFound } from 'next/navigation'
import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'
import { type Locale, locales } from '../config'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  if (!locales.includes(locale as Locale)) return notFound()

  // Динамический импорт JSON файлов, сгенерированных из YAML
  let messages: AbstractIntlMessages

  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch {
    return notFound()
  }

  return {
    messages,
    timeZone: 'Asia/Tbilisi',
  }
})
