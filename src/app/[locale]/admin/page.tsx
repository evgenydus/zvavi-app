'use client'

import { routes } from '@/UI/header/NavMenu/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const AdminPage = () => {
  const t = useTranslations()

  return (
    <div>
      <Link className="flex h-12 items-center px-3.5" href={routes.forecast}>
        {t('admin.forecast.title')}
      </Link>
    </div>
  )
}

export default AdminPage
