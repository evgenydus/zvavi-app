import type { Avalanche, ForecastFormData, FullForecast, Problem } from '@/business/types'

type InitialFormData = ForecastFormData &
  Pick<FullForecast, 'avalancheProblems' | 'recentAvalanches'>

export const initialFormData: InitialFormData = {
  additionalHazards: '',
  avalancheProblems: [],
  forecaster: '',
  hazardLevels: {
    alpine: '1',
    highAlpine: '1',
    overall: '1',
    subAlpine: '1',
  },
  recentAvalanches: [],
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
