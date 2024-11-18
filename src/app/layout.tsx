import { ubuntuSans } from '@/fonts'
import { getMessages } from 'next-intl/server'

import { Header } from '@/[locale]/components/header'
import { NextIntlClientProvider } from 'next-intl'

import './globals.css'

import type { Locale } from '../config'
import type { Metadata } from 'next'

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
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
