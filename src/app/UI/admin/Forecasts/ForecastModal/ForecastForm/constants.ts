import type { Problem, ForecastFormData, Avalanche } from '@/business/types'

export const initialFormData: ForecastFormData = {
  forecaster: '',
  snowpack: '',
  summary: '',
  validUntil: null,
  weather: '',
}

export const initialProblemData: Problem = {
  aspects: {
    alpine: [],
    highAlpine: [],
    subAlpine: [],
  },
  avalancheSize: 1,
  confidence: 'low',
  description: '',
  distribution: 'isolated',
  isAllDay: true,
  sensitivity: 'reactive',
  timeOfDay: { end: null, start: null },
  trend: 'deteriorating',
  type: null,
}

export const initialAvalancheData: Avalanche = {
  aspects: {
    alpine: [],
    highAlpine: [],
    subAlpine: [],
  },
  date: null,
  description: '',
  size: 1,
}
