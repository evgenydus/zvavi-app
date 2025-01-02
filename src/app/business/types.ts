export type HazardLevel = 'low' | 'moderate' | 'considerable' | 'high'

export type HazardLevelScale = 1 | 2 | 3 | 4 | 5
export type SnowCondition = 'dry' | 'wet'
export type ElevationZone = 'highAlpine' | 'alpine' | 'subAlpine'

export type User = {
  id: string
  email: string
}
