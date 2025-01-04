import {
  aspects,
  avalancheProblemTypes,
  confidenceLevels,
  distributionTypes,
  sensitivityLevels,
  trends,
} from '@/business/constants'

export type HazardLevel = 'low' | 'moderate' | 'considerable' | 'high'

export type HazardLevelScale = 1 | 2 | 3 | 4 | 5
export type SnowCondition = 'dry' | 'wet'
export type ElevationZone = 'highAlpine' | 'alpine' | 'subAlpine'
export type TimeRange = { start: Date | null; end: Date | null }
export type TimeOfDay = TimeRange | 'allDay' | null

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

export type Forecast = {
  createdAt: string
  forecaster: string
  hazardLevel: HazardLevelScale
  description: string
  id: number
  snowCondition: SnowCondition
  validTo: string
  status: 'draft' | 'published'
}

export type Problem = {
  aspects: {
    alpine: Aspect[]
    highAlpine: Aspect[]
    subAlpine: Aspect[]
  }
  avalancheSize: AvalancheSize
  confidence: Confidence
  description: string
  distribution: Distribution
  sensitivity: Sensitivity
  timeOfDay: TimeOfDay
  trend: Trend
  type: AvalancheProblemTypes | null
}
