import {
  aspects,
  avalancheProblemTypes,
  confidenceLevels,
  distributionTypes,
  sensitivityLevels,
  trends,
} from '@/business/constants'

export type HazardLevel = 'low' | 'moderate' | 'considerable' | 'high'

export type HazardLevelScale = '1' | '2' | '3' | '4' | '5'
export type ElevationZone = 'highAlpine' | 'alpine' | 'subAlpine'
export type TimeRange = { start: Date | string | null; end: Date | string | null }

export type User = {
  id: string
  email: string
}

export type AvalancheSize = 1 | 2 | 3 | 4 | 5
export type AvalancheProblemTypes = keyof typeof avalancheProblemTypes
export type Confidence = keyof typeof confidenceLevels
export type Distribution = keyof typeof distributionTypes
export type Sensitivity = keyof typeof sensitivityLevels
export type Trend = keyof typeof trends
export type Aspect = keyof typeof aspects
export type ElevationKey = ElevationZone | 'overall'
export type HazardLevels = Record<ElevationKey, HazardLevelScale>
type Aspects = Record<ElevationZone, Aspect[]>

export type Forecast = {
  createdAt: string
  forecaster: string
  hazardLevels: HazardLevels
  id: string
  snowpack: string
  status: 'draft' | 'published'
  summary: string
  validUntil: string
}

export type Problem = {
  aspects: Aspects
  avalancheSize: AvalancheSize
  confidence: Confidence
  description: string
  distribution: Distribution
  isAllDay: boolean
  sensitivity: Sensitivity
  timeOfDay: TimeRange
  trend: Trend
  type: AvalancheProblemTypes | null
}

export type ForecastFormData = {
  forecaster: string
  hazardLevels: HazardLevels
  otherHazards: string
  snowpack: string
  summary: string
  validUntil: Date | null
  weather: string
}

export type Avalanche = {
  id?: string
  aspects: Aspects
  date: Date | null
  description: string
  size: AvalancheSize
}

export type FullForecast = Forecast & {
  recentAvalanches: Avalanche[]
}
