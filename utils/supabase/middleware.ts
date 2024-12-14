import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

import { defaultLocale } from '../../src/config'
import { routes } from '@/UI/header/NavMenu/constants'

export async function updateSession(request: NextRequest, response: NextResponse) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const { pathname } = request.nextUrl
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && pathname.includes('/admin')) {
    const loginUrl = new URL(`/${defaultLocale}${routes.login}`, request.url)

    return NextResponse.redirect(loginUrl)
  }

  return response
}
