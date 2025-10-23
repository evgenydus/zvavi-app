#!/usr/bin/env node

/**
 * Скрипт для автоматической конвертации YAML файлов переводов в JSON
 * Запускается автоматически перед сборкой проекта
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import YAML from 'yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const MESSAGES_DIR = path.join(__dirname, '..', 'messages')
const LOCALES = ['en', 'ka']

// eslint-disable-next-line no-console
console.log('🔄 Converting YAML translation files to JSON...\n')

let hasErrors = false

LOCALES.forEach((locale) => {
  const localeDir = path.join(MESSAGES_DIR, locale)

  // Проверяем существование директории
  if (!fs.existsSync(localeDir)) {
    // eslint-disable-next-line no-console
    console.warn(`⚠️  Warning: Directory not found: ${localeDir}`)
    return
  }

  // Читаем все YAML файлы
  const files = fs.readdirSync(localeDir).filter((file) => file.endsWith('.yml'))

  if (files.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(`⚠️  Warning: No YAML files found in ${localeDir}`)
    return
  }

  const combined = {}

  // Объединяем все YAML файлы в один объект
  files.forEach((file) => {
    const filePath = path.join(localeDir, file)

    try {
      const content = fs.readFileSync(filePath, 'utf8')
      const parsed = YAML.parse(content)

      if (typeof parsed !== 'object' || parsed === null) {
        // eslint-disable-next-line no-console
        console.error(`❌ Error: Invalid YAML structure in ${filePath}`)
        hasErrors = true
        return
      }

      Object.assign(combined, parsed)
      // eslint-disable-next-line no-console
      console.log(`   ✓ Processed: ${locale}/${file}`)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`❌ Error parsing ${filePath}:`, err.message)
      hasErrors = true
    }
  })

  // Сохраняем объединенный JSON файл
  const outputPath = path.join(MESSAGES_DIR, `${locale}.json`)

  try {
    fs.writeFileSync(outputPath, JSON.stringify(combined, null, 2), 'utf8')
    // eslint-disable-next-line no-console
    console.log(`✅ Created: messages/${locale}.json\n`)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`❌ Error writing ${outputPath}:`, err.message)
    hasErrors = true
  }
})

if (hasErrors) {
  // eslint-disable-next-line no-console
  console.error('\n❌ Conversion completed with errors')
  process.exit(1)
} else {
  // eslint-disable-next-line no-console
  console.log('✅ All translation files converted successfully!')
  process.exit(0)
}
