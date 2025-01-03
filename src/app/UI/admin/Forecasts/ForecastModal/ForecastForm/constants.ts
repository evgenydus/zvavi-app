import type { Problem } from '@/business/types'

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
  sensitivity: 'reactive',
  timeOfDay: 'allDay',
  trend: 'deteriorating',
  type: null,
}
