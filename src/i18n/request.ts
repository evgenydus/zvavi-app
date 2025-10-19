import { notFound } from 'next/navigation'
import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import fs from 'node:fs'
import path from 'node:path'
import YAML from 'yaml'

import { routing } from './routing'
import { type Locale, locales } from '../config'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  if (!locales.includes(locale as Locale)) return notFound()

  const messagesDir = path.join(process.cwd(), 'messages', locale)

  if (!fs.existsSync(messagesDir)) return notFound()

  const files = fs.readdirSync(messagesDir).filter((file) => file.endsWith('.yml'))

  if (files.length === 0) return notFound()

  let messages: AbstractIntlMessages = {}

  // eslint-disable-next-line no-restricted-syntax
  for (const fileName of files) {
    const filePath = path.join(messagesDir, fileName)
    const content = fs.readFileSync(filePath, 'utf8')
    const parsed = YAML.parse(content)

    messages = {
      ...messages,
      ...parsed, // можно сделать deepMerge, если нужно
    }
  }

  return {
    messages,
    timeZone: 'Asia/Tbilisi',
  }
})
