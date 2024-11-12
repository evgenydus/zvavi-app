import createMiddleware from 'next-intl/middleware'
import { locales } from './config'

export default createMiddleware({
  defaultLocale: 'en',
  locales,
})

export const config = {
  matcher: ['/', '/:locale(en|ru|ka)/:path*'],
}
