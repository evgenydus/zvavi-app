import { getTranslations } from 'next-intl/server'

import { PageWrapper } from '@/UI/containers'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = async ({ children }: Readonly<LayoutProps>) => {
  const t = await getTranslations()

  return <PageWrapper title={t('admin.forecasts.title')}>{children}</PageWrapper>
}

export default Layout
