'use client'

import { routes } from '@/UI/header/NavMenu/constants'
import { useTranslations } from 'next-intl'

import { PageWrapper } from '@/UI/containers/PageWrapper'
import Link from 'next/link'

const AdminPage = () => {
  const t = useTranslations()

  return (
    <PageWrapper title="Admin Page">
      <Link className="flex h-12 items-center px-3.5" href={routes.adminForecasts}>
        {t('admin.forecasts.title')}
      </Link>
    </PageWrapper>
  )
}

export default AdminPage
