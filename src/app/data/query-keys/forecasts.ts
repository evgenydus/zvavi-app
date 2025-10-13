import type { ForecastQueryVariables } from '../hooks/forecasts/types'

const forecastsKeys = {
  all: ['forecastsKeys'] as const,

  current: () => [...forecastsKeys.all, 'current'] as const,
  item: (variables: ForecastQueryVariables) => [...forecastsKeys.all, 'item', variables] as const,
  list: () => [...forecastsKeys.all, 'list'] as const,
}

export default forecastsKeys
