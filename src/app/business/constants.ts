import type { DanderLevelScale, DangerLevel } from './types'

export const dangerLevels: Record<DangerLevel, string> = {
  considerable: 'Considerable',
  high: 'High',
  low: 'Low',
  moderate: 'Moderate',
}

export const dangerLevelsByScale: Record<DanderLevelScale, string> = {
  1: dangerLevels.low,
  2: dangerLevels.moderate,
  3: dangerLevels.considerable,
  4: dangerLevels.high,
  5: dangerLevels.high,
}

export const avalancheProblemTypes = {
  cornice: 'cornice',
  deepSlab: 'deepSlab',
  glide: 'glide',
  looseDry: 'looseDry',
  looseWet: 'looseWet',
  persistentSlab: 'persistentSlab',
  stormSlab: 'stormSlab',
  wetSlab: 'wetSlab',
  windSlab: 'windSlab',
} as const

export const aspects = {
  e: 'E',
  n: 'N',
  ne: 'NE',
  nw: 'NW',
  s: 'S',
  se: 'SE',
  sw: 'SW',
  w: 'W',
} as const

export const sensitivityLevels = {
  reactive: 'reactive',
  stubborn: 'stubborn',
  touchy: 'touchy',
  unreactive: 'unreactive',
} as const

export const distributionTypes = {
  isolated: 'isolated',
  specific: 'specific',
  widespread: 'widespread',
} as const

export const timeOfDay = {
  afternoon: 'afternoon',
  allDay: 'allDay',
  morning: 'morning',
} as const

export const trends = {
  deteriorating: 'deteriorating',
  improving: 'improving',
  noChange: 'noChange',
}

export const confidenceLevels = {
  high: 'high',
  low: 'low',
  moderate: 'moderate',
}
