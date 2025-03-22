'use client'

import { useEffect, useState } from 'react'
import { useGetForecast } from '@/data/hooks/forecasts'

import Forecast from './Forecast'

import type { Forecast as ForecastType } from '@/business/types'

const ForecastContainer = ({ forecastId }: { forecastId: number }) => {
  const { data: forecastData } = useGetForecast({ forecastId })
  const [forecast, setForecast] = useState<ForecastType>()

  useEffect(() => {
    if (!forecastData) return

    setForecast(forecastData)
  }, [forecastData])

  if (!forecast) return null

  return (
    <div>
      <Forecast forecast={forecast} />
    </div>
  )
}

export default ForecastContainer
