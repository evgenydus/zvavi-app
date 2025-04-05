import type { Avalanche, Forecast, Problem } from '@/business/types'

type ForecastFormPayload = {
  forecaster: string
  snowpack: string
  summary: string
  validUntil: string | null
  weather: string
}

export type ForecastCreatePayload = {
  forecast: ForecastFormPayload
  problems: Problem[]
  recentAvalanches: Avalanche[]
}

export type GetForecastQueryVariables = { forecastId: Forecast['id'] }
