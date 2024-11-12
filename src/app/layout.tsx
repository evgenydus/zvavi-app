import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Locale } from '../config'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  description:
    'Avalanche forecast and weather information for the backcountry skier and snowboarder.',
  title: 'Zvavi App',
}

type LayoutProps = {
  children: React.ReactNode
  params: { locale: Locale }
}

const Layout = async ({ children, params }: Readonly<LayoutProps>) => {
  const messages = await getMessages()
  const { locale } = params

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
