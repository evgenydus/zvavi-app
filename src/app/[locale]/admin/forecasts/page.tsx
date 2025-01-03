'use client'

import { useEffect, useState } from 'react'
import { useGetForecasts } from '@/data/hooks'
import { useTranslations } from 'next-intl'

import { ForecastsList } from '../../../UI/admin/Forecasts/ForecastsList'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const ForecastPage = () => {
  const t = useTranslations()
  const [isClient, setIsClient] = useState(false)
  const { data: forecasts } = useGetForecasts()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !forecasts) return null

  return (
    <PageWrapper title={t('admin.forecasts.title')}>
      <ForecastsList forecasts={forecasts} />
    </PageWrapper>
  )
}

export default ForecastPage
