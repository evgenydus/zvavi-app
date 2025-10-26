'use client'

import { useEffect, useState } from 'react'

import { useGetCurrentForecast } from '@/data/hooks/forecasts'

import { Loader } from '@/UI/components'
import CurrentForecast from './CurrentForecast'

import type { Forecast } from '@/business/types'

const CurrentForecastContainer = () => {
  const { data: forecast, isPending } = useGetCurrentForecast({ isShort: true })
  const [currentForecast, setCurrentForecast] = useState<Forecast>()

  useEffect(() => {
    if (!forecast) return

    setCurrentForecast(forecast)
  }, [forecast])

  if (isPending) return <Loader />

  if (!currentForecast) return null

  return <CurrentForecast forecast={currentForecast} />
}

export default CurrentForecastContainer
