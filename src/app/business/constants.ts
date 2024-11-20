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
