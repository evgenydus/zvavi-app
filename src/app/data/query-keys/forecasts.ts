const forecastsKeys = {
  all: ['forecastsKeys'] as const,
  list: () => [...forecastsKeys.all, 'list'] as const,
}

export default forecastsKeys
