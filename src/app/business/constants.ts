import type { HazardLevelScale, HazardLevel } from './types'

export const hazardLevels: Record<HazardLevel, string> = {
  considerable: 'Considerable',
  high: 'High',
  low: 'Low',
  moderate: 'Moderate',
}

export const hazardLevelsByScale: Record<HazardLevelScale, string> = {
  1: hazardLevels.low,
  2: hazardLevels.moderate,
  3: hazardLevels.considerable,
  4: hazardLevels.high,
  5: hazardLevels.high,
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
}

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
}

export const distributionTypes = {
  isolated: 'isolated',
  specific: 'specific',
  widespread: 'widespread',
}

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

export const timeFormat = 'dd MMM yyyy'
