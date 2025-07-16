'use client'

import { useEffect } from 'react'

import { useGetForecasts } from '@/data/hooks'

import { ForecastsList } from '../../../UI/admin/Forecasts/ForecastsList'

import { useLoader } from '@/UI/loader'

const ForecastPage = () => {
  const { data: forecasts, isFetching } = useGetForecasts()
  const { hideLoader, showLoader } = useLoader()

  useEffect(() => {
    if (isFetching) showLoader()
    else hideLoader()
  }, [isFetching, showLoader, hideLoader])

  if (!forecasts) return null

  return <ForecastsList forecasts={forecasts} />
}

export default ForecastPage
