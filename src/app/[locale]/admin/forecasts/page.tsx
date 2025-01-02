'use client'

import { useEffect, useState } from 'react'
import { useGetForecasts } from '@/data/hooks'

import { ForecastsList } from '@/UI/admin/ForecastsList'
import { PageWrapper } from '@/UI/containers/PageWrapper'

const ForecastPage = () => {
  const [isClient, setIsClient] = useState(false)
  const { data: forecasts } = useGetForecasts()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !forecasts) return null

  return (
    <PageWrapper>
      <ForecastsList forecasts={forecasts} />
    </PageWrapper>
  )
}

export default ForecastPage
