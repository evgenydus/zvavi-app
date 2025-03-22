import type { Problem, ForecastFormData, Avalanche } from '@/business/types'

export const initialFormData: ForecastFormData = {
  forecaster: '',
  hazardLevels: {
    alpine: '1',
    highAlpine: '1',
    overall: '1',
    subAlpine: '1',
  },
  otherHazards: '',
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
