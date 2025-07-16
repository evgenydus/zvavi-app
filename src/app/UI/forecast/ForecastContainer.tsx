'use client'

import { useEffect, useState } from 'react'

import { useGetForecast } from '@/data/hooks/forecasts'

import Forecast from './Forecast'

import type { FullForecast } from '@/business/types'
import { useLoader } from '@/UI/loader'

const ForecastContainer = ({ forecastId }: { forecastId: FullForecast['id'] }) => {
  const { data: forecastData, isFetching } = useGetForecast({ forecastId })
  const [forecast, setForecast] = useState<FullForecast>()
  const { hideLoader, showLoader } = useLoader()

  useEffect(() => {
    if (!forecastData) return

    setForecast(forecastData)
  }, [forecastData])

  useEffect(() => {
    if (isFetching) showLoader()
    else hideLoader()
  }, [isFetching, showLoader, hideLoader])

  if (!forecast) return null

  return (
    <div>
      <Forecast forecast={forecast} />
    </div>
  )
}

export default ForecastContainer
