'use client'

import { useEffect, useState } from 'react'
import { type Forecast, useGetForecasts } from '@/data/hooks'

import CurrentForecast from './CurrentForecast'

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
