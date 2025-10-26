import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './config'
import { updateSession } from '../utils/supabase/middleware'

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
})

// Files that must stay at the root and should not be locale-prefixed
const PUBLIC_ROOT_FILES = new Set([
  '/favicon.ico',
  '/icon.png',
  '/apple-icon.png',
  '/robots.txt',
  '/site.webmanifest',
  '/manifest.webmanifest',
])

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If someone requests a locale-prefixed metadata file, redirect to the root one
  const localeFileMatch = pathname.match(/^\/(?:en|ka)\/(favicon\.ico|icon\.png|apple-icon\.png)$/)

  if (localeFileMatch) {
    return NextResponse.redirect(new URL(`/${localeFileMatch[1]}`, request.url))
  }

  // Skip Next.js internals, API routes and root public metadata files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_ROOT_FILES.has(pathname)
  ) {
    return NextResponse.next()
  }

  // Check if the locale is valid
  const localeMatched = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (!localeMatched) {
    const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url)

    return NextResponse.redirect(redirectUrl)
  }

  // Update the request locale
  const intlResponse = intlMiddleware(request)

  if (intlResponse) {
    intlResponse.headers.set('x-locale-verified', 'true')
  }

  const response = intlResponse || NextResponse.next()

  return updateSession(request, response)
}

export const config = {
  matcher: ['/', '/:locale(en|ka)?/:path*'],
}
