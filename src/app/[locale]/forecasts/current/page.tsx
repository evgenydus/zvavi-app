'use client'

import { redirect } from 'next/navigation'

import { useGetCurrentForecast } from '@/data/hooks/forecasts'

import { Loader } from '@/UI/components'

import type { FullForecast } from '@/business/types'
import { PageWrapper } from '@/UI/containers'
import Forecast from '@/UI/forecast/Forecast'

const CurrentForecastPage = () => {
  const { data: forecast, isPending } = useGetCurrentForecast()

  if (isPending) return <Loader />

  if (!forecast) redirect('/')

  return (
    <PageWrapper>
      <Forecast forecast={forecast as FullForecast} />
    </PageWrapper>
  )
}

export default CurrentForecastPage
