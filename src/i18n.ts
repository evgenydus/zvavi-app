import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { type Locale, locales } from './config'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as unknown as Locale)) return notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
