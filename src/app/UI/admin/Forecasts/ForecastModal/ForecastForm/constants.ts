import type { Avalanche, ForecastFormData, Problem } from '@/business/types'

export const defaultFormData: ForecastFormData = {
  baseFormData: {
    additionalHazards: '',
    forecaster: '',
    hazardLevels: {
      alpine: '1',
      highAlpine: '1',
      overall: '1',
      subAlpine: '1',
    },
    snowpack: '',
    summary: '',
    validUntil: null,
    weather: '',
  },
  forecastDetails: {
    avalancheProblems: [],
    recentAvalanches: [],
  },
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
  type: 'persistentSlab',
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
