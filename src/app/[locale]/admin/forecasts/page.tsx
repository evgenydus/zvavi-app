'use client'

import { useGetForecasts } from '@/data/hooks'

import { Loader } from '@/UI/components'

import { ForecastsList } from '@/UI/admin/Forecasts/ForecastsList'

const ForecastPage = () => {
  const { data: forecasts, isPending } = useGetForecasts()

  if (isPending) return <Loader />

  if (!forecasts) return null

  return <ForecastsList forecasts={forecasts} />
}

export default ForecastPage
