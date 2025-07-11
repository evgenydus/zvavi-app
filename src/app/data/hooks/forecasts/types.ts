import type { Avalanche, Forecast, HazardLevels, Problem } from '@/business/types'

type ForecastFormPayload = {
  id?: Forecast['id']
  additionalHazards: string
  forecaster: string
  hazardLevels: HazardLevels
  snowpack: string
  summary: string
  validUntil: string | null
  weather: string
}

export type ForecastCreateUpdatePayload = {
  forecast: ForecastFormPayload
  avalancheProblems: Problem[]
  recentAvalanches: Avalanche[]
  initialRecentAvalanches?: Avalanche[]
  initialProblems?: Problem[]
}

export type GetForecastQueryVariables = {
  forecastId: Forecast['id']
  status?: Forecast['status']
}
