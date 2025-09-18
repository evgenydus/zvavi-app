import { Toast } from '@base-ui-components/react/toast'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { ToastList } from '@/UI/components'
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
        <div className="isolate">
          <NextIntlClientProvider messages={messages}>
            <QueryClientProvider>
              <SupabaseContextProvider>
                <Toast.Provider>
                  <Toast.Portal>
                    <Toast.Viewport className="fixed bottom-2 left-auto right-2 top-auto mx-0 my-auto w-[300px]">
                      <ToastList />
                    </Toast.Viewport>
                  </Toast.Portal>
                  <Header />
                  <WIPBanner />
                  {children}
                </Toast.Provider>
              </SupabaseContextProvider>
            </QueryClientProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}

export default Layout
