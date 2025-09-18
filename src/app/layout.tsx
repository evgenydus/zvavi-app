import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Toaster } from 'sonner'

import WIPBanner from '@/UI/components/WIPBanner'
import './globals.css'
import type { Locale } from '../config'

import { SupabaseContextProvider } from '@/business/context'
import { QueryClientProvider } from '@/data'
import { ubuntuSans } from '@/fonts'
import { Header } from '@/UI/header'

export const metadata: Metadata = {
  description:
    'Avalanche forecast and weather information for the backcountry skier and snowboarder.',
  title: 'Zvavi App',
}

type LayoutProps = {
  children: React.ReactNode
  params: { locale: Locale }
}

const Layout = async (props: Readonly<LayoutProps>) => {
  const params = await props.params

  const { children } = props

  const messages = await getMessages()
  const { locale } = params

  return (
    <html lang={locale}>
      <body className={`${ubuntuSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <QueryClientProvider>
            <SupabaseContextProvider>
              <Header />
              <WIPBanner />
              <Toaster />
              {children}
            </SupabaseContextProvider>
          </QueryClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
