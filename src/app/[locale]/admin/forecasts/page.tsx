'use client'

import { useGetForecasts } from '@/data/hooks'

import { ForecastsList } from '../../../UI/admin/Forecasts/ForecastsList'

const ForecastPage = () => {
  const { data: forecasts } = useGetForecasts()

  if (!forecasts) return null

  return <ForecastsList forecasts={forecasts} />
}

export default ForecastPage
