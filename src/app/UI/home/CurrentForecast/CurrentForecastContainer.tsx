'use client'

import { useEffect, useState } from 'react'

import { useGetCurrentForecast } from '@/data/hooks/forecasts'

import CurrentForecast from './CurrentForecast'

import type { Forecast } from '@/business/types'
import { useLoader } from '@/UI/loader'

const CurrentForecastContainer = () => {
  const { data: forecast, isFetching } = useGetCurrentForecast()
  const [currentForecast, setCurrentForecast] = useState<Forecast>()
  const { hideLoader, showLoader } = useLoader()

  useEffect(() => {
    if (!forecast) return

    setCurrentForecast(forecast)
  }, [forecast])

  useEffect(() => {
    if (isFetching) showLoader()
    else hideLoader()
  }, [isFetching, hideLoader, showLoader])

  if (!currentForecast) return null

  return <CurrentForecast forecast={currentForecast} />
}

export default CurrentForecastContainer
