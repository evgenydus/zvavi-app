import type { DanderLevelScale, SnowCondition } from '@/business/types'

export type Forecast = {
  createdAt: string
  dangerLevel: DanderLevelScale
  description: string
  forecast: string
  id: number
  snowCondition: SnowCondition
  validTo: string
}
