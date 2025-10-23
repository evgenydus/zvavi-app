import { notFound } from 'next/navigation'
import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'
import { type Locale, locales } from '../config'

// Whitelist of message file imports to prevent path traversal
const messageFiles: Record<Locale, () => Promise<{ default: AbstractIntlMessages }>> = {
  en: () => import('../../messages/en.json'),
  ka: () => import('../../messages/ka.json'),
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  if (!locales.includes(locale as Locale)) return notFound()

  try {
    const messages = (await messageFiles[locale as Locale]()).default

    return {
      messages,
      timeZone: 'Asia/Tbilisi',
    }
  } catch {
    return notFound()
  }
})
