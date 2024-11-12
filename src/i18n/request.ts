import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

import { type Locale, locales } from '../config'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale
  }

  if (!locales.includes(locale as Locale)) return notFound()

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
