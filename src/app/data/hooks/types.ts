import type { HazardLevelScale, SnowCondition } from '@/business/types'

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
