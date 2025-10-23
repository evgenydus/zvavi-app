import { isPlainObject } from 'lodash'
import { notFound } from 'next/navigation'
import type { AbstractIntlMessages } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import fs from 'node:fs/promises'
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

  console.log('Messages dir path:', messagesDir)

  try {
    await fs.access(messagesDir)
  } catch {
    console.log('FS access Failed ')

    return notFound()
  }

  const files = (await fs.readdir(messagesDir)).filter((file) => file.endsWith('.yml'))

  console.log('Files found:', files)

  if (files.length === 0) return notFound()

  const messages: AbstractIntlMessages = {}

  const parsedList = (
    await Promise.all(
      files.map(async (fileName) => {
        const filePath = path.join(messagesDir, fileName)

        try {
          const content = await fs.readFile(filePath, 'utf8')
          const parsed = YAML.parse(content)

          if (!isPlainObject(parsed)) {
            console.warn(`Invalid YAML structure in ${filePath}, skipping.`)

            return null
          }

          return parsed as AbstractIntlMessages
        } catch (err) {
          console.warn(`Failed to read/parse ${filePath}:`, err)

          return null
        }
      }),
    )
  ).filter(Boolean)

  // eslint-disable-next-line no-restricted-syntax
  for (const parsed of parsedList) {
    Object.assign(messages, parsed)
  }

  return {
    messages,
    timeZone: 'Asia/Tbilisi',
  }
})
