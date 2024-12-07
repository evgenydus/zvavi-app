import { NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import createMiddleware from 'next-intl/middleware'

import type { NextRequest } from 'next/server'
import { defaultLocale, locales } from './config'
import { routes } from '@/UI/header/NavMenu/constants'

const intlMiddleware = createMiddleware({
  defaultLocale,
  locales,
})

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static and API routes
  if (pathname.startsWith('/_next/static') || pathname.startsWith('/api')) {
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

  // Supabase auth check
  const response = intlResponse || NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect if not authenticated
  if (!user && pathname.includes('/admin')) {
    const loginUrl = new URL(`/${defaultLocale}${routes.login}`, request.url)

    return NextResponse.redirect(loginUrl)
  }

  return response
}

export const config = {
  matcher: ['/', '/:locale(en|ka)?/:path*'],
}
