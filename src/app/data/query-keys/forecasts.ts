const forecastsKeys = {
  all: ['forecastsKeys'] as const,
  current: () => [...forecastsKeys.all, 'current'] as const,
  list: () => [...forecastsKeys.all, 'list'] as const,
}

export default forecastsKeys
