'use client'

import { useEffect, useState } from 'react'
import { useGetForecasts } from '@/data/hooks'

import CurrentForecast from './CurrentForecast'

import type { Forecast } from '@/business/types'

const CurrentForecastContainer = () => {
  const { data: forecasts } = useGetForecasts()
  const [currentForecast, setCurrentForecast] = useState<Forecast>()

  useEffect(() => {
    if (!forecasts) return

    setCurrentForecast(forecasts[0])
  }, [forecasts])

  if (!currentForecast) return null

  return <CurrentForecast forecast={currentForecast} />
}

export default CurrentForecastContainer
